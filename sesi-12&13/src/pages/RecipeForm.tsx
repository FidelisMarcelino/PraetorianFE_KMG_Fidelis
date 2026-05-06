import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Recipe } from "../types/recipe";
import { getRecipeById, saveRecipe } from "../services/localData";

export default function RecipeForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Partial<Recipe>>({
        strMeal: "",
        strCategory: "",
        strArea: "",
        strMealThumb: "",
        strInstruction: "",
    })

    useEffect(() => {
        if (id) {
            const recipe = getRecipeById(id);

            if (recipe) {
                setFormData(recipe);
            } else {
                alert("Recipe not found");
                navigate("/");
            }
        }
    }, [id, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.strMeal) {
            alert("Recipe name is required");
            return;
        }

        saveRecipe(formData as any);
        navigate('/')
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, strMealThumb: reader.result as string })
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="max-w-2xl mx-auto m-8 py-4 border border-gray-300 rounded shadow-sm">
                <p className="text-2xl font-bold mb-4 ml-4">{id ? "Edit Recipe" : "Create Recipe"}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-4">
                    <div>
                        <label className="block font-semibold mb-1">Recipe Name</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-gray-300 p-2 rounded"
                            value={formData.strMeal}
                            onChange={e => setFormData({ ...formData, strMeal: e.target.value })}
                        />

                        <label className="block font-semibold mb-1">Category</label>
                        <input
                            list="category-options"
                            required
                            className="w-full border border-gray-300 p-2 rounded"
                            value={formData.strCategory || ""}
                            onChange={e => setFormData({ ...formData, strCategory: e.target.value })}
                            placeholder="Type or select category"
                        />
                        <datalist id="category-options">
                            <option value="Beef"></option>
                            <option value="Chicken"></option>
                            <option value="Lamb"></option>
                        </datalist>

                        <label className="block font-semibold mb-1">Image (Upload or URL)</label>
                        <div className="flex flex-col gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full border border-gray-300 p-2 rounded"
                                onChange={handleImageUpload}
                            />
                            <div className="text-center text-gray-500 font-medium text-sx">OR</div>
                            <input
                                type="text"
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                                value={formData.strMealThumb}
                                onChange={e => setFormData({ ...formData, strMealThumb: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Instructions</label>
                            <textarea
                                rows={5}
                                className="w-full border border-gray-300 p-2 rounded"
                                value={formData.strInstruction || ""}
                                onChange={e => setFormData({ ...formData, strInstruction: e.target.value })}></textarea>
                        </div>

                        <div className="flex justiry-end gap-2 mt-4">
                            <button
                                type="button"
                                onClick={() => navigate('/')}
                                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                {id ? "Update" : "Save"} Recipe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}