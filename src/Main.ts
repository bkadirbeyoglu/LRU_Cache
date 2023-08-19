import { Building, Checklist, Member } from "./Models";
import { TopicCache } from "./TopicCache";


const building1: Building = {
    id: "bldg1",
    buildingName: "Tower 1",
    address: "İstanbul"
}
const building2: Building = {
    id: "bldg2",
    buildingName: "Tower 2",
    address: "İstanbul"
}
const building3: Building = {
    id: "bldg3",
    buildingName: "Tower 3",
    address: "İstanbul"
}
const building4: Building = {
    id: "bldg4",
    buildingName: "Hotel 1",
    address: "İstanbul"
}

const checklist1: Checklist = {
    id: "chkl1",
    title: "Weekly Goals",
    locationIds: ["z3x4c5", "r2t3y4"]
}
const checklist2: Checklist = {
    id: "chkl2",
    title: "Monthly Goals",
    locationIds: ["rw5453", "werwe45"]
}

function testCache() {
    const topicCache = new TopicCache();

    topicCache.put(building1.id, building1);
    topicCache.put(checklist1.id, checklist1);
    topicCache.put(building2.id, building2);
    topicCache.put(building3.id, building3);
    topicCache.put(checklist2.id, checklist2);
    console.log("topicCache after adding 5 items");
    console.log(topicCache);

    topicCache.get(checklist1.id);
    console.log("topicCache after getting checklist1");
    console.log(topicCache);
    topicCache.put(building4.id, building4);
    console.log("topicCache after putting building4");
    console.log(topicCache);

    console.log("building4:");
    console.log(topicCache.get(building4.id));

    setTimeout(() => {
        console.log("building4 after 3 seconds:");
        console.log(topicCache.get(building4.id));
        //console.log(topicCache);
    }, 3000);
    setTimeout(() => {
        console.log("building4 after 12 seconds:");
        console.log(topicCache.get(building4.id));
        //console.log(topicCache);
    }, 12000);
    
}
testCache();