import {rootEndpoint, myHeaders} from "./settings";

export async function setNewUser(surname:any,name:any,password:any,email:any,kine:any) {
    try {
        let response = await fetch(rootEndpoint+'/user/new', {
            method: 'POST',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'surname': surname,
                'name': name,
                'password': password,
                'email': email,
                'kine': kine
            })
        });
        let json = await response.json();
        console.log(json.message)
        return json;
    } catch (error) {
        console.error(error);
    }
}
