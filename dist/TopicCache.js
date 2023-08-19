"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCache = void 0;
class TopicCache {
    constructor() {
        this.maxSize = 10;
        this.cache = new Map();
    }
    put(key, value) {
        if (this.cache.size >= this.maxSize) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, { key, value });
    }
    get(key) {
        const topic = this.cache.get(key);
        if (topic) {
            this.cache.delete(key);
            this.cache.set(key, topic);
            return topic;
        }
        return undefined;
    }
}
exports.TopicCache = TopicCache;
