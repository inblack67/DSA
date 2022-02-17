class DLLNode {
  data: number;
  key: number;
  prev: DLLNode | null;
  next: DLLNode | null;
  constructor(
    data: number,
    key: number,
    prev: DLLNode = null,
    next: DLLNode = null,
  ) {
    this.data = data;
    this.key = key;
    this.prev = prev;
    this.next = next;
  }
}

class DLL {
  head: DLLNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(node: DLLNode): void {
    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }
    const curr = this.head;
    this.head = node;
    node.prev = null;
    node.next = curr;
    curr.prev = node;
    this.size++;
  }
  remove(node: DLLNode) {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    const nextNode = node.next;
    const prevNode = node.prev;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    }
    this.size--;
  }
}

class LRUCache {
  hash: Map<number, DLLNode>;
  dll: DLL;
  size: number;
  capacity: number;
  constructor(capacity: number) {
    this.hash = new Map<number, DLLNode>();
    this.size = 0;
    this.dll = new DLL();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.hash.has(key)) {
      return -1;
    }
    const node = this.hash.get(key);
    this.dll.remove(node);
    this.dll.add(node);
    return node.data;
  }

  put(key: number, value: number): void {
    if (this.capacity === this.size) {
      let curr = this.dll.head;
      while (curr.next) {
        curr = curr.next;
      }
      this.dll.remove(curr);
      this.hash.delete(curr.key);
      this.size--;
    }

    const node = new DLLNode(value, key);
    this.dll.add(node);
    this.hash.set(key, node);
    this.size++;
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.put(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));
console.log(lRUCache.get(4));
// console.log(lRUCache.get(4));
// console.log(lRUCache.get(2));
// console.log(lRUCache.get(2));
lRUCache.put(5, 5);
console.log(lRUCache.get(5));

// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2)); // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1)); // return -1 (not found)
// console.log(lRUCache.get(3)); // return 3
// console.log(lRUCache.get(4)); // return 4
