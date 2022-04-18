export class Node {
  constructor(
    public value: number,
    public leftChild?: Node,
    public rightChild?: Node
  ) {}
}

export class Tree {
  constructor(params?: { rootValue?: number; rootNode?: Node }) {
    if (params?.rootNode) {
      this.root = params.rootNode;
    }

    if (params?.rootValue) {
      this.root = new Node(params.rootValue);
    }
  }

  root: Node;

  private lookup(value: number): Node {
    let current = this.root;

    while (value > current?.value) {
      if (current.rightChild) {
        current = current.rightChild;
      } else {
        return current;
      }
    }

    while (value < current?.value) {
      if (current.leftChild) {
        current = current.leftChild;
      } else {
        return current;
      }
    }

    return current;
  }

  private assignValueToNode(value: number, targetNode: Node) {
    // already exist
    if (value === targetNode.value) {
      console.error('the value is already exist...');
    }
    // smaller than targetNode
    else if (value < targetNode.value) {
      targetNode.leftChild = new Node(value);
    }
    // greater than targetNode
    else if (value > targetNode.value) {
      targetNode.rightChild = new Node(value);
    }
  }

  public insert(value: number) {
    let targetNode = this.lookup(value);
    console.log(targetNode);

    // couldn't find a target node
    if (!targetNode) {
      targetNode = this.root;
    }
    this.assignValueToNode(value, targetNode);
  }

  public find(value: number): boolean {
    return this.lookup(value)?.value === value;
  }
}
