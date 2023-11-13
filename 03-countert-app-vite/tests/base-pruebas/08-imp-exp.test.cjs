import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/base-pruebas/08-imp-exp'


describe('Pruebas en 08-imp-exp', () => { 

    test('getHeorebyId debe de retornar un héroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('getHeorebyId debe de retornar un indefine si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);

        expect(hero).toBeFalsy();

    }); 
    //Tarea
    //Debe de reornar un arreglo con los héroes de DC
    //Length === 3
    //toEqual al arreglo filtrado
    test('Tarea', () => { 

        const heroesDC = getHeroesByOwner('DC');

        expect(heroesDC.length).toBe(3);
        heroesDC.forEach(val=>{
            expect(val.owner).toEqual('DC');
        });

    });



});