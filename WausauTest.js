 	var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceInsideActivity").checked;
	var d = document.getElementById("choiceFeatured").checked;
	var d = document.getElementById("choicePark").checked;

/* For the selection of the city youre in */
function city() {
	var town = document.getElementById("city").value;
	document.getElementById("citySelect").innerHTML = town;
}
/* For the age range you selected */
function ageRange() {
	var age = document.getElementById("age").value;
	document.getElementById("ageRange").innerHTML = age;
}
/* For checking if the CheckBox is selected */
function checkOne() {
	var one = document.getElementById("choiceEat");
	if (one.checked == true){
		document.getElementById("checkOne").innerHTML = "Eat,"
	} else {
		document.getElementById("checkOne").innerHTML = "";
	}
}
function checkTwo() {
	var two = document.getElementById("choiceOutsideActivity");
	if (two.checked == true){
		document.getElementById("checkTwo").innerHTML = "Outdoor Activity,";
	} else {
		document.getElementById("checkTwo").innerHTML = "";
	}
}
function checkThree() {
	var three = document.getElementById("choiceInsideActivity");
	if (three.checked == true){
		document.getElementById("checkThree").innerHTML = "Indoor Activity,";
	} else {
		document.getElementById("checkThree").innerHTML = "";
	}
}
function checkFour() {
	var four = document.getElementById("choiceBar");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Bars";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
function checkFive() {
	var four = document.getElementById("choiceFeatured");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Bars";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
function checkSix() {
	var four = document.getElementById("choicePark");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Bars";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
function checkSeven() {
	var four = document.getElementById("choiceShopping");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Bars";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
function checkEight() {
	var four = document.getElementById("choiceIcecream");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Ice Cream";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
function checkNine() {
	var four = document.getElementById("choiceCoffee");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Coffee";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
/* Featured Slot MASA  (checked)*/
function featuredSlotOne() {
	var slot = document.getElementById("featuredSlotOne");
	/*  Lunch (Mon - Thur) 11am - 3pm   Dinner (Mon - Thur) 4:30pm - 10pm   (Fri & Sat) 11am - 10:30pm  (Sun) 11:30am - 9pm */
    if (((0 == day && 11 <= hour && 20 >= hour)||(1  == day  && 10 <= hour && 14 >= hour)||(1 == day  && 16 <= hour && 21 >= hour)||(2  == day  && 10 <= hour && 14 >= hour)||(2 == day  && 16 <= hour && 21 >= hour)||(3  == day  && 10 <= hour && 14 >= hour)||(3 == day  && 16 <= hour && 21 >= hour)||(4  == day  && 10 <= hour && 14 >= hour)||(4 == day  && 16 <= hour && 21 >= hour)||(5  == day && 10 <= hour && 21 >= hour)||(6  == day && 10 <= hour && 21 >= hour)) &&
		(a === "All of Wausau")&&
		(b === "18-20" || b === "21 and Over")&&
		(c >= 13)&&
		d) {
   	 	slot.classList.remove("hide");
        slot.classList.add("specificEventFeaturedMASA");
	} else {
		slot.classList.remove("specificEventFeaturedMASA");
    		slot.classList.add("hide");
    }
}
/* Humane Society of Marathon County (checked)*/
function HumaneSocietyofMarathonCounty() {
	var slot = document.getElementById("HumaneSocietyofMarathonCounty");
	/* (Mon & Tues) 12pm - 5pm  (Wed & Thurs) Closed  (Fri & Sat) 12pm - 5pm  (Sun) Closed */
	if(((1 == day && 11 <= hour && 16 >= hour)||(2 == day && 11 <= hour && 16 >= hour)||(5 == day && 11 <= hour && 16 >= hour)||(6 == day && 11 <= hour && 16 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 0)&&
		d){
	 	slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Sunnyvale Park (checked)*/
function SunnyvalePark() {
	var slot = document.getElementById("SunnyvalePark");
	/* (Everyday) 6am - 11pm */
	if((5 <= hour && 22 >= hour)&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Wausau Mine Company (checked)*/
function WausauMineCompany() {
	var slot = document.getElementById("WausauMineCompany");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Mon - Fri) 11am - 10pm   (Sat & Sun) 11am - 11pm */
	if(((0 == day && 10 <= hour && 22 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 22 >= hour)) &&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		(c >= 10)&&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* 2510 Restaurant (checked)*/
function TwentyFiveTenRestaurant() {
	var slot = document.getElementById("TwentyFiveTenRestaurant");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 9pm  (Fri & Sat) 11am - 10pm */
	if(((0 == day && 10 <= hour && 20 <= hour)||(1 == day && 10 <= hour && 20 <= hour)||(2 == day && 10 <= hour && 20 <= hour)||(3 == day && 10 <= hour && 20 <= hour)||(4 == day && 10 <= hour && 20 <= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "18-20" || b === "21 and Over")&&
		(c >= 15)&&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Milwaukee Burger (checked)*/
function MilwaukeeBurger() {
	var slot = document.getElementById("MilwaukeeBurger");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 10pm   (Fri&Sat) 11am-12am */
	if(((0 == day && 10 <= hour && 21 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 23 >= hour)||(6 == day && 10 <= hour && 23 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "18-20" || b === "21 and Over")&&
		(c >= 10)&&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Applebee's Grill & Bar (checked)*/
function ApplebeesGrillBar() {
	var slot = document.getElementById("ApplebeesGrillBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 12am   (Fri & Sat) 11am - 1am */
	if(((0 == day && 10 <= hour && 23 >= hour)||(1 == day && 10 <= hour && 23 >= hour)||(2 == day && 10 <= hour && 23 >= hour)||(3 == day && 10 <= hour && 23 >= hour)||(4 == day && 10 <= hour && 23 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 0 == hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 0 == hour)))&& 
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 10)&&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Jimmy Johns x*/
function JimmyJohns() {
	var slot = document.getElementById("JimmyJohns");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if((10 <= hour && 20 >= hour) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* McDonald's x*/
function McDonaldsWausau() {
	var slot = document.getElementById("McDonaldsWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Inside (Everyday) 5am - 11pm   Drive-Thru (Sun - Sat) 5am - 12am */
	if((4 <= hour && (23 >= hour || 0 == hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" ) &&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Subway x*/
function SubwayWausau() {
	var slot = document.getElementById("SubwayWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon - Fri) 7am - 10pm   (Sat) 8am - 10pm   (Sun) 8am - 9pm */
	if(((0 == day && 7 <= hour && 20 >= hour)||(1 == day && 6 <= hour && 21 >= hour)||(2 == day && 6 <= hour && 21 >= hour)||(3 == day && 6 <= hour && 21 >= hour)||(4 == day && 6 <= hour && 21 >= hour)||(5 == day && 6 <= hour && 21 >= hour)||(6 == day && 8 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Buffalo Wild Wings	x*/
function BuffaloWildWings() {
	var slot = document.getElementById("BuffaloWildWings");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun - Wed) 11am - 11pm   (Thur - Sat) 11am - 12am */
	if(((0 == day && 10 <= hour && 22 >= hour) || (1 == day && 10 <= hour && 22 >= hour) || (2 == day && 10 <= hour && 22 >= hour) || (3 == day && 10 <= hour && 22 >= hour) || (4 == day && 10 <= hour && 23 >= hour) || (5 == day && 10 <= hour && 23 >= hour) || (6 == day && 10 <= hour && 23 >= hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Day's Bowl-A-Dome x*/
function DaysBowlADome() {
	var slot = document.getElementById("DaysBowlADome");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* (Mon - Thur) 12pm - 8pm   (Fri & Sat) 12pm - 12am   (Sun) 12pm - 5pm*/
	if(((0 == day && 11 <= hour && 16 >= hour)||(1 == day && 11 <= hour && 20 >= hour)||(2 == day && 11 <= hour && 20 >= hour)||(3 == day && 11 <= hour && 20 >= hour)||(4 == day && 11 <= hour && 20 >= hour)||(5 == day && 11 <= hour && 23 >= hour)||(6 == day && 11 <= hour && 23 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		(d || f)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* MASA Japanese x Currenly Used as the Featured slot, Deleted button function as well
function MASAJapanese() {
	var slot = document.getElementById("DaysBowlADome");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 13 &&
		d){
		document.getElementById("m").style.display = "block";
	} else {
		document.getElementById("m").style.display = "none";
	}
} */
/* Noodle's and Company x*/
function NoodlesAndCompany() {
	var slot = document.getElementById("NoodlesAndCompany");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Sun - Wed) 11am - 9pm   (Thur - Sat) 11am - 10pm */
	if(((0 == day && 10 <= hour && 20 >= hour) || (1 == day && 10 <= hour && 20 >= hour) || (2 == day && 10 <= hour && 20 >= hour) || (3 == day && 10 <= hour && 20 >= hour) || (4 == day && 10 <= hour && 21 >= hour) || (5 == day && 10 <= hour && 21 >= hour) || (6 == day && 10 <= hour && 21 >= hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Brockmeyer Park x*/
function BrockmeyerPark() {
	var slot = document.getElementById("BrockmeyerPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var e = document.getElementById("choicePark").checked;
		/* 6am - 11pm */
	if((5 <= hour && 22 >= hour) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Vino Latte x*/
function VinoLatteWausau() {
	var slot = document.getElementById("VinoLatteWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Mon - Fri) 6am - 8pm (Sat) 7:30am - 4pm (Sun) 9am - 3pm */
	if(((0 == day && 8 <= hour && 20 >= hour) || ( 1 == day && 5 <= hour && 19 >= hour) || ( 2 == day && 5 <= hour && 19 >= hour) || ( 3 == day && 5 <= hour && 19 >= hour) || ( 4 == day && 5 <= hour && 19 >= hour) || ( 5 == day && 5 <= hour && 19 >= hour) || ( 6 == day && 7 <= hour && 16 >= hour )) && 
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Q x*/
/* Arby's x*/
function ArbysWausau() {
	var slot = document.getElementById("ArbysWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* 6:30am - 10pm */
	if((6 <= hour && 21 >= hour) && 
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Philly's Subs & Gyros x*/
function PhillysSubsGyros() {
	var slot = document.getElementById("PhillysSubsGyros");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon - Fri) 11am - 7pm (Sat) 11am - 3pm (Sun) Closed */
	if(((1 == day && 10 <= hour && 18 >= hour) || (2 == day && 10 <= hour && 18 >= hour) || (3 == day && 10 <= hour && 18 >= hour) || (4 == day && 10 <= hour && 18 >= hour) || (5 == day && 10 <= hour && 18 >= hour) || ( 6 == day && 10 <= hour && 14 >= hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Campus Pub x*/
function CampusPub() {
	var slot = document.getElementById("CampusPub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun) 12pm - 2am   (Mon - Thur) 3pm - 2am   (Fri - Sat) 12pm - 2:30am */
	if(((((0 == day && 11 <= hour && 23 >= hour) || (1 == day && 1 >= hour))) || (((1 == day && 14 <= hour && 23 >= hour) || (2 == day && 1 >= hour)))||(((2 == day && 14 <= hour && 23 >= hour)|| (3 == day && 1 >= hour))) || (((3 == day && 14 <= hour && 23 >= hour) || (4 == day && 1 >= hour))) || (	((4 == day && 14 <= hour && 23 >= hour) || (5 == day && 1 >= hour))) || (	(	(5 == day && 12 <= hour && 23 >= hour) || (6 == day && 1 >= hour))) || (((6 == day && 12 <= hour && 23 >= hour)|| (0 == day && 1 >= hour)))) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" ) &&
		c >= 15 &&
		(d || e || g)){ 
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Taco Bell x*/
function TacoBellWausau() {
	var slot = document.getElementById("TacoBellWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Sun-Thur) 7am - 1am  (Fri-Sat) 7am - 3am */
	if	((((0 == day && 6 <= hour && 23 >= hour) || (1 == day && 0 >= hour))||((1 == day && 6 <= hour && 23 >= hour)|| (2 == day && 0 >= hour))||((2 == day && 6 <= hour && 23 >= hour)|| (3 == day && 0 >= hour))||((3 == day && 6 <= hour && 23 >= hour)|| (4 == day && 0 >= hour))||((4 == day && 6 <= hour && 23 >= hour)	||(5 == day && 0 >= hour))||((5 == day && 6 <= hour && 23 >= hour)|| (6 == day && 2 >= hour))||((6 == day && 6 <= hour && 23 >= hour)|| (0 == day && 2 >= hour))) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d) {
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Cruisin 1724 x*/
function CruisinSeventeenTwentyFour() {
	var slot = document.getElementById("CruisinSeventeenTwentyFour");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon-Thur) 3pm-2am (Fri) 3pm-2:30am (Sat) 12pm-2:30am (Sun) 12pm-2am */
	if((((0 == day && 11 <= hour && 23 >= hour) || (1 == day && 1 >= hour))||((1 == day && 2 <= hour && 23 >= hour)|| (2 == day && 1 >= hour))||((2 == day && 2 <= hour && 23 >= hour)|| (3 == day && 1 >= hour))||((3 == day && 2 <= hour && 23 >= hour)|| (4 == day && 1 >= hour))||((4 == day && 2 <= hour && 23 >= hour)|| (5 == day && 1 >= hour))|| ((5 == day && 2 <= hour && 23 >= hour)|| (6 == day && 2 >= hour))||((6 == day && 11 <= hour && 23 >= hour)|| (0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Sawadee Thai Restaurant x*/
function SawadeeThaiRestaurant() {
	var slot = document.getElementById("SawadeeThaiRestaurnat");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Hours (Sun - Thurs) 11am - 8pm   (Fri - Sat) 11am - 9pm */
	if(((0 == day && 10 <= hour && 19 >= hour)||(1 == day && 10 <= hour && 19 >= hour)||(2 == day && 10 <= hour && 19 >= hour)||(3 == day && 10 <= hour && 19 >= hour)||(4 == day && 10 <= hour && 19 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Opa! Gyros x*/
function OpaGyros() {
	var slot = document.getElementById("OpaGyros");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon-Sat) 11am-8pm */
	if((( 1 == day && 10 <= hour && 19 >= hour )||( 2 == day && 10 <= hour && 19 >= hour )||( 3 == day && 10 <= hour && 19 >= hour )||( 4 == day && 10 <= hour && 19 >= hour )||( 5 == day && 10 <= hour && 19 >= hour )||( 6 == day && 10 <= hour && 19 >= hour )) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Briq's Soft Serve x*/
function BriqsSoftServeWausau() {
	var slot = document.getElementById("BriqsSoftServeWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* (Sun-Thur) 10am-10pm (Fri & Sat) 10am-11pm */
	if((( 0 == day && 9 <= hour && 19 >= hour)||( 1 == day && 9 <= hour && 19 >= hour)||( 2 == day && 9 <= hour && 19 >= hour)||( 3 == day && 9 <= hour && 19 >= hour)||( 4 == day && 9 <= hour && 19 >= hour )||( 5 == day && 9 <= hour && 20 >= hour )||( 6 == day && 9 <= hour && 20 >= hour )) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		(d || e)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Monk Botanical Gardens x*/
function MonkBotanicalGardens() {
	var slot = document.getElementById("MonkBotanicalGardens");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Everyday Dusk til Dawn */
	if(( 6 <= hour && 20 >= hour )&& 
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Schofield Park x*/
function SchofieldPark() {
	var slot = document.getElementById("SchofieldPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* (Everyday) 6am-11pm*/
	if(( 5 <= hour && 22 >= hour )&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Aftershock Bar x*/
function AftershockBar() {
	var slot = document.getElementById("AftershockBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun) 12pm-9pm (Mon & Tues) 2pm-12am (Wed & Thurs) 2pm-1am (Fri) 2pm-2:30am (Sat) 12pm-2:30am */
	if((( 0 == day && 11 <= hour && 20 >= hour ) ||( 1 == day && 13 <= hour && 23 >= hour ) ||( 2 == day && 13 <= hour && 23 >= hour ) || ( ( 3 == day && 13 <= hour && 23 >= hour ) || ( 4 == day && 0 == hour ) )||(( 4 == day && 13 <= hour && 23 >= hour ) ||( 5 == day && 0 == hour ))||(( 5 == day && 13 <= hour && 23 >= hour )||( 6 == day && 1 >= hour ))||(( 6 == day && 11 <= hour && 23 >= hour )||( 0 == day && 1 >= hour )))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Schulenberg Park x*/
function SchulenbergPark() {
	var slot = document.getElementById("SchulenbergPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* (Everyday) 1pm-7:45pm */
	if(( 12 <= hour && 19 >= hour )&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* A & W x*/
function AAndW() {
	var slot = document.getElementById("AAndW");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon - Sat) 10am-10pm (Sun) 11am-9pm */ 
	if((( 0 == day && 10 <= hour && 20 >= hour )||( 1 == day && 9 <= hour && 21 >= hour )||( 2 == day && 9 <= hour && 21 >= hour )|| ( 3 == day && 9 <= hour && 21 >= hour )||( 4 == day && 9 <= hour && 21 >= hour )|| ( 5 == day && 9 <= hour && 21 >= hour )||( 6 == day && 9 <= hour && 21 >= hour ))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Blue Willow Cafe x*/
function BlueWillowCafe() {
	var slot = document.getElementById("BlueWillowCafe");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if((5 <= hour && 21 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d)
	{
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* AF x */
/* AG */
/* Culvers x*/
function CulversWausau() {
	var slot = document.getElementById("CulversWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceIcecream").checked;
	if((9 <= hour & 21 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		(d || e)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* County Coin and Collectibles x*/
function CountyCoinAndCollectibles() {
	var slot = document.getElementById("CountyCoinAndCollectibles");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceShopping").checked;
	/* Mon-Thurs 8am-3pm Fri 8am-12pm Sat & Sun Closed */
	if(((1 == day && 7 <= hour && 14 >= hour) ||(2 == day && 7 <= hour && 14 >= hour) ||(3 == day && 7 <= hour && 14 >= hour) ||(4 == day && 7 <= hour && 14 >= hour) ||(5 == day && 7 <= hour && 11 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Jemma's Cafe x*/
function JemmasCafe() {
	var slot = document.getElementById("JemmasCafe");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceIcecream").checked;
	/* Mon 10:30am-3pm Tues-Thurs 10:30am-8pm Fri&Sat 10:30-9pm Sun (closed)*/
	if((( 1 == day && 9 <= hour && 14 >= hour)||( 2 == day && 9 <= hour && 19 >= hour)||( 3 == day && 9 <= hour && 19 >= hour)||( 4 == day && 9 <= hour && 19 >= hour)|| ( 5 == day && 9 <= hour && 20 >= hour)||( 6 == day && 9 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		(d || e)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bethesda Thrift Shop x*/
function BethesdaThriftShop() {
	var slot = document.getElementById("BethesdaThriftShop");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon&Thur 10am-6pm Tues-Wed&Fri 10am-5pm Sat 11am-4pm Sun closed */
	if(((1 == day && 9 <= hour && 17 >= hour) ||(2 == day && 9 <= hour && 16 >= hour) ||(3 == day && 9 <= hour && 16 >= hour) || (4 == day && 9 <= hour && 17 >= hour) || (5 == day && 9 <= hour && 16 >= hour) ||(6 == day && 10 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Liberty Bell Coin Investments x*/
function LibertyBellCoinInvestments() {
	var slot = document.getElementById("LibertyBellCoinInvestments");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10:30am-1:30pm  */
	if(	((1 == day && 9 <= hour && 16 >= hour)||(2 == day && 9 <= hour && 16 >= hour)||(3 == day && 9 <= hour && 16 >= hour)||(4 == day && 9 <= hour && 16 >= hour)||(5 == day && 9 <= hour && 16 >= hour)||(6 == day && 10 <= hour && 12 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* 101 Pub x*/
function OneohOnePub() {
	var slot = document.getElementById("OneohOnePub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Thurs 8am-2am Fri&Sat 8am-2:30am */
	if((((0 == day && 7 <= hour && 23 >= hour)||(1 == day && 1 >= hour))||((1 == day && 7 <= hour && 23 >= hour)||(2 == day && 1 >= hour))||((2 == day && 7 <= hour && 23 >= hour)||(3 == day && 1 >= hour))||((3 == day && 7 <= hour && 23 >= hour)||(4 == day && 1 >= hour))||((4 == day && 7 <= hour && 23 >= hour)||(5 == day && 1 >= hour))||((5 == day && 7 <= hour && 23 >=hour)||(6 == day && 1 >= hour))||((6 == day && 7 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	     b === "21 and Over"  &&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* AN x*/
/* The Glass Station x*/
function TheGlassStation() {
	var slot = document.getElementById("TheGlassStation");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 11am-5pm Mon-Fri 9am-8pm Sat 10am-8pm */
	if(((0 == day && 10 <= hour && 16 >= hour)||(1 == day && 8 <= hour && 19 >= hour)||(2 == day && 8 <= hour && 19 >= hour)||(3 == day && 8 <= hour && 19 >= hour)||(4 == day && 8 <= hour && 19 >= hour)||(5 == day && 8 <= hour && 19 >= hour)||(6 == day && 9 <= hour && 19 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* AP x*/
/* Sams Pizza of Wausau x*/
function SamsPizzaOfWausau() {
	var slot = document.getElementById("SamsPizzaOfWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 3pm-10pm Fri 3pm-11pm Sat 11am-11pm */
	if(((0 == day && 14 <= hour && 21 >= hour)||(1 == day && 14 <= hour && 21 >= hour)||(2 == day && 14 <= hour && 21 >= hour)||(3 == day && 14 <= hour && 21 >= hour)||(4 == day && 14 <= hour && 21 >= hour)||(5 == day && 14 <= hour && 22 >= hour)||(6 == day && 10 <= hour && 22 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Eastbay x*/
function Eastbay() {
	var slot = document.getElementById("Eastbay");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 11am-5pm Mon-Fri 10am-8pm Sat 9am-5pm */
	if(((0 == day && 10 <= hour && 16 >= hour)||(1 == day && 9 <= hour && 19 >= hour)||(2 == day && 9 <= hour && 19 >= hour)||(3 == day && 9 <= hour && 19 >= hour)||(4 == day && 9 <= hour && 19 >= hour)||(5 == day && 9 <= hour && 19 >= hour)||(6 == day && 8 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* AS */
/* Mandarine Chinese Restaurant x*/
function MandarineChineseRestaurant() {
	var slot = document.getElementById("MandarineChineseRestaurant");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Fri 11am-2:30pm & 4pm-9pm Sat 11am-9pm */
	if((((1 == day && 10 <= hour && 13 >= hour) || (1 == day && 15 <= hour && 20 >= hour))||((2 == day && 10 <= hour && 13 >= hour) || (2 == day && 15 <= hour && 20 >= hour))||((3 == day && 10 <= hour && 13 >= hour) || (3 == day && 15 <= hour && 20 >= hour))||((4 == day && 10 <= hour && 13 >= hour) || (4 == day && 15 <= hour && 20 >= hour))||((5 == day && 10 <= hour && 13 >= hour) || (5 == day && 15 <= hour && 20 >= hour))||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* October Guitar x*/
function OctoberGuitar() {
	var slot = document.getElementById("OctoberGuitar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Tues-Fri 10:30am-6pm Sat 10:30am 3:30pm */
	if(((2 == day && 10 <= hour && 17 >= hour)||(3 == day && 10 <= hour && 17 >= hour)||(4 == day && 10 <= hour && 17 >= hour)||(5 == day && 10 <= hour && 17 >= hour)||(6 == day && 10 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Quilting Workshop x*/
function QuiltingWorkshop() {
	var slot = document.getElementById("QuiltingWorkshop");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10am-4pm */
	if(((1 == day && 9 <= hour && 16 >= hour)||(2 == day && 9 <= hour && 16 >= hour)||(3 == day && 9 <= hour && 16 >= hour)||(4 == day && 9 <= hour && 16 >= hour)||(5 == day && 9 <= hour && 16 >= hour)||(6 == day && 9 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Lavender & Lace Antiques x*/
function LavenderAndLaceAntiques() {
	var slot = document.getElementById("LavenderAndLaceAntiques");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Tues-Fri 11am-5pm Sat 10am-3pm */
	if(((2 == day && 10 <= hour && 16 >= hour)||(3 == day && 10 <= hour && 16 >= hour)||(4 == day && 10 <= hour && 16 >= hour)||(5 == day && 10 <= hour && 16 >= hour)||(6 == day && 9 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dominos Pizza x*/
function DominosPizzaWausau() {
	var slot = document.getElementById("DominosPizzaWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 10:30am-12am Fri-Sat 10:30-2am */
	if(((0 == day && 10 <= hour && 23 >= hour)||(1 == day && 10 <= hour && 23 >= hour)||(2 == day && 10 <= hour && 23 >= hour)|| (3 == day && 10 <= hour && 23 >= hour)||(4 == day && 10 <= hour && 23 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Navieve Fromagerie x*/
function NavieveFromagerie() {
	var slot = document.getElementById("NavieveFromagerie");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Tues-Fri 10am-6pm Sat 9am-3pm */
	if(((2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 17 >= hour)||(6 == day && 9 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KFC x*/
function KFCWausau() {
	var slot = document.getElementById("KFCWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();	
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun 11am-9pm Mon-Sat 11am-10pm */
	if(((0 == day && 10 <= hour && 20 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* River District Antique Mall x*/
function RiverDisctrictAntiqueMall() {
	var slot = document.getElementById("RiverDistrictAntiqueMall");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Tues-Sat 10am-4pm */
	if(((2 == day && 9 <= hour && 15 >= hour)||(3 == day && 9 <= hour && 15 >= hour)|| (4 == day && 9 <= hour && 15 >= hour)||(5 == day && 9 <= hour && 15 >= hour)||(6 == day && 9 <= hour && 15 >= hour)
		)&&
		(a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dime & Dollar Thrift Store x*/
function DimeAndDollarThriftStore() {
	var slot = document.getElementById("DimeAndDollarThriftStore");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon 10am-7pm Tues-Sat 10am-4pm */
	if(((1 == day && 9 <= hour && 18 >= hour)||(2 == day && 9 <= hour && 15 >= hour)||(3 == day && 9 <= hour && 15 >= hour)||(4 == day && 9 <= hour && 15 >= hour)||(5 == day && 9 <= hour && 15 >= hour)||(6 == day && 9 <= hour && 15 >= hour)
		)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* BC x*/
/* Reservoir Park x*/
function ReservoirPark() {
	var slot = document.getElementById("ReservoirPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Starbucks x*/
function StarbucksWausau() {
	var slot = document.getElementById("StarbucksWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	/* Sun-Thurs 5:30am-9pm Fri&Sat 5:30am-10pm */
	if(((0 == day && 5 <= hour && 20 >= hour)||(1 == day && 5 <= hour && 20 >= hour)||(2 == day && 5 <= hour && 20 >= hour)||(3 == day && 5 <= hour && 20 >= hour)||(4 == day && 5 <= hour && 20 >= hour)||(5 == day && 5 <= hour && 21 >= hour)||(6 == day && 5 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* King Buffet x*/
function KingBuffet() {
	var slot = document.getElementById("KingBuffet");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 11am-9pm */
	if((10 <= hour && 20 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Royal Nails & Spa x*/
function RoyalNailsAndSpa() {
	var slot = document.getElementById("RoyalNailsAndSpa");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Sun 10am-5pm Mon-Fri 9am-7pm Sat 9am-9pm */
	if(((0 == day && 9 <= hour && 16 >= hour)||(1 == day && 8 <= hour && 18 >= hour)||(2 == day && 8 <= hour && 18 >= hour)||(3 == day && 8 <= hour && 18 >= hour)||(4 == day && 8 <= hour && 18 >= hour)||(5 == day && 8 <= hour && 18 >= hour)||(6 == day && 8 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* BH x*/
/* La Taqueria x*/
function LaTaqueria() {
	var slot = document.getElementById("LaTaqueria");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun 10:30pm-8pm Mon Closed Tues-Thurs 11am-9pm Fri& Sat 11am-10pm*/
	if(((0 == day && 10 <= hour && 19 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 20 >= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Great Dane x*/
function GreatDane() {
	var slot = document.getElementById("GreatDane");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Thurs 11am-12am Fri & Sat 11am-2:30am */
	if(
		(
			(0 == day && 10 <= hour && 23 >= hour)||
			(1 == day && 10 <= hour && 23 >= hour)||
			(2 == day && 10 <= hour && 23 >= hour)||
			(3 == day && 10 <= hour && 23 >= hour)||
			(4 == day && 10 <= hour && 23 >= hour)||
			(
				(5 == day && 10 <= hour && 23 >= hour)||
				(6 == day && 1 >= hour)
			)||
			(
				(6 == day && 10 <= hour && 23 >= hour)||
				(0 == day && 1 >= hour)
			)
			)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 25 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* BK x*/
/* Treu's Tic Toc Club x*/
function TreusTicTocClub() {
	var slot = document.getElementById("TreusTicTocClub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Everyday 11am-2am */
	if(((1 >= hour)||(10 <= hour && 23 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 7 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Marathon Park x*/
function MarathonPark() {
	var slot = document.getElementById("MarathonPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Red Apple Family Restraurant x*/
function TheRedAppleFamilyRestaurant() {
	var slot = document.getElementById("TheRedAppleFamilyRestaurant");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 6am-8pm Fri&Sat 6am-10pm */
	if(((0 == day && 5 <= hour && 19 >= hour)||(1 == day && 5 <= hour && 19 >= hour)||(2 == day && 5 <= hour && 19 >= hour)||(3 == day && 5 <= hour && 19 >= hour)||(4 == day && 5 <= hour && 19 >= hour)||(5 == day && 5 <= hour && 21 >= hour)||(6 == day && 5 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Rice's Antiques & Architechtural Salvage x*/
function RicesAntiquesAndArchitechturalSalvage() {
	var slot = document.getElementById("RicesAntiquesAndArchitechturalSalvage");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun&Mon 9am-5pm Tues-Thurs Closed Fri 10am-5pm Sat 9am-5pm */
	if(((0 == day && 8 <= hour && 16 >= hour)||(1 == day && 8 <= hour && 16 >= hour)||(5 == day && 9 <= hour && 16 <= hour)||(6 == day && 8 <= hour && 16 <= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Riverside Park x*/
function RiversidePark() {
	var slot = document.getElementById("RiversidePark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 <= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hmong Eggroll x*/
function HmongEggroll() {
	var slot = document.getElementById("HmongEggroll");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Wed-Mon 10:30am-7pm */ 
	if(((0 == day && 10 <= hour && 18 >= hour)||(1 == day && 10 <= hour && 18 >= hour)||(3 == day && 10 <= hour && 18 >= hour)||(4 == day && 10 <= hour && 18 >= hour)||(5 == day && 10 <= hour && 18 >= hour)||(6 == day && 10 <= hour && 18 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* BR x*/
/* BS x*/
/* BT x*/
/* Lil Devil's Glass x*/
function LilDevilsGlass() {
	var slot = document.getElementById("LilDevilsGlass");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 9am-9pm Mon-Sat 9am-10pm */
	if(((0 == day && 8 <= hour && 20 >= hour)||(1 == day && 8 <= hour && 21 >= hour)||(2 == day && 8 <= hour && 21 >= hour)||(3 == day && 8 <= hour && 21 >= hour)||(4 == day && 8 <= hour && 21 >= hour)||(5 == day && 8 <= hour && 21 >= hour)||(6 == day && 8 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* St. Vincent De Paul of Wausau x*/
function StVincentDePaulOfWausau() {
	var slot = document.getElementById("StVincentDePaulOfWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon 9am-8pm Tues-Fri 9am-5pm Sat 9am-4pm */
	if(((1 == day && 8 <= hour && 19 >= hour)||(2 == day && 8 <= hour && 16 >= hour)||(3 == day && 8 <= hour && 16 >= hour)||(4 == day && 8 <= hour && 16 >= hour)||(5 == day && 8 <= hour && 16 >= hour)||(6 == day && 8 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dairy Queen Store x*/
function DairyQueenStore() {
	var slot = document.getElementById("DairyQueenStore");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun 12pm-9pm Mon-Sat 11am-9pm */
	if(((0 == day && 11 <= hour && 20 >= hour)||(1 == day && 10 <= hour && 20 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 20 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Central Wisconsin Water Walkers x*/
function CentralWisconsinWaterWalkers() {
	var slot = document.getElementById("CentralWisconsinWaterWalkers");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* DC Everest Country Park x*/
function DCEverestCountryPark() {
	var slot = document.getElementById("DCEverestCountryPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Three "M" Park x*/
function ThreeMPark() {
	var slot = document.getElementById("ThreeMPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Lumpy's x*/
function Lumpys() {
	var slot = document.getElementById("Lumpys");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Everyday 11am-2:30am */
	if(((1 >= hour)||(10 <= hour && 23 >=hour)) &&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 20 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CB x*/
/* CC x*/
/* CD x*/
/* BB Jack's Pizza and Sandwich Lounge x*/
function BBJacksPizzaAndSandwichLounge() {
	var slot = document.getElementById("BBJacksPizzaAndSandwichLounge");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/*Sun 9am-10pm Mon-Sat 11am-11pm */
	if(((0 == day && 8 <= hour && 21 >= hour)||(1 == day && 10 <= hour && 22 >= hour)||(2 == day && 10 <= hour && 22 >= hour)||(3 == day && 10 <= hour && 22 >= hour)||(4 == day && 10 <= hour && 22 >= hour)||(5 == day && 10 <= hour && 22 >= hour)||(6 == day && 10 <= hour && 22 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CF x*/
/* Sylvan Hill Park x*/
function SylvanHillPark() {
	var slot = document.getElementById("SylvanHillPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked
	/* Everyday 6am-11pm */
	if((6 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Lucky's Eastside Pub x*/
function LuckysEastsidePub() {
	var slot = document.getElementById("LuckysEastsidePub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Thurs 7am-2am Fri&Sat 7am-2:30am */
	if(((( 6 <= hour && 23 >= hour)||(1 >=hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Gilbert Park x*/
function GilbertPark() {
	var slot = document.getElementById("GilbertPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >=hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* River Edge Walkway x*/
function RiverEdgeWalkway() {
	var slot = document.getElementById("RiverEdgeWalkway");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wausau Music Center x*/
function WausauMusicCenter() {
	var slot = document.getElementById("WausauMusicCenter");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceShopping").checked;
	/* Mon-Thurs 10am-6pm Fri 10am-5pm */
	if(((1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Divepoint Scuba Paddle & Adventure Center x*/
function DivepointScubaPaddleAndAdventureCenter() {
	var slot = document.getElementById("DivepointScubaPaddleAndAdventureCenter");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Sun 10am-3pm Mon-Thurs 10am-6pm Fri 9am-7pm Sat 9am-3pm */
	if(((0 == day && 9 <= hour && 14 >= hour)||(1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 8 <= hour && 18 >= hour)||(6 == day && 8 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Thrive Foodery x*/
function ThriveFoodery() {
	var slot = document.getElementById("ThriveFoodery");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Sat 11am-10pm */
	if(((1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CN x*/
/* Kaiser Pool x*/
function KaiserPool() {
	var slot = document.getElementById("KaiserPool");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Mon&Tues 1pm-7:50pm Wed 1pm-8pm Thurs-Sun 1pm-7:50pm */
	if((13 <= hour && 19 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bob & Randy's Bar x*/
function BobAndRandysBar() {
	var slot = document.getElementById("BobAndRandysBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Thurs 7am-2am Fri&Sat 7am-2:30am */
	if(((6 <= hour && 23 >= hour)||(1 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 10 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Sixth Street Filling Station x*/
function SixthStreetFillingStation() {
	var slot = document.getElementById("SixthStreetFillingStation");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Tues-Sun 6:30am-2pm */
	if(((0 == day && 6 <= hour && 13 >= hour)||(2 == day && 6 <= hour && 13 >= hour)||(3 == day && 6 <= hour && 13 >= hour)||(4 == day && 6 <= hour && 13 >= hour)||(5 == day && 6 <= hour && 13 >= hour)||(6 == day && 6 <= hour && 13 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Loppnow's Bar x*/
function LoppnowsBar() {
	var slot = document.getElementById("LoppnowsBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Everyday 12pm-2:30am */
	if(((11 <= hour && 23 >= hour)||(1 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CS x*/
/* CT x*/
/* Subway x*/
function SubwayWausauTwo() {
	var slot = document.getElementById("SubwayWausauTwo");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Fri 7am-10pm Sat&Sun 8am-9pm */
	if(((0 == day && 7 <= hour && 20 >= hour)||(1 == day && 6 <= hour && 21 >= hour)||(2 == day && 6 <= hour && 21 >= hour)||(3 == day && 6 <= hour && 21 >= hour)||(4 == day && 6 <= hour && 21 >= hour)||(5 == day && 6 <= hour && 21 >= hour)||(6 == day && 7 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CV x*/
/* Wausau on Water  x*/
function WausauOnWater() {
	var slot = document.getElementById("WausauOnWater");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceInsideActivity").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Thurs 11am-10pm Fri&Sat 11am-12am */
	if(((0 == day && 10 <= hour && 21 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 23 >= hour)||(6 == day && 10 <= hour && 23 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		(d || e || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CX x*/
/* Black Purl x*/
function BlackPurl() {
	var slot = document.getElementById("BlackPurl");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceShopping").checked;
	/* Tues-Fri 10am-5pm Sat 10am-3pm */
	if(((2 == day && 9 <= hour && 16 >= hour)||(3 == day && 9 <= hour && 16 >= hour)||(4 == day && 9 <= hour && 16 >= hour)||(5 == day && 9 <= hour && 16 >= hour)||(6 == day && 9 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Glass Hat x*/
function TheGlassHat() {
	var slot = document.getElementById("TheGlassHat");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Tues-Thurs 5pm-2am Fri&Sat 5pm-2:30 */
	if((((2 == day && 16 <= hour && 23 >= hour)||(3 == day && 1 >= hour))||((3 == day & 16 <= hour && 23 >= hour)||(4 == day && 1 >= hour))||((4 == day && 16 <= hour && 23 >= hour)||(5 == day && 1 >= hour))||((5 == day && 16 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((5 == day && 16 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 16 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Angelo's Family Pizzeria x*/
function AngelosFamilyPizzeria(){
	var slot = document.getElementById("AngelosFamilyPizzeria");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun&Mon 4pm-10pm Tues-Thurs 4pm-11pm Fri 4pm-12am Sat 4pm-11pm */
	if(((0 == day && 15 <= hour && 21 >= hour)||(1 == day && 15 <= hour && 21 >= hour)||(2 == day && 15 <= hour && 22 >= hour)||(3 == day && 15 <= hour && 22 >= hour)||(4 == day && 15 <= hour && 22 >= hour)||(5 == day && 15 <= hour && 23 >= hour)||(6 == day && 15 <= hour && 22 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hope Thrift Store x*/
function HopeThriftStore() {
	var slot = document.getElementById("HopeThriftStore");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Sat 10am-6pm */
	if(	((1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 17 >= hour)||(6 == day && 9 <= hour && 17 >= hour))&&	
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* DC x*/
/* DD x*/
/* Marathon County Historical Society x*/
function MarathonCountyHistoricalSociety() {
	var slot = document.getElementById("MarathonCountyHistoricalSociety");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9 am-4:30pm Sat&Sun 1pm-4:30pm */
	if(((0 == day && 12 <= hour && 15 >= hour)||(2 == day && 8 <= hour && 15 >= hour)||(3 == day && 8 <= hour && 15 >= hour)||(4 == day && 8 <= hour && 15 >= hour)||(5 == day && 8 <= hour && 15 >= hour )||(6 == day && 12 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Yawkey House Museum x*/
function YawkeyHouseMuseum() {
	var slot = document.getElementById("YawkeyHouseMuseum");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9am-4:30pm Sat&Sun 1pm-4:30pm */
	if(((0 == day && 12 <= hour && 15 >= hour)||(2 == day && 8 <= hour && 15 >= hour)||(3 == day && 8 <= hour && 15 >= hour)||(4 == day && 8 <= hour && 15 >= hour)||(5 == day && 8 <= hour && 15 >= hour)||(6 == day && 12 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Barker-Stewart Island Park x*/
function BarkerStewartIslandPark() {
	var slot = document.getElementById("BarkerStewartIslandPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Big Bull Falls Park x*/
function BigBullFallsPark() {
	var slot = document.getElementById("BigBullFallsPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Evolution In Design x*/
function EvolutionInDesign() {
	var slot = document.getElementById("EvolutionInDesign");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 8am-6pm Sat 9m-3pm */
	if(((1 == day && 7 <= hour && 17 >= hour)||(2 == day && 7 <= hour && 17 >= hour)||(3 == day && 7 <= hour && 17 >= hour)||(4 == day && 7 <= hour && 17 >= hour)||(5 == day && 7 <= hour && 17 >= hour)||(6 == day && 8 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Nichole's Boutique x*/
function NicholesBoutique() {
	var slot = document.getElementById("NicholesBoutique");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value;
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceShopping").checked;
	/* Mon-Wed 10am-6pm Thur&Fri 10am-7pm Sat 10am-6pm */
	if(((1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 18 >= hour)||(5 == day && 9 <= hour && 18 >= hour)||(6 == day && 9 <= hour && 17 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Back When Cafe x*/
function BackWhenCafe() {
	var slot = document.getElementById("BackWhenCafe");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Tues-Sat 5pm-10pm */
	if(((2 == day && 16 <= hour && 21 >= hour)||(3 == day && 16 <= hour && 21 >= hour)||(4 == day && 16 <= hour && 21 >= hour)||(5 == day && 16 <= hour && 21 >= hour)||(6 == day && 16 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Sweets on Third x*/
function SweetsOnThird() {
	var slot = document.getElementById("SweetsOnThird");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	/* Sun 9pm-5pm Mon-Sat 9am-7pm */
	if(((0 == day && 8 <= hour && 16 >= hour)||(1 == day && 8 <= hour && 18 >= hour)||(2 == day && 8 <= hour && 18 >= hour)||(3 == day && 8 <= hour && 18 >= hour)||(4 == day && 8 <= hour && 18 >= hour)||(5 == day && 8 <= hour && 18 >= hour)||(6 == day && 8 <= hour && 18 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* La Prima x*/
function LaPrima() {
	var slot = document.getElementById("LaPrima");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Fri 7am-6pm Sat 8am-4pm */
	if(((1 == day && 6 <= hour && 17 >= hour)||(2 == day && 6 <= hour && 17 >= hour)||(3 == day && 6 <= hour && 17 >= hour)||(4 == day && 6 <= hour && 17 >= hour)||(5 == day && 6 <= hour && 17 >= hour)||(6 == day && 7 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wausau Museum of Contemporary Art x*/
function WausauMuseumOfContemporaryArt() {
	var slot = document.getElementById("WausauMuseumOfContemporaryArt");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Tues-Sat 12pm-5pm */
	if(((2 == day && 11 <= hour && 16 >= hour)||(3 == day && 11 <= hour && 16 >= hour)||(4 == day && 11 <= hour && 16 >= hour)||(5 == day && 11 <= hour && 16 >= hour)||(6 == day && 11 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Janke Book Store x*/
function JankeBookStore () {
	var slot = document.getElementById("JankeBookStore");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 9am-6pm Sat 9am-5pm */
	if(((1 == day && 8 <= hour && 17 >= hour)||(2 == day && 8 <= hour && 17 >= hour)||(3 == day && 8 <= hour && 17 >= hour)||(4 == day && 8 <= hour && 17 >= hour)||(5 == day && 8 <= hour && 17 >= hour)||(6 == day && 8 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Shepherd & Schaller Sporting x*/
function ShepherdAndSchallerSporting() {
	var slot = document.getElementById("ShepherdAndSchallerSporting");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Wed 9am-6pm Thurs&Fri 9am-8pm Sat 9am-5pm */
	if(((1 == day && 8 <= hour && 17 >= hour)||(2 == day && 8 <= hour && 17 >= hour)||(3 == day && 8 <= hour && 17 >= hour)||(4 == day && 8 <= hour && 19 >= hour)||(5 == day && 8 <= hour && 19 >= hour)||(6 == day && 8 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Leigh Yawkey Woodson Art Museum x*/
function LeighYawkeyWoodsonArtMuseum() {
	var slot = document.getElementById("LeighYawkeyWoodsonArtMuseum");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9am-4pm Sat&Sun 12pm-5pm */
	if(((0 == day && 11 <= hour && 16 >= hour)||(2 == day && 8 <= hour && 15 >= hour)||(3 == day && 8 <= hour && 15 >= hour)||(4 == day && 8 <= hour && 15 >= hour)||(5 == day && 8 <= hour && 15 >= hour)||(6 == day && 11 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Grand Theater x*/
function TheGrandTheater() {
	var slot = document.getElementById("TheGrandTheater");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Erbert and Gerbert's x*/
function ErbertAndGerberts() {
	var slot = document.getElementById("ErbertAndGerberts");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Thurs 10:30am-10pm Fri&Sat 10:30am-2:30am Sun 11am-10pm */
	if(((0 == day && 10 <= hour && 21 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Intermission x*/
function Intermission() {
	var slot = document.getElementById("Intermission");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Mon-Thurs 2pm-2am Fri 11am-2am Sat 11am-4pm */
	if((((1 == day && 13 <= hour && 23 >= hour)||(2 == day && 1 >= hour))||((2 == day && 13 <= hour && 23 >= hour)||(3 == day && 1 >= hour))||((3 == day && 13 <= hour && 23 >= hour)||(4 == day && 1 >= hour))||((4 == day && 13 <= hour && 23 >= hour)||(5 == day && 1 >= hour))||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||(6 == day && 10 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* DU x*/
/* Poppy's Boutique x*/
function PoppysBoutique() {
	var slot = document.getElementById("PoppysBoutique");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Wed-Fri 12pm-6pm Sat 11am-4pm */
	if(((3 == day && 11 <= hour && 17 >= hour)||(4 == day && 11 <= hour && 17 >= hour)||(5 == day && 11 <= hour && 17 >= hour)||(6 == day && 10 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Polito's Pizza x*/
function PolitosPizzaWausau() {
	var slot = document.getElementById("PolitosPizzaWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri 11am-11pm Sat 11am-10pm Sun 11am-8pm */
	if(((0 == day && 10 <= hour && 19 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 22 >= hour)||(6 == day && 9 <= hour && 21 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Daly's x*/
function Dalys() {
	var slot = document.getElementById("Dalys");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri&Sat 3pm-12am */
	if(((1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 14 <= hour && 23 >= hour)||(6 == day && 14 <= hour && 23 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* DY x*/
/* Jalapenos Mexican Restaurante Bar x*/
function JalapenosMexicanRestauranteBar() {
	var slot = document.getElementById("JalapenosMexicanRestauranteBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Mon-Thurs 11am-9pm Fri&Sat 11am-2am */
	if(((1 == day && 10 <= hour && 20 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 20 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Issac's Fine Appearel Inc.  x*/
function IssacsFineAppearelInc() {
	var slot = document.getElementById("IssacsFineAppearelInc");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10am-4pm */
	if(((1 == day && 9 <= hour && 16 >= hour)||(2 == day && 9 <= hour && 16 >= hour)||(3 == day && 9 <= hour && 16 >= hour)||(4 == day && 9 <= hour && 16 >= hour)||(5 == day && 9 <= hour && 16 >= hour)||(6 == day && 9 <= hour && 15 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* EB x*/
/* EC x*/
/* ED x*/
/* City Grill x*/
function CityGrill() {
	var slot = document.getElementById("CityGrill");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri&Sat 11am-11pm */
	if(((1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 22 >= hour)||(6 == day && 10 <= hour && 22 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Malarkey's Pub & townies Grill x*/
function MalarkeysPubAndTowniesGrill() {
	var slot = document.getElementById("MalarkeysPubAndTowniesGrill");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Sun 10am-3pm Tues-Sat 11am-9pm */
	if(((0 == day && 9 <= hour && 14 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 20 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Central Board shop x*/
function CentralBoardShop() {
	var slot = document.getElementById("CentralBoardShop");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 12pm-5pm Mon-Fri 11am-8pm Sat 11am-6pm */
	if(((0 == day && 11 <= hour && 16 >= hour)||(1 == day && 10 <= hour && 19 >= hour)||(2 == day && 10 <= hour && 19 >= hour)||(3 == day && 10 <= hour && 19 >= hour)||(4 == day && 10 <= hour && 19 >= hour)||(5 == day && 10 <= hour && 19 >= hour)||(6 == day && 10 <= hour && 17 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Antiques by Ginny x*/
function AntiquesByGinny() {
	var slot = document.getElementById("AntiquesByGinny");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var f = document.getElementById("choiceShopping").checked;
	/* Tues-Fri 11:30am-4:30pm Sat 10am-3pm */
	if(((2 == day && 11 <= hour && 15 >= hour)||(3 == day && 11 <= hour && 15 >= hour)||(4 == day && 11 <= hour && 15 >= hour)||(5 == day && 11 <= hour && 15 >= hour)||(6 == day && 9 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Local x*/
function TheLocal() {
	var slot = document.getElementById("TheLocal");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 11am-3pm Tues-Sat 10am-5:30pm */ 
	if(((0 == day && 10 <= hour && 14 >= hour)||(2 == day && 10 <= hour && 16 >= hour)||(3 == day && 10 <= hour && 16 >= hour)||(4 == day && 10 <= hour && 16 >= hour)||(5 == day && 10 <= hour && 16 >= hour)||(6 == day && 10 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Mint Cafe x*/
function TheMintCafe() {
	var slot = document.getElementById("TheMintCafe");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Fri 6:30am-8pm Sat 7am-3pm */
	if(((1 == day && 6 <= hour && 19 >= hour)||(2 == day && 6 <= hour && 19 >= hour)||(3 == day && 6 <= hour && 19 >= hour)||(4 == day && 6 <= hour && 19 >= hour)||(5 == day && 6 <= hour && 19 >= hour)||(6 == day && 6 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Inner Sleeve Records x*/
function InnerSleeveRecords() {
	var slot = document.getElementById("InnerSleeveRecords");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 12pm-7pm Sat 12pm-5pm */
	if(((1 == day && 11 <= hour && 18 >= hour)||(2 == day && 11 <= hour && 18 >= hour)||(3 == day && 11 <= hour && 18 >= hour)||(4 == day && 11 <= hour && 18 >= hour)||(5 == day && 11 <= hour && 18 >= hour)||(6 == day && 11 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Limericks Public House  x*/
function LimericksPublicHouse() {
	var slot = document.getElementById("LimericksPublicHouse");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Tues-Thurs 4pm-11:30pm Fri&Sat 4pm-2:30am */
	if(((2 == day && 15 <= hour && 22 >= hour)||(3 == day && 15 <= hour && 22 >= hour)||(4 == day && 15 <= hour && 22 >= hour)||((5 == day && 15 <= hour && 23 >= hour)||(6 == day & 1 >= hour))||((6 == day && 15 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Chang Garden Wausau x*/
function ChangGardenWausau() {
	var slot = document.getElementById("ChangGardenWausau");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Tues-Thurs 11am-8:30pm Fri&Sat 11am-9:30pm Sun 11am-8:30pm */
	if(((0 == day && 10 <= hour && 19 >= hour)||(2 == day && 10 <= hour && 19 >= hour)||(3 == day && 10 <= hour && 19 >= hour)||(4 == day && 10 <= hour && 19 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b == "21 and Over" )&&
		c >= 6 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Marathon County Public Library x*/
function MarathonCountyPublicLibrary() {
	var slot = document.getElementById("MarathonCountyPublicLibrary");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Mon-Thurs 9am-8:30pm Fri&Sat 9am-5pm Sun 1pm-5pm */
	if(((0 == day && 12 <= hour && 16 >= hour )||(1 == day && 8 <= hour && 19 >= hour)||(2 == day && 8 <= hour && 19 >= hour)||(3 == day && 8 <= hour && 19 >= hour)||(4 == day && 8 <= hour && 19 >= hour)||(5 == day && 8 <= hour && 16 >= hour)||(6 == day && 8 <= hour && 16 >= hour))&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wausau Center/Mall x*/
function WausauCenterMall() {
	var slot = document.getElementById("WausauCenterMall");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 11am-6pm Mon-Sat 10am-8pm */
	if(((0 == day && 10 <= hour && 17 >= hour)||(1 == day && 9 <= hour && 19 >= hour)||(2 == day && 9 <= hour && 19 >= hour)||(3 == day && 9 <= hour && 19 >= hour)||(4 == day && 9 <= hour && 19 >= hour)||(5 == day && 9 <= hour && 19 >= hour)||(6 == day && 9 <= hour && 19 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* EP x*/
/* Red Eye Brewing Company x*/
function RedEyeBrewingCompany() {
	var slot = document.getElementById("RedEyeBrewingCompany");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Mon-Sat 11am-9pm */
	if(((1 == day && 10 <= hour && 20 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 20 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Patina Coffeehouse x*/
function PatinaCoffeeHouse() {
	var slot = document.getElementById("PatinaCoffeeHouse");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun 8am-3pm Mon-Fri 7am-5pm */
	if(((0 == day && 7 <= hour && 14 >= hour)||(1 == day && 6 <= hour && 16 >= hour)||(2 == day && 6 <= hour && 16 >= hour)||(3 == day && 6 <= hour && 16 >= hour)||(4 == day && 6 <= hour && 16 >= hour)||(5 == day && 6 <= hour && 16 >= hour)||(6 == day && 6 <= hour && 16 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Oak Island Park x*/
function OakIslandPark() {
	var slot = document.getElementById("OakIslandPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");;
	}
}
/* Isle of Ferns Park x*/
function IsleOfFernsPark() {
	var slot = document.getElementById("IsleOfFernsPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if(
		(5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* EU x*/
/* Pleasant View Park x*/
function PleasantViewPark() {
	var slot = document.getElementById("PleasantViewPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if(
		(5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Memorial Pool x*/
function MemorialPool() {
	var slot = document.getElementById("MemorialPool");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 1pm-7:30pm */
	if((12 <= hour && 18 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Memorial Park x*/
function MemorialPark() {
	var slot = document.getElementById("MemorialPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 8am-11pm */
	if((7 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Alexander Park x*/
function AlexanderPark() {
	var slot = document.getElementById("AlexanderPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Airport Park x*/
function AirportPark() {
	var slot = document.getElementById("AirportPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FA x*/
/* Grand Valley Adventures x*/
function GrandValleyAdventures() {
	var slot = document.getElementById("GrandValleyAdventures");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Wed-Fri 12pm-5pm Sat 10am-5pm Sat 10am-5pm Sun 12pm-6pm */
	if(
		(	
			(0 == day && 11 <= hour && 17 >= hour)||
			(3 == day && 11 <= hour && 16 >= hour)||
			(4 == day && 11 <= hour && 16 >= hour)||
			(5 == day && 11 <= hour && 16 >= hour)||
			(6 == day && 9 <= hour && 16 >= hour)
		)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 40 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Eastbay Sports Complex x*/
function EastbaySportsComplex() {
	var slot = document.getElementById("EastbaySportsComplex");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5 <= hour && 22 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Jenny's Family Restaurant x*/
function JennysFamilyRestaurant() {
	var slot = document.getElementById("JennysFamilyRestaurant");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 6am-8pm */
	if((5 <= hour && 19 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Fat Joe's Pizzeria x*/
function FatJoesPizzeria() {
	var slot = document.getElementById("FatJoesPizzeria");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 4pm-9pm Fri&Sat 4pm-10pm */ 
	if(((0 == day && 15 <= hour && 20 >= hour)&&(1 == day && 15 <= hour && 20 >= hour)&&(2 == day && 15 <= hour && 20 >= hour)&&(3 == day && 15 <= hour && 20 >= hour)&&(4 == day && 15 <= hour && 20 >= hour)&&(5 == day && 15 <= hour && 21 >= hour)&&(6 == day && 15 <= hour && 21 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dairy Queen (treats only) x*/
function DairyQueenTreatsOnly() {
	var slot = document.getElementById("DairyQueenTreatsOnly");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	/* Everyday 10am-9pm */
	if((9 <= hour && 20 >= hour)&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FG x*/
/*

			Schofield

*/
/* Pro Player x*/
function ProPlayer() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    ( b === "21 and Over" )&&
		c >= 20 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FI x*/
/* FJ x*/
/* Perkin's x*/
function PerkinsSchofield() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Johnny Cee Cards x*/
function JohnnyCeeCards() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Office Bar x*/
function TheOfficeBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    ( b === "21 and Over" )&&
		c >= 7 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Taco Bell x*/
function TacoBellSchofield() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hot Wok Chinese Express x*/
function HotWokChineseExpress() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FP x*/
/* Arby's x*/
function ArbysSchofield() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Sconni's Alehouse & Eatery x*/
function SconnisAlehouseAndEatery() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FS x*/
/* Pawn America x*/
function PawnAmerica() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* 50-50 Factory Outlet x*/
function FiftyFiftyFactoryOutlet() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Log Cabin x*/
function LobCabin() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* 19th Hole Tavern x*/
function NinteenthHoleTavern() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Mayoral Park x*/
function MayoralPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* FY x*/
/* Krueger Floral and Gifts x*/
function KruegerFloralAndGifts() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* GA x*/
/*

		Weston

*/
/* Sandhill Meadows Park x*/
function SandhillMeadowsPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gb").style.display = "block";
	} else {
		document.getElementById("gb").style.display = "none";
	}
}
/* Subway x*/
function SubwayWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("gc").style.display = "block";
	} else {
		document.getElementById("gc").style.display = "none";
	}
}
/* Chang Garden x*/
function ChangGardenWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("gd").style.display = "block";
	} else {
		document.getElementById("gd").style.display = "none";
	}
}
/* Crane Meadows Golf Course x*/
function CraneMeadowsGolfCourse() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 14 &&
		e){
		document.getElementById("ge").style.display = "block";
	} else {
		document.getElementById("ge").style.display = "none";
	}
}
/* Weston Hit and Miss Trap Club x*/
function WestonHitAndMissTrapClub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gf").style.display = "block";
	} else {
		document.getElementById("gf").style.display = "none";
	}
}
/* Arby's x*/
function ArbysWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("gg").style.display = "block";
	} else {
		document.getElementById("gg").style.display = "none";
	}
}
/* Robinwood Park x*/
function RobinwoodPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gh").style.display = "block";
	} else {
		document.getElementById("gh").style.display = "none";
	}
}
/* GI x*/
/* GJ x*/
/* GK x*/
/* Mountain Bay Trail x*/
function MountainBayTrail() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gl").style.display = "block";
	} else {
		document.getElementById("gl").style.display = "none";
	}
}
/* GM x*/
/* Johanns May's Fine Teas x*/
function JohannsMaysFineTeas() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("gn").style.display = "block";
	} else {
		document.getElementById("gn").style.display = "none";
	}
}
/* Kellyland Park x*/
function KellylandPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("go").style.display = "block";
	} else {
		document.getElementById("go").style.display = "none";
	}
}
/* Machmueller Park x*/
function MachmuellerPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gp").style.display = "block";
	} else {
		document.getElementById("gp").style.display = "none";
	}
}
/* Yellow Banks Park x*/
function YellowBanksPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gq").style.display = "block";
	} else {
		document.getElementById("gq").style.display = "none";
	}
}
/* Yellowbanks Disc Golf Course x*/
function YellowbanksDiscGolfCourse() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gr").style.display = "block";
	} else {
		document.getElementById("gr").style.display = "none";
	}
}
/* The Jig x*/
function TheJigs() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("gs").style.display = "block";
	} else {
		document.getElementById("gs").style.display = "none";
	}
}
/* Cracked x*/
function Cracked() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 25 &&
		f){
		document.getElementById("gt").style.display = "block";
	} else {
		document.getElementById("gt").style.display = "none";
	}
}
/* Big Dan & Space's Kelly Club x*/
function BigDanAndSpaceKellyClub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("gu").style.display = "block";
	} else {
		document.getElementById("gu").style.display = "none";
	}
}
/* Vino Latte x*/
function VinoLatteWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("gv").style.display = "block";
	} else {
		document.getElementById("gv").style.display = "none";
	}
}
/* Williams Park x*/
function WilliamsPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gw").style.display = "block";
	} else {
		document.getElementById("gw").style.display = "none";
	}
}
/* Brews Brothers Pub x*/
function BrewsBrothersPub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("gx").style.display = "block";
	} else {
		document.getElementById("gx").style.display = "none";
	}
}
/* Briq's Soft Serve x*/
function BriqsSoftServeWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("gy").style.display = "block";
	} else {
		document.getElementById("gy").style.display = "none";
	}
}
/* Wasabi Teppanyaki & Sushi Bar x*/
function WasabiTeppanyakiAndSushiBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("gz").style.display = "block";
	} else {
		document.getElementById("gz").style.display = "none";
	}
}
/* Wendy's x*/
function WendysWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ha").style.display = "block";
	} else {
		document.getElementById("ha").style.display = "none";
	}
}
/* HB x*/
/* Goodwill x*/
function GoodwillWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hc").style.display = "block";
	} else {
		document.getElementById("hc").style.display = "none";
	}
}
/* Target x*/
function TargetWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hd").style.display = "block";
	} else {
		document.getElementById("hd").style.display = "none";
	}
}
/* Dunkin' Donuts x*/
function DunkinDonutsWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("he").style.display = "block";
	} else {
		document.getElementById("he").style.display = "none";
	}
}
/* Domino's Pizza x*/
function DominosPizzaWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("hf").style.display = "block";
	} else {
		document.getElementById("hf").style.display = "none";
	}
}
/* Jimmy John's x*/
function JimmyJohnsWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("hg").style.display = "block";
	} else {
		document.getElementById("hg").style.display = "none";
	}
}
/* Shanghai Grill x*/
function ShanghaiGrill() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("hh").style.display = "block";
	} else {
		document.getElementById("hh").style.display = "none";
	}
}
/* HI x*/
/* Papa Murphy's Take 'N' Bake Pizza x*/
function PapaMurphysTakeNBakePizza() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("hj").style.display = "block";
	} else {
		document.getElementById("hj").style.display = "none";
	}
}
/* Family Video x*/
function FamilyVideoWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hk").style.display = "block";
	} else {
		document.getElementById("hk").style.display = "none";
	}
}
/* Basil x*/
function Basil() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("hl").style.display = "block";
	} else {
		document.getElementById("hl").style.display = "none";
	}
}
/* Little Ceaser's Pizza x*/
function LittleCeasersPizzaWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("hm").style.display = "block";
	} else {
		document.getElementById("hm").style.display = "none";
	}
}
/* HN x*/
/* Taco Johns x*/
function TacoJohnsWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		document.getElementById("ho").style.display = "block";
	} else {
		document.getElementById("ho").style.display = "none";
	}
}
/* The Palms Supper Club x*/
function ThePalmsSupperClub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("hp").style.display = "block";
	} else {
		document.getElementById("hp").style.display = "none";
	}
}
/* McDonalds x*/
function McDonaldsWeston() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		document.getElementById("hq").style.display = "block";
	} else {
		document.getElementById("hq").style.display = "none";
	}
}
/* Trend Setters Avenda Concept Salon/Spa x*/
function TrendSettersAvendaConceptSalon() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hr").style.display = "block";
	} else {
		document.getElementById("hr").style.display = "none";
	}
}
/* Kennedy Park x*/
function KennedyPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hs").style.display = "block";
	} else {
		document.getElementById("hs").style.display = "none";
	}
}
/* Weston Aquatic Center x*/
function WestonAquaticCenter() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		e){
		document.getElementById("ht").style.display = "block";
	} else {
		document.getElementById("ht").style.display = "none";
	}
}
/* El Charro x*/
function ElCharro() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("hu").style.display = "block";
	} else {
		document.getElementById("hu").style.display = "none";
	}
}
/* HV x*/
/*

		Rib Mountain

*/
/* Liberty Park x*/
function LibertyPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hw").style.display = "block";
	} else {
		document.getElementById("hw").style.display = "none";
	}
}
/* Bluegill Bay Park x*/
function BluegillBayPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		d){
		document.getElementById("hx").style.display = "block";
	} else {
		document.getElementById("hx").style.display = "none";
	}
}
/* Hobby Lobby x*/
function HobbyLobby() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hy").style.display = "block";
	} else {
		document.getElementById("hy").style.display = "none";
	}
}
/* PetSmart x*/
function PetSmart() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceInsideActivity").checked;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		(d || f)){
		document.getElementById("hz").style.display = "block";
	} else {
		document.getElementById("hz").style.display = "none";
	}
}
/* Bed Bath & Body Works x*/
function BedBathAndBodyWorks() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ia").style.display = "block";
	} else {
		document.getElementById("ia").style.display = "none";
	}
}
/* Old Navy x*/
function OldNavy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ib").style.display = "block";
	} else {
		document.getElementById("ib").style.display = "none";
	}
}
/* Gordmans x*/
function Gordmans() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ic").style.display = "block";
	} else {
		document.getElementById("ic").style.display = "none";
	}
}
/* Michaels x*/
function Michaels() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ic2").style.display = "block";
	} else {
		document.getElementById("ic2").style.display = "none";
	}
}
/* Becca's Cafe, Bistro & Catering x*/
function BeccasCafeBistroAndCatering() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		document.getElementById("ie").style.display = "block";
	} else {
		document.getElementById("ie").style.display = "none";
	}
}
/* Bliss Nails & Spa x*/
function BlissNailsAndSpa() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("if1").style.display = "block";
	} else {
		document.getElementById("if1").style.display = "none";
	}
}
/* GameStop x*/
function GameStop() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ig").style.display = "block";
	} else {
		document.getElementById("ig").style.display = "none";
	}
}
/* IH x*/
/* Goodwill x*/
function GoodwillRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ii").style.display = "block";
	} else {
		document.getElementById("ii").style.display = "none";
	}
}
/* The Vapour Lounge x*/
function TheVapourLounge() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Moutain") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ij").style.display = "block";
	} else {
		document.getElementById("ij").style.display = "none";
	}
}
/* Briq's x*/
function BriqsRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	if(( a === "All of Wausau"|| a === "Rib Moutain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("ik").style.display = "block";
	} else {
		document.getElementById("ik").style.display = "none";
	}
}
/* Doepke Recreation Area x*/
function DoepkeRecreationArea() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("il").style.display = "block";
	} else {
		document.getElementById("il").style.display = "none";
	}
}
/* IM x*/
/* Starbucks x*/
function StarbucksRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("in1").style.display = "block";
	} else {
		document.getElementById("in1").style.display = "none";
	}
}
/* McDonald's x*/
function McDonaldsRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		document.getElementById("io").style.display = "block";
	} else {
		document.getElementById("io").style.display = "none";
	}
}
/* Dick's Sporting Goods x*/
function DicksSportingGoods() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ip").style.display = "block";
	} else {
		document.getElementById("ip").style.display = "none";
	}
}
/* Red Robins x*/
function RedRobins() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		(d || g)){
		document.getElementById("iq").style.display = "block";
	} else {
		document.getElementById("iq").style.display = "none";
	}
}
/* Hu Hot x*/
function HuHot() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("ir").style.display = "block";
	} else {
		document.getElementById("ir").style.display = "none";
	}
}
/* Ropa's Chicago Style Pizza x*/
function RopasChicagoStylePizza() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("is").style.display = "block";
	} else {
		document.getElementById("is").style.display = "none";
	}
}
/* Fazoli's x*/
function FazolisRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		document.getElementById("it").style.display = "block";
	} else {
		document.getElementById("it").style.display = "none";
	}
}
/* Office Max x*/
function OfficeMax() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iu").style.display = "block";
	} else {
		document.getElementById("iu").style.display = "none";
	}
}
/* T.J. Max x*/
function TJMax() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iv").style.display = "block";
	} else {
		document.getElementById("iv").style.display = "none";
	}
}
/* Dunham's Sports x*/
function DunhamsSports() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iw").style.display = "block";
	} else {
		document.getElementById("iw").style.display = "none";
	}
}
/* Best Buy x*/
function BestBuy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ix").style.display = "block";
	} else {
		document.getElementById("ix").style.display = "none";
	}
}
/* Dollar Tree x*/
function DollarTreeRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		f){
		document.getElementById("iy").style.display = "block";
	} else {
		document.getElementById("iy").style.display = "none";
	}
}
/* Olive Garden x*/
function OliveGarden() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		d){
		document.getElementById("iz").style.display = "block";
	} else {
		document.getElementById("iz").style.display = "none";
	}
}
/* Kolh's x*/
function Kolhs() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ja").style.display = "block";
	} else {
		document.getElementById("ja").style.display = "none";
	}
}
/* JB x*/
/* Barnes & Noble x*/
function BarnesAndNoble() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("jc").style.display = "block";
	} else {
		document.getElementById("jc").style.display = "none";
	}
}
/* JD x*/
/* The Tanning Studio x*/
function TheTanningStudioRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 89 &&
		f){
		document.getElementById("je").style.display = "block";
	} else {
		document.getElementById("je").style.display = "none";
	}
}
/* BioLife Plasma Services x*/
function BioLifePlasmaServices() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("jf").style.display = "block";
	} else {
		document.getElementById("jf").style.display = "none";
	}
}
/* JG x*/
/* Mykenos Mediterranean Grill x*/
function MykenosMediterraneanGrill() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("jh").style.display = "block";
	} else {
		document.getElementById("jh").style.display = "none";
	}
}
/* The Gaming Garage x*/
function TheGamingGarage() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		f){
		document.getElementById("ji").style.display = "block";
	} else {
		document.getElementById("ji").style.display = "none";
	}
}
/* JJ x*/
/* JK x*/
/* Michael's Supper Club x*/
function MichaelsSupperClub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("jl").style.display = "block";
	} else {
		document.getElementById("jl").style.display = "none";
	}
}
/* Bella's Nails and Spa x*/
function BellasNailsAndSpa() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("jm").style.display = "block";
	} else {
		document.getElementById("jm").style.display = "none";
	}
}
/* JN x*/
/* JO x*/
/* El Tequila Salsa x*/
function ElTequilaSalsa() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("jp").style.display = "block";
	} else {
		document.getElementById("jp").style.display = "none";
	}
}
/* IHOP x*/
function IHopRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("jq").style.display = "block";
	} else {
		document.getElementById("jq").style.display = "none";
	}
}
/* Burger King x*/
function BurgerKingRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("jr").style.display = "block";
	} else {
		document.getElementById("jr").style.display = "none";
	}
}
/* Nice as New x*/
function NiceAsNew() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("js").style.display = "block";
	} else {
		document.getElementById("js").style.display = "none";
	}
}
/* JT x*/
/* Rookery View Park x*/
function RookeryViewPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ju").style.display = "block";
	} else {
		document.getElementById("ju").style.display = "none";
	}
}
/* Rib Mountain Taphouse x*/
function RibMountainTapHouse() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("jv").style.display = "block";
	} else {
		document.getElementById("jv").style.display = "none";
	}
}
/* Mountain Edge Restaurant, Bar and Bonquets x*/
function MountainEdgeRestaurantBarAndBonquets() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		document.getElementById("jw").style.display = "block";
	} else {
		document.getElementById("jw").style.display = "none";
	}
}
/* JX x*/
/* JY x*/
/* JZ x*/
/* Rib Mountain Talus Forest State Natural Area x*/
function RibMountainTalusForestStateNaturalArea() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ka").style.display = "block";
	} else {
		document.getElementById("ka").style.display = "none";
	}
}
/* KB x*/
/*

	Rothschild

*/
/* Kort Street Boat launch and Park x*/
function KortStreetBoatLaunchAndPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	var f = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		(e || f)){
		document.getElementById("kc").style.display = "block";
	} else {
		document.getElementById("kc").style.display = "none";
	}
}
/* Politos Pizza x*/
function PolitosPizza() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("kd").style.display = "block";
	} else {
		document.getElementById("kd").style.display = "none";
	}
}
/* Bamboo Hut Chinese & Thai Cuisine x*/
function BambooHutChineseAndThaiCuisine() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ke").style.display = "block";
	} else {
		document.getElementById("ke").style.display = "none";
	}
}
/* Subway x*/
function SubwayRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("kf").style.display = "block";
	} else {
		document.getElementById("kf").style.display = "none";
	}
}
/* King Buffet x*/
function KingBuffetRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("kg").style.display = "block";
	} else {
		document.getElementById("kg").style.display = "none";
	}
}
/* Papillon's Pizza x*/
function PapillonsPizza() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		document.getElementById("kh").style.display = "block";
	} else {
		document.getElementById("kh").style.display = "none";
	}
}
/* Shopko x*/
function ShopkoRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ki").style.display = "block";
	} else {
		document.getElementById("ki").style.display = "none";
	}
}
/* Coral Lanes x*/
function CoralLanes() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		e){
		document.getElementById("kj").style.display = "block";
	} else {
		document.getElementById("kj").style.display = "none";
	}
}
/* KK x*/
/* KL x*/
/* Fashion Villa Studio & Spa x*/
function FashionVillaStudioAndSpa(){
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("km").style.display = "block";
	} else {
		document.getElementById("km").style.display = "none";
	}
}
/* Norm's x*/
function NormsRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("kn").style.display = "block";
	} else {
		document.getElementById("kn").style.display = "none";
	}
}
/* KO x*/
/* 21 Pub  x*/
function TwentyOnePub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("kp").style.display = "block";
	} else {
		document.getElementById("kp").style.display = "none";
	}
}
/* Jackie's Antique Mall on Brown x*/
function JackiesAntiqueMallOnBrown() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kq").style.display = "block";
	} else {
		document.getElementById("kq").style.display = "none";
	}
}
/* Rothschild Park x*/
function RothschildPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("kr").style.display = "block";
	} else {
		document.getElementById("kr").style.display = "none";
	}
}
/* Marathon County Library x*/
function MarathonCountyLibraryRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ks").style.display = "block";
	} else {
		document.getElementById("ks").style.display = "none";
	}
}
/* Hobby Connection x*/
function HobbyConnection() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kt").style.display = "block";
	} else {
		document.getElementById("kt").style.display = "none";
	}
}
/* George Street Park x*/
function GeorgeStreetPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ku").style.display = "block";
	} else {
		document.getElementById("ku").style.display = "none";
	}
}
/* River Street Park	x*/
function RiverStreetPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kv").style.display = "block";
	} else {
		document.getElementById("kv").style.display = "none";
	}
}
/* Gaska Park x*/
function GaskaPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kw").style.display = "block";
	} else {
		document.getElementById("kw").style.display = "none";
	}
}
/* KX x*/
/* KY x*/
/* KZ x*/
/* LA */
/* Gander Outdoor x*/
function GanderOutdoor() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("lb").style.display = "block";
	} else {
		document.getElementById("lb").style.display = "none";
	}
}
/* Arby's x*/
function ArbysRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("lc").style.display = "block";
	} else {
		document.getElementById("lc").style.display = "none";
	}
}
/* Logger's Landing Indoor Waterpark x*/
function LoggersLandingIndoorWaterpark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		f){
		document.getElementById("ld").style.display = "block";
	} else {
		document.getElementById("ld").style.display = "none";
	}
}
/* LE */
/* Sawmill Mini Golf x*/
function SawmillMiniGolf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		e){
		document.getElementById("lf").style.display = "block";
	} else {
		document.getElementById("lf").style.display = "none";
	}
}
/* Marcus Cedar Creek Cinema x*/
function MarcusCedarCreekCinema() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		f){
		document.getElementById("lg").style.display = "block";
	} else {
		document.getElementById("lg").style.display = "none";
	}
}
/* Dimensions of Horrors Phantom Laser Tag x*/
function DimensionsOfHorrorsPhantomLaserTag() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		f){
		document.getElementById("lh").style.display = "block";
	} else {
		document.getElementById("lh").style.display = "none";
	}
}
/* Planet Fitness x*/
function PlanetFitness() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("li").style.display = "block";
	} else {
		document.getElementById("li").style.display = "none";
	}
}
/* Chase Outdoors x*/
function ChaseOutdoors() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("lj").style.display = "block";
	} else {
		document.getElementById("lj").style.display = "none";
	}
}
/* Denny's x*/
function DennysRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("lk").style.display = "block";
	} else {
		document.getElementById("lk").style.display = "none";
	}
}
/* The Bar x*/
function TheBarRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		document.getElementById("ll").style.display = "block";
	} else {
		document.getElementById("ll").style.display = "none";
	}
}
/* Subway x*/
function SubwayRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("lm").style.display = "block";
	} else {
		document.getElementById("lm").style.display = "none";
	}
}
/* Culvers x*/
function CulversRothschild() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceIcecream").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		(d || e)){
		document.getElementById("ln").style.display = "block";
	} else {
		document.getElementById("ln").style.display = "none";
	}
}
/* Green Mill Restaurant & Bar x*/
function GreenMillRestaurantAndBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("lo").style.display = "block";
	} else {
		document.getElementById("lo").style.display = "none";
	}
}


/*JQuery Slide Animation after first button*/
$(document).ready(function(){
	$("#seeSelection").click(function(){
		$("#statementDisplay").show();
	});
	$("#seeSelection").click(function(){
		$("#eventStatement").show();
	});
/*  Slide Animation for questions */
	$("#one").click(function() {
		$("#onetwo").slideToggle("slow");
	});
	$("#two").click(function() {
		$("#twotwo").slideToggle("slow");
	});
	$("#three").click(function() {
		$("#threetwo").slideToggle("slow");
	});
	$("#four").click(function() {
		$("#fourtwo").slideToggle("slow");
	});
/* Dropdrown with single background */
    $("#citySelection").click(function(){
        $("#cityDropdown").fadeIn();
    });
	$("#ageSelection").click(function(){
        $("#ageDropdown").fadeIn();
    });
	$("#activitySelection").click(function(){
        $("#activityDropdown").fadeIn();
    });
	$("#dollarSelection").click(function(){
        $("#dollarDropdown").fadeIn();
    });
});