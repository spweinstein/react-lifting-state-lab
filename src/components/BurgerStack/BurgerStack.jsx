// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(ingredient)}>
              -
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
