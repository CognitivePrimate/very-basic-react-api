import axios from "axios";

const QuotesAPIURL: string ="https://grandcircusco.github.io/demo-apis/quotes.json";

// get whole quotes list
export const fetchAllQuotes = () => {
    return axios.get(QuotesAPIURL).then((response) => {
        return response.data;
    })
}