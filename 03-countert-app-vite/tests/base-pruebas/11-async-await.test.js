import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await"

describe('Prueba en getImagen', () => { 
    test('getImagen debe de retornar un URL de la imagen', async() => { 
        const url = await getImagen();
        
        expect(typeof url).toBe('string');

     })
 })