class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();                        // Map to store key-value pairs
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;                                 // Return -1 if key is not found
        }
       
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);                     // Remove the old value to update position
        } else if (this.cache.size === this.capacity) {
                                                        // Remove the least recently used item
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);                     // Add the new key-value pair
    }
}

