

//Declaration of variables

let radius = 0;
let area = 0;

//Function to calculate the area of the circle

document.getElementById("btn_calculate").onclick = () => {

    radius = parseFloat(document.getElementById("txt_radius").value);
    if ((radius) && typeof radius === 'number'){
    let area = Math.PI * radius * radius;
    document.getElementById("result").textContent = `The area of the circle is ${area}`;
    }
    else
    document.getElementById("result").textContent = `Please provide a valid  vale of Radius. `;

}