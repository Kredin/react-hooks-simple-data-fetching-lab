// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((img) => setImage(img.message));

    setIsLoaded(true);
  }, []);

  return isLoaded ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>;
}

export default App;
