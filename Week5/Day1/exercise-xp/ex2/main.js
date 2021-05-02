function getJSON() {
    let form = document.forms[0];
    let name = form.elements.name.value;
    let comments = form.elements.comments.value;

    let obj = {
        name,
        comments
    }

    console.log(JSON.stringify(obj))

    return false;
}