import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (path) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://u4lfa48z45.execute-api.ap-south-1.amazonaws.com/dev/myroute${path}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(response)
      console.log(result)
      setData(result.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      
      <h1>Data Fetching Example</h1>
      <button onClick={() => fetchData("/")}>Fetch Home Data</button>
      <button onClick={() => fetchData(`/about`)}>Fetch About Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;