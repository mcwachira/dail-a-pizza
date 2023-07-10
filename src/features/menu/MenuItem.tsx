import {formatCurrency} from "../utilities/helpers.ts";


type Pizza = {
    [key:string]:any,
    id:string, name:string,
    unitPrice:number,
    ingredients:string,
    soldOut:boolean,
    imageUrl:string
}
function MenuItem({ pizza }:Pizza) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
