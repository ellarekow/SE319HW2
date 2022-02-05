function validate1() {
    valCheck = true;
    var fNameResult = nameCheck(document.forms["information"]["fname"].value);
    var lNameResult = nameCheck(document.forms["information"]["lname"].value);

}

function nameCheck(name) {
    if (name.match("^[a-zA-Z0-9]*$") && name != null) {
        return true;
    }
    else
        return false;
}