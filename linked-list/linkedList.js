class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.prev = null;
    this.size = 0;
  }

  insert(value) {
    while (this.head) {
      this.head = this.head.next;
    }
    this.head = new Node(value);

    this.size++;
  }

  delete(value) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        this.size--;
      }
      prev = current;
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(1);
list.delete(2);
// console.log(list);
while (list.head !== null) {
  console.log(list.head.value);
  list.head = list.head.next;
}
