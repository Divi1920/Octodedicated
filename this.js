function generateCode() {
    let length = document.getElementById("length").value;
    let characters = "873657580123456789";
    let code = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex==];
    }

    document.getElementById("output").textContent = "Your random code: " + code;
}
let = 6;
this_is=4;
