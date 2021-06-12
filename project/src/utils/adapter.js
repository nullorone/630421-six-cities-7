export default class Adapter {
  constructor(data) {
    this.data = data;
  }

  normalize() {
    return this.data.map((item) => this._normalizeItem(item));
  }

  _normalizeItem(data) {
    const normalizeData = {};

    Object.entries(data)
      .forEach(([key, value]) => {
        if (Object.prototype.toString.call(value) === '[object Object]') {
          normalizeData[this._convertName(key)] = this._normalizeItem(value);
        } else {
          normalizeData[this._convertName(key)] = value;
        }
      });

    return normalizeData;
  }

  _convertName(name) {
    if (name.indexOf('_') >= 0) {
      const splittedName = name.split('_');
      const upperSecondName = splittedName[1][0].toUpperCase() + splittedName[1].slice(1);

      return `${splittedName[0]}${upperSecondName}`;
    }

    return name;
  }
}


