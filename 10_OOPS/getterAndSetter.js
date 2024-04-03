class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const mike = new User("mike@gmail.com", "abc");
console.log(mike.email);
console.log(mike.password);
