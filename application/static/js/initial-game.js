"use strict";


// ============================================================
// This function will load the player's initial object info.
// We will use a function expression so that the code is local
// in scope and executed immediately
// ============================================================
( function () {

  // ============================================================
  // Get the player's character info from localStorage
  // ============================================================
  let playerCharacterObj = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // You must parse the object since when retrieved it is of a
  // string type
  // ============================================================
  console.log( "Player Character Obj:", JSON.parse( playerCharacterObj ) );
} ) ();


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