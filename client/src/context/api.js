const API = axios.create({
    baseURL: "http://localhost:5000", // ❌ This only works locally!
  });

  const API = axios.create({
    baseURL: "https://activity-nutrition-log.onrender.com", // 🌍 Live backend!
  });
  