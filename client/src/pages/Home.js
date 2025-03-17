import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const res = await axios.get("http://localhost:5000/api/quotes/userId");
            setQuotes(res.data);
        };
        fetchQuotes();
    }, []);

    return (
        <div>
            <h1>Inspiration Quotes</h1>
            {quotes.map((quote) => (
                <p key={quote._id}>{quote.text} - {quote.author}</p>
            ))}
        </div>
    );
}

export default Home;
