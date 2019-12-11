import{obtenerPersonas} from './arreglo';

describe('Prueba de arreglos',()=>{
    it('debe retonnar al menos 3 personas',()=>{
       const res= obtenerPersonas();
       expect(res.length).toBeGreaterThanOrEqual(3);
    })
   it('debe existir la persona claudio',()=>{
       const res = obtenerPersonas();
       expect(res).toContain('claudio');
   } )

});