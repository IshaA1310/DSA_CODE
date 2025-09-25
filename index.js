class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

const firstNode = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
const fourthNode = new Node(21);
const fifthNode = new Node(22);
const sixthNode = new Node(32);

//root node childs (left & right)
firstNode.left = secondNode;
firstNode.right = thirdNode;

// left node childs (left & right)
secondNode.left = fourthNode;
secondNode.right = fifthNode;

//right node only 1 right child
thirdNode.right = sixthNode;