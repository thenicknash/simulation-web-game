"use strict"

let universalObj = {

  characterObj: null,

  bindEvents: function () {
    let self = this

    $( "#advance-year-button" ).click( function () {
      self.advanceYear()
    })
  },

  randomizeBanner: function () {
    let self = this

    // Random sayings to sort through 7 in total
    let randomSubBannerSayings = [
      "One year at a time",
      "Only you can die",
      "Don't drop the stapler",
      "You only have 24 hours to eat",
      "Ain't no time like a sick day",
      "Check your math",
      "One love"
    ]

    // Choose a random number (Cannot choose higher number than
    // the number of entries in above array)
    let randomNumber = Math.floor( ( Math.random() * 7 ) + 0 )

    // Update the banner UI
    let subBanner = $( "#sub-banner" )
    subBanner.html( `${ randomSubBannerSayings[randomNumber] }` )
  },
  
  determineCurrentPage: function () {
    let self = this

    // Use regex to determine which tab is currently selected
    // through the URL
    let pathOfURL = window.location.pathname

    let homeRegex = /home/i
    let homePage = pathOfURL.match( homeRegex )

    let careerRegex = /career/i
    let careerPage = pathOfURL.match( careerRegex )

    let relationshipsRegex = /relationships/i
    let relationshipsPage = pathOfURL.match( relationshipsRegex )

    let newsRegex = /news/i
    let newsPage = pathOfURL.match( newsRegex )

    // Assign the 'is-active' class to the correct tab
    if ( homePage ) {
      $( "#tab-home" ).addClass( "is-active" )
    }

    if ( careerPage ) {
      $( "#tab-career" ).addClass( "is-active" )
    }

    if ( relationshipsPage ) {
      $( "#tab-relationships" ).addClass( "is-active" )
    }

    if ( newsPage ) {
      $( "#tab-news" ).addClass( "is-active" )
    }
  },

  displayAdvanceYearButton: function () {
    let self = this

    // Choose whether to hide the advance year button or not
    let newGameRegex = /\/$/
    let newGamePage = pathOfURL.match( newGameRegex )

    let introRegex = /intro/i
    let introPage = pathOfURL.match( introRegex )

    // Hide if we are on either of these 2 pages
    if ( newGamePage || introPage ) {
      let advanceYearButton = $( "#advance-year-button" )
      advanceYearButton.addClass( "display-none" )
    }
  },

  setCharacterObj: function () {
    let self = this
    localStorage.setItem( "characterObj", JSON.stringify( self.characterObj ) )
  },

  getCharacterObj: function () {
    let self = this

    // Getting the player character object that is of string type
    let characterObj = localStorage.getItem( "characterObj" )

    // Parsing the string into a JS object
    self.characterObj = JSON.parse( playerCharacter )

    return self.characterObj
  },

  advanceYear: function () {
    let self = this

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
    self.agePlayerByOne()
    self.degenerateHealth()

    // Update the page
    self.updatePageOnAdvanceYearButtonClick()
  },

  agePlayerByOne: function () {
    let self = this

    // This function returns the player character object from
    // localStorage
    let characterObj = returnPlayerCharacterObject()

    // Add 1 to the player's age
    playerCharacterObj.age = Number( playerCharacterObj.age ) + 1

    // Re-set the player character object into localStorage
    localStorage.setItem( "characterObj", JSON.stringify( playerCharacterObj ) )
  },

  balanceBankAccount: function () {
    // ============================================================
    // INCOMPLETE
    // ============================================================
    let self = this

    let characterObj = self.getCharacterObj()

    let bankAccoutAmount = Number( characterObj.bankAccount )
  },

  updatePageAdvanceYear: function () {
    let self = this

    // Update the health and energy module
    self.updateHealthAndEnergyModule()

    // Update the personal info module
    self.updatePersonalInfoModule()

    // Make the snackbar & overlay appear indicating that a year
    // has passed
    let message = "One year has passed . . ."
    self.displayOverlay( message )
  },

  displayOverlay: function ( message ) {
    let self = this

    // Get the snackbar div
    let snackbar = $( "#snackbar" )
    let overlay  = $( "#overlay" )

    // Setting the message of the snackbar
    snackbar.html( message )

    // Add the "show" class to DIV
    snackbar.addClass( "show" )
    overlay.removeClass( "display-off" )
    overlay.addClass( "display-on" )

    // After 3 seconds, remove the show class from DIV
    setTimeout( function () {
      snackbar.removeClass( "show" )
      overlay.removeClass( "display-on" )
      overlay.addClass( "display-off" )
    }, 3000)
  },

  degenerateHealth: function () {
    let self = this

    // Get the character object
    let characterObj = self.getCharacterObj()

    // Update the health value of the player
    characterObj.health -= 10

    // Make sure player health does not fall below zero
    if ( characterObj.health < 0 ) characterObj.health = 0

    // Update local obj
    self.characterObj = characterObj

    // Sets the player object in localStorage
    self.setCharacterObj()
  }
}

universalObj.bindEvents()
