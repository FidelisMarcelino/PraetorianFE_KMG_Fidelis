import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`https://fakestoreapi.com/products/${id}`, {
      title,
      price: parseFloat(price),
      description: "Sample Description",
      image: "https://example.com/image.jpg",
      category: "electronics",
    });

    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <p className="text-2xl font-bold mb-4">Edit Products</p>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={() => navigate("/")} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Update
        </button>
      </form>
    </div>
  );
}
