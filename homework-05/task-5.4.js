class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    console.log(this._value);
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    const newSting = this._value.padStart(this._value.length + 1, str);
    this._value = newSting;
  }

  pad(str) {
    const lengthStr = this._value.length + 1;
    const newSting = this._value
      .padEnd(lengthStr, str)
      .padStart(lengthStr + 1, str);

    this._value = newSting;
  }
}

const builder = new StringBuilder('.');
builder.append('^');
builder.prepend('^');
builder.pad('=');

builder.value;
