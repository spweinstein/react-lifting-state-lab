// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
