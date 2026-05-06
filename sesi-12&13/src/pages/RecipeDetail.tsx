import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { Recipe } from "../types/recipe";
import { deleteRecipe, getRecipeById } from "../services/localData";

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
        if (id) {
            const data = getRecipeById(id);
            setRecipe(data || null);
        }
    }, [id])

    const handleDelete = () => {
        if (id && window.confirm("Are you sure want to delete this recipe")) {
            deleteRecipe(id);
            navigate('/');
        }
    }

    if (!recipe) return <p className="text-center mt-8">Recipe not found!</p>

    return (
        <>
            <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow-sm border border-gray-200">
                <div className="mb-4">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800 items-center gap-1 transition-colors">
                        <span>&larr; </span> Back
                    </button>
                </div>

                <div className="items-center mb-6">
                    <div className="flex gap-2 mb-2">
                        <p className="text-3xl font-bold flex items-center gap-3 mb-2">
                            {recipe.strMeal}
                        </p>
                        <button onClick={() => navigate(`/edit/${id}`)} className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">
                            Edit
                        </button>
                        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-blue-600 transition">
                            Delete
                        </button>
                    </div>

                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-80 object-cover rounded mb-6 bg-gray-100" />

                    <div className="mb-6 flex gap-4">
                        {recipe.strCategory && <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">{recipe.strCategory}</span>}
                        {recipe.strCategory && <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">{recipe.strArea}</span>}
                    </div>

                    <div className="bg-gray-50 p-4 rounded border border-gray-100">
                        <p className="text-xl font-bold mb-3 border-b pb-2">
                            Instructions
                        </p>
                        <p className="whitescpae-pre-wrap leading-relaxed">{recipe.strInstruction}</p>
                    </div>
                </div>
            </div>
        </>
    )
}