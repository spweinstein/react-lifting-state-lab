// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  console.log(props.ingredients[0].name);
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: ingredient.color }} key={index}>
            {ingredient.name}
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
