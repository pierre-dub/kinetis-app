import {rootEndpoint, myHeaders} from "./settings";

export async function setNewWorkout(values:any) {
    try {
        let response = await fetch(rootEndpoint+'/workout', {
            method: 'POST',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'title': values.title,
                'description': values.description,
                'materiel': values.materiel,
                'repetition': values.repetition,
                'obj': values.obj
            })
        });
        let json = await response.json();
        console.log(json.message)
        return json;
    } catch (error) {
        console.error(error);
    }
}