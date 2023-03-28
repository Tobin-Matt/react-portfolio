export function removeHyphensAndCapitalize(string) {
    return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

export function validateEmail(email) {
    const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(String(email).toLowerCase());
}