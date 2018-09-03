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
  // This function returns the player character object from 
  // localStorage
  // ============================================================
  let playerCharacterObj = returnPlayerCharacterObject();
  
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

  // ============================================================
  // Update mood
  // ============================================================
  moodCalculator();
}


// ============================================================
// Update the personal info module
// ============================================================
function updatePersonalInfoModule () {
  
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
  // This function returns the player character object from 
  // localStorage
  // ============================================================
  let playerCharacterObj = returnPlayerCharacterObject();

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


// ============================================================
// Update the bank account module
// ============================================================
function updateBankAccountModule () {

  // ============================================================
  // Local variables
  // ============================================================
  let playerBankAccount = $( "#player-bank-account" );
  let playerMonthlyIncome = $( "#player-monthly-income" );
  let playerMonthlyExpenses = $( "#player-monthly-expenses" );

  // ============================================================
  // This function returns the player character object from 
  // localStorage
  // ============================================================
  let playerCharacterObj = returnPlayerCharacterObject();

  // ============================================================
  // Adjust the HTML
  // ============================================================
  playerBankAccount.html( playerCharacterObj.bankAccount );
  playerMonthlyIncome.html( playerCharacterObj.monthlyIncome );
  playerMonthlyExpenses.html( playerCharacterObj.monthlyExpenses );
}