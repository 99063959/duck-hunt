var duck = document.getElementById("duck");
var container = document.getElementById("container");
var countduck = 0;
var countmis = 0;
var richting = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var duckleft = 300;
var ducktop = 500;
var random;

duck.onclick = duckClicked;
container.onclick = misClicked;


function duckClicked(){
	countduck++;
	button1.innerHTML = countduck;

	if(countduck == 20){
		alert("goed gedaan");
	}
	event.stopPropogation();
}

function misClicked(){
	countmis++;
	button2.innerHTML = countmis;

	if(countmis == 20){
		alert("jammer");
	}
}

function fly(){
	random = richting [Math.floor(Math.random() * richting.length)];
	console.log(random);

	switch(random){
		
		case"N":
            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";
            break;
        

        case"NE":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";
            break;
        
        
        case"E":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";
            break;


        case"SE":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;


        case"S":
            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;


        case"W":
        	duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";
            break;


        case"SW":
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;


        case"NW":
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";
            break;
	}
}

function event(){
	setInterval(fly, 5000);
}
event();