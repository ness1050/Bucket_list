export function validate(name:String): boolean {
    if (!name) {
        alert("Username cannot be empty!");
        return false;
    } else if (name.length < 4) {
        alert("name cannot be shorten 3 alphabet!!");
        return false;
    }

    return true;
}