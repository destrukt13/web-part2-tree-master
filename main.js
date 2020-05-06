'use strict'

const task1 = require('./task1.js');
const task2 = require('./task2.js');
const task3 = require('./task3.js');

const task4 = require('./task4.js');

const task5 = require('./task5.js');

const task6 = require('./task6.js');

var BST = new task6.BinarySearchTree();

BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);

BST.preOrderTraversal(BST.root);


console.log(task1.genRandHex(6));
console.log(task2.insertToString('1', 'abcd' , 'abc'));
console.log(task3.insertionSort([1,9,8,7,6,5,4,3,2]));
console.log(task4.searchRepeat(['asdasd','asdasd','asd','qwe']));
console.log(task5.dayFromStartYear());



//console.log(dayFromStartYear());
//console.log(searchRepeat(['a','a','b','c']))
//console.log(insertionSort([1,4,2,3,5]))
//console.log(insertToString(3, 'hello', 'hell'))
//console.log('#' + genRandHex(3))
