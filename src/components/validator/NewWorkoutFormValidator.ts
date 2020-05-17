export const newWorkoutFormValidator = (values:any) => {
    const errors = {
        title: "",
        description: "",
        repetition: "",
        materiel: "",
    };
    if (!values.title) {
        errors.title = "Title is required";
    } else if (values.title.length < 5) {
        errors.title = "That's a short title, tell us more";
    } else if (values.title.length > 45) {
        errors.title = "That's a long title, be brief";
    }
    if (!values.description) {
        errors.description = "Add a short description";
    } else if (values.description.length < 25) {
        errors.description = "That's a short description, you should add details";
    }
    if (!values.repetition) {
        errors.repetition = "Reps is missing, is this workout endless ?";
    }
    return errors;
};
