export function validateEmail(email:string) {
    let res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

export const signInValidator = (values:any) => {
    const errors = {
        name: "",
        surname: "",
        password: "",
        passwordConfirmation: "",
        email:"",
        validate: true
    };
    if (!values.name) {
        errors.name = "Name is required";
        errors.validate = false;
    }
    if (!values.surname) {
        errors.surname = "Name is required";
        errors.validate = false;
    }
    if (!values.password) {
        errors.password = "Password is required";
        errors.validate = false;
    } else if (values.password.length < 8) {
        errors.password = "8 characters minimum";
        errors.validate = false;
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = "Password confirmation is required";
        errors.validate = false;
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = "Insert the same password";
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

