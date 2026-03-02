import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if(loading){
        return <p className="text-center text-red-700">Loading products...</p>
    }

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}