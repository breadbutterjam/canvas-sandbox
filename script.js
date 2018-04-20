let DECIMAL_PLACES = 5;
let INNER_TRIANGLE_SIDE = 100;
let TRIANGLE_ANGLE = Math.PI / 3;


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
let ptC;

//equation for line AB
let eqnAB;

let innerTriHt;

function onBodyLoad()
{
    innerTriHt = roundToDecimalPlaces(Math.sin(TRIANGLE_ANGLE) * INNER_TRIANGLE_SIDE, 2);

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

    // plotDot(ptA);


    getPtB();
    getPtC();
    DrawLineAB();
    DrawLineBC();
    DrawLineCA();
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


function getPtC()
{
    let ptC_y = ptA.y + innerTriHt;
    let ptC_x = ptB.x + INNER_TRIANGLE_SIDE;

    ptC = new Point(ptC_x, ptC_y);
}

function getPtB()
{
    let ptB_y = ptA.y + innerTriHt;
    let ptB_x;

    let sideSquare = Math.pow(INNER_TRIANGLE_SIDE, 2);
    let htSquare = Math.pow(innerTriHt, 2);
    // ptB_x = Math.sqrt(sideSquare - htSquare) + ptA.x;
    ptB_x =  ptA.x - Math.sqrt(sideSquare - htSquare) ;
    ptB = new Point(ptB_x, ptB_y);

}

function DrawLineAB()
{
    DrawLineFromTo(ptA, ptB);
}

function DrawLineBC()
{
    DrawLineFromTo(ptB, ptC);
}

function DrawLineCA()
{
    DrawLineFromTo(ptC, ptA);
}

function DrawLineFromTo(fromPt, toPt)
{
    contex.moveTo(fromPt.x, fromPt.y);
    contex.lineTo(toPt.x, toPt.y);
    contex.stroke();
}