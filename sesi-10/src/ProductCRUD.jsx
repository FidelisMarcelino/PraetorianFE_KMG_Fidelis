import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductCRUD() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

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

  // Open add modal
  const openAddModal = () => {
    setIsEditing(false);
    setEditingId(null);
    setTitle("");
    setPrice("");
    setShowModal(true);
  };

  // Open edit modal
  const handleEdit = (product) => {
    setIsEditing(true);
    setEditingId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!title || !price) {
      alert("Isi semua field!");
      return;
    }

    const productData = {
      title,
      price: parseFloat(price),
      description: "Sample description",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    };

    try {
      if (isEditing) {
        const res = await axios.put(
          `https://fakestoreapi.com/products/${editingId}`,
          productData,
        );

        const updatedProducts = products.map((product) => {
          product.id === editingId ? res.data : product;
        });

        setProducts(updatedProducts);
      } else {
        //Add new product
        const res = await axios.post(
          "https://fakestoreapi.com/products",
          productData,
        );

        setProducts([...products, res.data]);
      }

      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus produk ini?");
    if (!confirmed) return;

    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p className="text-center text-red-600">Loading...</p>;

  return (
    <div>
      <p className="text-center font-bold mb-6 text-3xl text-blue-700 mt-20">
        Marketplace CRUD
      </p>

      {/* Add Button */}
      <div className="flex justify-center mb-6">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded"
          onClick={openAddModal}
        >
          + Add Product
        </button>
      </div>

      {/* Product List  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            className="bg-blue-100 rounded-md p-4 flex flex-col h-full"
            key={product.id}
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 mx-auto object-contain mb-4"
              />

              <p>{product.title}</p>
              <p className="text-2xl font-semibold line-clamp-2">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="mt-auto">
              <p className="tetx-sm text-gray-600 mt-2">${product.price}</p>

              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-2 mr-2"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded mb-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-96">
              <p className="text-xl font-bold mb-4">
                {isEditing ? "Edit Product" : "Add Product"}
              </p>

              <input
                type="text"
                placeholder="Product Title"
                className="border p-2 w-full mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Product Price"
                className="border p-2 w-full mb-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className={`$ {
                  isEditing ? "bg-blue-600" : "bg-green-600} `}
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
