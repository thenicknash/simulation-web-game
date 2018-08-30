"use strict";


// ============================================================
// JS for the game home page
// ============================================================


// ============================================================
// The health and energy module
// ============================================================
( function () {

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
  // Set the health and energy bars to their proper values
  // ============================================================
  healthBar.val( playerCharacterObj.health );
  healthBar.attr( 'max', playerCharacterObj.maxHealth );

  energyBar.val( playerCharacterObj.energy );
  energyBar.attr( 'max', playerCharacterObj.maxEnergy );

  // ============================================================
  // Set the health and energy display values to their proper
  // values based on the bars
  // ============================================================
  healthNumberDisplay.html( playerCharacterObj.health );
  maxHealthNumberDisplay.html( playerCharacterObj.maxHealth );

  energyNumberDisplay.html( playerCharacterObj.energy );
  maxEnergyNumberDisplay.html( playerCharacterObj.maxEnergy );
  
}) ();


// ============================================================
// MOOD CALCULATOR:
// Using a self-invoking function expression
// ============================================================
// This may need to be tweaked to be based on a percentage
// rather than a strictly numerical scale
// ============================================================
( function () {

  // ============================================================
  // Local variables
  // ============================================================
  let healthBar = $( "#health-bar" );
  let energyBar = $( "#energy-bar" );
  let currentMood = $( "#current-mood");

  // ============================================================
  // The total number of adding health and energy will be used to
  // determine what the player's mood is
  // ============================================================
  let totalMoodScore = healthBar.val() + energyBar.val();
  if ( totalMoodScore < 0 ) totalMoodScore = 0;

  // ============================================================
  // Dispaly health & energy values in numerical form
  // ============================================================
  $( "#health-number-display" ).html( healthBar.val() );
  $( "#energy-number-display" ).html( energyBar.val() );

  // ============================================================
  // MOODS:
  // 200:     PERFECT
  // 175-199: OVERJOYED
  // 150-174: ELATED
  // 110-149: HAPPY
  // 90-109:  CONTENT
  // 70-89:   DISGRUNTLED
  // 50-69:   UPSET
  // 25-49:   FURIOUS
  // 1-24:    DEPRESSED
  // 0:       SUICIDAL
  // ============================================================
  // This conditional block appends the mood text and adds the
  // appropriate font color through a Bulma text color CSS class
  // ============================================================
  if ( totalMoodScore >= 200 ) {
    currentMood.html( "Perfect" );
    currentMood.addClass( "has-text-success" );
  }
  else if ( totalMoodScore < 200 && totalMoodScore >= 175 ) {
    currentMood.html( "Overjoyed" );
    currentMood.addClass( "has-text-success" );
  }
  else if ( totalMoodScore < 175 && totalMoodScore >= 150 ) {
    currentMood.html( "Elated" );
    currentMood.addClass( "has-text-success" );
  }
  else if ( totalMoodScore < 150 && totalMoodScore >= 110 ) {
    currentMood.html( "Happy" );
    currentMood.addClass( "has-text-info" );
  }
  else if ( totalMoodScore < 110 && totalMoodScore >= 90 ) {
    currentMood.html( "Content" );
    currentMood.addClass( "has-text-info" );
  }
  else if ( totalMoodScore < 90 && totalMoodScore >= 70 ) {
    currentMood.html( "Disgruntled" );
    currentMood.addClass( "has-text-info" );
  }
  else if ( totalMoodScore < 70 && totalMoodScore >= 50 ) {
    currentMood.html( "Upset" );
    currentMood.addClass( "has-text-danger" );
  }
  else if ( totalMoodScore < 50 && totalMoodScore >= 25 ) {
    currentMood.html( "Furious" );
    currentMood.addClass( "has-text-danger" );
  }
  else if ( totalMoodScore < 25 && totalMoodScore >= 1 ) {
    currentMood.html( "Depressed" );
    currentMood.addClass( "has-text-danger" );
  }
  else {
    currentMood.html("Suicidal");
    currentMood.addClass( "has-text-danger" );
  }
} ) ();


// ============================================================
// Bank account module
// ============================================================
( function () {

  // ============================================================
  // This function returns the player character object from 
  // localStorage
  // ============================================================
  let playerCharacterObj = returnPlayerCharacterObject();

  // ============================================================
  // Local variables
  // ============================================================
  let playerBankAccountAmountDisplay = $( "#player-bank-account" );
  let playerMonthlyIncome = $( "#player-monthly-income" );
  let playerMonthlyExpenses = $( "#player-monthly-expenses" );

  // ============================================================
  // Assign the current value of the player's bank account to 
  // the bank account module
  // ============================================================
  playerBankAccountAmountDisplay.html( playerCharacterObj.bankAccount );
  playerMonthlyIncome.html( playerCharacterObj.monthlyIncome );
  playerMonthlyExpenses.html( playerCharacterObj.monthlyExpenses );
}) ();


