export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  let currentNode = tree;
  let closestValue = tree.value;

  while (currentNode.value < target) {
    if (!currentNode.left) break;

    currentNode = currentNode.left;
    closestValue = currentNode.value;
  }

  return -1;
}
