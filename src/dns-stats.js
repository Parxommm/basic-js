const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  const domainsArr = [];
  const counts = {};
  const countKeys = [];
  domains.sort((a, b) => a.length - b.length)
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.');
    domainsArr.push(arr);
  }

  const lastDomain = domainsArr[0][domainsArr[0].length - 1];
  const domainsPluslastDomain = [...domains];
  domainsArr.unshift([lastDomain]);
  domainsPluslastDomain.unshift('' + lastDomain);

  let propertyName = '';
  for (let i = 0; i < domainsArr.length; i++) {
    const domain = domainsArr[i];
    for (let i = domain.length - 1; i >= 0; i--) {
      const name = domain[i];
      propertyName+= `.${name}`;
    }
    countKeys.push(propertyName);
    counts[propertyName] = 0;
    propertyName = '';
  }

  domainsPluslastDomain.forEach((domain1, i) => {
    domains.forEach(domain2 => {
      if (domain2.includes(domain1)) {
        counts[countKeys[i]]++;
      }
    })
  })
  return counts;
}

module.exports = {
  getDNSStats
};
