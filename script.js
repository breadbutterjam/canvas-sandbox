let DECIMAL_PLACES = 5;

function Point(x,y)
{
    this.x = roundToDecimalPlaces(x);
    this.y = roundToDecimalPlaces(y);
}


function EquationOfLine(m, c)
{
    this.m = roundToDecimalPlaces(m);
    this.c = roundToDecimalPlaces(c);
}

function roundToDecimalPlaces(num, dec_places)
{
    if (dec_places === undefined)
    {
        dec_places = DECIMAL_PLACES;
    }

    return Number(num.toFixed(dec_places));
}

let canvasElem;
let contex;

//points declaration
let ptA; 
let ptB;


//equation for line AB
let eqnAB;

function onBodyLoad()
{
    //alert ("A");
    canvasElem = document.getElementById("myCanvas");
    contex = canvasElem.getContext("2d");

    AddEventListeners();
}


function AddEventListeners()
{
    canvasElem.addEventListener("click", canvasClicked);
}

function canvasClicked(event)
{
    // console.log(event)
    ptA = new Point(event.offsetX, event.offsetY);

    
    let m = Math.tan(Math.PI/6);
    let c = ptA.y - (m * ptA.x);

    eqnAB = new EquationOfLine(m, c);

    plotDot(ptA);

}
    

function plotDot(ptParam)
{
    contex.fillRect(ptParam.x, ptParam.y, 10,10);
}

function drawLine()
{
    clearCanvas();
    contex.lineTo(200, 100);
    contex.stroke();
}

function drawTriangle()
{
    clearCanvas();
    
    //let us consider 400,400 as the origin
    contex.moveTo(400,400);

    contex.lineTo(200,400)
    
    contex.lineTo(600,600);

    

}

function clearCanvas()
{
    contex.clearRect(0,0,canvasElem.width, canvasElem.height);
    contex.moveTo(0, 0);
}