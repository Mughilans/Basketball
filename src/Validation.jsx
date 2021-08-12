const Validation = (values) => {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = "First Name is required"
    } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
        errors.firstName = "First Name should be Alphabets"
    }
    if (!values.lastName) {
        errors.lastName = "Last Name is required"
    } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
        errors.lastName = "Last Name should be Alphabets"
    }
    if (values.height === "") {
        errors.height = "Height is required"
    } else if (values.height !== "" && values.height < 0) {
        errors.height = "Height should be Positive Number"
    }
    if (!values.position) {
        errors.position = "Position is required"
    }
    return errors;
}

export default Validation