import React, { useState } from "react";
import NEWS_CATEGORIES from "../../model/categories";
import './CategoryFilter.scss';

type CategoryFilterProps = {
    onCategorySelection: (category?: string) => void;
}

function CategoryFilter({onCategorySelection}: CategoryFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <div className="categories-filter-container">{
            NEWS_CATEGORIES.map((category) => fromCategoriesToButtons(category))
        }</div>
    )

    function fromCategoriesToButtons(category: string) {
        return (
            <button className={getClassName()} key={category}
                onClick={() => onCategoryClick(category)}>
                {category}
            </button>
        )
        
        function getClassName() {
            const defaultClasses = "px-4 py-2 border border-black rounded-md"; 

            if (selectedCategory === category) {
                return `${defaultClasses} bg-black text-white`
            }

            return defaultClasses;
        }
    }

    function onCategoryClick(category: string) {
        if (category !== selectedCategory) {
            setSelectedCategory(category);
            onCategorySelection(category);
        } else {
            setSelectedCategory('');
            onCategorySelection();
        }
    }
}

export default CategoryFilter;