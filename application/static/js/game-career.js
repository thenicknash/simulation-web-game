"use strict";

// ============================================================
// JS for the game career page
// ============================================================

// ============================================================
// TESTING PURPOSES
// ============================================================
let playerCareerObj = {
  job: "Lawyer",
  field: "Law",
  company: "Not Green Company",
  salary: 135000,
  description: "Being a lawyer is the bees knees except when you have an angry client on the phone at 3AM in the morning screaming until you win the case!"
};

localStorage.setItem( "playerCareerObj", JSON.stringify( playerCareerObj ) );


// ============================================================
// Load the Career of the player
// ============================================================
( function () {

  // ============================================================
  // Get the player's career information
  // ============================================================
  let playerCareerObj = JSON.parse( localStorage.getItem( "playerCareerObj" ) );

  // ============================================================
  // Display player job details
  // ============================================================
  let playerJobDisplay = $( "#player-job-display" );
  let playerFieldDisplay = $( "#player-field-display" );
  let playerCompanyDisplay = $( "#player-company-display" );
  let playerSalaryDisplay = $( "#player-salary-display" );
  let playerDescriptionDisplay = $( "#player-description-display" );

  playerJobDisplay.html( `${ playerCareerObj.job }` );
  playerFieldDisplay.html( `${ playerCareerObj.field }` );
  playerCompanyDisplay.html( `${ playerCareerObj.company }` );
  playerSalaryDisplay.html( `${ playerCareerObj.salary }` );
  playerDescriptionDisplay.html( `${ playerCareerObj.description }` );
}) ();


// ============================================================
// Load the randomized career options
// ============================================================

