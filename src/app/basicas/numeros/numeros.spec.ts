import {incrementar} from './numeros';
describe('Pruebas de nuemros',()=>{
    it('Debe retornar 100 si el numero es mayor que 100',()=>{
        const res = incrementar(300);
        expect(res).toBe(100);
    })
    it('Debe retornar el numero+1',()=>{
        const res1 = incrementar(20);
        expect(res1).toBe(21);
    })
})