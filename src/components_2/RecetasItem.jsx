const RecetasItem = ({ receta }) => {
    const { name, description } = receta;
    return (
        <div
        className={`p-4 rounded-xl w-[150px] ${
          receta.price < 500 ? "bg-yellow-500" : "bg-slate-200"
        }`}
      >
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default RecetasItem;