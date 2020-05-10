import {rootEndpoint, myHeaders} from "./settings";

export async function deleteWorkout(id:any) {
    try {
        let response = await fetch(rootEndpoint+'/workout', {
            method: 'DELETE',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'id': id
            })
        });
        let json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
}