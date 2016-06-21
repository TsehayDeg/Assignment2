//Assignment 2 JavaScript file

// ------ Part 1 ------

//1
/*function getValue() {
    var fullName = prompt("What is your name?");
    alert(fullName.length);
}*/

//2

/*function getValue() {
    var name = prompt("Enter your name : ", "your name here");
    alert("You have entered : " + name);
    
}*/
//3
/*function getValue() {
    var firName = prompt("Enter your first name : ", "your first name here");
    var lasName = prompt("Enter your last name : ", "your last name here");
    alert("You name is " + firName + " " + lasName);
}*/
//4
/*function getValue() {
    var azIndex = "The quick brown fox jumps over the lazy dog.";
    alert(azIndex.indexOf("fox"));
}*/
//5
/*function getValue() {
    var azIndex = "The quick brown fox jumps over the lazy dog.";
    alert(azIndex.lastIndexOf("fox"));
}*/
//6
/*function getValue() {
    var azIndex = "The quick brown fox jumps over the lazy dog.";
    var azReplace = prompt("Please enter your full name.");
    alert(azIndex.replace("the lazy dog", azReplace));
}*/
//7
/*function getValue() {
    var azIndex = "The quick brown fox jumps over the lazy dog.";
    var azReplace = prompt("Enter one word.");
    alert(azIndex.search(azReplace));
}*/
//8
/*function getValue() {
    var old_string = "The quick brown fox jumps over the lazy dog.";
    var new_string = old_string.slice(30, 43); 
    alert(new_string.toUpperCase());
    
}*/
//9
/*function getValue() {
    var old_string = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.   ";
    var newString = old_string.toLocaleLowerCase();
    alert(newString.trim());
    
}*/
//10

/*function getValue() {
    var azIndex = "the quick brown fox jumps over the lazy dog.";
    alert(azIndex.charAt(0).toUpperCase() + azIndex.slice(1, 44));
}*/
// ----- end of Assignment 2 part 1 ------

// ------ Part 2 ------
//Part 1 of part 2
//1
/*function getValue() {
    var number = prompt("Enter a number : ", "your number here");
    console.log("You have entered : " + Math.abs(number));
    
}*/

//2
/*function getValue() {
    var number = prompt("Enter a decimal number : ", "your number here");
    console.log("You have entered : " + Math.round(number));
    
}*/

//3
/*function getValue() {
    var number = prompt("Enter a decimal number : ", "your number here");
    console.log("You have entered : " + Math.floor(number));
    
}*/

//4?
/*function getValue() {
    var number = prompt("Enter five numbers separated by comma : ", "your numbers here");
    
    console.log("Your lowest and highest entery : " + Math.min(number) + " " + Math.max(number));
    
}*/

//5
/*function getValue() {
    var number = prompt("Enter a number : ", "your number here");
    
    console.log("The square root of your number is : " + Math.sqrt(number));
    
}*/

//Part 2 of part 2
//6
/*function getValue() {

    console.log("Today is : " + Date());
    
}*/

//7
/*function getValue() {
    var getDaysInMonth = function (month, year) {
            return new Date(year, month, 0).getDate();
        }
    console.log("The month you entered has : " + getDaysInMonth(6, 2016) + " days");

    
}*/
//8?
/*function getValue() {
    var getDaysInMonth = function (month, year) {
            return new Date(year, month, 0).getDate();
        }
    console.log("The month you entered has : " + getDaysInMonth(6, 2016) + " days");

    
}*/

//9
/*function getValue() {
    var weekday = new Date();
    var weekend = weekday.getDay();
    if (weekend === 0 || 6) {
        console.log("It is a weekend!");
        
    } else {
        console.log("It is not a weekend!");
    }
       
}*/
//10
/*function getValue() {
    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var yesterday = weekday[day.getDay() - 1];
    console.log(yesterday);
}*/

//11
/*function getValue() {
    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "S";
    weekday[1] = "M";
    weekday[2] = "T";
    weekday[3] = "W";
    weekday[4] = "Th";
    weekday[5] = "F";
    weekday[6] = "Sa";

    var today = weekday[day.getDay()];
    console.log(today);
}*/

// ------Part 3 of part 2------
//12
/*function getValue() {
    var number = prompt("Enter a number : ", "your number here");
    var numberAnother = prompt("Enter another number : ", "your number here");
    if (number > numberAnother) {
        console.log(number);
    } else {
        console.log(numberAnother); 
    }
}*/

