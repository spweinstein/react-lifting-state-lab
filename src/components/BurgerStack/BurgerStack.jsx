// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(ingredient)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
