import React, { useState, useEffect } from "react";
import axios from "axios";

const InspirationList = () => {
    const [entries, setEntries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/inspiration")
            .then(res => setEntries(res.data))
            .catch(err => console.log(err));
    }, []);

    const filteredEntries = entries.filter(entry =>
        entry.quote.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Inspiration Page</h2>
            <input
                type="text"
                placeholder="Search Quotes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredEntries.map(entry => (
                    <li key={entry._id}>
                        <strong>{entry.quote}</strong> - {entry.tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InspirationList;
