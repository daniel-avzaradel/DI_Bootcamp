// ================= Exercise 1 : Checking the BMI ================= //

person1 = {
    Fullname: "John Doe",
    Mass: 84,
    Height: 1.82
}

person2 = {
    Fullname: "Dave Doe",
    Mass: 81,
    Height: 1.76
}

function BMI (person) {

    let BMI = person["Mass"] / person["Height"] **2; 
    console.log(BMI)
}

let person1_BMI = BMI(person1);
let person2_BMI = BMI(person2);

person1_BMI > person2_BMI ? console.log(person1["Fullname"]) : console.log(person2["Fullname"]);


// ================= Exercise 2 : Grade Average ================= //


