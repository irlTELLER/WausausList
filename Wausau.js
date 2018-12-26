var now=new Date();
var day=now.getDay();
var hour=now.getHours();

/* Featured Slot MASA O*/
function featuredSlotOne() {
	var slot=document.getElementById("featuredSlotOne");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var featured=document.getElementById("choiceFeatured").checked;
	/*  Lunch (Mon - Thur) 11am - 3pm   Dinner (Mon - Thur) 4:30pm - 10pm   (Fri & Sat) 11am - 10:30pm  (Sun) 11:30am - 9pm */
    if(((0==day&&11<=hour&&20>=hour)||((1||2||3||4)==day&&10<=hour&&14>=hour)||((1||2||3||4)==day&&16<=hour&&21>=hour)||((5||6)==day&&10<=hour&&21>=hour))&&
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
/* Humane Society of Marathon County O*/
function HumaneSocietyofMarathonCounty() {
	var slot=document.getElementById("HumaneSocietyofMarathonCounty");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* (Mon & Tues) 12pm - 5pm  (Wed & Thurs) Closed  (Fri & Sat) 12pm - 5pm  (Sun) Closed */
	if(((1||2||5||6)==day&&11<=hour&&16>=hour)&&
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
/* Sunnyvale Park O*/
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
/* Wausau Mine Company O*/
function WausauMineCompany() {
	var slot=document.getElementById("WausauMineCompany");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Mon - Fri) 11am - 10pm   (Sat & Sun) 11am - 11pm */
	if((((0||1||2||3||4||5)==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
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
/* 2510 Restaurant O*/
function TwentyFiveTenRestaurant() {
	var slot=document.getElementById("TwentyFiveTenRestaurant");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 9pm  (Fri & Sat) 11am - 10pm */
	if((((0||1||2||3||4)==day&&10<=hour&&20>=hour)||((5||6)==day&&10<=hour&&21>=hour))&&
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
/* Milwaukee Burger O*/
function MilwaukeeBurger() {
	var slot=document.getElementById("MilwaukeeBurger");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 10pm   (Fri&Sat) 11am-12am */
	if((((0||1||2||3||4)==day&&10<=hour&&21>=hour)||((5||6)==day&&10<=hour&&23>=hour))&&
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
/* Applebee's Grill & Bar O*/
function ApplebeesGrillBar() {
	var slot=document.getElementById("ApplebeesGrillBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Thur) 11am - 12am   (Fri & Sat) 11am - 1am */
	if((((0||1||2||3||4)==day&&10<=hour&&23>=hour)||(((5||6)==day&&10<=hour&&23>=hour)||((6||0)==day&&0==hour)))&& 
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
/* Jimmy Johns O*/
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
/* McDonald's O*/
function McDonaldsWausau() {
	var slot=document.getElementById("McDonaldsWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Inside (Everyday) 5am - 11pm   Drive-Thru (Everyday) 5am - 12am */
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
/* Subway O*/
function SubwayWausau() {
	var slot=document.getElementById("SubwayWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Sun) 8am - 9pm   (Mon - Fri) 7am - 10pm   (Sat) 8am - 10pm */
	if(
		(
			(0==day&&7<=hour&&20>=hour)||
			((1||2||3||4||5)==day&&6<=hour&&21>=hour)||
			(6==day&&7<=hour&&21>=hour)
		)&&
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
/* Buffalo Wild Wings	O*/
function BuffaloWildWings() {
	var slot=document.getElementById("BuffaloWildWings");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun - Wed) 11am - 11pm   (Thur - Sat) 11am - 12am */
	if((((0||1||2||3)==day&&10<=hour&&22>=hour)||((4||5||6)==day&&10<=hour&&23>=hour))&&
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
/* Day's Bowl-A-Dome O*/
function DaysBowlADome() {
	var slot=document.getElementById("DaysBowlADome");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* (Sun) 12pm - 5pm   (Mon - Thur) 12pm - 8pm   (Fri & Sat) 12pm - 12am */
	if(((0==day&&11<=hour&&16>=hour)||((1||2||3||4)==day&&11<=hour&&19>=hour)||((5||6)==day&&11<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=7)&&
		(eat||inside)){
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
/* Noodle's and Company O*/
function NoodlesAndCompany() {
	var slot=document.getElementById("NoodlesAndCompany");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Sun - Wed) 11am - 9pm   (Thur - Sat) 11am - 10pm */
	if((((0||1||2||3)==day&&10<=hour&&20>=hour)||((4||5||6)==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=8)&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
		/* 6am - 11pm */
	if((5 <= hour && 22 >= hour)&&
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
/* Vino Latte x*/
function VinoLatteWausau() {
	var slot = document.getElementById("VinoLatteWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var coffee=document.getElementById("choiceCoffee").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun) 9am - 3pm  (Mon - Fri) 6am - 8pm (Sat) 7:30am - 4pm */
	if(((0 == day && 8 <= hour && 14 >= hour)||(1 == day && 5 <= hour && 19 >= hour)||(2 == day && 5 <= hour && 19 >= hour)||(3 == day && 5 <= hour && 19 >= hour)||(4 == day && 5 <= hour && 19 >= hour)||(5 == day && 5 <= hour && 19 >= hour)||(6 == day && 7 <= hour && 15 >= hour))&& 
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		(dollar>=5)&&
		(coffee||bar)){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* 6:30am - 10pm */
	if((6<=hour&&21>=hour)&& 
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=8)&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Mon - Fri) 11am - 7pm (Sat) 11am - 3pm (Sun) Closed */
	if(((1 == day && 10 <= hour && 18 >= hour)||(2 == day && 10 <= hour && 18 >= hour)||(3 == day && 10 <= hour && 18 >= hour)||(4 == day && 10 <= hour && 18 >= hour)||(5 == day && 10 <= hour && 18 >= hour)||(6 == day && 10 <= hour && 14 >= hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=6)&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun) 12pm - 2am   (Mon - Thur) 3pm - 2am   (Fri - Sat) 12pm - 2:30am */
	if((((0==day&&11<=hour&&23>=hour)||(1==day&&1>=hour))||((1==day&&14<=hour&&23>=hour)||(2==day&&1>=hour))||((2==day&&14<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&&14<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&14<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&12<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&12<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		(dollar>=15)&&
		(eat||outside||bar)){ 
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Sun-Thur) 7am - 1am  (Fri-Sat) 7am - 3am */
	if((((0==day&&6<=hour&&23>=hour)||(1==day&&0>=hour))||((1==day&&6<=hour&&23>=hour)||(2==day&&0>=hour))||((2==day&&6<=hour&&23>=hour)||(3==day&&0>=hour))||((3==day&&6<=hour&&23>=hour)||(4==day&&0>=hour))||((4==day&&6<=hour&&23>=hour)||(5==day&&0>=hour))||((5==day&&6<=hour&&23>=hour)||(6==day&&2>=hour))||((6==day&&6<=hour&&23>=hour)||(0==day&&2>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(dollar>=1)&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Sun) 12pm-2am  (Mon-Thur) 3pm-2am (Fri) 3pm-2:30am (Sat) 12pm-2:30am */
	if((((0==day&&11<=hour&&23>=hour)||(1==day&&1>=hour))||((1==day&&2<=hour&&23>=hour)||(2==day&&1>=hour))||((2==day&&2<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&&2<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&2<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&2<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&11<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(age>=15)&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Hours (Sun - Thurs) 11am - 8pm   (Fri - Sat) 11am - 9pm */
	if(((0==day&&10<=hour&&19>=hour)||(1==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Mon-Sat) 11am-8pm */
	if(((1==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&19>=hour)||(6==day&&10<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=4&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var icecream=document.getElementById("choiceIcecream").checked;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* (Sun-Thur) 10am-10pm (Fri & Sat) 10am-11pm */
	if(((0==day&&9<=hour&&21>=hour)||(1==day&&9<=hour&&21>=hour)||(2==day&&9<=hour&&21>=hour)||(3==day&&9<=hour&&21>=hour)||(4==day&&9<=hour&&21>=hour)||(5==day&&9<=hour&&22>=hour)||(6==day&&9<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=3&&
		(icecream||outside)){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Everyday Dusk til Dawn */
	if((6<=hour&&20>=hour)&& 
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=0&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Schofield Park x*/
function SchofieldPark() {
	var slot=document.getElementById("SchofieldPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* (Everyday) 6am-11pm*/
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
/* Aftershock Bar x*/
function AftershockBar() {
	var slot=document.getElementById("AftershockBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* (Sun) 12pm-9pm (Mon & Tues) 2pm-12am (Wed & Thurs) 2pm-1am (Fri) 2pm-2:30am (Sat) 12pm-2:30am */
	if(((0==day&&11<=hour&&20>=hour)||(1==day&&13<=hour&&23>=hour)||(2==day&&13<=hour&&23>=hour)||((3==day&&13<=hour&&23>=hour)||(4==day&&0==hour))||((4==day&&13<=hour&&23>=hour)||(5==day&&0==hour))||((5==day&&13<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&11<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15 &&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Schulenberg Park x*/
function SchulenbergPark() {
	var slot=document.getElementById("SchulenbergPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* (Everyday) 1pm-7:45pm */
	if((12<=hour&&19>=hour)&&
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
/* A & W x*/
function AAndW() {
	var slot=document.getElementById("AAndW");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* (Mon - Sat) 10am-10pm (Sun) 11am-9pm */ 
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&9<=hour&&21>=hour)||(2==day&&9<=hour&&21>=hour)||(3==day&&9<=hour&&21>=hour)||(4==day&&9<=hour&&21>=hour)||(5==day&&9<=hour&&21>=hour)||(6==day&&9<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Blue Willow Cafe x*/
function BlueWillowCafe() {
	var slot=document.getElementById("BlueWillowCafe");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 6am-9pm */
	if((5<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
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
	var slot=document.getElementById("CulversWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Everyday 10am-10pm */
	if((9<=hour&21>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		(eat||icecream)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* County Coin and Collectibles x*/
function CountyCoinAndCollectibles() {
	var slot=document.getElementById("CountyCoinAndCollectibles");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Thurs 8am-3pm Fri 8am-12pm Sat & Sun Closed */
	if(((1==day&&7<=hour&&14>=hour)||(2==day&&7<=hour&&14>=hour)||(3==day&&7<=hour&&14>=hour)||(4==day&&7<=hour&&14>=hour)||(5==day&&7<=hour&&11>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Mon 10:30am-3pm Tues-Thurs 10:30am-8pm Fri&Sat 10:30-9pm Sun (closed)*/
	if(((1==day&&10<=hour&&14>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=8&&
		(eat||icecream)){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon&Thur 10am-6pm Tues-Wed&Fri 10am-5pm Sat 11am-4pm Sun closed */
	if(((1==day&&9<=hour&&17>=hour)||(2==day&&9<=hour&&16>=hour)||(3==day&&9<=hour&&16>=hour)||(4==day&&9<=hour&&17>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&10<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10:30am-1:30pm  */
	if(	((1==day&&9<=hour&&16>=hour)||(2==day&&9<=hour&&16>=hour)||(3==day&&9<=hour&&16>=hour)||(4==day&&9<=hour&&16>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&10<=hour&&12>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 8am-2am Fri&Sat 8am-2:30am */
	if(((1>=hour)||(7<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    age==="21 and Over"&&
		dollar>=15&&
		bar){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-5pm Mon-Fri 9am-8pm Sat 10am-8pm */
	if(((0==day&&10<=hour&&16>=hour)||(1==day&&8<=hour&&19>=hour)||(2==day&&8<=hour&&19>=hour)||(3==day&&8<=hour&&19>=hour)||(4==day&&8<=hour&&19>=hour)||(5==day&&8<=hour&&19>=hour)||(6==day&&9<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 3pm-10pm Fri 3pm-11pm Sat 11am-11pm */
	if(((0==day&&14<=hour&&21>=hour)||(1==day&&14<=hour&&21>=hour)||(2==day&&14<=hour&&21>=hour)||(3==day&&14<=hour&&21>=hour)||(4==day&&14<=hour&&21>=hour)||(5==day&&14<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-5pm Mon-Fri 10am-8pm Sat 9am-5pm */
	if(((0==day&&10<=hour&&16>=hour)||(1==day&&9<=hour&&19>=hour)||(2==day&&9<=hour&&19>=hour)||(3==day&&9<=hour&&19>=hour)||(4==day&&9<=hour&&19>=hour)||(5==day&&9<=hour&&19 >= hour)||(6 == day && 8 <= hour && 16 >= hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var slot=document.getElementById("MandarineChineseRestaurant");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Fri 11am-2:30pm & 4pm-9pm Sat 11am-9pm */
	if((((1==day&&10<=hour&&13>=hour)||(1==day&&15<=hour&&20>=hour))||((2==day&&10<=hour&&13>=hour)||(2==day&&15<=hour&&20>=hour))||((3==day&&10<=hour&&13>=hour)||(3==day&&15<=hour&&20>=hour))||((4==day&&10<=hour&&13>=hour)||(4==day&&15<=hour&&20>=hour))||((5==day&&10<=hour&&13>=hour)||(5==day&&15<=hour&&20>=hour))||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Tues-Fri 10:30am-6pm Sat 10:30am 3:30pm */
	if(((2==day&&10<=hour&&17>=hour)||(3==day&&10<=hour&&17>=hour)||(4==day&&10<=hour&&17>=hour)||(5==day&&10<=hour&&17>=hour)||(6==day&&10<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Quilting Workshop x*/
function QuiltingWorkshop() {
	var slot=document.getElementById("QuiltingWorkshop");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10am-4pm */
	if(((1==day&&9<=hour&&16>=hour)||(2==day&&9<=hour&&16>=hour)||(3==day&&9<=hour&&16>=hour)||(4==day&&9<=hour&&16>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&9<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Lavender & Lace Antiques x*/
function LavenderAndLaceAntiques() {
	var slot=document.getElementById("LavenderAndLaceAntiques");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Tues-Fri 11am-5pm Sat 10am-3pm */
	if(((2==day&&10<=hour&&16>=hour)||(3==day&&10<=hour&&16>=hour)||(4==day&&10<=hour&&16>=hour)||(5==day&&10<=hour&&16>=hour)||(6==day&&9<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 10:30am-12am Fri-Sat 10:30-2am */
	if(((0==day&&10<=hour&&23>=hour)||(1==day&&10<=hour&&23>=hour)||(2==day&&10<=hour&&23>=hour)||(3==day&&10<=hour&&23>=hour)||(4==day&&10<=hour&&23>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Navieve Fromagerie x*/
function NavieveFromagerie() {
	var slot=document.getElementById("NavieveFromagerie");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Tues-Fri 10am-6pm Sat 9am-3pm */
	if(((2==day&&9<=hour&&17>=hour)||(3==day&&9<=hour&&17>=hour)||(4==day&&9<=hour&&17>=hour)||(5==day&&9<=hour&&17>=hour)||(6==day&&8<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KFC x*/
function KFCWausau() {
	var slot=document.getElementById("KFCWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 11am-9pm Mon-Sat 11am-10pm */
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Tues-Sat 10am-4pm */
	if(((2==day&&9<=hour&&15>=hour)||(3==day&&9<=hour&&15>=hour)||(4==day&&9<=hour&&15>=hour)||(5==day&&9<=hour&&15>=hour)||(6==day&&9<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon 10am-7pm Tues-Sat 10am-4pm */
	if(((1==day&&9<=hour&&18>=hour)||(2==day&&9<=hour&&15>=hour)||(3==day&&9<=hour&&15>=hour)||(4==day&&9<=hour&&15>=hour)||(5==day&&9<=hour&&15>=hour)||(6==day&&9<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var slot=document.getElementById("ReservoirPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Starbucks x*/
function StarbucksWausau() {
	var slot=document.getElementById("StarbucksWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var coffee=document.getElementById("choiceCoffee").checked;
	/* Sun-Thurs 5:30am-9pm Fri&Sat 5:30am-10pm */
	if(((0==day&&5<=hour&&20>=hour)||(1==day&&5<=hour&&20>=hour)||(2==day&&5<=hour&&20>=hour)||(3==day&&5<=hour&&20>=hour)||(4==day&&5<=hour&&20>=hour)||(5==day&&5<=hour&&21>=hour)||(6==day&&5<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		coffee){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* King Buffet x*/
function KingBuffet() {
	var slot=document.getElementById("KingBuffet");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 11am-9pm */
	if((10<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Royal Nails & Spa */
function RoyalNailsAndSpa() {
	var slot=document.getElementById("RoyalNailsAndSpa");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 10am-5pm Mon-Fri 9am-7pm Sat 9am-9pm */
	if(((0==day&&9<=hour&&16>=hour)||(1==day&&8<=hour&&18>=hour)||(2==day&&8<=hour&&18>=hour)||(3==day&&8<=hour&&18>=hour)||(4==day&&8<=hour&&18>=hour)||(5==day&&8<=hour&&18>=hour)||(6==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		inside){
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
	var slot=document.getElementById("LaTaqueria");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 10:30pm-8pm Mon Closed Tues-Thurs 11am-9pm Fri& Sat 11am-10pm*/
	if(((0==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=3&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Great Dane x*/
function GreatDane() {
	var slot=document.getElementById("GreatDane");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 11am-12am Fri & Sat 11am-2:30am */
	if(((0==day&&10<=hour&&23>=hour)||(1==day&&10<=hour&&23>=hour)||(2==day&&10<=hour&&23>=hour)||(3==day&&10<=hour&&23>=hour)||(4==day&&10<=hour&&23>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		dollar>=25&&
		(eat||bar)){
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
	var slot=document.getElementById("TreusTicTocClub");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Everyday 11am-2am */
	if(((1>=hour)||(10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=7&&
		(eat||bar)){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* The Red Apple Family Restraurant x*/
function TheRedAppleFamilyRestaurant() {
	var slot=document.getElementById("TheRedAppleFamilyRestaurant");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 6am-8pm Fri&Sat 6am-10pm */
	if(((0==day&&5<=hour&&19>=hour)||(1==day&&5<=hour&&19>=hour)||(2==day&&5<=hour&&19>=hour)||(3==day&&5<=hour&&19>=hour)||(4==day&&5<=hour&&19>=hour)||(5==day&&5<=hour&&21>=hour)||(6==day&&5<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Rice's Antiques & Architechtural Salvage x*/
function RicesAntiquesAndArchitechturalSalvage() {
	var slot=document.getElementById("RicesAntiquesAndArchitechturalSalvage");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun&Mon 9am-5pm Tues-Thurs Closed Fri 10am-5pm Sat 9am-5pm */
	if(((0==day&&8<=hour&&16>=hour)||(1==day&&8<=hour&&16>=hour)||(5==day&&9<=hour&&16<=hour)||(6==day&&8<=hour&&16<=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Hmong Eggroll x*/
function HmongEggroll() {
	var slot=document.getElementById("HmongEggroll");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Wed-Mon 10:30am-7pm */ 
	if(((0==day&&10<=hour&&18>=hour)||(1==day&&10<=hour&&18>=hour)||(3==day&&10<=hour&&18>=hour)||(4==day&&10<=hour&&18>=hour)||(5==day&&10<=hour&&18>=hour)||(6==day&&10<=hour&&18>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
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
	var slot=document.getElementById("LilDevilsGlass");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 9am-9pm Mon-Sat 9am-10pm */
	if(((0==day&&8<=hour&&20>=hour)||(1==day&&8<=hour&&21>=hour)||(2==day&&8<=hour&&21>=hour)||(3==day&&8<=hour&&21>=hour)||(4==day&&8<=hour&&21>=hour)||(5==day&&8<=hour&&21>=hour)||(6==day&&8<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* St. Vincent De Paul of Wausau x*/
function StVincentDePaulOfWausau() {
	var slot=document.getElementById("StVincentDePaulOfWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon 9am-8pm Tues-Fri 9am-5pm Sat 9am-4pm */
	if(((1==day&&8<=hour&&19>=hour)||(2==day&&8<=hour&&16>=hour)||(3==day&&8<=hour&&16>=hour)||(4==day&&8<=hour&&16>=hour)||(5==day&&8<=hour&&16>=hour)||(6==day&&8<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dairy Queen Store x*/
function DairyQueenStore() {
	var slot=document.getElementById("DairyQueenStore");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 12pm-9pm Mon-Sat 11am-9pm */
	if(((0==day&&11<=hour&&20>=hour)||(1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Central Wisconsin Water Walkers x*/
function CentralWisconsinWaterWalkers() {
	var slot=document.getElementById("CentralWisconsinWaterWalkers");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var outside=document.getElementById("choiceOutsideActivity").checked;
	if((city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* DC Everest Country Park x*/
function DCEverestCountryPark() {
	var slot=document.getElementById("DCEverestCountryPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Three "M" Park x*/
function ThreeMPark() {
	var slot = document.getElementById("ThreeMPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Lumpy's x*/
function Lumpys() {
	var slot=document.getElementById("Lumpys");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Everyday 11am-2:30am */
	if(((1>=hour)||(10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=20&&
		bar){
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
	var slot=document.getElementById("BBJacksPizzaAndSandwichLounge");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/*Sun 9am-10pm Mon-Sat 11am-11pm */
	if(((0==day&&8<=hour&&21>=hour)||(1==day&&10<=hour&&22>=hour)||(2==day&&10<=hour&&22>=hour)||(3==day&&10<=hour&&22>=hour)||(4==day&&10<=hour&&22>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
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
	var slot=document.getElementById("SylvanHillPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked
	/* Everyday 6am-11pm */
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
/* Lucky's Eastside Pub x*/
function LuckysEastsidePub() {
	var slot=document.getElementById("LuckysEastsidePub");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 7am-2am Fri&Sat 7am-2:30am */
	if(((6<=hour&&23>=hour)||(1>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Gilbert Park x*/
function GilbertPark() {
	var slot=document.getElementById("GilbertPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* River Edge Walkway x*/
function RiverEdgeWalkway() {
	var slot=document.getElementById("RiverEdgeWalkway");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Wausau Music Center x*/
function WausauMusicCenter() {
	var slot=document.getElementById("WausauMusicCenter");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Thurs 10am-6pm Fri 10am-5pm */
	if(((1==day&&9<=hour&&17>=hour)||(2==day&&9<=hour&&17>=hour)||(3==day&&9<=hour&&17>=hour)||(4==day&&9<=hour&&17>=hour)||(5==day&&9<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Divepoint Scuba Paddle & Adventure Center x*/
function DivepointScubaPaddleAndAdventureCenter() {
	var slot=document.getElementById("DivepointScubaPaddleAndAdventureCenter");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Sun 10am-3pm Mon-Thurs 10am-6pm Fri 9am-7pm Sat 9am-3pm */
	if(((0==day&&9<=hour&&14>=hour)||(1==day&&9<=hour&&17>=hour)||(2==day&&9<=hour&&17>=hour)||(3==day&&9<=hour&&17>=hour)||(4==day&&9<=hour&&17>=hour)||(5==day&&8<=hour&&18>=hour)||(6==day&&8<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=20&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Thrive Foodery x*/
function ThriveFoodery() {
	var slot=document.getElementById("ThriveFoodery");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Sat 11am-10pm */
	if(((1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		eat){
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
	var slot=document.getElementById("KaiserPool");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Mon&Tues 1pm-7:50pm Wed 1pm-8pm Thurs-Sun 1pm-7:50pm */
	if((12<=hour&&19>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=2&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bob & Randy's Bar x*/
function BobAndRandysBar() {
	var slot=document.getElementById("BobAndRandysBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 7am-2am Fri&Sat 7am-2:30am */
	if(((6<=hour&&23>=hour)||(1>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=10&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Sixth Street Filling Station x*/
function SixthStreetFillingStation() {
	var slot=document.getElementById("SixthStreetFillingStation");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Tues-Sun 6:30am-2pm */
	if(((0==day&&6<=hour&&13>=hour)||(2==day&&6<=hour&&13>=hour)||(3==day&&6<=hour&&13>=hour)||(4==day&&6<=hour&&13>=hour)||(5==day&&6<=hour&&13>=hour)||(6==day&&6<=hour&&13>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Loppnow's Bar x*/
function LoppnowsBar() {
	var slot=document.getElementById("LoppnowsBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Everyday 12pm-2:30am */
	if(((11<=hour&&23>=hour)||(1>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
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
	var slot=document.getElementById("SubwayWausauTwo");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Fri 7am-10pm Sat&Sun 8am-9pm */
	if(((0==day&&7<=hour&&20>=hour)||(1==day&&6<=hour&&21>=hour)||(2==day&&6<=hour&&21>=hour)||(3==day&&6<=hour&&21>=hour)||(4==day&&6<=hour&&21>=hour)||(5==day&&6<=hour&&21>=hour)||(6==day&&7<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* CV x*/
/* Wausau on Water x*/
function WausauOnWater() {
	var slot = document.getElementById("WausauOnWater");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 11am-10pm Fri&Sat 11am-12am */
	if(((0==day&&10<=hour&&21>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=20&&
		(eat||inside||bar)){
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
	var slot=document.getElementById("BlackPurl");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Tues-Fri 10am-5pm Sat 10am-3pm */
	if(((2==day&&9<=hour&&16>=hour)||(3==day&&9<=hour&&16>=hour)||(4==day&&9<=hour&&16>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&9<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Glass Hat x*/
function TheGlassHat() {
	var slot=document.getElementById("TheGlassHat");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Tues-Thurs 5pm-2am Fri&Sat 5pm-2:30 */
	if((((2==day&&16<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&16<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&16<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&16<=hour&&23>=hour)||(6==day&&1>=hour))||((5==day&&16<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&16<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Angelo's Family Pizzeria x*/
function AngelosFamilyPizzeria(){
	var slot=document.getElementById("AngelosFamilyPizzeria");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun&Mon 4pm-10pm Tues-Thurs 4pm-11pm Fri 4pm-12am Sat 4pm-11pm */
	if(((0==day&&15<=hour&&21>=hour)||(1==day&&15<=hour&&21>=hour)||(2==day&&15<=hour&&22>=hour)||(3==day&&15<=hour&&22>=hour)||(4==day&&15<=hour&&22>=hour)||(5==day&&15<=hour&&23>=hour)||(6==day&&15<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hope Thrift Store x*/
function HopeThriftStore() {
	var slot=document.getElementById("HopeThriftStore");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Sat 10am-6pm */
	if(((1==day&&9<=hour&&17>=hour)||(2==day&&9<=hour&&17>=hour)||(3==day&&9<=hour&&17>=hour)||(4==day&&9<=hour&&17>=hour)||(5==day&&9<=hour&&17>=hour)||(6==day&&9<=hour&&17>=hour))&&	
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var slot=document.getElementById("MarathonCountyHistoricalSociety");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9 am-4:30pm Sat&Sun 1pm-4:30pm */
	if(((0==day&&12<=hour&&15>=hour)||(2==day&&8<=hour&&15>=hour)||(3==day&&8<=hour&&15>=hour)||(4==day&&8<=hour&&15>=hour)||(5==day&&8<=hour&&15>=hour )||(6==day&&12<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Yawkey House Museum x*/
function YawkeyHouseMuseum() {
	var slot=document.getElementById("YawkeyHouseMuseum");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9am-4:30pm Sat&Sun 1pm-4:30pm */
	if(((0==day&&12<=hour&&15>=hour)||(2==day&&8<=hour&&15>=hour)||(3==day&&8<=hour&&15>=hour)||(4==day&&8<=hour&&15>=hour)||(5==day&&8<=hour&&15>=hour)||(6==day&&12<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Barker-Stewart Island Park x*/
function BarkerStewartIslandPark() {
	var slot=document.getElementById("BarkerStewartIslandPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Big Bull Falls Park x*/
function BigBullFallsPark() {
	var slot=document.getElementById("BigBullFallsPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Evolution In Design x*/
function EvolutionInDesign() {
	var slot=document.getElementById("EvolutionInDesign");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 8am-6pm Sat 9m-3pm */
	if(((1==day&&7<=hour&&17>=hour)||(2==day&&7<=hour&&17>=hour)||(3==day&&7<=hour&&17>=hour)||(4==day&&7<=hour&&17>=hour)||(5==day&&7<=hour&&17>=hour)||(6==day&&8<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau") &&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Nichole's Boutique x*/
function NicholesBoutique() {
	var slot=document.getElementById("NicholesBoutique");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Wed 10am-6pm Thur&Fri 10am-7pm Sat 10am-6pm */
	if(((1==day&&9<=hour&&17>=hour)||(2==day&&9<=hour&&17>=hour)||(3==day&&9<=hour&&17>=hour)||(4==day&&9<=hour&&18>=hour)||(5==day&&9<=hour&&18>=hour)||(6==day&&9<=hour&&17>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Back When Cafe x*/
function BackWhenCafe() {
	var slot=document.getElementById("BackWhenCafe");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Tues-Sat 5pm-10pm */
	if(((2==day&&16<=hour&&21>=hour)||(3==day&&16<=hour&&21>=hour)||(4==day&&16<=hour&&21>=hour)||(5==day&&16<=hour&&21>=hour)||(6==day&&16<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Sweets on Third x*/
function SweetsOnThird() {
	var slot=document.getElementById("SweetsOnThird");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Sun 9pm-5pm Mon-Sat 9am-7pm */
	if(((0==day&&8<=hour&&16>=hour)||(1==day&&8<=hour&&18>=hour)||(2==day&&8<=hour&&18>=hour)||(3==day&&8<=hour&&18>=hour)||(4==day&&8<=hour&&18>=hour)||(5==day&&8<=hour&&18>=hour)||(6==day&&8<=hour&&18>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=2&&
		icecream){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* La Prima x*/
function LaPrima() {
	var slot=document.getElementById("LaPrima");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Fri 7am-6pm Sat 8am-4pm */
	if(((1==day&&6<=hour&&17>=hour)||(2==day&&6<=hour&&17>=hour)||(3==day&&6<=hour&&17>=hour)||(4==day&&6<=hour&&17>=hour)||(5==day&&6<=hour&&17>=hour)||(6==day&&7<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wausau Museum of Contemporary Art x*/
function WausauMuseumOfContemporaryArt() {
	var slot=document.getElementById("WausauMuseumOfContemporaryArt");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Tues-Sat 12pm-5pm */
	if(((2==day&&11<=hour&&16>=hour)||(3==day&&11<=hour&&16>=hour)||(4==day&&11<=hour&&16>=hour)||(5==day&&11<=hour&&16>=hour)||(6==day&&11<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Janke Book Store x*/
function JankeBookStore () {
	var slot=document.getElementById("JankeBookStore");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 9am-6pm Sat 9am-5pm */
	if(((1==day&&8<=hour&&17>=hour)||(2==day&&8<=hour&&17>=hour)||(3==day&&8<=hour&&17>=hour)||(4==day&&8<=hour&&17>=hour)||(5==day&&8<=hour&&17>=hour)||(6==day&&8<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Shepherd & Schaller Sporting x*/
function ShepherdAndSchallerSporting() {
	var slot=document.getElementById("ShepherdAndSchallerSporting");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Wed 9am-6pm Thurs&Fri 9am-8pm Sat 9am-5pm */
	if(((1==day&&8<=hour&&17>=hour)||(2==day&&8<=hour&&17>=hour)||(3==day&&8<=hour&&17>=hour)||(4==day&&8<=hour&&19>=hour)||(5==day&&8<=hour&&19>=hour)||(6==day&&8<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Leigh Yawkey Woodson Art Museum x*/
function LeighYawkeyWoodsonArtMuseum() {
	var slot=document.getElementById("LeighYawkeyWoodsonArtMuseum");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Tues-Fri 9am-4pm Sat&Sun 12pm-5pm */
	if(((0==day&&11<=hour&&16>=hour)||(2==day&&8<=hour&&15>=hour)||(3==day&&8<=hour&&15>=hour)||(4==day&&8<=hour&&15>=hour)||(5==day&&8<=hour&&15>=hour)||(6==day&&11<=hour&&16>= hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Grand Theater x*/
function TheGrandTheater() {
	var slot=document.getElementById("TheGrandTheater");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	if((city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Erbert and Gerbert's x*/
function ErbertAndGerberts() {
	var slot=document.getElementById("ErbertAndGerberts");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Thurs 10:30am-10pm Fri&Sat 10:30am-2:30am Sun 11am-10pm */
	if(((0==day&&10<=hour&&21>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Intermission x*/
function Intermission() {
	var slot=document.getElementById("Intermission");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Mon-Thurs 2pm-2am Fri 11am-2am Sat 11am-4pm */
	if((((1==day&&13<=hour&&23>=hour)||(2==day&&1>=hour))||((2==day&&13<=hour&&23>=hour)||(3==day&&1>=hour))||((3==day&&13<=hour&&23>=hour)||(4==day&&1>=hour))||((4==day&&13<=hour&&23>=hour)||(5==day&&1>=hour))||((5==day&&10<=hour&&23>=hour)||(6==day&&1>=hour))||(6==day&&10<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
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
	var slot=document.getElementById("PoppysBoutique");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Wed-Fri 12pm-6pm Sat 11am-4pm */
	if(((3==day&&11<=hour&&17>=hour)||(4==day&&11<=hour&&17>=hour)||(5==day&&11<=hour&&17>=hour)||(6==day&&10<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Polito's Pizza x*/
function PolitosPizzaWausau() {
	var slot=document.getElementById("PolitosPizzaWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri 11am-11pm Sat 11am-10pm Sun 11am-8pm */
	if(((0==day&&10<=hour&&19>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=3&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Daly's x*/
function Dalys() {
	var slot=document.getElementById("Dalys");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri&Sat 3pm-12am */
	if(((1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&14<=hour&&23>=hour)||(6==day&&14<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=8&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Mon-Thurs 11am-9pm Fri&Sat 11am-2am */
	if(((1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||((5==day&&10<=hour&&23>=hour)||(6==day&&1>=hour))||((6==day&&10<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Issac's Fine Appearel Inc. x*/
function IssacsFineAppearelInc() {
	var slot=document.getElementById("IssacsFineAppearelInc");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 10am-5:30pm Sat 10am-4pm */
	if(((1==day&&9<=hour&&16>=hour)||(2==day&&9<=hour&&16>=hour)||(3==day&&9<=hour&&16>=hour)||(4==day&&9<=hour&&16>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&9<=hour&&15>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var slot=document.getElementById("CityGrill");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Thurs 11am-10pm Fri&Sat 11am-11pm */
	if(((1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=8&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Malarkey's Pub & townies Grill x */
function MalarkeysPubAndTowniesGrill() {
	var slot=document.getElementById("MalarkeysPubAndTowniesGrill");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun 10am-3pm Tues-Sat 11am-9pm */
	if(((0==day&&9<=hour&&14>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Central Board shop x*/
function CentralBoardShop() {
	var slot=document.getElementById("CentralBoardShop");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 12pm-5pm Mon-Fri 11am-8pm Sat 11am-6pm */
	if(((0==day&&11<=hour&&16>=hour)||(1==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&19>=hour)||(6==day&&10<=hour&&17>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Antiques by Ginny x*/
function AntiquesByGinny() {
	var slot=document.getElementById("AntiquesByGinny");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Tues-Fri 11:30am-4:30pm Sat 10am-3pm */
	if(((2==day&&11<=hour&&15>=hour)||(3==day&&11<=hour&&15>=hour)||(4==day&&11<=hour&&15>=hour)||(5==day&&11<=hour&&15>=hour)||(6==day&&9<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Local x*/
function TheLocal() {
	var slot=document.getElementById("TheLocal");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-3pm Tues-Sat 10am-5:30pm */ 
	if(((0==day&&10<=hour&&14>=hour)||(2==day&&10<=hour&&16>=hour)||(3==day&&10<=hour&&16>=hour)||(4==day&&10<=hour&&16>=hour)||(5==day&&10<=hour&&16>=hour)||(6==day&&10<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Mint Cafe x*/
function TheMintCafe() {
	var slot=document.getElementById("TheMintCafe");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Fri 6:30am-8pm Sat 7am-3pm */
	if(((1==day&&6<=hour&&19>=hour)||(2==day&&6<=hour&&19>=hour)||(3==day&&6<=hour&&19>=hour)||(4==day&&6<=hour&&19>=hour)||(5==day&&6<=hour&&19>=hour)||(6==day&&6<=hour&&14>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=6&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 12pm-7pm Sat 12pm-5pm */
	if(((1==day&&11<=hour&&18>=hour)||(2==day&&11<=hour&&18>=hour)||(3==day&&11<=hour&&18>=hour)||(4==day&&11<=hour&&18>=hour)||(5==day&&11<=hour&&18>=hour)||(6==day&&11<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Limericks Public House x*/
function LimericksPublicHouse() {
	var slot=document.getElementById("LimericksPublicHouse");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Tues-Thurs 4pm-11:30pm Fri&Sat 4pm-2:30am */
	if(((2==day&&15<=hour&&22>=hour)||(3==day&&15<=hour&&22>=hour)||(4==day&&15<=hour&&22>=hour)||((5==day&&15<=hour&&23>=hour)||(6==day&1>=hour))||((6==day&&15<=hour&&23>=hour)||(0==day&&1>=hour)))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Chang Garden Wausau x*/
function ChangGardenWausau() {
	var slot=document.getElementById("ChangGardenWausau");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Tues-Thurs 11am-8:30pm Fri&Sat 11am-9:30pm Sun 11am-8:30pm */
	if(((0==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=6&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Marathon County Public Library x*/
function MarathonCountyPublicLibrary() {
	var slot=document.getElementById("MarathonCountyPublicLibrary");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Mon-Thurs 9am-8:30pm Fri&Sat 9am-5pm Sun 1pm-5pm */
	if(((0==day&&12<=hour&&16>=hour)||(1==day&&8<=hour&&19>=hour)||(2==day&&8<=hour&&19>=hour)||(3==day&&8<=hour&&19>=hour)||(4==day&&8<=hour&&19>=hour)||(5==day&&8<=hour&&16>=hour)||(6==day&&8<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Wausau Center/Mall x*/
function WausauCenterMall() {
	var slot=document.getElementById("WausauCenterMall");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-6pm Mon-Sat 10am-8pm */
	if(((0==day&&10<=hour&&17>=hour)||(1==day&&9<=hour&&19>=hour)||(2==day&&9<=hour&&19>=hour)||(3==day&&9<=hour&&19>=hour)||(4==day&&9<=hour&&19>=hour)||(5==day&&9<=hour&&19>=hour)||(6==day&&9<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
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
	var slot=document.getElementById("RedEyeBrewingCompany");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Mon-Sat 11am-9pm */
	if(((1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Patina Coffeehouse x*/
function PatinaCoffeeHouse() {
	var slot=document.getElementById("PatinaCoffeeHouse");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 8am-3pm Mon-Fri 7am-5pm */
	if(((0==day&&7<=hour&&14>=hour)||(1==day&&6<=hour&&16>=hour)||(2==day&&6<=hour&&16>=hour)||(3==day&&6<=hour&&16>=hour)||(4==day&&6<=hour&&16>=hour)||(5==day&&6<=hour&&16>=hour)||(6==day&&6<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=2&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (city==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* EU x*/
/* Pleasant View Park x*/
function PleasantViewPark() {
	var slot=document.getElementById("PleasantViewPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Memorial Pool x*/
function MemorialPool() {
	var slot = document.getElementById("MemorialPool");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 1pm-7:30pm */
	if((12<=hour&&18>=hour)&&
		(city==="All of Wausau"||age==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=1&&
		outside){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 8am-11pm */
	if((7<=hour&&22>=hour)&&
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
/* Alexander Park x*/
function AlexanderPark() {
	var slot=document.getElementById("AlexanderPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Airport Park x*/
function AirportPark() {
	var slot=document.getElementById("AirportPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* FA x*/
/* Grand Valley Adventures x*/
function GrandValleyAdventures() {
	var slot=document.getElementById("GrandValleyAdventures");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Wed-Fri 12pm-5pm Sat 10am-5pm Sat 10am-5pm Sun 12pm-6pm */
	if(((0==day&&11<=hour&&17>=hour)||(3==day&&11<=hour&&16>=hour)||(4==day&&11<=hour&&16>=hour)||(5==day&&11<=hour&&16>=hour)||(6==day&&9<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=40&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Eastbay Sports Complex x*/
function EastbaySportsComplex() {
	var slot=document.getElementById("EastbaySportsComplex");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
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
/* Jenny's Family Restaurant x*/
function JennysFamilyRestaurant() {
	var slot = document.getElementById("JennysFamilyRestaurant");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 6am-8pm */
	if((5<=hour&&19>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 4pm-9pm Fri&Sat 4pm-10pm */ 
	if(((0==day&&15<=hour&&20>=hour)||(1==day&&15<=hour&&20>=hour)||(2==day&&15<=hour&&20>=hour)||(3==day&&15<=hour&&20>=hour)||(4==day&&15<=hour&&20>=hour)||(5==day&&15<=hour&&21>=hour)||(6==day&&15<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dairy Queen (treats only) x*/
function DairyQueenTreatsOnly() {
	var slot=document.getElementById("DairyQueenTreatsOnly");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Everyday 10am-9pm */
	if((9<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Wausau")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		icecream){
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
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Sat 11am-9pm */
	if(((1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&20>=hour)||(6==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Weston")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
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
/* Liberty Park x*/
function LibertyPark() {
	var slot=document.getElementById("LibertyPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bluegill Bay Park x*/
function BluegillBayPark() {
	var slot=document.getElementById("BluegillBayPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hobby Lobby x*/
function HobbyLobby() {
	var slot=document.getElementById("HobbyLobby");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Sat 9am-8pm */
	if(((1==day&&8<=hour&&19>=hour)||(2==day&&8<=hour&&19>=hour)||(3==day&&8<=hour&&19>=hour)||(4==day&&8<=hour&&19>=hour)||(5==day&&8<=hour&&19>=hour)||(6==day&&8<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* PetSmart x*/
function PetSmart() {
	var slot=document.getElementById("PetSmart");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(inside||shopping)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bed Bath & Body Works x*/
function BedBathAndBodyWorks() {
	var slot=document.getElementById("BedBathAndBodyWorks");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-6pm Mon-Fri 10am-9pm Sat 9:30am-9pm */
	if(((0==day&&10<=hour&&17>=hour)||(1==day&&9<=hour&&20>=hour)||(2==day&&9<=hour&&20>=hour)||(3==day&&9<=hour&&20>=hour)||(4==day&&9<=hour&&20>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Old Navy x*/
function OldNavy() {
	var slot=document.getElementById("OldNavy");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9:30am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&9<=hour&&20>=hour)||(2==day&&9<=hour&&20>=hour)||(3==day&&9<=hour&&20>=hour)||(4==day&&9<=hour&&20>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Gordmans x*/
function Gordmans() {
	var slot=document.getElementById("Gordmans");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-9:30pm Mon-Sat9am-9:30pm */
	if(((0==day&&9<=hour&&20>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Michaels x*/
function Michaels() {
	var slot=document.getElementById("Michaels");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Becca's Cafe, Bistro & Catering x*/
function BeccasCafeBistroAndCatering() {
	var slot=document.getElementById("BeccasCafeBistroAndCatering");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/*Sun 10:30am-3pm Mon-Sat 10:30am-8pm */
	if(((0==day&&10<=hour&&14>=hour)||(1==day&&10<=hour&&19>=hour)||(2==day&&10<=hour&&19>=hour)||(3==day&&10<=hour&&19>=hour)||(4==day&&10<=hour&&19>=hour)||(5==day&&10<=hour&&19>=hour)||(6==day&&10<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=6&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bliss Nails & Spa x*/
function BlissNailsAndSpa() {
	var slot=document.getElementById("BlissNailsAndSpa");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Mon-Sat 9am-7pm */
	if(((1==day&&8<=hour&&18>=hour)||(2==day&&8<=hour&&18>=hour)||(3==day&&8<=hour&&18>=hour)||(4==day&&8<=hour&&18>=hour)||(5==day&&8<=hour&&18>=hour)||(6==day&&8<=hour&&18>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* GameStop x*/
function GameStop() {
	var slot=document.getElementById("GameStop");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 9am-7pm Mon-Sat 8am-9pm */
	if(((0==day&&8<=hour&&18>=hour)||(1==day&&7<=hour&&20>=hour)||(2==day&&7<=hour&&20>=hour)||(3==day&&7<=hour&&20>=hour)||(4==day&&7<=hour&&20>=hour)||(5==day&&7<=hour&&20>=hour)||(6==day&&7<=hour7&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* IH x*/
/* Goodwill x*/
function GoodwillRibMountain() {
	var slot=document.getElementById("GoodwillRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 9am-7pm Mon-Sat 8am-9pm */
	if(((0==day&&8<=hour&&18>=hour)||(1==day&&7<=hour&&20>=hour)||(2==day&&7<=hour&&20>=hour)||(3==day&&7<=hour&&20>=hour)||(4==day&&7<=hour&&20>=hour)||(5==day&&7<=hour&&20>=hour)||(6==day&&7<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Vapour Lounge x*/
function TheVapourLounge() {
	var slot=document.getElementById("TheVapourLounge");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 12pm-6pm Mon-Thurs 10am-8pm Fri&Sat 10am-9pm */
	if(((0==day&&11<=hour&&17>=hour)||(1==day&&9<=hour&&19>=hour)||(2==day&&9<=hour&&19>=hour)||(3==day&&9<=hour&&19>=hour)||(4==day&&9<=hour&&19>=hour)||(5==day&&9<=hour&&20>=hour)||(6==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Briq's x*/
function BriqsRibMountain() {
	var slot=document.getElementById("BriqsRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Everyday 12pm-11pm */
	if((11<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=4&&
		icecream){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Doepke Recreation Area x*/
function DoepkeRecreationArea() {
	var slot=document.getElementById("DoepkeRecreationArea");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* IM x*/
/* Starbucks x*/
function StarbucksRibMountain() {
	var slot=document.getElementById("StarbucksRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var coffee=document.getElementById("choiceCoffee").checked;
	/* Sun-Thurs 5:30am-9pm Fri&Sat 5:30am-10pm*/
	if(((0==day&&5<=hour&&20>=hour)||(1==day&&5<=hour&&20>=hour)||(2==day&&5<=hour&&20>=hour)||(3==day&&5<=hour&&20>=hour)||(4==day&&5<=hour&&20>=hour)||(5==day&&5<=hour&&21>=hour)||(6==day&&5<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=4&&
		coffee){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* McDonald's x*/
function McDonaldsRibMountain() {
	var slot=document.getElementById("McDonaldsRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 5am-12am */
	if((4<=hour&&23>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=1&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dick's Sporting Goods x*/
function DicksSportingGoods() {
	var slot=document.getElementById("DicksSportingGoods");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9am-9:30pm */
	if(((0==day&&9<=hour&&18>=hour)||(1==day&&8<=hour&&20>=hour)||(2==day&&8<=hour&&20>=hour)||(3==day&&8<=hour&&20>=hour)||(4==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&20>=hour)||(6==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Red Robins x*/
function RedRobins() {
	var slot=document.getElementById("RedRobins");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-10pm Fri&Sat 11am-11pm */
	if(((0==day&&10<=hour&&21>=hour)||(1==day&&10<=hour&&21>=hour)||(2==day&&10<=hour&&21>=hour)||(3==day&&10<=hour&&21>=hour)||(4==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=8&&
		(bar||eat)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hu Hot x*/
function HuHot() {
	var slot=document.getElementById("HuHot");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 11am-9pm Fri&Sat 11am-10pm */
	if(((0==day&&10<=hour&&20>=hour)||(1==day&&10<=hour&&20>=hour)||(2==day&&10<=hour&&20>=hour)||(3==day&&10<=hour&&20>=hour)||(4==day&&10<=hour&&20>=hour)||(5==day&&10<=hour&&21>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Ropa's Chicago Style Pizza x*/
function RopasChicagoStylePizza() {
	var slot=document.getElementById("RopasChicagoStylePizza");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thurs 10am-9pm Fri&Sat 10:30am-11pm */
	if(((0==day&&9<=hour&&20>=hour)||(1==day&&9<=hour&&20>=hour)||(2==day&&9<=hour&&20>=hour)||(3==day&&9<=hour&&20>=hour)||(4==day&&9<=hour&&20>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Fazoli's x*/
function FazolisRibMountain() {
	var slot=document.getElementById("FazolisRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thur 10:30am-10pm Fri&Sat 10:30-11pm */
	if((((0||1||2||3||4)==day&&10<=hour&&21>=hour)||((5||6)==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=6&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Office Max x*/
function OfficeMax() {
	var slot=document.getElementById("OfficeMax");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/*Sun 10am-6pm Mon-Sat 8am-9pm */
	if(((0==day&&9<=hour&&17>=hour)||((1||2||3||4||5||6)==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* T.J. Max x*/
function TJMax() {
	var slot=document.getElementById("TJMax");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Thurs 9:30am-9:30pm Fri&Sat 9:30am-10pm */
	if((((1||2||3||4)==day&&9<=hour&&20>=hour)||((5||6)==day&&9<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dunham's Sports x*/
function DunhamsSports() {
	var slot=document.getElementById("DunhamsSports");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/*Sun 10am-6pm Mon-Sat 9am-9:30pm */
	if(((0==day&&9<=hour&&17>=hour)||((1||2||3||4||5||6)==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Best Buy x*/
function BestBuy() {
	var slot=document.getElementById("BestBuy");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-8pm Mon-Sat 10am-9pm */
	if(((0==day&&9<=hour&&19>=hour)||((1||2||3||4||5||6)==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dollar Tree x*/
function DollarTreeRibMountain() {
	var slot=document.getElementById("DollarTreeRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/*Sun 9am-8pm Mon-Sat 9am-9pm */
	if(((0==day&&8<=hour&&19>=hour)||((1||2||3||4||5||6)==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=1&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Olive Garden x*/
function OliveGarden() {
	var slot=document.getElementById("OliveGarden");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thur 11am-10pm Fri&Sat11am-11pm */
	if((((0||1||2||3||4)==day&&10<=hour&&21>=hour)||((5||6)==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=20&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Kolh's x*/
function Kolhs() {
	var slot=document.getElementById("Kolhs");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 9am-9pm Mon-Thurs 9am-10pm Fri 9am-11pm Sat 8am-11pm */
	if(((0==day&&8<=hour&&20>=hour)||((1||2||3||4)==day&&8<=hour&&21>=hour)||(5==day&&8<=hour&&22>=hour)||(6==day&&7<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JB x*/
/* Barnes & Noble x*/
function BarnesAndNoble() {
	var slot=document.getElementById("BarnesAndNoble");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 10am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&9<=hour&&18>=hour)||((1||2||3||4||5||6)==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JD x*/
/* The Tanning Studio x*/
function TheTanningStudioRibMountain() {
	var slot=document.getElementById("TheTanningStudioRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 10am-4pm Mon-Thur  9am-9pm Fri 9am-8pm Sat 9am-5pm */
	if(((0==day&&9<=hour&&15>=hour)||((1||2||3||4)==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&19>=hour)||(6==day&&8<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=89&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* BioLife Plasma Services x*/
function BioLifePlasmaServices() {
	var slot=document.getElementById("BioLifePlasmaServices");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/*Sun 8am-3pm Tues-Thurs 6am-7pm Fri 6am-5pm */
	if(((0==day&&7<=hour&&14>=hour)||((2||3||4)==day&&5<=hour&&18>=hour)||(5==day&&5<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JG x*/
/* Mykenos Mediterranean Grill x*/
function MykenosMediterraneanGrill() {
	var slot=document.getElementById("MykenosMediterraneanGrill");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/*Mon-Sat 11am-8pm */
	if((((1||2||3||4||5||6)==day&&10<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=4&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Gaming Garage x*/
function TheGamingGarage() {
	var slot=document.getElementById("TheGamingGarage");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	/*Sun 12pm-6pm Mon-Sat 11am-8pm */ 
	var shopping=document.getElementById("choiceShopping").checked;
	if(((0==day&&11<=hour&&17>=hour)||((1||2||3||4||5||6)==day&&10<=hour&&19>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JJ x*/
/* JK x*/
/* Michael's Supper Club x*/
function MichaelsSupperClub() {
	var slot=document.getElementById("MichaelsSupperClub");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Mon-Thurs 4pm-9pm Fri&Sat 4pm-10pm */
	if((((1||2||3||4)==day&&15<=hour&&20>=hour)||((5||6)==day&&15<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bella's Nails and Spa x*/
function BellasNailsAndSpa() {
	var slot=document.getElementById("BellasNailsAndSpa");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 11am-4pm Mon-Thurs 10am-7pm Fri 9am-7pm Sat 9am-5pm */
	if(((0==day&&10<=hour&&15>=hour)||((1||2||3||4)==day&&9<=hour&&18>=hour)||(5==day&&8<=hour&&18>=hour)||(6==day&&8<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JN x*/
/* JO x*/
/* El Tequila Salsa x*/
function ElTequilaSalsa() {
	var slot=document.getElementById("ElTequilaSalsa");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Mon 11am-10pm Tues-Sat 11am-10:30pm */
	if((10<=hour&&21>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="21 and Over")&&
		dollar>=4&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* IHOP x*/
function IHopRibMountain() {
	var slot=document.getElementById("IHopRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thur 6am-10pm Fri&Sat 24hour */
	if(((0||1||2||3||4)==day&&5<=hour&&21>=hour||(5||6)==day)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=4&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Burger King x*/
function BurgerKingRibMountain() {
	var slot=document.getElementById("BurgerKingRibMountain");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/*Sun 7am-12am Mon-Sat 6am-12am */
	if(((0==day&&6<=hour&&23>=hour)||((1||2||3||4||5||6)==day&&5<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Nice as New x*/
function NiceAsNew() {
	var slot=document.getElementById("NiceAsNew");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 11am-5pm Mon-Sat 10am-6pm*/
	if(((0==day&&10<=hour&&16>=hour)||((1||2||3||4||5||6)==day&&9<=hour&&17>=hour))&&
		(city=== "All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JT x*/
/* Rookery View Park x*/
function RookeryViewPark() {
	var slot=document.getElementById("RookeryViewPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Rib Mountain Taphouse x*/
function RibMountainTapHouse() {
	var slot=document.getElementById("RibMountainTapHouse");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thurs 11am-2am Fri&Sat 11am-2:30am */
	if(((10<=hour&&23>=hour)||(1>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Mountain Edge Restaurant, Bar and Bonquets x*/
function MountainEdgeRestaurantBarAndBonquets() {
	var slot=document.getElementById("MountainEdgeRestaurantBarAndBonquets");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Mon-Fri 4pm-12am Sat 11am-12am */
	if((((1||2||3||4||5)==day&&15<=hour&&23>=hour)||(6==day&&10<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* JX x*/
/* JY x*/
/* JZ x*/
/* Rib Mountain Talus Forest State Natural Area x*/
function RibMountainTalusForestStateNaturalArea() {
	var slot=document.getElementById("RibMountainTalusForestStateNaturalArea");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rib Mountain")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KB x*/
/*

	Rothschild

*/
/* Kort Street Boat launch and Park x*/
function KortStreetBoatLaunchAndPark() {
	var slot=document.getElementById("KortStreetBoatLaunchAndPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var park=document.getElementById("choicePark").checked;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		(park||outside)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Politos Pizza x*/
function PolitosPizza() {
	var slot=document.getElementById("PolitosPizza");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 11am-8pm Mon-Thur 11am-10pm Fri 11am-11pm Sat 11am-10pm*/
	if(((0==day&&10<=hour&&19>=hour)||((1||2||3||4)==day&&10<=hour&&21>=hour)||(5==day&&10<=hour&&22>=hour)||(6==day&&10<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Bamboo Hut Chinese & Thai Cuisine x*/
function BambooHutChineseAndThaiCuisine() {
	var slot=document.getElementById("BambooHutChineseAndThaiCuisine");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 11am-7pm Mon-Thur 11am-9pm Fri&Sat 11am-9:30pm */
	if(((0==day&&10<=hour&&18>=hour)||((1||2||3||4)==day&&10<=hour&&20>=hour)||((5||6)==day&&10<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Subway x*/
function SubwayRothschild() {
	var slot=document.getElementById("SubwayRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun 9am-9pm Mon-Wed 7am-9pm Thur&Fri 7am-10pm Sat 8am-10pm */
	if(((0==day&&8<=hour&&20>=hour)||((1||2||3)==day&&6<=hour&&20>=hour)||((4||5)==day&&6<=hour&&21>=hour)||(6==day&&7<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* King Buffet x*/
function KingBuffetRothschild() {
	var slot=document.getElementById("KingBuffetRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 11am-9pm */
	if((10<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Papillon's Pizza x*/
function PapillonsPizza() {
	var slot=document.getElementById("PapillonsPizza");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun-Thur 11am-10pm Fri&Sat 11am-11pm */
	if((((0||1||2||3||4)==day&&10<=hour&&21>=hour)||((5||6)==day&&10<=hour&&22>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Shopko x*/
function ShopkoRothschild() {
	var slot=document.getElementById("ShopkoRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Sun 9am-9pm Mon-Fri 8am-10pm */
	if(((0==day&&8<=hour&&20>=hour)||((1||2||3||4||5)==day&&7<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Coral Lanes x*/
function CoralLanes() {
	var slot=document.getElementById("CoralLanes");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun-Thur 11am-1am Fri 11am-2:30am Sat 9am-2:30am */
	if((((0||1||2||3||4)==day&&((0>=hour)||(10<=hour&&23>=hour)))||(5==day&&((1>=hour)||(10<=hour&&23>=hour)))||(6==day&&((1>=hour)||(8<=hour&&23>=hour))))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KK x*/
/* KL x*/
/* Fashion Villa Studio & Spa x*/
function FashionVillaStudioAndSpa(){
	var slot=document.getElementById("FashionVillaStudioAndSpa");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Mon 9am-8pm Tues-Thur 9am-9pm Fri 9am-6pm Sat 8:30am-2:30pm */
	if(((1==day&&8<=hour&&19>=hour)||((2||3||4)==day&&8<=hour&&20>=hour)||(5==day&&8<=hour&&17>=hour)||(6==day&&8<=hour&&13>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Norm's x*/
function NormsRothschild() {
	var slot=document.getElementById("NormsRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Tues-Sun 11am-9pm */
	if(((0||2||3||4||5||6)==day&&10<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KO x*/
/* 21 Pub  x*/
function TwentyOnePub() {
	var slot=document.getElementById("TwentyOnePub");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var bar=document.getElementById("choiceBar").checked;
	/* Sun 2pm-12am Tues-Sat 2pm-2am */
	if(((0==day&&13<=hour&&23>=hour)||((2||3||4||5||6)==day&&((1>=hour)||(13<=hour&&23>=hour))))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		bar){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Jackie's Antique Mall on Brown x*/
function JackiesAntiqueMallOnBrown() {
	var slot=document.getElementById("JackiesAntiqueMallOnBrown");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Fri&Sat 9am-5pm */
	if(((5||6)==day&&8<=hour&&16>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Rothschild Park x*/
function RothschildPark() {
	var slot=document.getElementById("RothschildPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Marathon County Library x*/
function MarathonCountyLibraryRothschild() {
	var slot=document.getElementById("MarathonCountyLibraryRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Mon-Thur 10am-8pm Fri 10am-5pm Sat 10am-2pm */
	if((((1||2||3||4)==day&&9<=hour&&19>=hour)||(5==day&&9<=hour&&16>=hour)||(6==day&&9<=hour&&13>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Hobby Connection x*/
function HobbyConnection() {
	var slot=document.getElementById("HobbyConnection");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Thur 11am-5pm Fri 10am-6pm Sat 10am-5pm */
	if((((1||2||3||4)==day&&10<=hour&&16>=hour)||(5==day&&9<=hour&&17>=hour)||(6==day&&9<=hour&&16>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* George Street Park x*/
function GeorgeStreetPark() {
	var slot=document.getElementById("GeorgeStreetPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* River Street Park	x*/
function RiverStreetPark() {
	var slot=document.getElementById("RiverStreetPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Gaska Park x*/
function GaskaPark() {
	var slot=document.getElementById("GaskaPark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var park=document.getElementById("choicePark").checked;
	/* Everyday 6am-11pm */
	if((5<=hour&&22>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		park){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* KX x*/
/* KY x*/
/* KZ x*/
/* LA */
/* Gander Outdoor x*/
function GanderOutdoor() {
	var slot=document.getElementById("GanderOutdoor");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
		/* Sun 9am-7pm Mon-Sat 9am-9pm */
	if(((0==day&&8<=hour&&18>=hour)||((1||2||3||4||5||6)==day&&8<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Arby's x*/
function ArbysRothschild() {
	var slot=document.getElementById("ArbysRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
		/* Everyday 6:30am-10pm */
	if((6<=hour&&21>=hour)&&
		(eat==="All of Wausau"||eat==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=7&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Logger's Landing Indoor Waterpark x*/
function LoggersLandingIndoorWaterpark() {
	var slot=document.getElementById("LoggersLandingIndoorWaterpark");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 9am-6pm Thur 5pm-9pm Fri 10am-10pm Sat 9am-10pm */
	if(((0==day&&8<=hour&&17>=hour)||(4==day&&16<=hour&&20>=hour)||(5==day&&9<=hour&&21>=hour)||(6==day&&8<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=20&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* LE */
/* Sawmill Mini Golf x*/
function SawmillMiniGolf() {
	var slot=document.getElementById("SawmillMiniGolf");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var outside=document.getElementById("choiceOutsideActivity").checked;
	/* Sun 10am-6pm Mon-Thur 10am-8pm Fri&Sat 10am-9pm */
	if(((0==day&&9<=hour&&17>=hour)||((1||2||3||4)==day&&9<=hour&&19>=hour)||((5||6)==day&&9<=hour&&20>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		outside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Marcus Cedar Creek Cinema x*/
function MarcusCedarCreekCinema() {
	var slot=document.getElementById("MarcusCedarCreekCinema");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	if((city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=10&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Dimensions of Horrors Phantom Laser Tag x*/
function DimensionsOfHorrorsPhantomLaserTag() {
	var slot=document.getElementById("DimensionsOfHorrorsPhantomLaserTag");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var inside=document.getElementById("choiceInsideActivity").checked;
	/* Sun 3pm-8pm Tues 5pm-8pm Fri 5pm-12pm Sat 3pm-10pm */
	if(((0==day&&14<=hour&&19>=hour)||(2==day&&16<=hour&&19>=hour)||(5==day&&16<=hour&&19>=hour)||(6==day&&14<=hour&&21>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Planet Fitness x*/
function PlanetFitness() {
	var slot=document.getElementById("PlanetFitness");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var inside=document.getElementById("choiceInsideActivity").checked;
	if((city==="All of Wausau"||city==="Rothschild")&&
	    (age==="18-20"||age==="21 and Over")&&
		inside){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Chase Outdoors x*/
function ChaseOutdoors() {
	var slot=document.getElementById("ChaseOutdoors");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var shopping=document.getElementById("choiceShopping").checked;
	/* Mon-Fri 9am-8pm Sat 9am-7pm */
	if((((1||2||3||4||5)==day&&8<=hour&&19>=hour)||(6==day&&8<=hour&&18>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		shopping){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Denny's x*/
function DennysRothschild() {
	var slot=document.getElementById("DennysRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	if((city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* The Bar x*/
function TheBarRothschild() {
	var slot=document.getElementById("TheBarRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var bar=document.getElementById("choiceBar").checked
	/* Everyday 11am-12am */
	if((10<=hour&&23>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="21 and Over")&&
		dollar>=15&&
		(eat||bar)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Subway x*/
function SubwayRothschild() {
	var slot=document.getElementById("SubwayRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Everyday 9am-9pm */
	if((8<=hour&&20>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Culvers x*/
function CulversRothschild() {
	var slot=document.getElementById("CulversRothschild");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	var icecream=document.getElementById("choiceIcecream").checked;
	/* Everyday 10am-10pm */
	if((9<=hour&&21>=hour)&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=5&&
		(eat||icecream)){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
	}
}
/* Green Mill Restaurant & Bar x*/
function GreenMillRestaurantAndBar() {
	var slot=document.getElementById("GreenMillRestaurantAndBar");
	var city=document.getElementById("city").value;
	var age=document.getElementById("age").value; 
	var dollar=document.getElementById("spending").value;
	var eat=document.getElementById("choiceEat").checked;
	/* Sun-Thur 6:30am-11pm Fri&Sat 6:30pm-12am */
	if((((0||1||2||3||4)==day&&6<=hour&&22>=hour)||((5||6)==day&&5<=hour&&23>=hour))&&
		(city==="All of Wausau"||city==="Rothschild")&&
	    (age==="Under 18"||age==="18-20"||age==="21 and Over")&&
		dollar>=15&&
		eat){
		slot.classList.remove("hide");
        slot.classList.add("specificEventWausau");
	} else {
		slot.classList.remove("specificEventWausau");
    		slot.classList.add("hide");
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