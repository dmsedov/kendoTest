export default class User {
  constructor(nickname, age, country, company) {
    this.nickname = nickname;
    this.age = age;
    this.country = country;
    this.company = company;
  }

  isGuest() {
    return false;
  }
}
