"use client";
import { useEffect,useState } from "react";
import ProductsList from "../../components/productsList";


export default function products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((data) => setProducts(data));
   }
  , []);

    return (
        <main className="container mx-auto px-4">
            <ProductsList products={products}/>
        </main>
    );
    
}