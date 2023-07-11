import {formatCurrency} from "../utilities/helpers.ts";
import Button from "../ui/Button.tsx";


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
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut ? 'opacity-70 gray-scale' : ''}`}/>
      <div className='flex flex-col flex-grow '>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-stone-500'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between '>
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium uppercase text-stone-200'>Sold out</p>}

            <Button type='small'> Add To Cart</Button>
        </div>


      </div>
    </li>
  );
}

export default MenuItem;
