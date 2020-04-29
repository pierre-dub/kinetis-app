import {rootEndpoint, myHeaders} from "./settings";

export async function setNewWorkout(title:any,description:any,repetition:any,materiel:any) {
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
                'obj': ""
            })
        });
        let json = await response.json();
        console.log(json.message)
        return json;
    } catch (error) {
        console.error(error);
    }
}