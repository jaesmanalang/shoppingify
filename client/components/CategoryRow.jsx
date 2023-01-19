import { useState, useEffect } from 'react';
import Card from './Card';

export default function CategoryRow({ category }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/ingredients/category/${category._id}`
        );
        const data = await res.json();
        if (data.ingredients.length > 0) {
          setIngredients(data.ingredients);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  if (ingredients.length === 0) {
    return null;
  }

  return (
    <div className="mb-11">
      <h2 className="font-medium text-lg mb-5">{category.title}</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-6">
        {ingredients.map((ingredient) => (
          <Card key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
}
