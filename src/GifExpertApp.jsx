import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Hunter X Hunter']);
  // EJEMPLO 1  
  //const [numero, setNumero] = useState(0);

  const onValidateCategory = (category) => {

      let newArrayCategory = category.split(' ');
      let capitalize = newArrayCategory.map( element => { return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase(); });
      
      return capitalize.toString().split(',').join(' ');
  };

  const onAddCategory = (newCategory) => {

      //console.log(newCategory);

      // Valorant - agregar una nueva categoria
      //console.log(categories.length);
      //categories.push('Valorant'); --> es incorrecto y no aceptado por no ser optimo. El push muta el objeto. Se modifica el valor.
      // De esta manera, reutilizamos la variable categories y le agregamos un nuevo valor.
      
      /* EJEMPLO 1
         Si presionamos más de una vez el botón Agregar, salta un warning que informa de que la Key del List está repetido.
         Para evitarlo, he creado un segundo estado (useState) para contabilizar el numero de clicks y asociarlo al nombre 
         que mostrará, de esa manera será unico a cada click que haga aunque el nombre introducido sea el mismo. 
      
        const variable = `Valorant_${numero}`;
        setNumero(numero+1);
      */

      // 80. Validar que sean únicos los nombres + No se repitan (aunque sean en mayusculas y minusculas)
      const categLower = categories.map( element => { return element.toLowerCase(); })
      
      // Comparamos que no existe el valor ya en la lista de categorias, 
      if (categLower.includes(newCategory.toLowerCase())) return;
      
      // Devolvemos el valor de la nueva categoria transformado a Letra capitalizada de cada palabra
      setCategories([onValidateCategory(newCategory), ...categories]);
      // Otras formas:
      // setCategories( cat => [...cat, 'Valorant']);
  }

  return (
    <>
        {/* Titulo - apikey = gMmsTL7boqkQOPy81nSDmD2yKy9x90Pv */}
        <h1>GifExpertApp</h1>
        
        {/* Input. setCategory={setCategories} --> Esto oculta la implementacion del mismo. */}
        <AddCategory 
            // setCategory={setCategories}
            onNewCategory={(event) => onAddCategory(event)}
        />
        
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        {/* Listado de Gif. Habria que de crearse un componente que nos permita renderizar un elemento */}
        {/*<ol>
          {/* Esto es equivalente a lo que hay abajo.
          { categories.map(category => {
              return (
                <div key={category}> 
                  <h3>{category}</h3>
                  <li >{category}</li>
                </div>
              )
          })} */}
          { 
            categories.map( (category) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
              ))
          }
        {/*</ol>
           Gif item */}
    </>
  )
}
