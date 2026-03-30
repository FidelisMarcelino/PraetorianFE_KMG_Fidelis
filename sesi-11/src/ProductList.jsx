import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this Product?");

    if (!confirm) return;

    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setProducts(products.filter((p) => p.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <p className="text-3xl font-bold text-center mb-6 mt-10">
        Marketplace CRUD
      </p>

      <div className="flex justify-center mb-6">
        <button onClick={() => navigate("/add")} className="bg-green-600 text-white px-6 py-2 rounded">
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {products.map(product => (
            <div key={product.id} className="bg-blue-100 p-4 rounded">
                <img src={product.image} alt={product.title} className="h-32 mx-auto mb-2" />
                <p className="font-semibold">{product.title}</p>
                <p>${product.price}</p>

                <button onClick={() => navigate(`/edit/${product.id}`)} className="bg-blue-600 text-white px-4 py-1 rounded w-full">
                    Edit
                </button>

                <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-4 py-1 rounded w-full">
                    Delete
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}
