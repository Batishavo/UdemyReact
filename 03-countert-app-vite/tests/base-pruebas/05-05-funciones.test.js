import {getUser, getUsuarioActivo} from '../../src/base-pruebas/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retorna un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );

    });

    test('getUsuarioActivo debe de retornar un objeto', () => { 
        

        const nombre = 'litos';
        
        const testUser2 = {
            uid: 'ABC567',
            username: nombre
        }

        expect(testUser2).toStrictEqual(getUsuarioActivo(nombre+'p'));

    });


});