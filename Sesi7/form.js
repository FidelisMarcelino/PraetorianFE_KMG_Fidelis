const form = document.getElementById("productForm");
const message = document.getElementById("message");

// Untuk add products
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const price = document.getElementById("price").value.trim();
  const description = document.getElementById("description").value.trim();
  const image = document.getElementById("image").value.trim();

  if (!title || !price || !description || !image) {
    message.textContent("All fields are required");
    message.className = "text-red-600";
    return;
  }

  const requestBody = {
    title,
    price: Number(price),
    description,
    categoryId: 6,
    images: [image],
  };

  const url = productId
    ? `https://api.escuelajs.co/api/v1/products/${productId}` //mode edit product
    : "https://api.escuelajs.co/api/v1/products/"; //mode add product

  const method = productId ? "PUT" : "POST";

  try {
    const response = await fetch(url, {
      method,
      headers: { "Contect-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if(!response.ok) throw new Error("Failed");

    message.textContent = productId
      ? "Product updated successfully!"
      : "Product added successfully!";

    message.className = "text-green-600";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } catch (error) {
    message.textContent = "Terjadi kesalahan";
    message.className = "text-red-600";
    console.log("Failed to add products", error);
  }
});

// Untuk mode edit
async function getProductsId(id) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    const product = await response.json();

    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;
    document.getElementById("description").value = product.description;
    document.getElementById("image").value = product.images?.[0] || "";
  } catch (error) {
    console.log("Failed to load product", error);
  }
}

if(productId){
    document.querySelector("h2").textContent = "Edit Product";
    getProductsId(productId);
}
