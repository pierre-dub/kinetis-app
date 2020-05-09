export const newWorkoutFormValidator = (values:any) => {
    const errors = {
        title: "",
        description: "",
        repetition: "",
        materiel: "",
        validate: true
    };
    if (!values.title) {
        errors.title = "Title is required";
        errors.validate = false;
    } else if (values.title.length < 5) {
        errors.title = "That's a short title, tell us more";
        errors.validate = false;
    }
    if (!values.description) {
        errors.description = "Add a short description";
        errors.validate = false;
    } else if (values.description.length < 25) {
        errors.description = "That's a short description, you should add details";
        errors.validate = false;
    }
    if (!values.repetition) {
        errors.repetition = "Reps is missing, is this workout endless ?";
        errors.validate = false;
    }

    return errors;
};
