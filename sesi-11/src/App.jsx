import { BrowserRouter, Route, Routes } from "react-router"
import ProductList from "./ProductList"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/edit/:id" element={<EditProduct />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
