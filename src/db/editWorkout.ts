import {myHeaders, rootEndpoint} from "./settings";

export async function editWorkout(id: any, title: any, description: any, repetition: any, materiel: any, objectif: any) {
    try {
        let response = await fetch(rootEndpoint + '/workout', {
            method: 'PATCH',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'id': id,
                'title': title,
                'description': description,
                'materiel': materiel,
                'repetition': repetition,
                'obj': objectif,
            })
        });
        let json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
}