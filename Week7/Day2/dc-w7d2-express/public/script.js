function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["message"].value;
    let z = document.forms["myForm"]["email"].value;
    if (x == "" || y == "" || z == "") {
      alert("Name, email and message fields must be filled out");
      return false;
    }
  }

