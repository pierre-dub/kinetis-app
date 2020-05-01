import {rootEndpoint, myHeaders} from "./settings";

export async function setNewUser(username:any,password:any,email:any) {
    try {
        let response = await fetch(rootEndpoint+'/user/new', {
            method: 'POST',
            headers: myHeaders
            ,
            body: JSON.stringify({
                'username': username,
                'password': password,
                'email': email,
            })
        });
        let json = await response.json();
        console.log(json.message)
        return json;
    } catch (error) {
        console.error(error);
    }
}
