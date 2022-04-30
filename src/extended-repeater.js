const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) {
  options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }

  str = String(str);

  console.log(str, options);

  if (options.hasOwnProperty('addition')) {
    options.addition = String(options.addition)
    let strAddition = '';
    const arrAddition = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAddition.push(options.addition);
    }
    strAddition = arrAddition.join(options.additionSeparator);

    const strPlusAddition = [str, strAddition].join('');
    const arrResult = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      arrResult.push(strPlusAddition);
    }
    const result = arrResult.join(options.separator)
    return result;
  } else {
    const arrResult = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      arrResult.push(str);
    }
    const result = arrResult.join(options.separator)
    return result;
  }
}

module.exports = {
  repeater
};
