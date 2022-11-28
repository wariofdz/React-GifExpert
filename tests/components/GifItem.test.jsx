// Me faltó agregar el import de la testing library react, para la variable render.
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test in component GifItem', () => { 
    
    // Faltaba crear las variables que contuviesen la info para poder hacer la prueba.
    const title = 'Dragon Ball';
    const url   = 'https://one-punch.com/saitama';

    test('should have match with snapshot', () => { 
        
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('should to show the image with the URL and ALT indicated', () => { 
    
        render(<GifItem title={title} url={url} />);
        //screen.debug();        
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should to show the title in the component', () => { 
    
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    });

 });
