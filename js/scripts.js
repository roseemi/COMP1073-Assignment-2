// Add the select options on select click event
document.getElementById("imageSelect").addEventListener("click", addList());

// Constants for selectors and event listeners
const body = document.querySelector("body");
const customColour = document.querySelector(".custColor").addEventListener("click", changeCustomColor);
const randColour = document.querySelector(".randColor").addEventListener("click", changeRandomColor);
const imgSelect = document.getElementById("imageSelect").addEventListener("click", changeImage);

const imgLocation = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg"];

// Change the colour based on the user's int input
function changeCustomColor() {
    document.getElementById("myStudentId").textContent = "200553504";
    setColor(parseInt(document.getElementById("customNumber").value));
}

// Change the colour randomly
function changeRandomColor() {
    setColor(Math.floor(Math.random() * 101));  // Pick a random number between 1 and 100
}

// Logic for changing the colour
function setColor(value) {
    if (value < 0 || value > 100) body.style.backgroundColor = "rgb(200,0,80)"; // red
    else if (value <= 20) body.style.backgroundColor = "rgb(0,100,0)";          // green
    else if (value <= 40) body.style.backgroundColor = "rgb(0,0,100)";          // blue
    else if (value <= 60) body.style.backgroundColor = "rgb(180,50,0)";         // orange
    else if (value <= 80) body.style.backgroundColor = "rgb(200,0,200)";        // purple
    else if (value <= 100) body.style.backgroundColor = "rgb(200,180,0)";       // yellow
}

// Add a list of images to pick from when #imageSelect is clicked
function addList() {
    for (let i = 0; i < 5; i++) {
        // For each image that exists, create a new option, label it after the image, and add to the list of #imageSelect
        let newOption = document.createElement("option");
        newOption.innerHTML = "Image " + (i + 1);
        document.querySelector("#imageSelect").appendChild(newOption);
    }
}

// Change the displayed image based on the selected index of #imageSelect
function changeImage() {
    // Select which image was chosen from the select form
    let select = document.querySelector("#imageSelect").selectedIndex;

    // Switch through each index array, altering the image based on what was selected
    switch (select) {
        case 1:
            document.getElementById("images").src = imgLocation[0];
            break;
        case 2:
            document.getElementById("images").src = imgLocation[1];
            break;
        case 3:
            document.getElementById("images").src = imgLocation[2];
            break;
        case 4:
            document.getElementById("images").src = imgLocation[3];
            break;
        case 5:
            document.getElementById("images").src = imgLocation[4];
            break;
    }
}