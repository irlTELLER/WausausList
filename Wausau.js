/* Pulls the hours of the day for showing/hiding business depending on the hours */
function hours() {
    var d = new Date();
	document.getElementById("timeHours").innerHTML = d.getHours();
}
/* Pulls the day of the week for showing/hiding business depending on the day (Sun = 0; Mon = 1;...Fri = 5; Sat = 6 */
function day() {
	var d = new Date();
  	document.getElementById("timeDay").innerHTML = d.getDay();
}
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
/* MASA x*/
function featuredSlotOne() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceFeatured").checked;
	var hour = document.getElementById("timeHours").value;
    var day = document.getElementById("timeDay").value;
	if( a === "All of Wausau" &&
		d) {
		document.getElementById("featuredSlotOne").style.display = "block";
	} else {
		document.getElementById("featuredSlotOne").style.display = "none";
	}
}
/* A x*/
/* Humane Society of Marathon County x*/
function HumaneSocietyofMarathonCounty() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	var hour = document.getElementById("timeHours").value;
    var day = document.getElementById("timeDay").value;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		f){
		document.getElementById("b").style.display = "block";
	} else {
		document.getElementById("b").style.display = "none";
	}
}
/* Sunnyvale Park x*/
function SunnyvalePark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("c").style.display = "block";
	} else {
		document.getElementById("c").style.display = "none";
	}
}
/* Wausau Mine Company x*/
function WausauMineCompany() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		/* Update Cost Per Hour (CPH) */
		c >= 10 &&
		(d || g)){
		document.getElementById("d").style.display = "block";
	} else {
		document.getElementById("d").style.display = "none";
	}
}
/* 2510 Restaurant x*/
function TwentyFiveTenRestaurant() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		document.getElementById("e").style.display = "block";
	} else {
		document.getElementById("e").style.display = "none";
	}
}
/* Milwaukee Burger x*/
function MilwaukeeBurger() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		(d || g)){
		document.getElementById("f").style.display = "block";
	} else {
		document.getElementById("f").style.display = "none";
	}
}
/* Applebee's Grill & Bar x*/
function ApplebeesGrillBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		(d || g)){
		document.getElementById("g").style.display = "block";
	} else {
		document.getElementById("g").style.display = "none";
	}
}
/* Jimmy Johns x*/
function JimmyJohns() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("h").style.display = "block";
	} else {
		document.getElementById("h").style.display = "none";
	}
}
/* McDonald's x*/
function McDonaldsWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		document.getElementById("i").style.display = "block";
	} else {
		document.getElementById("i").style.display = "none";
	}
}
/* Subway x*/
function SubwayWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("j").style.display = "block";
	} else {
		document.getElementById("j").style.display = "none";
	}
}
/* Buffalo Wild Wings	x*/
function BuffaloWildWings() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		(d || g)){
		document.getElementById("k").style.display = "block";
	} else {
		document.getElementById("k").style.display = "none";
	}
}
/* Day's Bowl-A-Dome x*/
function DaysBowlADome() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		(d || f)){
		document.getElementById("l").style.display = "block";
	} else {
		document.getElementById("l").style.display = "none";
	}
}
/* MASA Japanese x*/
function MASAJapanese() {
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
}
/* Noodle's and Company x*/
function NoodlesAndCompany() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("n").style.display = "block";
	} else {
		document.getElementById("n").style.display = "none";
	}
}
/* Brockmeyer Park x*/
function BrockmeyerPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("o").style.display = "block";
	} else {
		document.getElementById("o").style.display = "none";
	}
}
/* Vino Latte x*/
function VinoLatteWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		(d || g)){
		document.getElementById("p").style.display = "block";
	} else {
		document.getElementById("p").style.display = "none";
	}
}
/* Q x*/
/* Arby's x*/
function ArbysWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("r").style.display = "block";
	} else {
		document.getElementById("r").style.display = "none";
	}
}
/* Philly's Subs & Gyros x*/
function PhillysSubsGyros() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		document.getElementById("s").style.display = "block";
	} else {
		document.getElementById("s").style.display = "none";
	}
}
/* Campus Pub x*/
function CampusPub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		(e || f || g)){
		document.getElementById("t").style.display = "block";
	} else {
		document.getElementById("t").style.display = "none";
	}
}
/* Taco Bell x*/
function TacoBellWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		d){
		document.getElementById("u").style.display = "block";
	} else {
		document.getElementById("u").style.display = "none";
	}
}
/* Cruisin 1724 x*/
function CruisinSeventeenTwentyFour() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("v").style.display = "block";
	} else {
		document.getElementById("v").style.display = "none";
	}
}
/* Sawadee Thai Restaurant x*/
function SawadeeThaiRestaurant() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("w").style.display = "block";
	} else {
		document.getElementById("w").style.display = "none";
	}
}
/* Opa! Gyros x*/
function OpaGyros() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("x").style.display = "block";
	} else {
		document.getElementById("x").style.display = "none";
	}
}
/* Briq's Soft Serve x*/
function BriqsSoftServe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		(d || e)){
		document.getElementById("y").style.display = "block";
	} else {
		document.getElementById("y").style.display = "none";
	}
}
/* Monk Botanical Gardens x*/
function MonkBotanicalGardens() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("z").style.display = "block";
	} else {
		document.getElementById("z").style.display = "none";
	}
}
/* Schofield Park x*/
function SchofieldPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("aa").style.display = "block";
	} else {
		document.getElementById("aa").style.display = "none";
	}
}
/* Aftershock Bar x*/
function AftershockBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("ab").style.display = "block";
	} else {
		document.getElementById("ab").style.display = "none";
	}
}
/* Schulenberg Park x*/
function SchulenbergPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("ac").style.display = "block";
	} else {
		document.getElementById("ac").style.display = "none";
	}
}
/* A & W x*/
function AAndW() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ad").style.display = "block";
	} else {
		document.getElementById("ad").style.display = "none";
	}
}
/* Blue Willow Cafe x*/
function BlueWillowCafe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ae").style.display = "block";
	} else {
		document.getElementById("ae").style.display = "none";
	}
}
/* AF x */
/* AG */
/* Culvers x*/
function CulversWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ah").style.display = "block";
	} else {
		document.getElementById("ah").style.display = "none";
	}
}
/* County Coin and Collectibles x*/
function CountyCoinAndCollectibles() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ai").style.display = "block";
	} else {
		document.getElementById("ai").style.display = "none";
	}
}
/* Jemma's Cafe x*/
function JemmasCafe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("aj").style.display = "block";
	} else {
		document.getElementById("aj").style.display = "none";
	}
}
/* Bethesda Thrift Shop x*/
function BethesdaThriftShop() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ak").style.display = "block";
	} else {
		document.getElementById("ak").style.display = "none";
	}
}
/* Liberty Bell Coin Investments x*/
function LibertyBellCoinInvestments() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("al").style.display = "block";
	} else {
		document.getElementById("al").style.display = "none";
	}
}
/* 101 Pub x*/
function OneohOnePub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	     b === "21 and Over"  &&
		c >= 15 &&
		g){
		document.getElementById("am").style.display = "block";
	} else {
		document.getElementById("am").style.display = "none";
	}
}
/* AN x*/
/* The Glass Station x*/
function TheGlassStation() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ao").style.display = "block";
	} else {
		document.getElementById("ao").style.display = "none";
	}
}
/* AP x*/
/* Sams Pizza of Wausau x*/
function SamsPizzaOfWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("aq").style.display = "block";
	} else {
		document.getElementById("aq").style.display = "none";
	}
}
/* Eastbay x*/
function Eastbay() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ar").style.display = "block";
	} else {
		document.getElementById("ar").style.display = "none";
	}
}
/* AS */
/* Mandarine Chinese Restaurant x*/
function MandarineChineseRestaurant() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("at").style.display = "block";
	} else {
		document.getElementById("at").style.display = "none";
	}
}
/* October Guitar x*/
function OctoberGuitar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("au").style.display = "block";
	} else {
		document.getElementById("au").style.display = "none";
	}
}
/* Quilting Workshop x*/
function QuiltingWorkshop() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("av").style.display = "block";
	} else {
		document.getElementById("av").style.display = "none";
	}
}
/* Lavender & Lace Antiques x*/
function LavenderAndLaceAntiques() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("aw").style.display = "block";
	} else {
		document.getElementById("aw").style.display = "none";
	}
}
/* Dominos Pizza x*/
function DominosPizzaWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("ax").style.display = "block";
	} else {
		document.getElementById("ax").style.display = "none";
	}
}
/* Navieve Fromagerie x*/
function NavieveFromagerie() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("ay").style.display = "block";
	} else {
		document.getElementById("ay").style.display = "none";
	}
}
/* KFC x*/
function KFCWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("az").style.display = "block";
	} else {
		document.getElementById("az").style.display = "none";
	}
}
/* River District Antique Mall x*/
function RiverDisctricAntiqueMall() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ba").style.display = "block";
	} else {
		document.getElementById("ba").style.display = "none";
	}
}
/* Dime & Dollar Thrift Store x*/
function DimeAndDollarThriftStore() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bb").style.display = "block";
	} else {
		document.getElementById("bb").style.display = "none";
	}
}
/* BC x*/
/* Reservoir Park x*/
function ResevoirPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bd").style.display = "block";
	} else {
		document.getElementById("bd").style.display = "none";
	}
}
/* Starbucks x*/
function StarbucksWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("be").style.display = "block";
	} else {
		document.getElementById("be").style.display = "none";
	}
}
/* King Buffet x*/
function KingBuffet() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("bf").style.display = "block";
	} else {
		document.getElementById("bf").style.display = "none";
	}
}
/* Royal Nails & Spa x*/
function RoyalNailsAndSpa() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		f){
		document.getElementById("bg").style.display = "block";
	} else {
		document.getElementById("bg").style.display = "none";
	}
}
/* BH x*/
/* La Taqueria x*/
function LaTaqueria() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		d){
		document.getElementById("bi").style.display = "block";
	} else {
		document.getElementById("bi").style.display = "none";
	}
}
/* Great Dane x*/
function GreatDane() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 25 &&
		(d || g)){
		document.getElementById("bj").style.display = "block";
	} else {
		document.getElementById("bj").style.display = "none";
	}
}
/* BK x*/
/* Treu's Tic Toc Club x*/
function TreusTicTocClub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 7 &&
		(d || g)){
		document.getElementById("bl").style.display = "block";
	} else {
		document.getElementById("bl").style.display = "none";
	}
}
/* Marathon Park x*/
function MarathonPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bm").style.display = "block";
	} else {
		document.getElementById("bm").style.display = "none";
	}
}
/* The Red Apple Family Restraurant x*/
function TheRedAppleFamilyRestaurant() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("bn").style.display = "block";
	} else {
		document.getElementById("bn").style.display = "none";
	}
}
/* Rice's Antiques & Architechtural Salvage x*/
function RicesAntiquesAndArchitechturalSalvage() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bo").style.display = "block";
	} else {
		document.getElementById("bo").style.display = "none";
	}
}
/* Riverside Park x*/
function RiversidePark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bp").style.display = "block";
	} else {
		document.getElementById("bp").style.display = "none";
	}
}
/* Hmong Eggroll x*/
function HmongEggroll() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("bq").style.display = "block";
	} else {
		document.getElementById("bq").style.display = "none";
	}
}
/* BR x*/
/* BS x*/
/* BT x*/
/* Lil Devil's Glass x*/
function LilDevilsGlass() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bu").style.display = "block";
	} else {
		document.getElementById("bu").style.display = "none";
	}
}
/* St. Vincent De Paul of Wausau x*/
function StVincentDePaulOfWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bv").style.display = "block";
	} else {
		document.getElementById("bv").style.display = "none";
	}
}
/* Dairy Queen Store x*/
function DairyQueenStore() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("bw").style.display = "block";
	} else {
		document.getElementById("bw").style.display = "none";
	}
}
/* Central Wisconsin Water Walkers x*/
function CentralWisconsinWaterWalkers() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bx").style.display = "block";
	} else {
		document.getElementById("bx").style.display = "none";
	}
}
/* DC Everest Country Park x*/
function DCEverestCountryPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("by").style.display = "block";
	} else {
		document.getElementById("by").style.display = "none";
	}
}
/* Three "M" Park x*/
function ThreeMPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bz").style.display = "block";
	} else {
		document.getElementById("bz").style.display = "none";
	}
}
/* Lumpy's x*/
function Lumpys() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 20 &&
		g){
		document.getElementById("ca").style.display = "block";
	} else {
		document.getElementById("ca").style.display = "none";
	}
}
/* CB x*/
/* CC x*/
/* CD x*/
/* BB Jack's Pizza and Sandwich Lounge x*/
function BBJacksPizzaAndSandwich() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("ce").style.display = "block";
	} else {
		document.getElementById("ce").style.display = "none";
	}
}
/* CF x*/
/* Sylvan Hill Park x*/
function SylvanHillPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("cg").style.display = "block";
	} else {
		document.getElementById("cg").style.display = "none";
	}
}
/* Lucky's Eastside Pub x*/
function LuckysEastsidePub() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("ch").style.display = "block";
	} else {
		document.getElementById("ch").style.display = "none";
	}
}
/* Gilbert Park x*/
function GilbertPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ci").style.display = "block";
	} else {
		document.getElementById("ci").style.display = "none";
	}
}
/* River Edge Walkway x*/
function RiverEdgeWalkway() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("cj").style.display = "block";
	} else {
		document.getElementById("cj").style.display = "none";
	}
}
/* Wausau Music Center x*/
function WausauMusicCenter() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ck").style.display = "block";
	} else {
		document.getElementById("ck").style.display = "none";
	}
}
/* Divepoint Scuba Paddle & Adventure Center x*/
function DivepointScubaPaddleAndAdventureCenter() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		e){
		document.getElementById("cl").style.display = "block";
	} else {
		document.getElementById("cl").style.display = "none";
	}
}
/* Thrive Foodery x*/
function ThriveFoodery() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		d){
		document.getElementById("cm").style.display = "block";
	} else {
		document.getElementById("cm").style.display = "none";
	}
}
/* CN x*/
/* Kaiser Pool x*/
function KaiserPool() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		e){
		document.getElementById("co").style.display = "block";
	} else {
		document.getElementById("co").style.display = "none";
	}
}
/* Bob & Randy's Bar x*/
function BobAndRandysBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 10 &&
		g){
		document.getElementById("cp").style.display = "block";
	} else {
		document.getElementById("cp").style.display = "none";
	}
}
/* Sixth Street Filling Station x*/
function SixthStreetFillingStation() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("cq").style.display = "block";
	} else {
		document.getElementById("cq").style.display = "none";
	}
}
/* Loppnow's Bar x*/
function LoppnowsBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("cr").style.display = "block";
	} else {
		document.getElementById("cr").style.display = "none";
	}
}
/* CS x*/
/* CT x*/
/* Subway x*/
function SubwayWausauTwo() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("cu").style.display = "block";
	} else {
		document.getElementById("cu").style.display = "none";
	}
}
/* CV x*/
/* Wausau on Water  x*/
function WausauOnWater() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var e = document.getElementById("choiceInsideActivity").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 20 &&
		(d || e || g)){
		document.getElementById("cw").style.display = "block";
	} else {
		document.getElementById("cw").style.display = "none";
	}
}
/* CX x*/
/* Black Purl x*/
function BlackPurl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("cy").style.display = "block";
	} else {
		document.getElementById("cy").style.display = "none";
	}
}
/* The Glass Hat x*/
function TheGlassHat() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("cz").style.display = "block";
	} else {
		document.getElementById("cz").style.display = "none";
	}
}
/* Angelo's Family Pizzeria x*/
function AngelosFamilyPizzeria(){
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("da").style.display = "block";
	} else {
		document.getElementById("da").style.display = "none";
	}
}
/* Hope Thrift Store x*/
function HopeThriftStore() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("db").style.display = "block";
	} else {
		document.getElementById("db").style.display = "none";
	}
}
/* DC x*/
/* DD x*/
/* Marathon County Historical Society x*/
function MarathonCountyHistoricalSociety() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("de").style.display = "block";
	} else {
		document.getElementById("de").style.display = "none";
	}
}
/* Yawkey House Museum x*/
function YawkeyHouseMuseum() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("df").style.display = "block";
	} else {
		document.getElementById("df").style.display = "none";
	}
}
/* Barker-Stewart Island Park x*/
function BarkerStewartIslandPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("dg").style.display = "block";
	} else {
		document.getElementById("dg").style.display = "none";
	}
}
/* Big Bull Falls Park x*/
function BigBullFallsPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("dh").style.display = "block";
	} else {
		document.getElementById("dh").style.display = "none";
	}
}
/* Evolution In Design x*/
function EvolutionInDesign() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("di").style.display = "block";
	} else {
		document.getElementById("di").style.display = "none";
	}
}
/* Nichole's Boutique x*/
function NicholesBoutique() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dj").style.display = "block";
	} else {
		document.getElementById("dj").style.display = "none";
	}
}
/* Back When Cafe x*/
function BackWhenCafe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		d){
		document.getElementById("dk").style.display = "block";
	} else {
		document.getElementById("dk").style.display = "none";
	}
}
/* Sweets on Third x*/
function SweetsOnThird() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		d){
		document.getElementById("dl").style.display = "block";
	} else {
		document.getElementById("dl").style.display = "none";
	}
}
/* La Prima x*/
function LaPrima() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("dm").style.display = "block";
	} else {
		document.getElementById("dm").style.display = "none";
	}
}
/* Wausau Museum of Contemporary Art x*/
function WausauMuseumOfContemporaryArt() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dn").style.display = "block";
	} else {
		document.getElementById("dn").style.display = "none";
	}
}
/* Janke Book Store x*/
function JankeBookStore () {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("do1").style.display = "block";
	} else {
		document.getElementById("do1").style.display = "none";
	}
}
/* Shepherd & Schaller Sporting x*/
function ShepherdAndSchallerSporting() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dp").style.display = "block";
	} else {
		document.getElementById("dp").style.display = "none";
	}
}
/* Leigh Yawkey Woodson Art Museum x*/
function LeighYawkeyWoodsonArtMuseum() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dj").style.display = "block";
	} else {
		document.getElementById("dj").style.display = "none";
	}
}
/* The Grand Theater x*/
function TheGrandTheater() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dr").style.display = "block";
	} else {
		document.getElementById("dr").style.display = "none";
	}
}
/* Erbert and Gerbert's x*/
function ErbertAndGerberts() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("ds").style.display = "block";
	} else {
		document.getElementById("ds").style.display = "none";
	}
}
/* Intermission x*/
function Intermission() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("dt").style.display = "block";
	} else {
		document.getElementById("dt").style.display = "none";
	}
}
/* DU x*/
/* Poppy's Boutique x*/
function PoppysBoutique() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dv").style.display = "block";
	} else {
		document.getElementById("dv").style.display = "none";
	}
}
/* Polito's Pizza x*/
function PolitosPizza() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 3 &&
		d){
		document.getElementById("dw").style.display = "block";
	} else {
		document.getElementById("dw").style.display = "none";
	}
}
/* Daly's x*/
function Dalys() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("dx").style.display = "block";
	} else {
		document.getElementById("dx").style.display = "none";
	}
}
/* DY x*/
/* Jalapenos Mexican Restaurante Bar x*/
function JalapenosMexicanRestauranteBar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		(d || g)){
		document.getElementById("dz").style.display = "block";
	} else {
		document.getElementById("dz").style.display = "none";
	}
}
/* Issac's Fine Appearel Inc.  x*/
function IssacsFineAppearelInc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ea").style.display = "block";
	} else {
		document.getElementById("ea").style.display = "none";
	}
}
/* EB x*/
/* EC x*/
/* ED x*/
/* City Grill x*/
function CityGrill() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("ee").style.display = "block";
	} else {
		document.getElementById("ee").style.display = "none";
	}
}
/* Malarkey's Pub & townies Grill x*/
function MalarkeysPubAndTowniesGrill() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		(d || g)){
		document.getElementById("ef").style.display = "block";
	} else {
		document.getElementById("ef").style.display = "none";
	}
}
/* Central Board shop x*/
function CentralBoardShop() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("eg").style.display = "block";
	} else {
		document.getElementById("eg").style.display = "none";
	}
}
/* Antiques by Ginny x*/
function AntiquesByGinny() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("eh").style.display = "block";
	} else {
		document.getElementById("eh").style.display = "none";
	}
}
/* The Local x*/
function TheLocal() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		f){
		document.getElementById("ei").style.display = "block";
	} else {
		document.getElementById("ei").style.display = "none";
	}
}
/* The Mint Cafe x*/
function TheMintCafe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		document.getElementById("ej").style.display = "block";
	} else {
		document.getElementById("ej").style.display = "none";
	}
}
/* Inner Sleeve Records x*/
function InnerSleeveRecords() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ek").style.display = "block";
	} else {
		document.getElementById("ek").style.display = "none";
	}
}
/* Limericks Public House  x*/
function LimericksPublicHouse() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("el").style.display = "block";
	} else {
		document.getElementById("el").style.display = "none";
	}
}
/* Chang Garden Wausau x*/
function ChangGardenWausau() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 6 &&
		d){
		document.getElementById("em").style.display = "block";
	} else {
		document.getElementById("em").style.display = "none";
	}
}
/* Marathon County Public Library x*/
function MarathonCountyPublicLibrary() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("en").style.display = "block";
	} else {
		document.getElementById("en").style.display = "none";
	}
}
/* Wausau Center/Mall x*/
function WausauCenterMall() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("eo").style.display = "block";
	} else {
		document.getElementById("eo").style.display = "none";
	}
}
/* EP x*/
/* Red Eye Brewing Company x*/
function RedEyeBrewingCompany() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var g = document.getElementById("choiceBar").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("eq").style.display = "block";
	} else {
		document.getElementById("eq").style.display = "none";
	}
}
/* Patina Coffeehouse x*/
function PatinaCoffeeHouse() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 2 &&
		d){
		document.getElementById("er").style.display = "block";
	} else {
		document.getElementById("er").style.display = "none";
	}
}
/* Oak Island Park x*/
function OakIslandPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("es").style.display = "block";
	} else {
		document.getElementById("es").style.display = "none";
	}
}
/* Isle of Ferns Park x*/
function IsleOfFernsPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("et").style.display = "block";
	} else {
		document.getElementById("et").style.display = "none";
	}
}
/* EU x*/
/* Pleasant View Park x*/
function PleasantViewPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ev").style.display = "block";
	} else {
		document.getElementById("ev").style.display = "none";
	}
}
/* Memorial Pool x*/
function MemorialPool() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 1 &&
		e){
		document.getElementById("ew").style.display = "block";
	} else {
		document.getElementById("ew").style.display = "none";
	}
}
/* Memorial Park x*/
function MemorialPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ex").style.display = "block";
	} else {
		document.getElementById("ex").style.display = "none";
	}
}
/* Alexander Park x*/
function AlexanderPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ey").style.display = "block";
	} else {
		document.getElementById("ey").style.display = "none";
	}
}
/* Airport Park x*/
function AirportPark() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		e){
		document.getElementById("ez").style.display = "block";
	} else {
		document.getElementById("ez").style.display = "none";
	}
}
/* FA x*/
/* Grand Valley Adventures x*/
function GrandValleyAdventures() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceOutsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 40 &&
		e){
		document.getElementById("fb").style.display = "block";
	} else {
		document.getElementById("fb").style.display = "none";
	}
}
/* Eastbay Sports Complex x*/
function EastbaySportsComplex() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choicePark").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("fc").style.display = "block";
	} else {
		document.getElementById("fc").style.display = "none";
	}
}
/* Jenny's Family Restaurant x*/
function JennysFamilyRestaurant() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("fd").style.display = "block";
	} else {
		document.getElementById("fd").style.display = "none";
	}
}
/* Fat Joe's Pizzeria x*/
function FatJoesPizzeria() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("fe").style.display = "block";
	} else {
		document.getElementById("fe").style.display = "none";
	}
}
/* Dairy Queen (treats only) x*/
function DairyQueenTreatsOnly() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ff").style.display = "block";
	} else {
		document.getElementById("ff").style.display = "none";
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
		document.getElementById("fh").style.display = "block";
	} else {
		document.getElementById("fh").style.display = "none";
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
		document.getElementById("fk").style.display = "block";
	} else {
		document.getElementById("fk").style.display = "none";
	}
}
/* Johnny Cee Cards x*/
function JohnnyCeeCards() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("fl").style.display = "block";
	} else {
		document.getElementById("fl").style.display = "none";
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
		document.getElementById("fm").style.display = "block";
	} else {
		document.getElementById("fm").style.display = "none";
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
		document.getElementById("fn").style.display = "block";
	} else {
		document.getElementById("fn").style.display = "none";
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
		document.getElementById("fo").style.display = "block";
	} else {
		document.getElementById("fo").style.display = "none";
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
		document.getElementById("fq").style.display = "block";
	} else {
		document.getElementById("fq").style.display = "none";
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
		document.getElementById("fr").style.display = "block";
	} else {
		document.getElementById("fr").style.display = "none";
	}
}
/* FS x*/
/* Pawn America x*/
function PawnAmerica() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ft").style.display = "block";
	} else {
		document.getElementById("ft").style.display = "none";
	}
}
/* 50-50 Factory Outlet x*/
function FiftyFiftyFactoryOutlet() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("fu").style.display = "block";
	} else {
		document.getElementById("fu").style.display = "none";
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
		document.getElementById("fv").style.display = "block";
	} else {
		document.getElementById("fv").style.display = "none";
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
		document.getElementById("fw").style.display = "block";
	} else {
		document.getElementById("fw").style.display = "none";
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
		document.getElementById("fx").style.display = "block";
	} else {
		document.getElementById("fx").style.display = "none";
	}
}
/* FY x*/
/* Krueger Floral and Gifts x*/
function KruegerFloralAndGifts() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		f){
		document.getElementById("fz").style.display = "block";
	} else {
		document.getElementById("fz").style.display = "none";
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
	var d = document.getElementById("choiceEat").checked;
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
function BriqsSoftServe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		d){
		document.getElementById("gy").style.display = "block";
	} else {
		document.getElementById("gu").style.display = "none";
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var d = document.getElementById("choiceEat").checked;
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
	var d = document.getElementById("choiceEat").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var d = document.getElementById("choiceEat").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var d = document.getElementById("choiceEat").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
/* Nice as Newx*/
function NiceAsNew() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var e = document.getElementById("choiceOutsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	var f = document.getElementById("choiceInsideActivity").checked;
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
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
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