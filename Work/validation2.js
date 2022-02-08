function validate2() {
    const emailResult = emailCheck(document.forms["information"]["email"].value);
    const phoneResult = phoneCheck(document.forms["information"]["phone"].value);
    const addressResult = addressCheck(document.forms["information"]["address"].value);

    getImage(Boolean(emailResult), "email");
    getImage(Boolean(phoneResult), "phone");
    getImage(Boolean(addressResult), "address");

    getNotification(Boolean(emailResult), "email");
    getNotification(Boolean(phoneResult), "phone");
    getNotification(Boolean(addressResult), "address");

}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && nameCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && nameCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}

function addressCheck(address) {
    return address.match(/^[A-Za-z ]+,?[A-Za-z ]+$/);
}

function phoneCheck(phone) {
    return phone.match(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
}

function nameCheck(name) {
    return name.match(/[a-zA-Z0-9]/);
}

function getNotification(bool, id) {
    var label = document.getElementById("labelNotify" + id);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + id;
        label.setAttribute('class', 'errorMessage');
    }

    const errors = { email: "Please enter a valid email", phone: "Please enter a valid phone number", address: "Please enter a valid address" };
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