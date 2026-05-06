import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SavedRecipe from "./pages/SavedRecipe";
import RecipeForm from "./pages/RecipeForm";
import RecipeDetail from "./pages/RecipeDetail";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/saved" element={<SavedRecipe />} />
                <Route path="/create" element={<RecipeForm />} />
                <Route path="/edit/:id" element={<RecipeForm />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
        </>
    )
}