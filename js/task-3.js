"use strict";
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd((this.#value.length + str.length), str);
    return this.#value;
  }
  padStart(str) {
    this.#value = this.#value.padStart((this.#value.length + str.length), str);
    return this.#value;
  }
  padBoth(str) {
    const transit = this.#value.padEnd((this.#value.length + str.length), str);
    this.#value = transit.padStart((transit.length + str.length), str);
    return this.#value;
  }

}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
