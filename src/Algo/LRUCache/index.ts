class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;
  constructor(capacity: number) {
    this.cache = new Map<number, number>();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    return this.cache.get(key)!;
  }

  put(key: number, value: number): void {
    if (this.cache.size === this.capacity) {
      throw new Error('Cache is full');
    }
    this.cache.set(key, value);
  }
}

const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(2));
// console.log(lruCache.put(3, 3));
