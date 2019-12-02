"use strict"

// ============================================================
// This file handles the career & job functionalities
// ============================================================

let careerObj = {

  playerCareerObj: {},

  randomJobsArray: [
    {
      job: "Janitor",
      field: "Sanitation",
      company: "One World Corporation",
      salary: 18000,
      description: "Every hot shot salesman needs a clean desk, and you are just right for the job!"
    },
    {
      job: "General Doctor",
      field: "Medicine",
      company: "Life Line Hospital",
      salary: 195000,
      description: "You spend your days hopefully saving more lifes than you end!"
    },
    {
      job: "Receptionist",
      field: "Administration",
      company: "Dunder Pifflin Inc.",
      salary: 30000,
      description: "You can find laughs, love, and life by answering frequently pointless phone calls."
    },
    {
      job: "Programmer",
      field: "Information Technology",
      company: "Virtual Sales",
      salary: 60000,
      description: "'Is that a bug or a feature?' The answer is always yes."
    },
    {
      job: "Digital Designer",
      field: "Creative",
      company: "Fancy Studios",
      salary: 47000,
      description: "It's a bird, it's a plane, it's just another icon..."
    },
    {
      job: "Team Leader",
      field: "Food",
      company: "Big Burger",
      salary: 38000,
      description: "Running a drive-thru is harder than it looks! 'You want fries with that?'"
    }
  ],

  setTestPlayerCareer: function () {
    let self = this

    // Update the object's property
    self.playerCareerObj = {
      job: "Lawyer",
      field: "Law",
      company: "Not Green Company",
      salary: 135000,
      description: "Being a lawyer is the bees knees except when you have an angry client on the phone at 3AM in the morning screaming until you win the case!"
    }
    
    // Update local storage
    localStorage.setItem( "playerCareerObj", JSON.stringify( self.playerCareerObj ) )

    // Load the player
    self.getPlayerCareer()
  },

  getPlayerCareer: function () {
    let self = this

    // Get the player's career information
    self.playerCareerObj = JSON.parse( localStorage.getItem( "playerCareerObj" ) )

    // Display player career
    careerObj.displayPlayerCareer()
  },

  displayPlayerCareer: function () {
    let self = this

    // Update the UI with player details
    $( "#player-job-display" ).html( `${ self.playerCareerObj.job }` )
    $( "#player-field-display" ).html( `${ self.playerCareerObj.field }` )
    $( "#player-company-display" ).html( `${ self.playerCareerObj.company }` )
    $( "#player-salary-display" ).html( `${ self.playerCareerObj.salary }` )
    $( "#player-description-display" ).html( `${ self.playerCareerObj.description }` )

    // Display random jobs
    self.displayRandomJobs()
  },

  displayRandomJobs: function () {
    let self = this

    // Shuffle the jobs array
    self.arrayShuffler( self.randomJobsArray )

    // Print 3 random jobs to the UI
    for ( var i = 0; i < 3; i++ ) {

      $( "#potential-job-tbody" ).append(
        `
        <tr>
          <td>
            ${self.randomJobsArray[i].job}
          </td>
          <td>
            ${self.randomJobsArray[i].field}
          </td>
          <td>
            ${self.randomJobsArray[i].company}
          </td>
          <td>
            ${self.randomJobsArray[i].salary}
          </td>
          <td>
            ${self.randomJobsArray[i].description}
          </td>
          <td>
            <button id="apply-button-${i}" class="button is-link">Apply</button>
          </td>
        </tr>
        `
      );

    }
  },

  arrayShuffler: function ( array ) {
    for ( var j, x, i = array.length; i; j = parseInt( Math.random() * i ), x = array[--i], array[i] = array[j], array[j] = x )
    return array
  }

}

careerObj.setTestPlayerCareer()