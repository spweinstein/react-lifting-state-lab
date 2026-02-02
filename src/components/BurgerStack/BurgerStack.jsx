// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index}>
            {ingredient.name}
            <button onClick={() => props.removeIngredient(ingredient)}>
              -
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
