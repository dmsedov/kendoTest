import User from '../src/entities/User';


export default () => {
  const listOfUsers = [new User('Dmitry', 28, 'Russia', 'MBI'),
    new User('Evgeniy', 25, 'Russia', 'MBI'), new User('Nicolay', 17, 'Ukraine', 'Naftogaz'),
    new User('Michael', 35, 'Germany', 'Siemens'), new User('Ekateryna', 21, 'Russia', 'SpbBank'),
    new User('Nick', 41, 'USA', 'GE'), new User('Alissa', 19, 'Canada', 'BPI'),
    new User('Sigal', 51, 'USA', 'FedEx'), new User('Sofia', 24, 'Bulgary', 'FedEx'),
    new User('Roman', 45, 'France', 'Schneider Electric'), new User('Galya', 42, 'Ukraine', 'Antonov'),
    new User('Lisa', 23, 'USA', 'MIT'), new User('Sofia', 31, 'Russia', 'Siemens'),
    new User('Mike', 24, 'USA', 'Lockheed'), new User('Dmitry', 36, 'Russia', 'Ansaldo'),
    new User('Ruslan', 37, 'Belarus', 'Gazprom'), new User('Ekateryna', 51, 'Moldova', 'MolBank'),
    new User('Evgeniy', 27, 'Sweden', 'ABB'), new User('Jeff', 43, 'Sweden', 'MGL'),
    new User('Gudvin', 65, 'Iceland', 'TMK'), new User('John', 29, 'USA', 'MisGenLtd'),
    new User('Denis', 27, 'England', 'Petr'), new User('Balu', 47, 'South Africa', 'ALtd'),
    new User('Elena', 26, 'Russia', 'Sberbank'), new User('Mia', 52, 'USA', 'Apple'),
    new User('Maria', 39, 'Germany', 'Siemens'), new User('Nicolay', 43, 'Russia', 'Ansaldo'),
    new User('Mickhail', 36, 'Austria', 'AtomEnergy'), new User('Andrey', 23, 'Ukraine', 'Youtube'),
    new User('Andrey', 23, 'Russia', 'vk'), new User('Mark', 31, 'Israil', 'facebook'),
    new User('Jessika', 26, 'USA', 'facebook'), new User('Lurinda', 28, 'england', 'rnb'),
    new User('Evgeniya', 30, 'turkey', 'gazprom'), new User('Tatyana', 24, 'Russia', 'oriflame'),
    new User('Nina', 27, 'Austria', 'medicineInstitute'), new User('Olga', 26, 'Russia', 'StateBank'),
    new User('Helga', 25, 'England', 'Palace'), new User('Rocco', 29, 'Italy', 'Roma Airlines'),
    new User('Denis', 45, 'Belarus', 'tractor'), new User('mika', 26, 'Scotland', 'BritPet'),
  ];
  return { listOfUsers };
};
