import {validateEmail} from "./SignInFormValidator";

export const connexionFormValidator = (values:any) => {
    const errors = {
        email: "",
        mdp: "",
    };
    if (!values.mdp) {
        errors.mdp = "Password is required";
    }
    if(!values.email) {
        errors.email = "Email is required"
    } else if (!validateEmail(values.email)){
        errors.email = "Email given is not correct"
    }
    return errors;
};
