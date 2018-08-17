"use strict";

// ============================================================
// We are going to use LocalStorage in order to store the 
// player's info. 
// ============================================================

// ============================================================
// Character object -- new & blank
// ============================================================
let playerCharacter = {};

// ============================================================
// Page variables
// ============================================================
let submitButton = $( "#submit-new-player-button" );

// ============================================================
// When the submit button is clicked, verify the fields are 
// filled out correctly. Then, save the values in localStorage.
// ============================================================
submitButton.click( function () {
  
  // ============================================================
  // Validate the form
  // ============================================================
  errorValidation();
});

// ============================================================
// Form validation function
// ============================================================
function errorValidation () {

  // ============================================================
  // Player name:
  // 1. Cannot be blank
  // 2. Cannot be longer than 25 characters
  // 3. Cannot be shorter than 2 characters
  // ============================================================
  let playerName = $( "#player-name" );

  if ( playerName.val() === "" ) {
    alert( "You must enter a name." );
    return false;
  }

  if ( playerName.val().length < 2 ) {
    alert( "Your name must be at least 2 characters long." );
    return false;
  }

  if ( playerName.val().length > 25 ) {
    alert( "Your name cannot exceed 25 characters." );
    return false;
  }

  // ============================================================
  // Player home:
  // 1. Cannot be blank
  // 2. Cannot be longer than 25 characters
  // 3. Cannot be shorter than 2 characters
  // ============================================================
  let playerHome = $( "#player-home" );

  if ( playerHome.val() === "" ) {
    alert( "You must enter a home." );
    return false;
  }

  if ( playerHome.val().length < 2 ) {
    alert( "Your home name must be at least 2 characters long." );
    return false;
  }

  if ( playerHome.val().length > 25 ) {
    alert( "Your home name cannot exceed 25 characters." );
    return false;
  }

  // ============================================================
  // Archetype choice:
  // 1. A choice must be made; cannot be blank
  // ============================================================
  let archetypeChoice = $( "[name=archetype-choice]:checked" );

  if ( archetypeChoice.val() === undefined ) {
    alert( "You must choose an archetype." );
    return false;
  }

  // ============================================================
  // Create the character object in local storage
  // ============================================================
  createCharacterObjInLocalStorage();

  // ============================================================
  // Redirect the page to the game page
  // ============================================================
  window.location.href = "http://127.0.0.1:5000/game/home";
}


// ============================================================
// Save the character object in localStorage
// ============================================================
function createCharacterObjInLocalStorage () {

  // ============================================================
  // Set the player object's name
  // ============================================================
  let playerName = $( "#player-name" );

  playerCharacter.name = playerName.val();

  // ============================================================
  // Set the player object's home
  // ============================================================
  let playerHome = $( "#player-home" );

  playerCharacter.home = playerHome.val();

  // ============================================================
  // Set the player object's archetype
  // ============================================================
  let archetypeChoice = $( "[name=archetype-choice]:checked" );

  playerCharacter.archetype = archetypeChoice.val();

  // ============================================================
  // Set the player object's age
  // ============================================================
  playerCharacter.age = 18;

  // ============================================================
  // TESTING ONLY:
  // Print all of the key value pairs in the player object
  // ============================================================
  for (let key in playerCharacter) {
    console.log( playerCharacter[key] );
  }

  // ============================================================
  // Store the object in localStorage; you have to stringify the
  // object due to localStorage only handling key value pairs and
  // string values
  // ============================================================
  localStorage.setItem( "playerCharacter", JSON.stringify( playerCharacter ) );
}
