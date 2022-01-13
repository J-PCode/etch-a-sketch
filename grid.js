const container = document.querySelector("#container");
let colorSetup = "3";
let x = document.getElementById("myRange").value;
let start = 0;


//create grid function
function grid(x){
//pyydä yhtä lukua ja kerro itsellään sitten i = 0; i < y; i++)
    removeDiv()
    for(i = 0; i < (x*x); i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
    changeGrid(x)
}
// create grid ends here

// change grid size function
function changeGrid(x){
    console.log(x)
    container.style.setProperty("grid-template-columns", `repeat(${x}, 1fr)`);
}
// grid size function ends


//random color function starts here
function getColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    
    if(colorSetup == "1"){
        for (i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }}

    if(colorSetup == "2"){
    //to create only gray colors RGB values must be same example "R= 244 G= 244 B= 244" in hex number this is "#F4F4F4" = "whitesmoke"
    let gray = letters[Math.floor(Math.random() * 16)];
    let gray2 = letters[Math.floor(Math.random() * 16)];
    for (i = 0; i < 3; i++){
        color += gray + gray2;    
    }}
    
    if(colorSetup == "3"){
            color = document.getElementById("picker").value;
        }

    if(colorSetup == "4"){
        color = "#FFFFFF";
    }

    if(colorSetup == "5"){
        reset();
    }

   return color;
}
// removes dividers after new size of grid is selected
function removeDiv(){
    const grid = document.getElementsByClassName("grid");
    while(grid.length > 0){
        grid[0].parentNode.removeChild(grid[0])
    }
}
//removeDiv function ends here

//javascript to run after functions and variables declared

// here starts slider js
const slider = document.getElementById("myRange");
slider.oninput = function(){
    grid(this.value)
    rootJS();
}
// slider ends

function rootJS(){    
//Draw grid with selected color or basic color if not selected
const draw = document.querySelectorAll('.grid');
draw.forEach(grid => {
    grid.addEventListener('mouseenter', event => {
    event.target.style.background = getColor();
})
})
//draw grid ends

//select color and reset buttons
const button = document.querySelectorAll('button');
button.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id == 5){
            reset();
        }
        else{    
    colorSetup = button.id;
        }
})
})
//select color ends
}
//rootJS ends

function reset(){
    colorSetup = "3";
    x = "25";
    grid(x)
    start = 1;
    rootJS()
}

if(start === 0)
{
    reset()
}

//run rootJS once so i can get eventListeners working.
rootJS();

