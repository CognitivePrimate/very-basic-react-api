import { useEffect, useState } from "react";

// import cdd
import "./QuotesStyles.css";

import {fetchAllQuotes} from "../../Services/QuoteServices";

const Quotes = () => {
    const [quotes, SetQuotes] = useState<any[]>([]);

    useEffect(() => {
        fetchAllQuotes().then((data) => {
            SetQuotes(data);
            console.log(data);
        })
    }, []);

    return (
        <ul>
            {quotes.map((quote, index) => 
                <li key={`${quote.author}-${index}`}>
                    <div className="quoteWrapper">
                        <p className="author">{quote.author}</p>
                        <p>{quote.text}</p>
                    </div>
                </li>
            )}

        </ul>

    )


}


export default Quotes;