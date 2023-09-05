import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        // Update the state with the fetched data
        setData(jsonData);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default DataFetcher;