//13
/*function getValue() {
    var names = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var marks = [80, 77, 88, 95, 68];

var i, grade;

for (i = 0; i < names.length; i++){
	if (marks[i] < 60){
	grade = "F";
}else if (marks[i]< 70) {
	grade = "D";
}else if (marks[i]< 80){
	grade = "C";
}else if (marks[i]< 90){
	grade = "B";
}else if (marks[i]< 100){
	grade = "A";
}

	console.log(names[i] + "'s Grade is " + grade);
}

}*/

//14
/*function getValue() {
for (var i = 1; i <= 15; i++){
	if (i % 2 == 0){
		window.console.log(i + " is even.");
	} else{
		window.console.log(i + " is odd.");
	}
};
}*/

//15
/*function getValue() {
for (var i = 1; i <= 100; i++){
	if(i % 3 == 0 && i % 5 == 0){
		window.console.log("FizzBuzz");
	}else if (i % 3 == 0){
		window.console.log("Fizz");
	}else if(i % 5 == 0){
		window.console.log("Buzz");
	}else{
		window.console.log(i);
	}
};
}*/


// ------Part 4 of part 2------

//1
/*function getValue() {
var ready = window.confirm("Are you ready for the game?");

if (ready == true){
	window.alert("Awesome, our hero is waiting!");
}else{
	window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");

switch (direction){
	case "forward":
		window.alert("You walk about 100 yards and safely make your way out of the cave.");
		break;
		
	case "left":
		window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
		
	case "right":
		window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
		break;
		
}

var rate = window.prompt("Please rate the game on a scale between 1 and 10.");
if (rate < 1 || rate > 10){
	rate = 10;
}

if (rate < 6){
	window.alert("Whatever, you weren’t very good at this game anyway!");
}else{
	window.alert("Thank you, we will continue to make improvements to the game!");
}
}*/


// ------Part 5 of part 2------
// “Coin Flip” Game 

/*function getValue() {
var coinFlip = Math.random();

var choice = window.prompt("Please select Heads or Tails.");

var result;

if (coinFlip < 0.5){
	result = "tails";
}else{
	result = "heads";
}
if (result == "heads" && choice == "heads"){
	window.alert("The flip was heads and you chose heads...you win!");
}else if (result == "heads" && choice == "tails"){
	window.alert("The flip was heads and you chose tails...you lose!");
}else if (result == "tails" && choice == "heads"){
	window.alert("The flip was tails and you chose heads...you lose!");
}else if (result == "tails" && choice == "tails"){
	window.alert("The flip was tails and you chose tails...you win!");
}
}*/


//8
/*function getValue() {
var coinFlip = Math.random() * 10;
coinFlip = Math.round(coinFlip);

var choice = window.prompt("Please select Heads or Tails.");


if (coinFlip < 5){
	coinFlip = true;//tails
	
}else{
	coinFlip = false;//heads
}
if (coinFlip == false && choice == "heads"){
	window.alert("The flip was heads and you chose heads...you win!");
}else if (coinFlip == false && choice == "tails"){
	window.alert("The flip was heads and you chose tails...you lose!");
}else if (coinFlip == true && choice == "heads"){
	window.alert("The flip was tails and you chose heads...you lose!");
}else if (coinFlip == true && choice == "tails"){
	window.alert("The flip was tails and you chose tails...you win!");
}
}*/



// ------Part 6 of part 2------
//Redux

/*function getValue() {
var coinFlip;

for (var i = 1; i <= 10; i++){
	coinFlip = Math.random();
	coinFlip = Math.round(coinFlip);
	if (coinFlip == 0){
		window.console.log("Heads");
	}else{
		window.console.log("Tails");
	}
}
}*/


// ------Part 7 of part 2------
//Coin Flip Streak

/*function getValue() {
var coinFlip;

do {
	coinFlip = Math.random();
	coinFlip = Math.round(coinFlip);
	if (coinFlip == 0){
		window.console.log("Heads");
	}else{
		window.console.log("Tails");
	}
} while(coinFlip == 0);

}*/

// ------Part 8 of part 2------
// Triangle 
function getValue() {
var x = "";

for (var i = 1; i < 8; i++){
	x += "#";
	window.console.log(x);
}
}

// ------Part 9 of part 2------
 
/*function getValue() {
for (var i = 0; i <= 15; i++){
	if (i % 2 == 0){
		window.console.log(i + " is even");
	}else{
		window.console.log(i + " is odd");
	}
}
}*/

















