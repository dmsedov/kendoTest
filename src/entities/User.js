export default class User {
  constructor(nickname, age) {
    this.nickname = nickname;
    this.age = age;
  }

  isGuest() {
    return false;
  }
}
