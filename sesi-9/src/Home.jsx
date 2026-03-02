import ProductList from "./ProductList";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-center mb-6 text-blue-700 mt-20">
        Marketplace
      </p>

      <ProductList />
    </div>
  );
}
