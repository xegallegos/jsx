import { useEffect, useState } from "react";
import RecetasForm from "./RecetasForm";
import IngredientesForm from "./IngredientesForm";
import RecetasItem from "./RecetasItem";

const RecetasList = () => {
  const [RecetasCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([]);

  const [IngredientesCount, setIngredienteCount] = useState(0);
  const [ingredientes, setIngredientes] = useState([]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
    setRecetaCount(RecetasCount + 1);
  };

  const addIngrediente = (ingrediente) => {
    setIngredientes([...ingredientes, ingrediente]);
    setIngredienteCount(IngredientesCount + 1);
  };

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas]);

  return (
    <>
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      
    <h1> Lista de Recetas ({RecetasCount} Recetas)</h1>
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <RecetasForm onSubmit={addReceta} />
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        <h1> Agregar Ingredientes Recetas ({IngredientesCount} Ingredientes)</h1>
        <div class="sm:col-span-3">
          <IngredientesForm onSubmit={addIngrediente} />
        </div>
      </div>
      <div>
      <ul className="flex gap-4 py-4">
        {recetas.map((receta) => (
          <li>
            <RecetasItem receta={receta} />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default RecetasList;