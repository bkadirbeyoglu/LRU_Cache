"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TopicCache_1 = require("./TopicCache");
const building1 = {
    id: "fdfsf",
    buildingName: "Tower 1",
    address: "İstanbul"
};
const checklist1 = {
    id: "dfdfsdf",
    title: "Weekly Goals",
    locationIds: ["z3x4c5", "r2t3y4"]
};
function testCache() {
    const topicCache = new TopicCache_1.TopicCache();
    topicCache.put(building1.id, building1);
    topicCache.put(checklist1.id, checklist1);
    console.log(topicCache.get(building1.id));
}
testCache();
