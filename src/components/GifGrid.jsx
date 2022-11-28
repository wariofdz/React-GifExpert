//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

// Es una buena practica, porque no vuelve a asignar un nuevo espacio en memoria cuando el componente se vuelve a redibujar.
// Pero no evita que cada vez que haya un cambio en nuestro estado, no se vaya a disparar de nuevo. Nunca debemos colocar la ejecución de una función
// dentro de un functional component, ya que cada vez que se renderize de nuevo el FC, se va a realizar la petición HTTP y no queremos hacerlo.
// Una vez recibamos la categoria, solo deberiamos ejecutarlo una unica vez. No importa si hay redibujos de React.
// Lo extraeremos de aqui y lo colocaremos en otro archivo externo. 
/*
const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=gMmsTL7boqkQOPy81nSDmD2yKy9x90Pv&q=${category}&limit=20`;
  const resp = await fetch(url);
  // data = [] --> nos aseguramos que la variable data será un array.
  const {data = []} = await resp.json();
  // Es lo mismo literalmente que tenemos en el archivo GifExpertApp.jsx, en category.map(...)
  const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }));
  //console.log(gifs);
  return gifs;
}

Trasladamos la función a nueva carpeta - archivo.
*/

export const GifGrid = ({category}) => {
  
    // Custom Hook
    const { images, isLoading } = useFetchGifs(category);
    
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     /* La función getGifs te devuelve una promesa ya que es una función asincrona. */
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // /* useEffect: Realiza efectos secundarios en nuestro componente. 
    //   El primer parametro es una función de CallBack. En este caso ejecuta la API de Giphy.
    //   El segundo parámetro [] provoca que si dejamos las dependencias vacias, solo se dispara 
    //   la primera vez que se construye nuestro componente. No se vuelven a realizar las peticiones 
    //   aunque nuestro componente se renderize de nuevo. */
    // useEffect( () => {    
    //     //getGifs(category);
    //     /* No es una buena practica crear una función asincrona dentro del useEffect ya que devuelve
    //        un error. Este Hook necesita que se devuelva siempre una función. Lo que si se puede hacer
    //        es llamar a una función externa a éste que sea asincrona. */
    //     getImages();
    // }, []);

    return (
      <>
          <h3>{category}</h3>
          {
            // El null no se renderiza
              isLoading ? (<h2>Cargando...</h2>) : null
              // También se puede hacer como isLoading && (<h2>Cargando...</h2>), es un AND lógico, cuando se ejecute 
              // como true el isLoading, carga también la segunda parte.
          }          
          <div className="card-grid">
          { 
            //images.map( ({id, title, url}) => ( --> desestructurada
            images.map ((image) => (
              <GifItem 
                  key={image.id}
                  // Existe otra forma de poder mandar los datos, con el operador spread (...image) para esparcir el contenido. De esta manera, el componente recibe cada una de las propiedades 
                  // de la imagen como propertys (props). Se usa cuando uno tiene muchas propiedades.
                  { ...image}
                  //title={image.title}
                  //url={image.url} 
                  />

              ))
          }
          </div>       
      </>
    );
};
