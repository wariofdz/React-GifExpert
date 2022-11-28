import { getGifs } from "../../src/helpers/getGifs";

describe('Testing in component getGifs()', () => { 
    
    test('should return a gifs array', async() => { 
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        // evaluamos el array de gifs
        expect(gifs[0]).toEqual({
            id: expect.any(String), // le decimos que espere cualquier cosa mientras que sea un string.
            title: expect.any(String),
            url: expect.any(String),
        });

    });

 })