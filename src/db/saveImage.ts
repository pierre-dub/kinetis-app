import {myHeaders, rootEndpoint} from "./settings";

export async function uploadImage(image:any, idWorkout:any) {
    try {
        let response = await fetch(rootEndpoint+'/image/upload', {
            method: 'POST',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'image': image,
                'idWorkout':idWorkout
            })
        });
        let json = await response.json();
        console.log(json.message)
        return json;
    } catch (error) {
        console.error(error);
    }
}
