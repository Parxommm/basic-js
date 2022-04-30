const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else if ((date instanceof Date) === false || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
    
  let mounth = date.getMonth();
    if (mounth >= 2 && mounth < 5) {
      return 'spring';
    } else if (mounth >= 5 && mounth < 8) {
      return 'summer';
    } else if (mounth >= 8 && mounth < 11) {
      return 'autumn';
    } else {
      return 'winter';
    }
}

module.exports = {
  getSeason
};
