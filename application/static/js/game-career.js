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
// TESTING PURPOSES | Array of objects; the objects are the 
// jobs
// ============================================================
let playerRandomJobOptions = [];

var randomJob1 = {
  job: "Janitor",
  field: "Sanitation",
  company: "One World Corporation",
  salary: 18000,
  description: "Every hot shot salesman needs a clean desk, and you are just right for the job!"
};
let randomJob2 = {
  job: "General Doctor",
  field: "Medicine",
  company: "Life Line Hospital",
  salary: 195000,
  description: "You spend your days hopefully saving more lifes than you end!"
};
let randomJob3 = {
  job: "Receptionist",
  field: "Administration",
  company: "Dunder Pifflin Inc.",
  salary: 30000,
  description: "You can find laughs, love, and life by answering frequently pointless phone calls."
};
let randomJob4 = {
  job: "Programmer",
  field: "Information Technology",
  company: "Virtual Sales",
  salary: 60000,
  description: "'Is that a bug or a feature?' The answer is always yes."
};
let randomJob5 = {
  job: "Digital Designer",
  field: "Creative",
  company: "Fancy Studios",
  salary: 47000,
  description: "It's a bird, it's a plane, it's just another icon..."
};
let randomJob6 = {
  job: "Team Leader",
  field: "Food",
  company: "Big Burger",
  salary: 38000,
  description: "Running a drive-thru is harder than it looks! 'You want fries with that?'"
};
let randomJob7 = {
  job: "",
  field: "",
  company: "",
  salary: 0,
  description: ""
};
let randomJob8 = {
  job: "",
  field: "",
  company: "",
  salary: 0,
  description: ""
};
let randomJob9 = {
  job: "",
  field: "",
  company: "",
  salary: 0,
  description: ""
};
let randomJob10 = {
  job: "",
  field: "",
  company: "",
  salary: 0,
  description: ""
};

// ============================================================
// Push all of the random jobs to an array
// ============================================================
playerRandomJobOptions.push( randomJob1 );
playerRandomJobOptions.push( randomJob2 );
playerRandomJobOptions.push( randomJob3 );
playerRandomJobOptions.push( randomJob4 );
playerRandomJobOptions.push( randomJob5 );
playerRandomJobOptions.push( randomJob6 );

// ============================================================
// Load the randomized career options
// ============================================================
( function () {

  arrayShuffler( playerRandomJobOptions );

  // ============================================================
  // Print 3 random jobs
  // Currently, the jobs are not being randomized
  // ============================================================
  for ( var i = 0; i < 3; i++ ) {

    console.log( "playerRandomJobOptions: ", playerRandomJobOptions );

    $( "#potential-job-tbody" ).append(
      `
      <tr>
        <td>
          ${playerRandomJobOptions[i].job}
        </td>
        <td>
          ${playerRandomJobOptions[i].field}
        </td>
        <td>
          ${playerRandomJobOptions[i].company}
        </td>
        <td>
          ${playerRandomJobOptions[i].salary}
        </td>
        <td>
          ${playerRandomJobOptions[i].description}
        </td>
        <td>
          <button id="apply-button-${i}" class="button is-link">Apply</button>
        </td>
      </tr>
      `
    );

  }
}) ();


// ============================================================
// Array shuffler function
// ============================================================
function arrayShuffler ( arrayToBeShuffled ) {
  for ( var j, x, i = arrayToBeShuffled.length; i; j = parseInt( Math.random() * i ), x = arrayToBeShuffled[--i], arrayToBeShuffled[i] = arrayToBeShuffled[j], arrayToBeShuffled[j] = x );
	return arrayToBeShuffled;
}
