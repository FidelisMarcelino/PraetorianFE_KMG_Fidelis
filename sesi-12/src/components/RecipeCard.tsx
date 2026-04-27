import type { Recipe } from "../types/recipe"
import { useState } from "react";
import { useNavigate } from "react-router";
import {saveRecipe as updateRecipeInLocal} from "../services/localData"

interface Props {
    recipe: Recipe
    onSaveToggle?: () => void
}

export default function RecipeCard({recipe, onSaveToggle}: Props){
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(recipe.isSaved || false);
    
    const handleSaveToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        const newStatus = !isSaved;
        setIsSaved(newStatus);
        updateRecipeInLocal({...recipe, isSaved: newStatus})
        if(onSaveToggle) onSaveToggle();
    }

    return(
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden">
                <button 
                onClick={handleSaveToggle}
                className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition hover:scale-110 z-10"
                title={isSaved ? "Remove from Saved" : "Save Recipe"}
                >
                    <span className={`text-2xl leading-none ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}>
                        {isSaved ? '⭐' : '☆'}
                    </span>
                </button>

                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover"/>

                <div className="p-4 flex flex-col">
                    <p className="text-xl font-semibold mb-2">
                        {recipe.strMeal}
                    </p>

                    <div className="flex gap-2 mb-4 text-xs">
                        {recipe.strCategory && 
                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {recipe.strArea}
                        </span>}
                    </div>

                    <div className="mt-auto">
                        <button onClick={() => navigate(`/recipe/${recipe.idMeal}`)} className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors">
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}