// ============================================================
// PERSONAL INFO 
// ============================================================
( function () {
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
  playerNameDisplay.html( playerCharacterObj.name );
  playerAgeDisplay.html( playerCharacterObj.age );
  playerHomeDisplay.html( playerCharacterObj.home );
  playerHappinessDisplay.html( playerCharacterObj.happiness );
  playerDisciplineDisplay.html( playerCharacterObj.discipline );
  playerLuckDisplay.html( playerCharacterObj.luck );
  playerCharismaDisplay.html( playerCharacterObj.charisma );
}) ();

// ============================================================
// This function returns the player character object from 
// localStorage
// ============================================================
let playerCharacterObj = returnPlayerCharacterObject();

// ============================================================
// The recent events array 
// ============================================================
let recentEventsArray = [ `${playerCharacterObj.name} is ready to begin life!` ];
localStorage.setItem( "recentEventsArray", JSON.stringify( recentEventsArray ) );

// ============================================================
// Load all of the recent events from the recentEventsArray in
// localStorage
// ============================================================
( function () {
  
  // ============================================================
  // Local variables
  // ============================================================
  let recentActivityFeed = $( ".recent-activity-feed" );
  let rowColor = "has-background-white";
  let rowCounter = 1;

  // ============================================================
  // The localStorage recent event array
  // ============================================================
  let recentEventsArray = JSON.parse( localStorage.getItem( "recentEventsArray" ) );
  
  // ============================================================
  // Iterate through each index of the array and append the
  // events onto the page
  // ============================================================
  for (let i = 0; i < recentEventsArray.length; i++) {

    // ============================================================
    // Alternate row colors
    // ============================================================
    if ( rowColor == "has-background-white" ) {
      rowColor = "has-background-grey-lighter";
    }
    else {
      rowColor = "has-background-white";
    }

    // ============================================================
    // Print the text to the screen
    // ============================================================
    recentActivityFeed.append(
      `<p class="is-size-3 recent-activity-row ${ rowColor }">
        ${ rowCounter }. ${ recentEventsArray[i] }
      </p>`
    );

    // ============================================================
    // Increment the row counter
    // ============================================================
    rowCounter++;
  }
}) ();


// ============================================================
// Adds a recent event to the recent events module
// ============================================================
function addRecentEvent ( recentEvent ) {
  
  // ============================================================
  // Will need to come back to this function
  // ============================================================
  console.log( recentEvent );
}


// ============================================================
// Binding a click event to the go to the doctor button
// ============================================================
let goToDoctorButton = $( "#goToDoctorButton" )
goToDoctorButton.click( function () {
  goToTheDoctor();
});


// ============================================================
// This function sends your player to the doctor in order to 
// regenerate health
// ============================================================
function goToTheDoctor () {

  // ============================================================
  // Get the character object
  // ============================================================
  let playerCharacterObj = returnPlayerCharacterObject();

  // ============================================================
  // If the player is under 18, there will be no charge for going
  // to the doctor as the parent(s) will pay for the visit;
  // Else, you must pay a doctor's fee ($150 for now)
  // ============================================================
  let doctorFee = 0;

  if ( playerCharacterObj.age >= 18 ) {
    doctorFee = 150;
  }

  playerCharacterObj.bankAccount -= doctorFee;

  // ============================================================
  // Add health back to the player
  // ============================================================
  playerCharacterObj.health += 50;

  // ============================================================
  // Make sure that health value is not greater than the max 
  // health
  // ============================================================
  if ( playerCharacterObj.health > playerCharacterObj.maxHealth ) {
    playerCharacterObj.health = playerCharacterObj.maxHealth;
  }

  // ============================================================
  // Set the values of the player obj
  // ============================================================
  setPlayerCharacterObject( playerCharacterObj );

  // ============================================================
  // Updates the health and energy UI module
  // ============================================================
  updateHealthAndEnergyModule();

  // ============================================================
  // Create a UX letting the user know an action has taken place
  // ============================================================
  let message = "You had a great check up!";
  makeSnackbarAndOverlayAppear( message );
}