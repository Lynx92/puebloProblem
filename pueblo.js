const nombres = [
  'Aarón',
  'Abd al-Aziz',
  'Abdalá',
  'Abdías',
  'Abdón',
  'Abdul Latif',
  'Abel',
  'Abelardo',
  'Abraham',
  'Absalón',
  'Abundio',
  'Acacio',
  'Achiuta',
  'Acisclo',
  'Adalberto',
  'Adán',
  'Adolfo',
  'Adrià',
  'Adrián',
  'Adriel',
  'Adrista',
  'Afrodisio',
  'Agamenón',
  'Agapito',
  'Agastia',
  'Agatoclio',
  'Aghásura',
  'Agni',
  'Agustín',
  'Aitor',
  'Aladino',
  'Alarico',
  'Albano',
  'Alberto',
  'Albino',
  'Alcibíades',
  'Alcide',
  'Alcides',
  'Aldo',
  'Alec',
  'Alejandro',
  'Alejo',
  'Alfonso',
  'Alfredo',
  'Álvaro',
  'Amadeo',
  'Amado',
  'Amador',
  'Amancio',
  'Amara-kosha',
  'Ambarisha',
  'Ambrosio',
  'Amenhotep',
  'Américo',
  'Amílcar',
  'Amit',
  'Amós',
  'Amsha',
  'Anacleto',
  'Ananías',
  'Anastasio',
  'Anatolio',
  'Ander',
  'Andhaka',
  'Andoni',
  'Andreas',
  'Andrei',
  'Hilario',
  'Hipólito',
  'Hiroki',
  'Hiroshi',
  'Hisashi',
  'Homero',
  'Homobono',
  'Honorato',
  'Honorio',
  'Horacio',
  'Horatio',
  'Hormisdas',
  'Huberto',
  'Hugo',
  'Humberto',
  'Gabino',
  'Gabriel',
  'Galvarino',
  'Gamaliel',
  'Gana',
  'Gandharva',
  'Ganesha',
  'Garga Muni',
  'Garuda',
  'Gaspar',
  'Gastón',
  'Gaudencio',
  'Gautama',
  'Gedeón',
  'Geoffrey',
  'Gerardo',
  'Germán',
  'Germán',
  'Gerson',
  'Gervasio',
  'Gianluca',
  'Gianni',
  'Gilberto',
  'Ginés',
  'Girolamo',
  'Gobrias',
  'Godofredo',
  'Goliat',
  'Gonzalo',
  'Gopala',
  'Gorō',
  'Aksapada Gótama',
  'Gottlieb',
  'Govinda',
  'Gregorio',
  'Gritsa Madá',
  'Guido',
  'Guillermo',
  'Gumersindo',
  'Gumaro',
  'Gustaf',
  'Gustav',
  'Gustavo',
];

class Persona {
  constructor(nombre, cartel, comunicar) {
    this.nombre = nombre;
    this.cartel = cartel; // Si tiene o no cartel en la espalda
    this.comunicar = comunicar; // Si tiene la capacidad de hablar
    this.saber = false; // Si sabe que tiene el mismo un cartel
  }

  // Habilidad para chivarse a otros
  chivarseA(amigo) {
    if (this.comunicar) {
      console.log(amigo + ' tienes un cartel!');
      return true;
    } else {
      console.log(this.nombre + ' no puede hablar con ' + amigo);
      return false;
    }
  }
}

const LeyMordaza = true; // Si pueden hablar o no en el pueblo
const NumeroHabitantes = 50;

// Se genera el pueblo con sus habitantes
const Pueblo = [...new Array(NumeroHabitantes)].map(() => {
  const tieneCartel = () => getRandomInt(0, 100) < 50; // Se pone cartel aleatoriamente
  const decideNombre = () => nombres[getRandomInt(0, nombres.length)]; // Se pone nombre a los habitantes aleatoriamente
  return new Persona(decideNombre(), tieneCartel(), !LeyMordaza); // Se crea el ciudadano
});

console.log(Pueblo); // Para ver el Pueblo

for (let dia = 1; Pueblo.length > 0; dia++) {
  if (dia > 365)
    return console.log(
      '--- Los habitantes se han muerto de pena de tantos dias sin poder hablar ---'
    );

  let personasKsabenKtienenCartel = 0;
  let quedaGenteConCartel = false;

  // Interacciones aleatorias entre habitantes
  for (const person of Pueblo) {
    const num = getRandomInt(1, Pueblo.length); // Guardamos con quien está interectuando
    if (person.cartel) {
      quedaGenteConCartel = true;
      // console.log(person.nombre + ' tiene cartel');
    }

    if (Pueblo[num].cartel) {
      // Si interacciona con una persona con cartel en la espalda, se chiva
      const chivarse = person.chivarseA(Pueblo[num].nombre);

      if (chivarse) {
        Pueblo[num].saber = true; // Si consigue chivarse la otra persona ya sabe que tiene cartel en la espalda
        personasKsabenKtienenCartel++;
        Pueblo.splice(num, 1);
      }
    }
  }

  console.log(
    '\n' +
      '*** Dia ' +
      dia +
      ': ' +
      personasKsabenKtienenCartel +
      ' personas saben que tienen cartel y se van del pueblo ***'
  );

  console.log(
    '\n' + 'Quedan ' + Pueblo.length + ' personas en el pueblo' + '\n'
  );

  if (!quedaGenteConCartel)
    return console.log(
      '\n --- No queda mas gente con carteles en el pueblo ---'
    );
}

return console.log('Se han tardado ' + dia + ' dias en vaciar el pueblo');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
