export function validate(name) {
    if (!name) {
        alert("Username cannot be empty!");
        return false;
    }
    else if (name.length < 3) {
        alert("name cannot be shorten 3 alphabet!!");
        return false;
    }
    return true;
}
//# sourceMappingURL=validate.js.map