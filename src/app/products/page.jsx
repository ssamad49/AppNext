import ProductsList from "../../components/productsList";


export default async function SSRProducts() {
    const data = await fetch('https://fakestoreapi.com/products',
      {
        'cache':'no-store'
      });
    const products = await data.json();
    return (
        <main className="container mx-auto px-4">
            <ProductsList products={products}/>
        </main>
    );
    
}