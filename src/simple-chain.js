const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.length || typeof position !== 'number') {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainStr = this.chain.join('~~');
    this.chain.length = 0;
    return chainStr;
  }
};

chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
chainMaker.addLink().finishChain();
module.exports = {
  chainMaker
};
