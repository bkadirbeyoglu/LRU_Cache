import { Topic } from "./Models"

enum TopicCacheDuration {
    BUILDING = 5 * 1000,
    CHECKLIST = 10 * 1000,
    MEMBER = 15 * 1000
}

interface CachedTopic {
    expirationDate: Date,
    topic: Topic
}

export class TopicCache {

    private readonly maxSize: number = 5;
    private cache: Map<string, CachedTopic>;

    constructor() {
        this.cache = new Map<string, CachedTopic>();
    }

    put(key: string, topic: Topic): void {
        if (this.cache.size >= this.maxSize) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey)
        }
        let expirationDate: Date;
        if ("buildingName" in topic) {
            // Building
            expirationDate = new Date(Date.now() + TopicCacheDuration.BUILDING);
        } else if ("locationIds" in topic) {
            // Checklist
            expirationDate = new Date(Date.now() + TopicCacheDuration.CHECKLIST);
        } else {
            // Member
            expirationDate = new Date(Date.now() + TopicCacheDuration.MEMBER);
        }
        const cachedTopicWrite: CachedTopic = { expirationDate, topic };
        this.cache.set(key, cachedTopicWrite);
    }

    get(key: string): Topic | undefined {
        const cachedTopicRead = this.cache.get(key);
        if (cachedTopicRead) {
            if (cachedTopicRead.expirationDate.getTime() > Date.now()) {
                const topic: Topic = cachedTopicRead.topic;
                const expirationDate: Date = cachedTopicRead.expirationDate;
               /*  let expirationDate: Date;
                if ("buildingName" in topic) {
                    // Building
                    expirationDate = new Date(Date.now() + TopicCacheDuration.BUILDING);
                } else if ("locationIds" in topic) {
                    // Checklist
                    expirationDate = new Date(Date.now() + TopicCacheDuration.CHECKLIST);
                } else {
                    // Member
                    expirationDate = new Date(Date.now() + TopicCacheDuration.MEMBER);
                } */
                const cachedTopicWrite: CachedTopic = { expirationDate, topic };
                this.cache.delete(key);
                this.cache.set(key, cachedTopicWrite);
                return topic;    
            }
            else {
                return undefined;
            }
        }
        return undefined;
    }

}