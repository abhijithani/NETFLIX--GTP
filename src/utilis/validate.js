export const checkvalidation = (emailval, passwordval) => {

    // const isName = /^\w{4}$/.test(name)
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailval);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(passwordval);

    // if(!isName) return "Name should less than 4 charaters"
    if (!isEmailValid) return "Email ID is no Vaild";
    if (!isPasswordValid) return "Password is not valid";

    return null;

}