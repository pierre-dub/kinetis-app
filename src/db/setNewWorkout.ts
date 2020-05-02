import {rootEndpoint, myHeaders} from "./settings";

export async function setNewWorkout(title:any,description:any,repetition:any,materiel:any,image:any) {
    try {
        let response = await fetch(rootEndpoint+'/workout', {
            method: 'POST',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'title': title,
                'description': description,
                'materiel': materiel,
                'repetition': repetition,
                'obj': "",
                'image': image,
            })
        });
        let json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
}