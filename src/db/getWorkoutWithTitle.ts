import {myHeaders, rootEndpoint} from "./settings";

export async function getMyWorkoutWithTitle(title:string) {
    try{
        const response = await fetch(rootEndpoint + '/users', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                'title': title
            })
        })
        let json = await response.json();
        console.log(json.message);
        return json;
    }
    catch (e) {
        console.error(e)
    }
}
