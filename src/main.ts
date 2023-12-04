import {
  isIsomorphic,
  isPalindrome,
  isValidSubsequence,
  numIslands,
  sortedSquaredArray,
  tournamentWinner,
  transposeMatrix,
  twoNumberSum
} from './lib/algorithms';
import { BST, findClosestValueInBst } from './lib/data';

let tree: BST = new BST(10);
tree.left = new BST(11);
tree.right = new BST(9);

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);
