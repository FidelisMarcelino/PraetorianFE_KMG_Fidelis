// Nunggu HTML selesai dimuat, baru munculin semua products
document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});

async function getProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/");
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.log("Gagal ambil data", error);
  }
}

// Munculin product ke dalam HTML
function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow p-4";

    card.innerHTML = `
            <img src="${product.images?.[0]}" class="h-40 w-full object-cover mb-2 rounded">
            <p class="text-lg font-bold">${product.title}</p>
            <p class="text-gray-600 text-sm mb-2">${product.description}</p>
            <p class="font-bold text-violet-700 mb-2">
                Rp ${product.price.toLocaleString("id-ID")}
            </p>

            <div class="flex gap-2 mt-2">
                <a href="form.html?id=${product.id}" class="flex-1 text-center p-2 bg-blue-600 text-white rounded">
                    Edit
                </a>

                <button onClick="deleteProduct(${product.id})" class="flex-1 text-center p-2 bg-red-600 text-white rounded">
                        Delete
                </button>
            </div>
        `;
    productList.appendChild(card);
  });
}

async function deleteProduct(id) {
  const confirmDelete = confirm("Are you sure want to delete this product?");

  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      {
        method: "DELETE",
      },
    );

    if(!response.ok){
        throw new Error("Failed to delete product");
    }

    alert("Product deleted succesfully");
    getProducts(); //untuk refresh the product List
  } catch (error) {
    console.log("Error: ", error);
    alert("Gagal menghapus project");
  }
}
