class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function copy(headNode) {
  let indexNode = headNode;
  while(null !== indexNode) {
    let copyNode = new Node(indexNode.value);
    copyNode.next = indexNode.next;
    indexNode.next = copyNode;
    indexNode = copyNode.next;
  }
  let copyHeadNode = headNode.next;
  let copyIndexNode = headNode.next;
  indexNode = headNode;
  while(null !== copyIndexNode.next) {
    indexNode.next = copyIndexNode.next;
    copyIndexNode.next = indexNode.next.next;
  }
  return copyHeadNode;
}
