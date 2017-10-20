import User from '../src/entities/User';


export default () => {
  const listOfUsers = [new User('Dmitry', 18),
    new User('Evgeniy', 25), new User('Nicolay', 17),
    new User('Michael', 35), new User('Ekateryna', 21),
    new User('Nick', 41), new User('Alissa', 19),
    new User('Sigal', 51), new User('Sofia', 24),
    new User('Roman', 45), new User('Galya', 42),
    new User('Lisa', 23), new User('Sofia', 31),
    new User('Mike', 18), new User('Dmitry', 36),
    new User('Ruslan', 37), new User('Ekateryna', 51),
    new User('Evgeniy', 27), new User('Jeff', 43),
    new User('Gudvin', 65), new User('John', 29),
    new User('Denis', 27), new User('Balu', 47),
    new User('Elena', 26), new User('Mia', 52),
    new User('Maria', 39), new User('Nicolay', 43),
    new User('Mickhail', 36), new User('Andrey', 23),
    new User('Andrey', 23), new User('Mark', 31),
    new User('Jessika', 26), new User('Lurinda', 28),
    new User('Evgeniya', 30), new User('Tatyana', 24),
    new User('Nina', 27), new User('Olga', 26),
    new User('Helga', 25), new User('Rocco', 20),
    new User('Denis', 45), new User('mika', 26),
  ];
  return { listOfUsers };
};
