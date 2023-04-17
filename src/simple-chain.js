const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  result: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value)) {
    this.chain.push(`( ${value} )`);
    return this;
    }
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position <= 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  }
};


module.exports = {
  chainMaker
};
