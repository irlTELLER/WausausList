var now=new Date();
var day=now.getDay();
var hour=now.getHours();

/* Featured Slot MASA  (checked)*/
function featuredSlotOne() {
	var slot=document.getElementById("featuredSlotOne");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var featured=document.getElementById("choiceFeatured").checked;
	/*  Lunch (Mon - Thur) 11am - 3pm   Dinner (Mon - Thur) 4:30pm - 10pm   (Fri & Sat) 11am - 10:30pm  (Sun) 11:30am - 9pm */
    if (((0==day&&11<=hour&&20>=hour)||(1==day&&10<=hour&&14>=hour)||(1==day&&16<=hour&&21>=hour)||(2==day&&10<=hour&&14>=hour)||(2==day&&16<=hour&&21>=hour)||(3==day&&10<=hour&&14>=hour)||(3==day&&16<=hour&&21>=hour)||(4==day&&10<=hour&&14>=hour)||(4==day&&16<=hour&&21>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau")&&
		(age==="18-20"||age==="21 and Over")&&
		(dollar>=13)&&
		featured){
   	 	slot.classList.remove("hide");
        slot.classList.add("specificEventFeaturedMASA");
	}else{
		slot.classList.remove("specificEventFeaturedMASA");
    		slot.classList.add("hide");
    }
}
/* Humane Society of Marathon County (checked)*/
function HumaneSocietyofMarathonCounty() {
	var slot=document.getElementById("HumaneSocietyofMarathonCounty");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* (Mon & Tues) 12pm - 5pm  (Wed & Thurs) Closed  (Fri & Sat) 12pm - 5pm  (Sun) Closed */
	if(((1==day&&11<=hour&&16>=hour)||(2==day&&11<=hour&&16>=hour)||(5==day&&11<=hour&&16>=hour)||(6==day&&11<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=0)&&
		inside){
	 	slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Sunnyvale Park (checked)*/
function SunnyvalePark() {
	var slot=document.getElementById("SunnyvalePark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* (Everyday) 6am - 11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Wausau Mine Company (checked)*/
function WausauMineCompany() {
	var slot=document.getElementById("WausauMineCompany");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Mon - Fri) 11am - 10pm   (Sat & Sun) 11am - 11pm */
	if(((0==day&&10<=hour&&22>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=10)&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* 2510 Restaurant (checked)*/
function TwentyFiveTenRestaurant() {
	var slot=document.getElementById("TwentyFiveTenRestaurant");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 9pm  (Fri & Sat) 11am - 10pm */
	if(((0==day&&10<=hour&&20<=hour)||(1==day&&10<=hour&&20<=hour)||(2==day&&10<=hour&&20<=hour)||(3==day&&10<=hour&&20<=hour)||(4==day&&10<=hour&&20<=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		(dollar>=15)&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Milwaukee Burger (checked)*/
function MilwaukeeBurger() {
	var slot=document.getElementById("MilwaukeeBurger");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 10pm   (Fri&Sat) 11am-12am */
	if(((0==day&&10<=hour&&21>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		(dollar>=10)&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Applebee's Grill & Bar (checked)*/
function ApplebeesGrillBar() {
	var slot=document.getElementById("ApplebeesGrillBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 12am   (Fri & Sat) 11am - 1am */
	if(((0==day&&10<=hour&&23>=hour)||(1==day&&10<=hour&&23>=hour)||(2==day&&10<=hour&&23>=hour)||(3==day&&10<=hour&&23>=hour)||(4==day&&10<=hour&&23>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&0==hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&0==hour)))&& 
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=10)&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Jimmy Johns (checked) */
function JimmyJohns() {
	var slot=document.getElementById("JimmyJohns");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 11am-9pm */
	if((10<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=7)&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* McDonald's (checked)*/
function McDonaldsWausau() {
	var slot=document.getElementById("McDonaldsWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Inside (Everyday) 5am - 11pm   Drive-Thru (Sun - Sat) 5am - 12am */
	if((4<=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(age>=7)&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Subway (checked)*/
function SubwayWausau() {
	var slot=document.getElementById("SubwayWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Sun) 8am - 9pm   (Mon - Fri) 7am - 10pm   (Sat) 8am - 10pm */
	if(((0==day&&7<=hour&&20>=hour)||(1==day&&6<=hour&&21>=hour)||(2==day&&6<=hour&&21>=hour)||(3==day&&6<=hour&&21>=hour)||(4==day&&6<=hour&&21>=hour)||(5==day&&6<=hour&&21>=hour)||(6==day&&8<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=5)&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Buffalo Wild Wings	(checked)*/
function BuffaloWildWings() {
	var slot=document.getElementById("BuffaloWildWings");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Wed) 11am - 11pm   (Thur - Sat) 11am - 12am */
	if(((0==day&&10<=hour&&22>=hour)||(1==day&&10<=hour&&22>=hour)||(2==day&&10<=hour&&22>=hour)||(3==day&&10<=hour&&22>=hour)||(4==day&&10<=hour&&23>=hour)||(5==day&&10<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=10)&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Day's Bowl-A-Dome (checked)*/
function DaysBowlADome() {
	var slot=document.getElementById("DaysBowlADome");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* (Sun) 12pm - 5pm   (Mon - Thur) 12pm - 8pm   (Fri & Sat) 12pm - 12am */
	if(((0==day&&11<=hour&&16>=hour)||(1==day&&11<=hour&&19>=hour)||(2==day&&11<=hour&&19>=hour)||(3==day&&11<=hour&&19>=hour)||(4==day&&11<=hour&&19>=hour)||(5==day&&11<=hour&&23>=hour)||(6==day&&11<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=7)&&
		(eat||bar)){
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
/* Noodle's and Company (checked)*/
function NoodlesAndCompany() {
	var slot = document.getElementById("NoodlesAndCompany");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Sun - Wed) 11am - 9pm   (Thur - Sat) 11am - 10pm */
	if(((0 == day && 10 <= hour && 20 >= hour)||(1 == day && 10 <= hour && 20 >= hour)||(2 == day && 10 <= hour && 20 >= hour)||(3 == day && 10 <= hour && 20 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 21 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 8)&&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Brockmeyer Park (checked)*/
function BrockmeyerPark() {
	var slot = document.getElementById("BrockmeyerPark");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var e = document.getElementById("choicePark").checked;
		/* 6am - 11pm */
	if((5 <= hour && 22 >= hour)&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Vino Latte (checked)*/
function VinoLatteWausau() {
	var slot = document.getElementById("VinoLatteWausau");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun) 9am - 3pm  (Mon - Fri) 6am - 8pm (Sat) 7:30am - 4pm */
	if(((0 == day && 8 <= hour && 14 >= hour)||(1 == day && 5 <= hour && 19 >= hour)||(2 == day && 5 <= hour && 19 >= hour)||(3 == day && 5 <= hour && 19 >= hour)||(4 == day && 5 <= hour && 19 >= hour)||(5 == day && 5 <= hour && 19 >= hour)||(6 == day && 7 <= hour && 15 >= hour))&& 
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "18-20" || b === "21 and Over")&&
		(c >= 5)&&
		(d || g)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Q x*/
/* Arby's (checked)*/
function ArbysWausau() {
	var slot = document.getElementById("ArbysWausau");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* 6:30am - 10pm */
	if((6 <= hour && 21 >= hour)&& 
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 8)&&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Philly's Subs & Gyros (checked)*/
function PhillysSubsGyros() {
	var slot = document.getElementById("PhillysSubsGyros");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon - Fri) 11am - 7pm (Sat) 11am - 3pm (Sun) Closed */
	if(((1 == day && 10 <= hour && 18 >= hour)||(2 == day && 10 <= hour && 18 >= hour)||(3 == day && 10 <= hour && 18 >= hour)||(4 == day && 10 <= hour && 18 >= hour)||(5 == day && 10 <= hour && 18 >= hour)||(6 == day && 10 <= hour && 14 >= hour))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 6)&&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Campus Pub (checked)*/
function CampusPub() {
	var slot = document.getElementById("CampusPub");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun) 12pm - 2am   (Mon - Thur) 3pm - 2am   (Fri - Sat) 12pm - 2:30am */
	if((((0 == day && 11 <= hour && 23 >= hour)||(1 == day && 1 >= hour))||((1 == day && 14 <= hour && 23 >= hour)||(2 == day && 1 >= hour))||((2 == day && 14 <= hour && 23 >= hour)||(3 == day && 1 >= hour))||((3 == day && 14 <= hour && 23 >= hour)||(4 == day && 1 >= hour))||((4 == day && 14 <= hour && 23 >= hour)||(5 == day && 1 >= hour))||((5 == day && 12 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 12 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "21 and Over")&&
		(c >= 15)&&
		(d || e || g)){ 
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Taco Bell (checked) */
function TacoBellWausau() {
	var slot = document.getElementById("TacoBellWausau");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Sun-Thur) 7am - 1am  (Fri-Sat) 7am - 3am */
	if((((0 == day && 6 <= hour && 23 >= hour)||(1 == day && 0 >= hour))||((1 == day && 6 <= hour && 23 >= hour)||(2 == day && 0 >= hour))||((2 == day && 6 <= hour && 23 >= hour)||(3 == day && 0 >= hour))||((3 == day && 6 <= hour && 23 >= hour)||	(4 == day && 0 >= hour))||((4 == day && 6 <= hour && 23 >= hour)||(5 == day && 0 >= hour))||((5 == day && 6 <= hour && 23 >= hour)||(6 == day && 2 >= hour))||((6 == day && 6 <= hour && 23 >= hour)||(0 == day && 2 >= hour)))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 1)&&
		d) {
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Cruisin 1724 (checked) */
function CruisinSeventeenTwentyFour() {
	var slot = document.getElementById("CruisinSeventeenTwentyFour");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Sun) 12pm-2am  (Mon-Thur) 3pm-2am (Fri) 3pm-2:30am (Sat) 12pm-2:30am */
	if((((0 == day && 11 <= hour && 23 >= hour)||(1 == day && 1 >= hour))||((1 == day && 2 <= hour && 23 >= hour)||(2 == day && 1 >= hour))||((2 == day && 2 <= hour && 23 >= hour)||(3 == day && 1 >= hour))||((3 == day && 2 <= hour && 23 >= hour)||(4 == day && 1 >= hour))||((4 == day && 2 <= hour && 23 >= hour)||(5 == day && 1 >= hour))||((5 == day && 2 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 11 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		(c >= 15)&&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
    }
}
/* Sawadee Thai Restaurant (checked) */
function SawadeeThaiRestaurant() {
	var slot = document.getElementById("SawadeeThaiRestaurnat");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Hours (Sun - Thurs) 11am - 8pm   (Fri - Sat) 11am - 9pm */
	if(((0 == day && 10 <= hour && 19 >= hour)||(1 == day && 10 <= hour && 19 >= hour)||(2 == day && 10 <= hour && 19 >= hour)||(3 == day && 10 <= hour && 19 >= hour)||(4 == day && 10 <= hour && 19 >= hour)||(5 == day && 10 <= hour && 20 >= hour)||(6 == day && 10 <= hour && 20 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau")&&
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
/* Opa! Gyros (checked) */
function OpaGyros() {
	var slot = document.getElementById("OpaGyros");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon-Sat) 11am-8pm */
	if((( 1 == day && 10 <= hour && 19 >= hour )||( 2 == day && 10 <= hour && 19 >= hour )||( 3 == day && 10 <= hour && 19 >= hour )||( 4 == day && 10 <= hour && 19 >= hour )||( 5 == day && 10 <= hour && 19 >= hour )||( 6 == day && 10 <= hour && 19 >= hour ))&&
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
/* Briq's Soft Serve (checked) */
function BriqsSoftServeWausau() {
	var slot = document.getElementById("BriqsSoftServeWausau");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* (Sun-Thur) 10am-10pm (Fri & Sat) 10am-11pm */
	if((( 0 == day && 9 <= hour && 21 >= hour)||( 1 == day && 9 <= hour && 21 >= hour)||( 2 == day && 9 <= hour && 21 >= hour)||( 3 == day && 9 <= hour && 21 >= hour)||( 4 == day && 9 <= hour && 21 >= hour)||( 5 == day && 9 <= hour && 22 >= hour)||( 6 == day && 9 <= hour && 22 >= hour))&&
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
/* Monk Botanical Gardens (checked) */
function MonkBotanicalGardens() {
	var slot = document.getElementById("MonkBotanicalGardens");
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
/* Schofield Park (checked) */
function SchofieldPark() {
	var slot = document.getElementById("SchofieldPark");
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
/* Aftershock Bar (checkec) */
function AftershockBar() {
	var slot = document.getElementById("AftershockBar");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* (Sun) 12pm-9pm (Mon & Tues) 2pm-12am (Wed & Thurs) 2pm-1am (Fri) 2pm-2:30am (Sat) 12pm-2:30am */
	if(((0 == day && 11 <= hour && 20 >= hour)||(1 == day && 13 <= hour && 23 >= hour)||(2 == day && 13 <= hour && 23 >= hour)||((3 == day && 13 <= hour && 23 >= hour)||(4 == day && 0 == hour))||((4 == day && 13 <= hour && 23 >= hour)||(5 == day && 0 == hour))||((5 == day && 13 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 11 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "21 and Over")&&
		c >= 15 &&
		g){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Schulenberg Park (checked) */
function SchulenbergPark() {
	var slot = document.getElementById("SchulenbergPark");
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
/* A & W (checked) */
function AAndW() {
	var slot = document.getElementById("AAndW");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* (Mon - Sat) 10am-10pm (Sun) 11am-9pm */ 
	if((( 0 == day && 10 <= hour && 20 >= hour)||( 1 == day && 9 <= hour && 21 >= hour)||( 2 == day && 9 <= hour && 21 >= hour )||( 3 == day && 9 <= hour && 21 >= hour )||( 4 == day && 9 <= hour && 21 >= hour )||( 5 == day && 9 <= hour && 21 >= hour )||( 6 == day && 9 <= hour && 21 >= hour ))&&
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
/* Blue Willow Cafe (checked) */
function BlueWillowCafe() {
	var slot = document.getElementById("BlueWillowCafe");
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 6am-9pm */
	if((5 <= hour && 20 >= hour)&&
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
/* AF x */
/* AG */
/* Culvers (checked) */
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
	/* Everyday 10am-10pm */
	if((9 <= hour & 21 >= hour)&&
		(a === "All of Wausau"|| a === "Wausau") &&
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
/* County Coin and Collectibles (checked) */
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
	if(((1 == day && 7 <= hour && 14 >= hour)||(2 == day && 7 <= hour && 14 >= hour)||(3 == day && 7 <= hour && 14 >= hour)||(4 == day && 7 <= hour && 14 >= hour)||(5 == day && 7 <= hour && 11 >= hour))&&
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
/* Jemma's Cafe (checked) */
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
	if((( 1 == day && 10 <= hour && 14 >= hour)||( 2 == day && 10 <= hour && 19 >= hour)||( 3 == day && 10 <= hour && 19 >= hour)||( 4 == day && 10 <= hour && 19 >= hour)||( 5 == day && 10 <= hour && 20 >= hour)||( 6 == day && 10 <= hour && 20 >= hour))&&
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
/* Bethesda Thrift Shop (checked)*/
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
	if(((1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 16 >= hour)||(3 == day && 9 <= hour && 16 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 16 >= hour)||(6 == day && 10 <= hour && 15 >= hour))&&
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
/* Liberty Bell Coin Investments (checked) */
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
/* 101 Pub (checked) */
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
	if(
		((1 >= hour)||(7 <= hour && 23 >= hour))&&
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
/* The Glass Station (checked) */
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
/* Sams Pizza of Wausau  (checked) */
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
/* Eastbay (checked) */
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
/* Mandarine Chinese Restaurant (checked) */
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
	if((((1 == day && 10 <= hour && 13 >= hour)||(1 == day && 15 <= hour && 20 >= hour))||((2 == day && 10 <= hour && 13 >= hour)||(2 == day && 15 <= hour && 20 >= hour))||((3 == day && 10 <= hour && 13 >= hour)||(3 == day && 15 <= hour && 20 >= hour))||((4 == day && 10 <= hour && 13 >= hour)||(4 == day && 15 <= hour && 20 >= hour))||((5 == day && 10 <= hour && 13 >= hour)||(5 == day && 15 <= hour && 20 >= hour))||(6 == day && 10 <= hour && 20 >= hour))&&
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
/* October Guitar (checked) */
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
/* Quilting Workshop (checked) */
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
/* Lavender & Lace Antiques (checked) */
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
/* Dominos Pizza (checked) */
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
	if(((0 == day && 10 <= hour && 23 >= hour)||(1 == day && 10 <= hour && 23 >= hour)||(2 == day && 10 <= hour && 23 >= hour)||(3 == day && 10 <= hour && 23 >= hour)||(4 == day && 10 <= hour && 23 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
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
/* Navieve Fromagerie (checked) */
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
	if(((2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 17 >= hour)||(6 == day && 8 <= hour && 14 >= hour))&&
		( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" ||b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KFC (checked) */
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
/* River District Antique Mall (checked) */
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
	if(((2 == day && 9 <= hour && 15 >= hour)||(3 == day && 9 <= hour && 15 >= hour)||(4 == day && 9 <= hour && 15 >= hour)||(5 == day && 9 <= hour && 15 >= hour)||(6 == day && 9 <= hour && 15 >= hour))&&
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
/* Dime & Dollar Thrift Store (checked) */
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
	if(((1 == day && 9 <= hour && 18 >= hour)||(2 == day && 9 <= hour && 15 >= hour)||(3 == day && 9 <= hour && 15 >= hour)||(4 == day && 9 <= hour && 15 >= hour)||(5 == day && 9 <= hour && 15 >= hour)||(6 == day && 9 <= hour && 15 >= hour))&&
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
/* Reservoir Park (checked) */
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
/* Starbucks (checked) */
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
/* King Buffet (checked) */
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
/* Royal Nails & Spa (checked)*/
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
/* La Taqueria (checked) */
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
		(a === "All of Wausau"|| a === "Wausau")&&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over")&&
		c >= 3 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Great Dane (checked) */
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
	if(((0 == day && 10 <= hour && 23 >= hour)||(1 == day && 10 <= hour && 23 >= hour)||(2 == day && 10 <= hour && 23 >= hour)||(3 == day && 10 <= hour && 23 >= hour)||(4 == day && 10 <= hour && 23 >= hour)||((5 == day && 10 <= hour && 23 >= hour)||(6 == day && 1 >= hour))||((6 == day && 10 <= hour && 23 >= hour)||(0 == day && 1 >= hour)))&&
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
/* Treu's Tic Toc Club (checked) */
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
/* Marathon Park (checked) */
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
/* The Red Apple Family Restraurant (checked) */
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
/* Rice's Antiques & Architechtural Salvage (checked) */
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
/* Riverside Park (checked) */
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
/* Hmong Eggroll (checked) */
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
/* Lil Devil's Glass (checked) */
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
/* St. Vincent De Paul of Wausau (checked) 
*/
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
/* Dairy Queen Store (checked)*/
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
/* Central Wisconsin Water Walkers (checked) */
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
/* DC Everest Country Park (checked) */
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
/* Three "M" Park (checked) */
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
/* Lumpy's (checked) */
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
/* BB Jack's Pizza and Sandwich Lounge (checked) */
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
/* Sylvan Hill Park (checked) */
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
/* Lucky's Eastside Pub (checked) */
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
	if(((6 <= hour && 23 >= hour)||(1 >=hour))&&
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
/* Gilbert Park (checked) */
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
/* River Edge Walkway (checked) */
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
/* Wausau Music Center (checked) */
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
/* Divepoint Scuba Paddle & Adventure Center (checked) */
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
/* Thrive Foodery (checked) */
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
/* Kaiser Pool (checked) */
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
	if((12 <= hour && 19 >= hour)&&
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
/* Bob & Randy's Bar (checked) */
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
/* Sixth Street Filling Station (checked) */
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
/* Loppnow's Bar (checked) */
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
/* Subway (checked) */
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
/* Wausau on Water (checked) */
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
/* Black Purl (checked) */
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
/* The Glass Hat (checked) */
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
/* Angelo's Family Pizzeria (checked) */
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
/* Hope Thrift Store (checked) */
function HopeThriftStore() {
	var slot = document.getElementById("HopeThriftStore");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Sat 10am-6pm */
	if(((1 == day && 9 <= hour && 17 >= hour)||(2 == day && 9 <= hour && 17 >= hour)||(3 == day && 9 <= hour && 17 >= hour)||(4 == day && 9 <= hour && 17 >= hour)||(5 == day && 9 <= hour && 17 >= hour)||(6 == day && 9 <= hour && 17 >= hour))&&	
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
/* Marathon County Historical Society (checked) */
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
/* Yawkey House Museum (checked) */
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
/* Barker-Stewart Island Park (checked) */
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
/* Big Bull Falls Park (checked) */
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
/* Evolution In Design (checked) */
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
/* Nichole's Boutique (checked) */
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
/* Back When Cafe (checked) */
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
/* Sweets on Third (checked) */
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
/* La Prima (checked) */
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
/* Wausau Museum of Contemporary Art (checked) */
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
/* Janke Book Store (checked) */
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
/* Shepherd & Schaller Sporting (checked) */
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
/* Leigh Yawkey Woodson Art Museum (checked) */
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
/* The Grand Theater (checked) */
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
/* Erbert and Gerbert's (checked) */
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
/* Intermission (checked) */
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
/* Poppy's Boutique (checked) */
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
/* Polito's Pizza (checked) */
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
	if(((0 == day && 10 <= hour && 19 >= hour)||(1 == day && 10 <= hour && 21 >= hour)||(2 == day && 10 <= hour && 21 >= hour)||(3 == day && 10 <= hour && 21 >= hour)||(4 == day && 10 <= hour && 21 >= hour)||(5 == day && 10 <= hour && 22 >= hour)||(6 == day && 10 <= hour && 21 >= hour))&&
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
/* Daly's (checked) */
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
/* Jalapenos Mexican Restaurante Bar (checked) */
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
/* Issac's Fine Appearel Inc.  (checked) */
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
/* City Grill (checked) */
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
/* Malarkey's Pub & townies Grill (checked) */
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
/* Central Board shop (checked) */
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
/* Antiques by Ginny (checked) */
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
/* The Local (checked) */
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
/* The Mint Cafe (checked) */
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
/* Inner Sleeve Records (checked) */
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
/* Limericks Public House  (checked) */
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
/* Chang Garden Wausau (checked)*/
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
/* Marathon County Public Library (checked) */
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
/* Wausau Center/Mall (checked) */
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
/* Red Eye Brewing Company (checked) */
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
/* Patina Coffeehouse (checked) */
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
/* Oak Island Park (checked) */
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
/* Isle of Ferns Park (checked) */
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
/* Pleasant View Park (checked) */
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
/* Memorial Pool (checked) */
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
/* Memorial Park (checked) */
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
/* Alexander Park (checked) */
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
/* Airport Park (checked) */
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
/* Grand Valley Adventures (checked) */
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
	if(((0 == day && 11 <= hour && 17 >= hour)||(3 == day && 11 <= hour && 16 >= hour)||(4 == day && 11 <= hour && 16 >= hour)||(5 == day && 11 <= hour && 16 >= hour)||(6 == day && 9 <= hour && 16 >= hour))&&
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
/* Eastbay Sports Complex (checked) */
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
/* Jenny's Family Restaurant (checked) */
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
/* Fat Joe's Pizzeria (checked) */
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
	if(((0 == day && 15 <= hour && 20 >= hour)||(1 == day && 15 <= hour && 20 >= hour)||(2 == day && 15 <= hour && 20 >= hour)||(3 == day && 15 <= hour && 20 >= hour)||(4 == day && 15 <= hour && 20 >= hour)||(5 == day && 15 <= hour && 21 >= hour)||(6 == day && 15 <= hour && 21 >= hour))&&
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
/* Dairy Queen (treats only) (checked) */
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
/* Pro Player (checked)*/
function ProPlayer() {
	var slot = document.getElementById("ProPlayer");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Sun-Mon 11am-2am Fri&Sat 11am-2:30am */
	if(((10<=hour&&23>=hour)||(1>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Perkin's (checked) */
function PerkinsSchofield() {
	var slot = document.getElementById("PerkinsSchofield");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* 24 Hours */ 
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
/* Johnny Cee Cards (checked)*/
function JohnnyCeeCards() {
	var slot = document.getElementById("JohnnyCeeCards");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sat-Thurs 12pm-8pm Fri 12pm-10pm */
	if(((0==day&&11<=hour&&19>=hour)||(1==day&&11<=hour&&19>=hour)||(2==day&&11<=hour&&19>=hour)||(3==day&&11<=hour&&19>=hour)||(4==day&&11<=hour&&19>=hour)||(5==day&&11<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Office Bar (checked)*/
function TheOfficeBar() {
	var slot = document.getElementById("TheOfficeBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/*Sun 9am-2am Mon 11am-2am Tues-Thurs 7am-2am Fri 6am-2:30am Sat 9am-2:30am */
	if((((0==day&&8<=hour&&23>=hour)||(1==day&&1>=hour))||((1==day&&10<=hour&&23>=hour)||(2==day&&1>=hour))||((2==day&&6<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&&6<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&6<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&5<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&8<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Taco Bell (checked)*/
function TacoBellSchofield() {
	var slot = document.getElementById("TacoBellSchofield");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 7am-1am Fri&Sat 7am-3am */
	if(((6<=hour&&23>=hour)||(1==day&&0>=hour)||(2==day&&0>=hour)||(3==day&&0>=hour)||(4==day&&0>=hour)||(5==day&&0>=hour)||(6==day&&2>=hour)||(0==day&&2>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Hot Wok Chinese Express (checked) */
function HotWokChineseExpress() {
	var slot = document.getElementById("HotWokChineseExpress");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/*Sun-Thurs 11am-9pm Fri&Sat 11am-9:30pm */
	if((10<=hour&&20>=hour)&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Arby's (checked)*/
function ArbysSchofield() {
	var slot=document.getElementById("ArbysSchofield");
	var now=new Date();
	var day=now.getDay();
	var hour=now.getHours();
	var a=document.getElementById("city").value;
	var b=document.getElementById("age").value;
	var c=document.getElementById("spending").value;
	var d=document.getElementById("choiceEat").checked;
	/* Everyday 6:30am-10pm */
	if((6<=hour&21>=hour)&&
		(a==="All of Wausau" || a==="Schofield")&&
		(b==="Under 18" || b==="18-20" || b==="21 and Over")&&
		c>=7&&
		d){
		slot.classList.remove("hide");
		slot.classList.add("specificEventWausau");
		} else {
		slot.classList.remove("specificEventWausau");
		slot.classList.add("hide");
		}
}
/* Sconni's Alehouse & Eatery (checked)*/
function SconnisAlehouseAndEatery() {
	var slot = document.getElementById("SconnisAlehouseAndEatery");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	/* Sun 11am-9pm Mon-Sat 11am-12am */
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&10<=hour&&23>=hour)||(2==day&&10<=hour&&23>=hour)||(3==day&&10<=hour&&23>=hour)||(4==day&&10<=hour&&23>=hour)||(5==day&&10<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Pawn America (checked)*/
function PawnAmerica() {
	var slot = document.getElementById("PawnAmerica");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-7pm Sat 10am-6pm Sun12pm-6pm */
	if(((0==day&&11<=hour&&17>=hour)||(1==day&&9<=hour&&18>=hour)||(2==day&&9<=hour&&18>=hour)||(3==day&&9<=hour&&18>=hour)||(4==day&&9<=hour&&18>=hour)||(5==day&&9<=hour&&18>=hour)||(6==day&&9<=hour&&17>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* 50-50 Factory Outlet (checked)*/
function FiftyFiftyFactoryOutlet() {
	var slot = document.getElementById("FiftyFiftyFactoryOutlet");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 10am-5pm Mon-Fri 9am-9pm Sat 9am-8pm */
	if(((0==day&&9<=hour&&16>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&19>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Log Cabin (checked)*/
function LogCabin() {
	var slot = document.getElementById("LogCabin");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun&Mon 5am-9pm Tues-Sat 5am-10pm */
	if(((0==day&&4>=hour&&20>=hour)||(1==day&&4>=hour&&20>=hour)||(2==day&&4>=hour&&21>=hour)||(3==day&&4>=hour&&21>=hour)||(4==day&&4>=hour&&21>=hour)||(5==day&&4>=hour&&21>=hour)||(6==day&&4>=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* 19th Hole Tavern (checked)*/
function NinteenthHoleTavern() {
	var slot = document.getElementById("NinteenthHoleTavern");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Sun 8am-2am Mon-Sat 7am-2am */
	if((((0==day&&7<=hour&&23>=hour)||(1==day&&1>=hour))||((1==day&&6<=hour&&23>=hour)||(2==day&&1>=hour))||((2==day&&6<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&&6<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&6<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&6<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&6<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Mayoral Park (checked)*/
function MayoralPark() {
	var slot = document.getElementById("MayoralPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Krueger Floral and Gifts (checked)*/
function KruegerFloralAndGifts() {
	var slot = document.getElementById("KruegerFloralAndGifts");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Mon-Fri 8am-5:30pm Sat 8am-2pm */
	if(((1==day&&7<=hour&&16>=hour)||(2==day&&7<=hour&&16>=hour)||(3==day&&7<=hour&&16>=hour)||(4==day&&7<=hour&&16>=hour)||(5==day&&7<=hour&&16>=hour)||(6==day&&7<=hour&&13>=hour))&&
		( a === "All of Wausau"|| a === "Schofield") &&
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
/* Sandhill Meadows Park (checked)*/
function SandhillMeadowsPark() {
	var slot = document.getElementById("SandhillMeadowsPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if(
		(5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Subway (checked)*/
function SubwayWeston() {
	var slot = document.getElementById("SubwayWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Fri 7am-10pm Sat&Sun 8am-10pm */
	if(((0==day&&7<=hour&&21>=hour)||(1==day&&6<=hour&&21>=hour)||(2==day&&6<=hour&&21>=hour)||(3==day&&6<=hour&&21>=hour)||(4==day&&6<=hour&&21>=hour)||(5==day&&6<=hour&&21>=hour)||(6==day&&7<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Chang Garden (checked)*/
function ChangGardenWeston() {
	var slot = document.getElementById("ChangGardenWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-9pm Fri&Sat 11am-10pm */
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Crane Meadows Golf Course (checked)*/
function CraneMeadowsGolfCourse() {
	var slot = document.getElementById("CraneMeadowsGolfCourse");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 7am-Dusk */
	if((6<=hour&&20>=hour)&&
		(a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 14 &&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Weston Hit and Miss Trap Club (checked)*/
function WestonHitAndMissTrapClub() {
	var slot = document.getElementById("WestonHitAndMissTrapClub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Sun 1pm-4pm Wed-Thurs 10pm-2pm 6pm-9pm */
	if(((0==day&&12<=hour&&15>=hour)||((3==day&&9<=hour&&13>=hour)||(3==day&&17<=hour&&20>=hour))||((4==day&&9<=hour&&13>=hour)||(4==day&&17<=hour&&20>=hour)))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Arby's (checked)*/
function ArbysWeston() {
	var slot = document.getElementById("ArbysWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/*Everyday 6am-11pm*/
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Robinwood Park (checked)*/
function RobinwoodPark() {
	var slot = document.getElementById("RobinwoodPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* GI x*/
/* GJ x*/
/* GK x*/
/* Mountain Bay Trail (checked)*/
function MountainBayTrail() {
	var slot = document.getElementById("MountainBayTrail");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* GM x*/
/* Johanns May's Fine Teas (checked)*/
function JohannsMaysFineTeas() {
	var slot = document.getElementById("JohannsMaysFineTeas");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Wed-Sat 10am-3pm */
	if(((3==day&&9<=hour&&14>=hour)||(4==day&&9<=hour&&14>=hour)||(5==day&&9<=hour&&14>=hour)||(6==day&&9<=hour&&14>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Kellyland Park (checked)*/
function KellylandPark() {
	var slot = document.getElementById("KellylandPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Machmueller Park (checked)*/
function MachmuellerPark() {
	var slot = document.getElementById("MachmuellerPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Yellow Banks Park (checked)*/
function YellowBanksPark() {
	var slot = document.getElementById("YellowBanksPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-9pm */
	if((5<=hour&&20>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Yellowbanks Disc Golf Course (checked)*/
function YellowbanksDiscGolfCourse() {
	var slot = document.getElementById("YellowbanksDiscGolfCourse");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 6am-10pm */
	if((5<=hour&&21>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Jig (checked)*/
function TheJigs() {
	var slot = document.getElementById("TheJigs");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Sun 9am-2pm Tues-Thurs 4pm-9pm Fri&Sat 3pm-10pm */
	if(((0==day&&8<=hour&&13>=hour)||(2==day&&15<=hour&&20>=hour)||(3==day&&15<=hour&&20>=hour)||(4==day&&15<=hour&&20>=hour)||(5==day&&14<=hour&&21>=hour)||(6==day&&14<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Cracked (checked)*/
function Cracked() {
	var slot = document.getElementById("Cracked");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Sun 3pm-7pm Mon-Thurs 6pm-8pm Fri 4pm-10pm Sat 10am-10pm */
	if(((0==day&&14<=hour&&18>=hour)||(1==day&&17<=hour&&19>=hour)||(2==day&&17<=hour&&19>=hour)||(3==day&&17<=hour&&19>=hour)||(4==day&&17<=hour&&19>=hour)||(5==day&&15<=hour&&21>=hour)||(6==day&&9<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 25 &&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Big Dan & Space's Kelly Club (checked)*/
function BigDanAndSpaceKellyClub() {
	var slot = document.getElementById("BigDanAndSpaceKellyClub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	/* Everyday 9am-2am */
	if(((8<=hour&&23>=hour)||(1>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Vino Latte (checked)*/
function VinoLatteWeston() {
	var slot = document.getElementById("VinoLatteWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	/* Sun 9am-3pm Mon-Fri 6am-8pm Sat 7:30am-4pm */
	if(((0==day&&8<=hour&&14>=hour)||(1==day&&5<=hour&&19>=hour)||(2==day&&5<=hour&&19>=hour)||(3==day&&5<=hour&&19>=hour)||(4==day&&5<=hour&&19>=hour)||(5==day&&5<=hour&&19>=hour)||(6==day&&7<=hour&&15>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Williams Park (checked)*/
function WilliamsPark() {
	var slot = document.getElementById("WilliamsPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Brews Brothers Pub (checked)*/
function BrewsBrothersPub() {
	var slot = document.getElementById("BrewsBrothersPub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-11pm Fri&Sat 11am-12pm */
	if(((0==day&&10<=hour&&22>=hour)||(1==day&&10<=hour&&22>=hour)||(2==day&&10<=hour&&22>=hour)||(3==day&&10<=hour&&22>=hour)||(4==day&&10<=hour&&22>=hour)||(5==day&&10<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Briq's Soft Serve (checked)*/
function BriqsSoftServeWeston() {
	var slot = document.getElementById("BriqsSoftServeWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceIcecream").checked;
	/* Everyday 11am-11pm */
	if((10<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Wasabi Teppanyaki & Sushi Bar (checked)*/
function WasabiTeppanyakiAndSushiBar() {
	var slot = document.getElementById("WasabiTeppanyakiAndSushiBar");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 11am-2pm 4:30pm-9pm */
	if(((10<=hour&&13>=hour)||(16<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wendy's (checked)*/
function WendysWeston() {
	var slot = document.getElementById("WendysWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 10am-10pm */
	if((9<=hour&&21>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* HB x*/
/* Goodwill (checked)*/
function GoodwillWeston() {
	var slot = document.getElementById("GoodwillWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 9am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&8<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Target (checked)*/
function TargetWeston() {
	var slot = document.getElementById("TargetWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/*Everyday 8am-10pm */
	if((7<=hour&&21>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dunkin' Donuts (checked)*/
function DunkinDonutsWeston() {
	var slot = document.getElementById("DunkinDonutsWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceCoffee").checked;
	/* Everyday 5am-9pm */
	if((4<=hour&&20>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Domino's Pizza (checked)*/
function DominosPizzaWeston() {
	var slot = document.getElementById("DominosPizzaWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 10:30am-12am Fri&Sat 10:30-1am */
	if(((0==day&&10<=hour&&23>=hour)||(1==day&&10<=hour&&23>=hour)||(2==day&&10<=hour&&23>=hour)||(3==day&&10<=hour&&23>=hour)||(4==day&&10<=hour&&23>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&0>=hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&0>=hour)))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Jimmy John's (checked)*/
function JimmyJohnsWeston() {
	var slot = document.getElementById("JimmyJohnsWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 10am-10pm */
	if((9<=hour&&21>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Shanghai Grill (checked)*/
function ShanghaiGrill() {
	var slot = document.getElementById("ShanghaiGrill");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-9pm Fri&Sat 11am-9:30pm */
	if((10<=hour&&20>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* HI x*/
/* Papa Murphy's Take 'N' Bake Pizza (checked)*/
function PapaMurphysTakeNBakePizza() {
	var slot = document.getElementById("PapaMurphysTakeNBakePizza");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 10am-8pm Fri&Sat 10am-9pm */
	if(((0==day&&9<=hour&&19>=hour)||(1==day&&9<=hour&&19>=hour)||(2==day&&9<=hour&&19>=hour)||(3==day&&9<=hour&&19>=hour)||(4==day&&9<=hour&&19>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Family Video (checked)*/
function FamilyVideoWeston() {
	var slot = document.getElementById("FamilyVideoWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Sun-Thurs 10am-11pm Fri&Sat 10am-12am */
	if(((0==day&&9<=hour&&22>=hour)||(1==day&&9<=hour&&22>=hour)||(2==day&&9<=hour&&22>=hour)||(3==day&&9<=hour&&22>=hour)||(4==day&&9<=hour&&22>=hour)||(5==day&&9<=hour&&23>=hour)||(6==day&&9<=hour&&23>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Basil (checked)*/
function Basil() {
	var slot = document.getElementById("Basil");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/*Mon-Sat 11am-9pm */
	if(((1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Little Ceaser's Pizza (checked)*/
function LittleCeasersPizzaWeston() {
	var slot = document.getElementById("LittleCeasersPizzaWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-10pm Fri&Sat 11am-11pm */
	if(((0==day&&10<=hour&&21>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* HN x*/
/* Taco Johns (checked)*/
function TacoJohnsWeston() {
	var slot = document.getElementById("TacoJohnsWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun 8am-10pm Mon-Sat 7am-10pm */
	if(((0==day&&7<=hour&&21>=hour)||(1==day&&6<=hour&&21>=hour)||(2==day&&6<=hour&&21>=hour)||(3==day&&6<=hour&&21>=hour)||(4==day&&6<=hour&&21>=hour)||(5==day&&6<=hour&&21>=hour)||(6==day&&6<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* The Palms Supper Club (checked)*/
function ThePalmsSupperClub() {
	var slot = document.getElementById("ThePalmsSupperClub");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Sun&Mon 11am-9pm Tues-Sat 11am-10pm */
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* McDonalds (checked)*/
function McDonaldsWeston() {
	var slot = document.getElementById("McDonaldsWeston");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/*Sun-Thurs 6am-12am Fri&Sat 6am-1am */
	if(((0==day&&5<=hour&&23>=hour)||(1==day&&5<=hour&&23>=hour)||(2==day&&5<=hour&&23>=hour)||(3==day&&5<=hour&&23>=hour)||(4==day&&5<=hour&&23>=hour)||((5==day&&6<=hour&&23>=hour)||(6==day&&0>=hour))||((6==day&&6<=hour&&23>=hour)||(0==day&&0>=hour)))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* Trend Setters Avenda Concept Salon/Spa (checked)*/
function TrendSettersAvendaConceptSalon() {
	var slot = document.getElementById("TrendSettersAvendaConceptSalon");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	/* Mon 12pm-7pm Tues-Thurs 10am-7pm Fri 8am-4pm */
	if(((1==day&&11<=hour&&18>=hour)||(2==day&&9<=hour&&18>=hour)||(3==day&&9<=hour&&18>=hour)||(4==day&&9<=hour&&18>=hour)||(5==day&&7<=hour&&15>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Kennedy Park (checked)*/
function KennedyPark() {
	var slot = document.getElementById("KennedyPark");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Weston Aquatic Center (checked)*/
function WestonAquaticCenter() {
	var slot = document.getElementById("WestonAquaticCenter");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	/* Sun 1pm-7:45pm Mon-Sat 11am-8pm */
	if(((0==day&&12<=hour&&19>=hour)||(1==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&19>=hour)||(6==day&&10<=hour&&19>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* El Charro (checked)*/
function ElCharro() {
	var slot = document.getElementById("ElCharro");
    var now = new Date();
	var day = now.getDay();
    var hour = now.getHours();
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Mon-Sat 11am-9pm */
	if(((1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Weston") &&
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
/* HV x*/
/*

		Rib Mountain

*/
/* Liberty Park (checked)*/
function LibertyPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hw").style.display = "block";
	} else {
		document.getElementById("hw").style.display = "none";
	}
}
/* Bluegill Bay Park (checked)*/
function BluegillBayPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Mon-Sat 9am-8pm */
	if(((1==day&&8<=hour&&19>=hour)||(2==day&&8<=hour&&19>=hour)||(3==day&&8<=hour&&19>=hour)||(4==day&&8<=hour&&19>=hour)||(5==day&&8<=hour&&19>=hour)||(6==day&&8<=hour&&19>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hy").style.display = "block";
	} else {
		document.getElementById("hy").style.display = "none";
	}
}
/* PetSmart (checked)*/
function PetSmart() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceInsideActivity").checked;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		(d || f)){
		document.getElementById("hz").style.display = "block";
	} else {
		document.getElementById("hz").style.display = "none";
	}
}
/* Bed Bath & Body Works (checked)*/
function BedBathAndBodyWorks() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceShopping").checked;
	/* Sun 11am-6pm Mon-Fri 10am-9pm Sat 9:30am-9pm */
	if(((0==day&&10<=hour&&17>=hour)||(1==day&&9<=hour&&20>=hour)||(2==day&&9<=hour&&20>=hour)||(3==day&&9<=hour&&20>=hour)||(4==day&&9<=hour&&20>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 10am-7pm Mon-Sat 9:30am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&9<=hour&&20>=hour)||(2==day&&9<=hour&&20>=hour)||(3==day&&9<=hour&&20>=hour)||(4==day&&9<=hour&&20>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 10am-9:30pm Mon-Sat9am-9:30pm */
	if(((0==day&&9<=hour&&20>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 10am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/*Sun 10:30am-3pm Mon-Sat 10:30am-8pm */
	if(
		(
			(0==day&&10<=hour&&14>=hour)||
			(1==day&&10<=hour&&19>=hour)||
			(2==day&&10<=hour&&19>=hour)||
			(3==day&&10<=hour&&19>=hour)||
			(4==day&&10<=hour&&19>=hour)||
			(5==day&&10<=hour&&19>=hour)||
			(6==day&&10<=hour&&19>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Mon-Sat 9am-7pm Sun Closed */
	if(
		(
			(1==day&&8<=hour&&18>=hour)||
			(2==day&&8<=hour&&18>=hour)||
			(3==day&&8<=hour&&18>=hour)||
			(4==day&&8<=hour&&18>=hour)||
			(5==day&&8<=hour&&18>=hour)||
			(6==day&&8<=hour&&18>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 9am-7pm Mon-Sat 8am-9pm */
	if(
		(
			(0==day&&8<=hour&&18>=hour)||
			(1==day&&7<=hour&&18>=hour)||
			(2==day&&7<=hour&&18>=hour)||
			(3==day&&7<=hour&&18>=hour)||
			(4==day&&7<=hour&&18>=hour)||
			(5==day&&7<=hour&&18>=hour)||
			(6==day&&7<=hour7&18>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 9am-7pm Mon-Sat 8am-9pm */
	if(
		(
			(0==day&&8<=hour&&18>=hour)||
			(1==day&&7<=hour&&20>=hour)||
			(2==day&&7<=hour&&20>=hour)||
			(3==day&&7<=hour&&20>=hour)||
			(4==day&&7<=hour&&20>=hour)||
			(5==day&&7<=hour&&20>=hour)||
			(6==day&&7<=hour&&20>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 12pm-6pm Mon-Thurs 10am-8pm Fri&Sat 10am-9pm */
	if(
		(
			(0==day&&11<=hour&&17>=hour)||
			(1==day&&9<=hour&&19>=hour)||
			(2==day&&9<=hour&&19>=hour)||
			(3==day&&9<=hour&&19>=hour)||
			(4==day&&9<=hour&&19>=hour)||
			(5==day&&9<=hour&&20>=hour)||
			(6==day&&9<=hour&&20>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Everyday 12pm-11pm */
	if((11<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("ik").style.display = "block";
	} else {
		document.getElementById("ik").style.display = "none";
	}
}
/* Doepke Recreation Area (checked)*/
function DoepkeRecreationArea() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun-Thurs 5:30am-9pm Fri&Sat 5:30am-10pm*/
	if(
		(
			(0==day&&5<=hour&&20>=hour)||
			(1==day&&5<=hour&&20>=hour)||
			(2==day&&5<=hour&&20>=hour)||
			(3==day&&5<=hour&&20>=hour)||
			(4==day&&5<=hour&&20>=hour)||
			(5==day&&5<=hour&&21>=hour)||
			(6==day&&5<=hour&&21>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("in1").style.display = "block";
	} else {
		document.getElementById("in1").style.display = "none";
	}
}
/* McDonald's (checked) */
function McDonaldsRibMountain() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	/* Everyday 5am-12am */
	if((4<=hour&&23>=hour)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun 10am-7pm Mon-Sat 9am-9:30pm */
	if(
		(
			(0==day&&9<=hour&&18>=hour)||
			(1==day&&8<=hour&&20>=hour)||
			(2==day&&8<=hour&&20>=hour)||
			(3==day&&8<=hour&&20>=hour)||
			(4==day&&8<=hour&&20>=hour)||
			(5==day&&8<=hour&&20>=hour)||
			(6==day&&8<=hour&&20>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun-Thurs 11am-10pm Fri&Sat 11am-11pm */
	if(
		(
			(0==day&&10<=hour&&21>=hour)||
			(1==day&&10<=hour&&21>=hour)||
			(2==day&&10<=hour&&21>=hour)||
			(3==day&&10<=hour&&21>=hour)||
			(4==day&&10<=hour&&21>=hour)||
			(5==day&&10<=hour&&22>=hour)||
			(6==day&&10<=hour&&22>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun-Thurs 11am-9pm Fri&Sat 11am-10pm */
	if(
		(
			(0==day&&10<=hour&&20>=hour)||
			(1==day&&10<=hour&&20>=hour)||
			(2==day&&10<=hour&&20>=hour)||
			(3==day&&10<=hour&&20>=hour)||
			(4==day&&10<=hour&&20>=hour)||
			(5==day&&10<=hour&&21>=hour)||
			(6==day&&10<=hour&&21>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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
	/* Sun-Thurs 10am-9pm Fri&Sat 10:30am-11pm */
	if(
		(
			(0==day&&9<=hour&&20>=hour)||
			(1==day&&9<=hour&&20>=hour)||
			(2==day&&9<=hour&&20>=hour)||
			(3==day&&9<=hour&&20>=hour)||
			(4==day&&9<=hour&&20>=hour)||
			(5==day&&9<=hour&&22>=hour)||
			(6==day&&9<=hour&&22>=hour)
		)&&
		( a === "All of Wausau"|| a === "Rib Mountain") &&
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