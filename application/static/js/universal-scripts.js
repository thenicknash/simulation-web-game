"use strict";

// ============================================================
// Randomize the banner subtitle
// ============================================================
( function () {
  
  // ============================================================
  // Random sayings to sort through
  // ============================================================
  // 7 in total
  // ============================================================
  let randomSubBannerSayings = [
    "One year at a time",
    "Only you can die",
    "Don't drop the stapler",
    "You only have 24 hours to eat",
    "Ain't no time like a sick day",
    "Check your math",
    "One love"
  ];

  // ============================================================
  // Choose a random number (Cannot choose higher number than
  // the number of entries in above array)
  // ============================================================
  let randomNumber = Math.floor( ( Math.random() * 7 ) + 0 );

  // ============================================================
  // Append the random saying to the sub banner
  // ============================================================
  let subBanner = $( "#sub-banner" );
  subBanner.html( `${ randomSubBannerSayings[randomNumber] }` );
}) ();


// ============================================================
// Use regex to determine which tab is currently selected 
// through the URL
// ============================================================
let pathOfURL = window.location.pathname;

let homeRegex = /home/i;
let homePage = pathOfURL.match( homeRegex );

let careerRegex = /career/i;
let careerPage = pathOfURL.match( careerRegex );

let relationshipsRegex = /relationships/i;
let relationshipsPage = pathOfURL.match( relationshipsRegex );

let newsRegex = /news/i;
let newsPage = pathOfURL.match( newsRegex );


// ============================================================
// Assign the 'is-active' class to the correct tab
// ============================================================
if ( homePage ) {
  $( "#tab-home" ).addClass( "is-active" );
}

if ( careerPage ) {
  $( "#tab-career" ).addClass( "is-active" );
}

if ( relationshipsPage ) {
  $( "#tab-relationships" ).addClass( "is-active" );
}

if ( newsPage ) {
  $( "#tab-news" ).addClass( "is-active" );
}

// ============================================================
// Choose whether to hide the advance year button or not
// ============================================================
let newGameRegex = /\/$/;
let newGamePage = pathOfURL.match( newGameRegex );

let introRegex = /intro/i;
let introPage = pathOfURL.match( introRegex );

if ( newGamePage || introPage ) {

  // ============================================================
  // Getting the advance year button
  // ============================================================
  let advanceYearButton = $( "#advance-year-button" );
  advanceYearButton.addClass( "display-none" );
}


// ============================================================
// Advance year button
// ============================================================
let advanceYearButton = $( "#advance-year-button" );

advanceYearButton.click( function () {
  advanceYear();
});


// ============================================================
// Advance year function that essentially acts as the turn
// end for Life Simulator
// ============================================================
function advanceYear () {

  // ============================================================
  // We will need to:
  // 1. Age the player
  // 2. Increase/decrease bank account total
  // 3. Event is triggered (POSSIBLE)
  // 4. Relationship event (POSSIBLE)
  // 5. Recent activity event (POSSIBLE)
  // 6. News updates (POSSIBLE)
  // 7. Health goes down
  // 8. Job event (POSSIBLE)
  // 9. Update the current page
  // ============================================================
  ageThePlayerByOne();


  // ============================================================
  // Update the page
  // ============================================================
  updatePageOnAdvanceYearButtonClick();
}


// ============================================================
// Age the player by 1 year
// ============================================================
function ageThePlayerByOne () {

  // ============================================================
  // Getting the player character object that is of string type
  // ============================================================
  let playerCharacter = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // Parsing the string into a JS object 
  // ============================================================
  let playerCharacterObj = JSON.parse( playerCharacter );

  // ============================================================
  // Add 1 to the player's age
  // ============================================================
  playerCharacterObj.age = Number( playerCharacterObj.age ) + 1;
  
  console.log( playerCharacterObj );

  // ============================================================
  // Re-set the player character object into localStorage
  // ============================================================
  localStorage.setItem( "playerCharacter", JSON.stringify( playerCharacterObj ) );
}


// ============================================================
// Takes the income and expense and totals up the amount
// ============================================================
function balanceBankAccount () {

  // ============================================================
  // Getting the player character object that is of string type
  // ============================================================
  let playerCharacter = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // Parsing the string into a JS object 
  // ============================================================
  let playerCharacterObj = JSON.parse( playerCharacter );

  // ============================================================
  // Get the bank account, monthly income, and monthly expenses
  // ============================================================
  let bankAccoutAmount = Number( playerCharacterObj.bankAccount );

  // ============================================================
  // Tax the income (Because gubmint!)
  // ============================================================
}


// ============================================================
// This function will update the page's values based on the 
// current values of the playerCharacter objects
// ============================================================
function updatePageOnAdvanceYearButtonClick () {
  
  // ============================================================
  // Update the health and energy module
  // ============================================================
  updateHealthAndEnergyModule();

  // ============================================================
  // Update the personal info module
  // ============================================================
  updatePersonalInfoModule();

  // ============================================================
  // Make the snackbar & overlay appear indicating that a year 
  // has passed
  // ============================================================
  makeSnackbarAndOverlayAppear();
}


// ============================================================
// This function makes the snackbar & overlay appear informing 
// the user that a year has occurred
// ============================================================
function makeSnackbarAndOverlayAppear () {
  // ============================================================
  // Get the snackbar DIV
  // ============================================================
  var snackbar = $( "#snackbar" );

  // ============================================================
  // Add the "show" class to DIV
  // ============================================================
  snackbar.addClass( "show" );
  $( "#overlay" ).removeClass( "display-off" );
  $( "#overlay" ).addClass( "display-on" );

  // ============================================================
  // After 3 seconds, remove the show class from DIV
  // ============================================================
  setTimeout( function () { 
    snackbar.removeClass( "show" );
    $( "#overlay" ).removeClass( "display-on" );
    $( "#overlay" ).addClass( "display-off" );
  }, 3000);
}