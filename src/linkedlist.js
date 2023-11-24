import node from "./node";

export default class LinkedList {
  constructor(data) {
    this.head = new node(data); // Creating the first node
  }

  append(value) {
    const newNode = new node(value);

    if (!this.head) {
      // If the list is empty, set the new node as the head
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    // Attach the new node at the end of the list
    current.next = newNode;
  }

  prepend(value) {
    const newFirst = new node(value);

    if (!this.head) {
      // If the list is empty, set the new node as the head
      this.head = newFirst;
      return;
    }

    newFirst.next = this.head; // Set the new node's next to the current head
    this.head = newFirst; // Update the head to the new node
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
    if (!this.head) {
      // Handle the case where the list is empty
      return;
    }

    if (!this.head.next) {
      // Handle the case where there's only one node in the list
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null; // Update the pointer of the second-to-last node to null
  }

  contains(value) {
    // returns true if the passed in value is in the linked list
    let current = this.head;
    try {
      while (current.data !== null) {
        if (current.data == value) {
          console.log(`The value ${value} is part of the linked list`);
          return true;
        }
        current = current.next;
      }
    } catch (error) {}
    console.log(`The value ${value} is not part of the linked list`);
    return false;
  }

  find(value) {
    // return index of passed in value
    let current = this.head;
    let i = 0;
    try {
      while (current.data !== null) {
        if (current.data == value) {
          console.log(`${value} has the index: ${i}`);
          return;
        }
        current = current.next;
        i += 1;
      }
    } catch (error) {}
    console.log(
      `The value ${value} is not part of this linked list and therefore has no index`
    );
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
