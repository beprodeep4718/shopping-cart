import { data } from "../data";
import Card from "./Card";

const Shop = ({ handleClick, isPresent }) => {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-center font-semibold text-3xl">Store</h1>
      <div className="mt-5 flex gap-6 flex-wrap items-center justify-center">
        {data.map((item) => {
          return <Card item={item} key={item.id} handleClick={handleClick} isPresent={isPresent}/>;
        })}
      </div>
    </div>
  );
};

export default Shop;
