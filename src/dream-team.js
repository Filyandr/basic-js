const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(arr === null){
    return false;
  } else if(typeof arr === "object") {
 let teamName = [];
 for (let i = 0; i < arr.length; i++) {
   if(typeof arr[i] === "string") {
     let strArr = new String(arr[i].replace(/ /g,'').toUpperCase());
     teamName.push(strArr[0]);
   }
 }
 return teamName.sort().join('');
} else {
  return false;
}
}

module.exports = {
  createDreamTeam
};
