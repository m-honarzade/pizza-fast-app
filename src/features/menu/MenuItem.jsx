const MenuItem = ({ pizza }) => {
  const { name, imageUrl, unitPrice, id, ingredients, soldOut } = pizza;
  console.log(pizza);
  return (
    <li className="flex flex-col">
      <img src={imageUrl} alt={`image for ${name}'s' pizza`} className="w-20" />
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{unitPrice}</p>
    </li>
  );
};

export default MenuItem;
