import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const user = [{
      id: 1,
      name: 'alonso',
      lastName: '',
      userName: '',
      pws: '123',
      countryId: 1
    },

    {
      id: 3,
      name: 'soa bachele',
      lastName: '',
      userName: '',
      pws: '123',
      countryId: 2
    },
    {
      id: 4,
      name: 'camila',
      lastName: '',
      userName: '',
      pws: '123',
      countryId: 3
    }
   ];

    const country = [{
    id: 1,
    name: 'chile',
   },
   {
   id: 2,
    name: 'argentina',
   },
   {
   id: 3,
    name: 'peru',
   },
   {
    id: 4,
     name: 'Venezuela',
    }
   ];

    const alumno = [{
    id: 1,
    name: 'David',
    curso: 'octavo'
   },
   {
    id: 2,
    name: 'Daniel',
    curso: 'primero'
   },
   {
    id: 3,
    name: 'Darwing',
    curso: 'segundo'
   },

   ];

    const calificacion = [
      {
        nombre: 'David',
    id: 1,
    materia: 'angular',
    nota: 70,
   },
    {
      id: 1,
      materia: 'matematica',
      nota: 70,
    },
   {
    id: 1,
     materia: 'javascript',
    nota: 40,
   },
      {
    id: 1,
    materia: 'angular',
    nota: 70,
   },
    {
      nombre: 'Daniel',
      id: 2,
      materia: 'ingles',
      nota: 3,
    },
   {
    id: 2,
     materia: 'html',
    nota: 4,
   },
      {
    id: 2,
    materia: 'php',
    nota: 70,
   },
    {
      id: 2,
      materia: 'algebra',
      nota: 90,
    },
   {
     nombre: 'Darwing',
    id: 3,
     materia: 'material',
    nota: 4,
   },
      {
    id: 3,
    materia: 'css',
    nota: 7,
   },
    {
      id: 3,
      materia: 'quimica',
      nota: 90,
    },
   {
    id: 3,
     materia: 'boostrapp',
    nota: 4,
   }

  ];

    return {user, country, alumno, calificacion};
  }
}
