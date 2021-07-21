import { useEffect, useState } from "react";
// MATERIAL-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// import css
import "./QuotesStyles.css";

import {fetchAllQuotes} from "../../Services/QuoteServices";

const Quotes = () => {
    const [quotes, SetQuotes] = useState<any[]>([]);
    
    
    // MATERIAL
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
    });

    
    const classes = useStyles();
  

   
        useEffect(() => {
        fetchAllQuotes().then((data) => {
            SetQuotes(data);
            console.log(data);
        })}, []);

    return (
        <ul>
            {quotes.map((quote, index) => 
                <li key={`${quote.author}-${index}`}>
                    <Card className={classes.root}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {quote.author}
                        </Typography>

                        <Typography variant="body2" component="p">
                            {quote.text}
                        </Typography>
                        
                    </Card>
                </li>
            )}

        </ul>

    )


}


export default Quotes;