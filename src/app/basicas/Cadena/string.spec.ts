import { mensaje } from './string';

describe('Pruebas Cadenas',()=>{
    it('Debe retornar un String',()=>{
      
        const res= mensaje('Hola');
        expect(typeof res).toBe('string');
    })
    it('Debe retornar el Saludo con el Nombre',()=>{
        
        const res= mensaje('pedro');
        expect(res).toContain('pedro');
    })
})