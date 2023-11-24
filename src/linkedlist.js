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
    this.head = current;
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

  at(index) {
    let current = this.head;
    let i = 0;
    while (i !== index) {
      current = current.next;
      i += 1;
    }
    let value = current.data;
    console.log(`The value for index: ${index} is ${value}`);
  }

  pop() {
    //remove last element
  }

  contains(value) {
    // returns true if the passed in value is in the linked list
  }

  find(value) {
    // return index of passed in value
  }

  toString() {
    let current = this.head;
    let listValues = [];
    try {
      while (current.data !== null) {
        listValues.push(current.data);
        current = current.next;
      }
    } catch (error) {}
    console.log("The data of the linked list is:");
    const result = listValues.join(" -> ");
    console.log(result);
  }
}
