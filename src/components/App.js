import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => {
        setImage(() => data.message);
        setIsLoaded(() => !isLoaded);
      });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>...Loading...</h1>
      ) : (
        <img src={image} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
