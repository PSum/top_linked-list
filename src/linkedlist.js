import node from "./node";

export default class LinkedList {
  constructor(data) {
    this.head = new node(data); // Creating the first node
  }
  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new node(value);
  }
}
