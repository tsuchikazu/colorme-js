"use strict";
class ColormeApi {
  constructor(name = "") {
    this.name = name;
  }

  hello() {
    return `hello, ${this.name}!`;
  }
}

export default ColormeApi;
