import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/card";
import { data } from "autoprefixer";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Response) => Response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}
export default Home;
