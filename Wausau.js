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
	var one = document.getElementById("choiceOne");
	if (one.checked == true){
		document.getElementById("checkOne").innerHTML = "Eat,";
	} else {
		document.getElementById("checkOne").innerHTML = "";
	}
}
function checkTwo() {
	var two = document.getElementById("choiceTwo");
	if (two.checked == true){
		document.getElementById("checkTwo").innerHTML = "Outdoor Activity,";
	} else {
		document.getElementById("checkTwo").innerHTML = "";
	}
}
function checkThree() {
	var three = document.getElementById("choiceThree");
	if (three.checked == true){
		document.getElementById("checkThree").innerHTML = "Indoor Activity,";
	} else {
		document.getElementById("checkThree").innerHTML = "";
	}
}
function checkFour() {
	var four = document.getElementById("choiceFour");
	if (four.checked == true){
		document.getElementById("checkFour").innerHTML = "Bars";
	} else {
		document.getElementById("checkFour").innerHTML = "";
	}
}
/* A x*/
/* Humane Society of Marathon County x*/
function b() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 0 &&
		f){
		document.getElementById("b").style.display = "block";
	} else {
		document.getElementById("b").style.display = "none";
	}
}
/* Sunnyvale Park x*/
function c() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function d() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function e() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function f() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function g() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function h() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function i() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function j() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function k() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function l() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function m() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function n() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function o() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function p() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function r() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function s() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function t() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function u() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function v() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		d){
		document.getElementById("v").style.display = "block";
	} else {
		document.getElementById("v").style.display = "none";
	}
}
/* Sawadee Thai Restraurant x*/
function w() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function x() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function y() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function z() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function aa() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ab() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ac() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ad() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ae() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("ae").style.display = "block";
	} else {
		document.getElementById("ae").style.display = "none";
	}
}
/* Jerry's Music *** x */
function af() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("af").style.display = "block";
	} else {
		document.getElementById("af").style.display = "none";
	}
}
/* AG */
/* Culvers x*/
function ah() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ai() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ai").style.display = "block";
	} else {
		document.getElementById("ai").style.display = "none";
	}
}
/* Jemma's Cafe x*/
function aj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ak() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ak").style.display = "block";
	} else {
		document.getElementById("ak").style.display = "none";
	}
}
/* Liberty Bell Coin Investments x*/
function al() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("al").style.display = "block";
	} else {
		document.getElementById("al").style.display = "none";
	}
}
/* 101 Pub x*/
function am() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	     b === "21 and Over"  &&
		c >= 15 &&
		g){
		document.getElementById("am").style.display = "block";
	} else {
		document.getElementById("am").style.display = "none";
	}
}
/* Chatterbox Bar x*/
function an() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("an").style.display = "block";
	} else {
		document.getElementById("an").style.display = "none";
	}
}
/* The Glass Station x*/
function ao() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ao").style.display = "block";
	} else {
		document.getElementById("ao").style.display = "none";
	}
}
/* West Side Tasty Treats x*/
function ap() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 4 &&
		(d || f)){
		document.getElementById("ap").style.display = "block";
	} else {
		document.getElementById("ap").style.display = "none";
	}
}
/* Sams Pizza of Wausau x*/
function aq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ar() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function at() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function au() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("au").style.display = "block";
	} else {
		document.getElementById("au").style.display = "none";
	}
}
/* Quilting Workshop x*/
function av() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("av").style.display = "block";
	} else {
		document.getElementById("av").style.display = "none";
	}
}
/* Lavender & Lace Antiques x*/
function aw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("aw").style.display = "block";
	} else {
		document.getElementById("aw").style.display = "none";
	}
}
/* Dominos Pizza x*/
function ax() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ay() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function az() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ba() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ba").style.display = "block";
	} else {
		document.getElementById("ba").style.display = "none";
	}
}
/* Dime & Dollar Thrift Store x*/
function bb() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bd() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bd").style.display = "block";
	} else {
		document.getElementById("bd").style.display = "none";
	}
}
/* Starbucks x*/
function be() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bi() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 25 &&
		(d || g)){
		document.getElementById("bj").style.display = "block";
	} else {
		document.getElementById("bj").style.display = "none";
	}
}
/* Pho 76 x*/
function bk() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("bk").style.display = "block";
	} else {
		document.getElementById("bk").style.display = "none";
	}
}
/* Treu's Tic Toc Club x*/
function bl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bm").style.display = "block";
	} else {
		document.getElementById("bm").style.display = "none";
	}
}
/* The Red Apple Family Restraurant x*/
function bn() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bo() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bo").style.display = "block";
	} else {
		document.getElementById("bo").style.display = "none";
	}
}
/* Riverside Park x*/
function bp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bp").style.display = "block";
	} else {
		document.getElementById("bp").style.display = "none";
	}
}
/* Hmong Eggroll x*/
function bq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bu").style.display = "block";
	} else {
		document.getElementById("bu").style.display = "none";
	}
}
/* St. Vincent De Paul of Wausau x*/
function bv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("bv").style.display = "block";
	} else {
		document.getElementById("bv").style.display = "none";
	}
}
/* Dairy Queen Store x*/
function bw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function bx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bx").style.display = "block";
	} else {
		document.getElementById("bx").style.display = "none";
	}
}
/* DC Everest Country Park x*/
function by() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("by").style.display = "block";
	} else {
		document.getElementById("by").style.display = "none";
	}
}
/* Three "M" Park x*/
function bz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("bz").style.display = "block";
	} else {
		document.getElementById("bz").style.display = "none";
	}
}
/* Lumpy's x*/
function ca() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ce() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("cg").style.display = "block";
	} else {
		document.getElementById("cg").style.display = "none";
	}
}
/* Lucky's Eastside Pub x*/
function ch() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ci() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ci").style.display = "block";
	} else {
		document.getElementById("ci").style.display = "none";
	}
}
/* River Edge Walkway x*/
function cj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("cj").style.display = "block";
	} else {
		document.getElementById("cj").style.display = "none";
	}
}
/* Wausau Music Center x*/
function ck() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ck").style.display = "block";
	} else {
		document.getElementById("ck").style.display = "none";
	}
}
/* Divepoint Scuba Paddle & Adventure Center x*/
function cl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function co() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function cy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("cy").style.display = "block";
	} else {
		document.getElementById("cy").style.display = "none";
	}
}
/* The Glass Hat x*/
function cz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function da(){
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function db() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function de() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("de").style.display = "block";
	} else {
		document.getElementById("de").style.display = "none";
	}
}
/* Yawkey House Museum x*/
function df() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("df").style.display = "block";
	} else {
		document.getElementById("df").style.display = "none";
	}
}
/* Barker-Stewart Island Park x*/
function dg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("dg").style.display = "block";
	} else {
		document.getElementById("dg").style.display = "none";
	}
}
/* Big Bull Falls Park x*/
function dh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("dh").style.display = "block";
	} else {
		document.getElementById("dh").style.display = "none";
	}
}
/* Evolution In Design x*/
function di() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("di").style.display = "block";
	} else {
		document.getElementById("di").style.display = "none";
	}
}
/* Nichole's Boutique x*/
function dj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dj").style.display = "block";
	} else {
		document.getElementById("dj").style.display = "none";
	}
}
/* Back When Cafe x*/
function dk() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dn() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dn").style.display = "block";
	} else {
		document.getElementById("dn").style.display = "none";
	}
}
/* Janke Book Store x*/
function do1 () {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("do1").style.display = "block";
	} else {
		document.getElementById("do1").style.display = "none";
	}
}
/* Shepherd & Schaller Sporting x*/
function dp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dp").style.display = "block";
	} else {
		document.getElementById("dp").style.display = "none";
	}
}
/* Leigh Yawkey Woodson Art Museum x*/
function dq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dj").style.display = "block";
	} else {
		document.getElementById("dj").style.display = "none";
	}
}
/* The Grand Theater x*/
function dr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dr").style.display = "block";
	} else {
		document.getElementById("dr").style.display = "none";
	}
}
/* Erbert and Gerbert's x*/
function ds() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dt() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("dv").style.display = "block";
	} else {
		document.getElementById("dv").style.display = "none";
	}
}
/* Polito's Pizza x*/
function dw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function dz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		c >= 7 &&
		e){
		document.getElementById("dz").style.display = "block";
	} else {
		document.getElementById("dz").style.display = "none";
	}
}
/* Issac's Fine Appearel Inc.  x*/
function ea() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ee() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ef() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function eg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("eg").style.display = "block";
	} else {
		document.getElementById("eg").style.display = "none";
	}
}
/* Antiques by Ginny x*/
function eh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("eh").style.display = "block";
	} else {
		document.getElementById("eh").style.display = "none";
	}
}
/* The Local x*/
function ei() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ej() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ek() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ek").style.display = "block";
	} else {
		document.getElementById("ek").style.display = "none";
	}
}
/* Limericks Public House  x*/
function el() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function em() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function en() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("en").style.display = "block";
	} else {
		document.getElementById("en").style.display = "none";
	}
}
/* Wausau Center/Mall x*/
function eo() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function eq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function er() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function es() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("es").style.display = "block";
	} else {
		document.getElementById("es").style.display = "none";
	}
}
/* Isle of Ferns Park x*/
function et() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ev() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ev").style.display = "block";
	} else {
		document.getElementById("ev").style.display = "none";
	}
}
/* Memorial Pool x*/
function ew() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ex() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ex").style.display = "block";
	} else {
		document.getElementById("ex").style.display = "none";
	}
}
/* Alexander Park x*/
function ey() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ey").style.display = "block";
	} else {
		document.getElementById("ey").style.display = "none";
	}
}
/* Airport Park x*/
function ez() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fb() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Wausau") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("fc").style.display = "block";
	} else {
		document.getElementById("fc").style.display = "none";
	}
}
/* Jenny's Family Restaurant x*/
function fd() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fe() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ff() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fk() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("fl").style.display = "block";
	} else {
		document.getElementById("fl").style.display = "none";
	}
}
/* The Office Bar x*/
function fm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fn() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fo() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("fr").style.display = "block";
	} else {
		document.getElementById("fr").style.display = "none";
	}
}
/* FS x*/
/* Pawn America x*/
function ft() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ft").style.display = "block";
	} else {
		document.getElementById("ft").style.display = "none";
	}
}
/* 50-50 Factory Outlet x*/
function fu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("fu").style.display = "block";
	} else {
		document.getElementById("fu").style.display = "none";
	}
}
/* Log Cabin x*/
function fv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function fx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Schofield") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("fx").style.display = "block";
	} else {
		document.getElementById("fx").style.display = "none";
	}
}
/* RY x*/
/* Krueger Floral and Gifts x*/
function fz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gb() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gb").style.display = "block";
	} else {
		document.getElementById("gb").style.display = "none";
	}
}
/* Subway x*/
function gc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gd() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ge() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gf").style.display = "block";
	} else {
		document.getElementById("gf").style.display = "none";
	}
}
/* Arby's x*/
function gg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gn() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function go() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("go").style.display = "block";
	} else {
		document.getElementById("go").style.display = "none";
	}
}
/* Machmueller Park x*/
function gp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gp").style.display = "block";
	} else {
		document.getElementById("gp").style.display = "none";
	}
}
/* Yellow Banks Park x*/
function gq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gq").style.display = "block";
	} else {
		document.getElementById("gq").style.display = "none";
	}
}
/* Yellowbanks Disc Golf Course x*/
function gr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gr").style.display = "block";
	} else {
		document.getElementById("gr").style.display = "none";
	}
}
/* The Jig x*/
function gs() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gt() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("gw").style.display = "block";
	} else {
		document.getElementById("gw").style.display = "none";
	}
}
/* Brews Brothers Pub x*/
function gx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function gz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ha() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hc").style.display = "block";
	} else {
		document.getElementById("hc").style.display = "none";
	}
}
/* Target x*/
function hd() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hd").style.display = "block";
	} else {
		document.getElementById("hd").style.display = "none";
	}
}
/* Dunkin' Donuts x*/
function he() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hk() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hk").style.display = "block";
	} else {
		document.getElementById("hk").style.display = "none";
	}
}
/* Basil x*/
function hl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ho() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hr").style.display = "block";
	} else {
		document.getElementById("hr").style.display = "none";
	}
}
/* Kennedy Park x*/
function hs() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hs").style.display = "block";
	} else {
		document.getElementById("hs").style.display = "none";
	}
}
/* Weston Aquatic Center x*/
function ht() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function hu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 5 &&
		d){
		document.getElementById("hu").style.display = "block";
	} else {
		document.getElementById("hu").style.display = "none";
	}
}
/* Speakeasy x*/
function hv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Weston") &&
	    ( b === "21 and Over" )&&
		c >= 15 &&
		g){
		document.getElementById("hv").style.display = "block";
	} else {
		document.getElementById("hv").style.display = "none";
	}
}
/*

		Rib Mountain

*/
/* Liberty Park x*/
function hw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hw").style.display = "block";
	} else {
		document.getElementById("hw").style.display = "none";
	}
}
/* Bluegill Bay Park x*/
function hx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("hx").style.display = "block";
	} else {
		document.getElementById("hx").style.display = "none";
	}
}
/* Hobby Lobby x*/
function hy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hy").style.display = "block";
	} else {
		document.getElementById("hy").style.display = "none";
	}
}
/* PetSmart x*/
function hz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("hz").style.display = "block";
	} else {
		document.getElementById("hz").style.display = "none";
	}
}
/* Bed Bath & Body Works x*/
function ia() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ia").style.display = "block";
	} else {
		document.getElementById("ia").style.display = "none";
	}
}
/* Old Navy x*/
function ib() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ib").style.display = "block";
	} else {
		document.getElementById("ib").style.display = "none";
	}
}
/* Gordmans x*/
function ic() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ic").style.display = "block";
	} else {
		document.getElementById("ic").style.display = "none";
	}
}
/* Michaels x*/
function ic2() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ic2").style.display = "block";
	} else {
		document.getElementById("ic2").style.display = "none";
	}
}
/* Becca's Cafe, Bistro & Catering x*/
function ie() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function if1() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("if1").style.display = "block";
	} else {
		document.getElementById("if1").style.display = "none";
	}
}
/* GameStop x*/
function ig() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ii() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ii").style.display = "block";
	} else {
		document.getElementById("ii").style.display = "none";
	}
}
/* The Vapour Lounge x*/
function ij() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Moutain") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ij").style.display = "block";
	} else {
		document.getElementById("ij").style.display = "none";
	}
}
/* Briq's x*/
function ik() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function il() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function in1() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function io() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ip() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ip").style.display = "block";
	} else {
		document.getElementById("ip").style.display = "none";
	}
}
/* Red Robins x*/
function iq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		c >= 8 &&
		d){
		document.getElementById("iq").style.display = "block";
	} else {
		document.getElementById("iq").style.display = "none";
	}
}
/* Hu Hot x*/
function ir() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function is() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function it() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function iu() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iu").style.display = "block";
	} else {
		document.getElementById("iu").style.display = "none";
	}
}
/* T.J. Max x*/
function iv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iv").style.display = "block";
	} else {
		document.getElementById("iv").style.display = "none";
	}
}
/* Dunham's Sports x*/
function iw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("iw").style.display = "block";
	} else {
		document.getElementById("iw").style.display = "none";
	}
}
/* Best Buy x*/
function ix() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ix").style.display = "block";
	} else {
		document.getElementById("ix").style.display = "none";
	}
}
/* Dollar Tree x*/
function iy() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function iz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ja() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function je() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ji() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jl() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function js() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ju() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rib Mountain") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ju").style.display = "block";
	} else {
		document.getElementById("ju").style.display = "none";
	}
}
/* Rib Mountain Taphouse x*/
function jv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function jw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ka() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("kc").style.display = "block";
	} else {
		document.getElementById("kc").style.display = "none";
	}
}
/* Politos Pizza x*/
function kd() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ke() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ki() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ki").style.display = "block";
	} else {
		document.getElementById("ki").style.display = "none";
	}
}
/* Coral Lanes x*/
function kj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function km() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("km").style.display = "block";
	} else {
		document.getElementById("km").style.display = "none";
	}
}
/* Norm's x*/
function kn() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kp() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function kq() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kq").style.display = "block";
	} else {
		document.getElementById("kq").style.display = "none";
	}
}
/* Rothschild Park x*/
function kr() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("kr").style.display = "block";
	} else {
		document.getElementById("kr").style.display = "none";
	}
}
/* Marathon County Library x*/
function ks() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ks").style.display = "block";
	} else {
		document.getElementById("ks").style.display = "none";
	}
}
/* Hobby Connection x*/
function kt() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kt").style.display = "block";
	} else {
		document.getElementById("kt").style.display = "none";
	}
}
/* George Street Park x*/
function ku() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("ku").style.display = "block";
	} else {
		document.getElementById("ku").style.display = "none";
	}
}
/* River Street Park	x*/
function kv() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kv").style.display = "block";
	} else {
		document.getElementById("kv").style.display = "none";
	}
}
/* Gaska Park x*/
function kw() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("kw").style.display = "block";
	} else {
		document.getElementById("kw").style.display = "none";
	}
}
/* Little Reds Market x*/
function kx() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		e){
		document.getElementById("kx").style.display = "block";
	} else {
		document.getElementById("kx").style.display = "none";
	}
}
/* NuYu Hair Design x*/
function ky() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("ky").style.display = "block";
	} else {
		document.getElementById("ky").style.display = "none";
	}
}
/* Relocation Pub and Eatery x*/
function kz() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "18-20" || b === "21 and Over" )&&
		c >= 10 &&
		(d || g)){
		document.getElementById("kz").style.display = "block";
	} else {
		document.getElementById("kz").style.display = "none";
	}
}
/* LA */
/* Gander Outdoor x*/
function lb() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("lb").style.display = "block";
	} else {
		document.getElementById("lb").style.display = "none";
	}
}
/* Arby's x*/
function lc() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ld() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function lf() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function lg() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function lh() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function li() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("li").style.display = "block";
	} else {
		document.getElementById("li").style.display = "none";
	}
}
/* Chase Outdoors x*/
function lj() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
	if(( a === "All of Wausau"|| a === "Rothschild") &&
	    (b === "Under 18" || b === "18-20" || b === "21 and Over" )&&
		f){
		document.getElementById("lj").style.display = "block";
	} else {
		document.getElementById("lj").style.display = "none";
	}
}
/* Denny's x*/
function lk() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ll() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function lm() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function ln() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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
function lo() {
	var a = document.getElementById("city").value;
	var b = document.getElementById("age").value; 
	var c = document.getElementById("spending").value;
	var d = document.getElementById("choiceOne").checked;
	var e = document.getElementById("choiceTwo").checked;
	var f = document.getElementById("choiceThree").checked;
	var g = document.getElementById("choiceFour").checked;
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