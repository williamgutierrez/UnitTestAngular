import {MedicosComponent } from './medicos.component';
import {MedicosService } from './medicos.service';
import { from, EMPTY, throwError, empty } from 'rxjs';

describe('Medicos component testsuit',()=>{

    let component: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( ()=>{
        component = new MedicosComponent(servicio);
    }) 

    //test 1 
    it('Init Debe Cargar los medicos',()=>{
        const medicosFake = ['medicos1','medicos2','medicos3']
        spyOn(servicio ,'getMedicos').and.callFake(()=>{
            return from([medicosFake]);
        })
        
         component.ngOnInit();  // llama al ngOnInit()
         expect(component.medicos.length).toBeGreaterThan(0);// toBeGreaterThan=>tiene q ser mayor que Cero
    })
   //test 2
   it('Debe llamar al servidor para agregar un medico',()=>{
    const espia = spyOn(servicio,'agregarMedico').and.callFake(
        medico=>{
            return EMPTY;
        }
    )
    component.agregarMedico();
    expect(espia).toHaveBeenCalled();

})
 //test 3
 it('Debe Agragar un nuevo medico al arreglo del Componente',()=>{
    const medico = {id :1 ,nombre:'william'}
    spyOn(servicio,'agregarMedico').and.returnValue(from([medico]));
    component.agregarMedico();
    //expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(1);
    expect(component.medicos.length).toBeGreaterThanOrEqual(1);


})
//test 4 
it('si falla la llamada el error debe ser igual al error del servicio',()=>{
  
  const miError = 'no se pudo agregar al medico';
  spyOn(servicio,'agregarMedico').and.returnValue(throwError(miError));
  component.agregarMedico();
  expect(component.mensajeError).toBe(miError);

})
// test 5 
it('Debe de llamar al servidor para borrar un medico',()=>{
    spyOn( window,'confirm').and.returnValue(true);
    const espia = spyOn(servicio,'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
})
//test 6
it('No debe llamar al servidor para borrar un medico cuando el cofirmar sea negativo',()=>{
    spyOn( window,'confirm').and.returnValue(false);
    const espia = spyOn(servicio,'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
})






})
