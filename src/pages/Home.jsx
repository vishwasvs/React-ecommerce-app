import { useState } from "react";
import { Main, Product } from "../components";

function Home() {
  const [category, setCategory] = useState(null);
  return (
    <>
      <Main setCategory={setCategory} />
      <Product category={category} />
    </>
  );
}

export default Home;

