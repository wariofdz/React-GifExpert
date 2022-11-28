import { useState } from "react";

//setCategory, lo cambiamos por onNewCategory

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        //console.log(event.target.value);
        // también podemos hacer una desestructuración del elemento event recibiendo en una variable {target} y acceder a su contenido target.value.
        // Podriamos obviar el (event) porque recogemos el primer argumento que recibimos 
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault(); // No permite que haga la función por defecto, en este caso, no permite que refresque el formulario cuando hacemos enter.
        //console.log(inputValue);
        // Con este if evitamos que den al enter sin introducir nada o solo un caracter. Con el return, salimos de la función, evitando que introduzca
        // valores no deseados.
        if (inputValue.trim().length <= 1) return;

        // La función del useState nos permite mandarle un callback. Contendrá los elementos anteriores y hay que conservarlos junto con el nuevo elemento.
        //setCategory( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue(''); // Limpiamos nuestro input una vez se ha presionado el enter, para adicionar una nueva categoria.
    }

    return (
        <form onSubmit={(event) => {onSubmit(event)}}>

            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={(event) => {onInputChange(event)}}/>

        </form>
    );
};
