const Card = ({ item, handleClick, isPresent }) => {
    let add = false;
    isPresent.forEach(element => {
        if(element.id === item.id) {
            add = true;
            return;
        }
    });
  return (
    <div className="w-56 h-80 shadow-md rounded-lg bg-zinc-200 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-1/2 object-cover"
      />
      <div className="w-full h-1/2 p-4 flex flex-col items-start justify-between">
        <h1 className="flex-1 font-semibold text-lg leading-none tracking-tight">
          {item.name}
        </h1>
        <h1 className="flex-1 text-gray-600">
          {item.price}{" "}
          <span>
            <button className="ml-5 px-4 py-1 bg-green-600 text-white rounded-full" onClick={()=> {handleClick(item)}}>
              {add ? <p>remove</p>: <p>add</p>}
            </button>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
