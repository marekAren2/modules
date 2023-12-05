
// const {add, multiply} = require('./mathFolder');
// nv41 23:56 !importuje tutaj do index
const add = require('./add');
const multiply = require('./multiply');

// v41 23:56 !eksportuje z index do global
module.exports = {
    add: add,
    multiply: multiply
}