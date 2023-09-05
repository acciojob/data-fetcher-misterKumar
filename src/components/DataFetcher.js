import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((jsonData) => {
        // Update the state with the fetched data
        setData(jsonData);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default DataFetcher;

