import {myHeaders, rootEndpoint} from "./settings";

export async function getMyWorkout() {
    try{
        const response = await fetch(rootEndpoint + '/workout', {
            method: 'GET',
            headers: myHeaders
        })
        let json = await response.json();
        console.log(json.message);
        return json;
    }
    catch (e) {
     console.error(e)
    }
}
