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

  prepend(value) {
    let current = this.head;
    let newFirst = new node(value);
    while (current.next !== null) {
      newFirst.next = current;
      current = current.next;
    }
    this.head = newFirst;
  }

  size() {
    let current = this.head;
    let size = 1;
    while (current.next !== null) {
      size += 1;
      current = current.next;
    }
    console.log(`The size of the linked list is ${size}`);
  }

  first() {
    let current = this.head;
    console.log(`The value of the first node in the list is: ${current.data}`);
  }

  tail() {
    let current = this.head;
    let value = null;
    while (current.next !== null) {
      value = current.data;
      current = current.next;
    }
    console.log(`The last value is ${value}`);
  }
}
