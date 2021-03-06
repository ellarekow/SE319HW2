function validate1() {
    const fNameResult = nameCheck(document.forms["information"]["fname"].value);
    const lNameResult = nameCheck(document.forms["information"]["lname"].value);
    const genderResult = dropCheck(document.forms["information"]["gender"].value);
    const stateResult = dropCheck(document.forms["information"]["state"].value);

    getImage(Boolean(fNameResult), "fname");
    getImage(Boolean(lNameResult), "lname");
    getImage(Boolean(genderResult), "gender");
    getImage(Boolean(stateResult), "state");

    getNotification(Boolean(fNameResult), "fname");
    getNotification(Boolean(lNameResult), "lname");
    getNotification(Boolean(genderResult), "gender");
    getNotification(Boolean(stateResult), "state");

    if (Boolean(fNameResult) && Boolean(lNameResult) && Boolean(genderResult) && Boolean(stateResult))
        location.href = "./validation2.html";

}

function nameCheck(name) {
    return (name.match(/[a-zA-Z0-9]/));
}

function dropCheck(value) {
    return value != "blank";
}

function getNotification(bool, id) {
    var label = document.getElementById("labelNotify" + id);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + id;
        label.setAttribute('class', 'errorMessage');
    }

    const errors = { fname: "Please enter a valid name", lname: "Please enter a valid name", gender: "Please select an option", state: "Please select an option" };
    errors[id];

    label.innerHTML = bool ? "" : errors[id];
    document.getElementById(id).appendChild(label);
}

function getImage(bool, id) {
    var image = document.getElementById("image" + id);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + id;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    document.getElementById(id).appendChild(image);
}