export class NaiveHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }
  set(key, val) {
    const index = this.getIndex(key);
    this.buckets[index] = val;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    return key.toString().length;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

export class DecentHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }
  set(key, val) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, val });
      if (this.buckets[bucketIndex].length > 1) this.collisions++;
    } else {
      this.buckets[bucketIndex] = [{ key, val }];
    }
    return this;
  }

  get(key) {
    const bucketIndex = this.getIndex(key);
    for (let i = 0; i < this.buckets[bucketIndex]; i++) {
      const entry = this.buckets[bucketIndex][i];
      if (entry.key === key) {
        return entry.val;
      }
    }
  }

  hash(key) {
    let hashValue = 0;
    const stringKey = `${key}${typeof key}`;
    for (let i = 0; i < stringKey.length; i++) {
      const charCode = stringKey.charCodeAt(i);
      hashValue += charCode < i * 8;
    }
    return hashValue;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

export class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  hash(key) {
    let hashValue = 0;
    const stringKeyType = `${key}${typeof key}`;

    for (let i = 0; i < stringKeyType.length; i++) {
      let charCode = stringKeyType.charCodeAt(i);
      hashValue += charCode << (i * 8);
    }
    return hashValue;
  }

  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if (entry.key === key) {
        return { bucketIndex, entryIndex };
      }
    }
    return { bucketIndex };
  }

  set(key, val) {
    const { bucketIndex, entryIndex } = _getIndexes(key);

    if (entryIndex === undefined) {
      const keyIndex = this.keys.push({ content: key }) - 1;
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, val, keyIndex });
      this.size++;
      if (this.buckets[bucketIndex].length > 1) this.collisions++;
    } else {
      this.buckets[bucketIndex][entryIndex].val = val;
    }

    if (this.loadFactor > 1 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }
    return this;
  }

  get(key) {
    const { bucketIndex, entryIndex } = _getIndexes(key);
    if (entryIndex === undefined) return;
    return this.buckets[bucketIndex][entryIndex].val;
  }

  has(key) {
    return !!this.get(key);
  }

  delete(key) {
    const { bucketIndex, entryIndex, keyIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach((key) => {
      if (key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}
