var lib = {};

/**
  * check if the passed number is integer
  * @return: boolean
  * @required_params:
  *  - n : the value which should be check
  */
lib._isInteger = (n) => {
    return Number(n) === n && n % 1 === 0;
};

/**
  * check if the passed value is odd or throw an exception
  * @return: boolean
  * @required_params:
  *  - v: the value which should be check
  * @optional_params: None
  */
lib.isOdd = (v) => {
    const n = Math.abs(v);
    if(isNaN(n) || typeof(n) !== 'number') 
        throw new TypeError('expected a number');
    else {
        if(lib._isInteger(n)) return (n % 2) == 1;
        else throw new TypeError('expected integer number');
    }
    return false;
};

module.exports = lib;