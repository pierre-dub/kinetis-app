import {myHeaders, rootEndpoint} from "./settings";

export async function checkAuthentication(username:any, password:any) {
    try{
        const response = await fetch(rootEndpoint + '/user', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        let json = await response.json();
        console.log(json.message)
        return json.status;
    }
    catch (e) {
        console.error(e)
    }
}
