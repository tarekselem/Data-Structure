import { Tree } from './lib';

const tree = new Tree({
  rootValue: 10
});

console.log(tree.find(10), tree);

tree.insert(11);
console.log(tree.find(11), tree);

tree.insert(1);
console.log(tree.find(1), tree);

tree.insert(56);
console.log(tree.find(56), tree);
