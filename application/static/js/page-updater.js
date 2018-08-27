"use strict";


// ============================================================
// This JS script only updates the page once a year has been 
// advanced within the game
// ============================================================


// ============================================================
// Update health and energy module
// ============================================================
function updateHealthAndEnergyModule () {

  // ============================================================
  // local variables
  // ============================================================
  let healthBar = $( "#health-bar" );
  let energyBar = $( "#energy-bar" );
  let healthNumberDisplay = $( "#health-number-display" );
  let maxHealthNumberDisplay = $( "#maximum-health-number-display" );
  let energyNumberDisplay = $( "#energy-number-display" );
  let maxEnergyNumberDisplay = $( "#maximum-energy-number-display" );

  // ============================================================
  // Getting the player character object that is of string type
  // ============================================================
  let playerCharacter = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // Parsing the string into a JS object 
  // ============================================================
  let playerCharacterObj = JSON.parse( playerCharacter );

  // ============================================================
  // Update health
  // ============================================================
  healthBar.val( playerCharacterObj.health );
  healthBar.attr( 'max', playerCharacterObj.maxHealth );

  healthNumberDisplay.html( playerCharacterObj.health );
  maxHealthNumberDisplay.html( playerCharacterObj.maxHealth );

  // ============================================================
  // Update energy
  // ============================================================
  energyBar.val( playerCharacterObj.energy );
  energyBar.attr( 'max', playerCharacterObj.maxEnergy );

  energyNumberDisplay.html( playerCharacterObj.energy );
  maxEnergyNumberDisplay.html( playerCharacterObj.maxEnergy );
}


// ============================================================
// Update the personal info module
// ============================================================
function updatePersonalInfoModule () {

  console.log( "updatePersonalInfoModule function called" );
  
  // ============================================================
  // Local variables
  // ============================================================
  let playerNameDisplay = $( "#player-name-display" );
  let playerAgeDisplay = $( "#player-age-display" );
  let playerHomeDisplay = $( "#player-home-display" );
  let playerHappinessDisplay = $( "#player-happiness-display" );
  let playerDisciplineDisplay = $( "#player-discipline-display" );
  let playerLuckDisplay = $( "#player-luck-display" );
  let playerCharismaDisplay = $( "#player-charisma-display" );

  // ============================================================
  // Getting the player character object that is of string type
  // ============================================================
  let playerCharacter = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // Parsing the string into a JS object 
  // ============================================================
  let playerCharacterObj = JSON.parse( playerCharacter );

  // ============================================================
  // Append values to the personal module
  // ============================================================
  playerNameDisplay.html( `${playerCharacterObj.name} (${ playerCharacterObj.archetype })` );
  playerAgeDisplay.html( playerCharacterObj.age );
  playerHomeDisplay.html( playerCharacterObj.home );
  playerHappinessDisplay.html( playerCharacterObj.happiness );
  playerDisciplineDisplay.html( playerCharacterObj.discipline );
  playerLuckDisplay.html( playerCharacterObj.luck );
  playerCharismaDisplay.html( playerCharacterObj.charisma );
}