import {validateEmail} from "./SignInFormValidator";

export const connexionFormValidator = (values:any) => {
    const errors = {
        email: "",
        mdp: "",
        validate: true
    };
    if (!values.mdp) {
        errors.mdp = "Password is required";
        errors.validate = false;
    }
    if(!values.email) {
        errors.email = "Email is required"
        errors.validate = false;
    } else if (!validateEmail(values.email)){
        errors.email = "Email given is not correct"
        errors.validate = false;
    }
    return errors;
};
