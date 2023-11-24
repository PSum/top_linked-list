import node from "./node.js";
import LinkedList from "./linkedlist.js";

let list1 = new LinkedList(3);
list1.append(4);
list1.prepend(2);
list1.size();
list1.first();
list1.tail();
list1.at(1);

list1.toString();
