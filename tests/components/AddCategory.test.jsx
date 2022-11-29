import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test in <AddCategory />', () => { 
    
    test('should change the value in the textbox', () => { 

        // se tiene que mandar una función, que es lo requerido.
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        // Disparamos el evento
        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
        //screen.debug();

    });

    test('should call onNewCategory if the input has a value', () => { 
        
        const inputValue = 'Saitama';
        // Levantamos el sujeto de pruebas
        render(<AddCategory onNewCategory={() => {}}/>);

        // Localizamos los objetos del HTML
        const input = screen.getByRole('textbox');
        // Creamos un aria-label ha nivel de form para que pueda localizarlo. 
        const form = screen.getByRole('form');

        // Disparamos el evento
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        // Evaluamos si llega un string vacio
        expect(input.value).toBe('');

    });

 });