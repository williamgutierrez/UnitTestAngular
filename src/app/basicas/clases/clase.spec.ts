import{Jugador} from './clase';

describe('Prueba de Clase',()=>{
    //const jugador = new Jugador();
    let jugador :Jugador
    beforeAll(()=>{
        console.warn('-------------BeforeAll');
    })

    beforeEach(()=>{
        console.warn('**********BeforeEach');
        jugador = new Jugador();
    })

    afterAll(()=>{
        console.warn('=========AfterALL');
        jugador = new Jugador();
    })
    afterEach(()=>{
        console.warn('$$$$$$$$$$AfterEach');
        jugador = new Jugador();
    })

  //este test es par el Else
    it('Debe retornar 80 de hp, si recibe 20 de danio',()=>{
        const resp= jugador.recibeDanio(20);
        expect(resp).toBe(80);
    })
// este test es tb para el ELse
    it('Debe retornar 50 de hp, si recibe 50 de danio',()=>{
        const resp= jugador.recibeDanio(50);
        expect(resp).toBe(50);
    })
// este tes es para el if
    it('Debe retornar 0 de hp, si recibe 50 de danio',()=>{
        const resp= jugador.recibeDanio(300);
        expect(resp).toBe(0);
    })

})