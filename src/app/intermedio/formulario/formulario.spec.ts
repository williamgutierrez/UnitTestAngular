import { FormularioRegister} from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Pruebaas de Formualrio',()=>{
   let componente: FormularioRegister;
   beforeEach( ()=>{
       componente = new FormularioRegister(new FormBuilder());
   } )
it('Debe crear un formaulario con 2 campos, email y password',()=>{
    expect(componente.form.contains('email')).toBeTruthy;
    expect(componente.form.contains('password')).toBeTruthy;

})

//************** */
it('El email debe ser obligatorio',()=>{
    const control = componente.form.get('email');
    control.setValue('');// le enviamos algo vacio tb se esta seteando y asegurando q el valor q se esta obteniendo este Vacio.
    expect( control.valid ).toBeFalsy(); //si es vacio retorna falso

})
//verificamos si el corero es valido
it('El email debe ser un correo Valido',()=>{
    const control = componente.form.get('email');
    control.setValue('william@gmail.com'); // valido correo
    //control.setValue('william.gmail.com'); // invalido correo
    expect(control.valid).toBeTruthy();
})
//****************** */
/* it('El password Debe ser obligatorio',()=>{
    const controlpass= componente.form.get('password');
    expect()

})*/


})

