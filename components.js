import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/faqs").then(res => setFaqs(res.data));
  }, []);

  const submitQuestion = async () => {
    if (question) {
      const res = await axios.post("http://localhost:5000/api/faqs", { question });
      setFaqs([...faqs, res.data]);
      setQuestion("");
    }
  };

  return (
    <div>
      <h2>FAQ</h2>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={submitQuestion}>Ask</button>

      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>{faq.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
