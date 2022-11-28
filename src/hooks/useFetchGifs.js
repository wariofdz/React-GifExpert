import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook nada más es que una función que regresa algo.
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    // Para identificar la carga de cada imagen, creamos un estado nuevo
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); // No ejecuta un doble renderizado.
    }

    useEffect( () => {    
         getImages();
    }, []);

    return {
        images: images, // podemos dejarlo también en images, porque estamos en EDMA Script
        isLoading // Al ser el mismo nombre de variable de la función como la de salida, podemos omitir los dos puntos y el nombre. Se puede pasar directamente.
    }

}