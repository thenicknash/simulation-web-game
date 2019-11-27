"use strict"

let introObject = {

  playerName = null,
  playerHome = null,
  archetype = null,
  characterObj = {},

  bindEvents: () => {
    let self = this

    // Page submit button
    $( "#submit-new-player-button" ).click( () => {
      self.errorValidation()
    })
  },

  errorValidation: () => {
    let self = this

    // Player name:
    // 1. Cannot be blank
    // 2. Cannot be longer than 25 characters
    // 3. Cannot be shorter than 2 characters
    let playerName = $( "#player-name" )

    if ( playerName.val() === "" ) {
      alert( "You must enter a name." )
      return false
    }
  
    if ( playerName.val().length < 2 ) {
      alert( "Your name must be at least 2 characters long." )
      return false
    }
  
    if ( playerName.val().length > 25 ) {
      alert( "Your name cannot exceed 25 characters." )
      return false
    }

    // Player home:
    // 1. Cannot be blank
    // 2. Cannot be longer than 25 characters
    // 3. Cannot be shorter than 2 characters
    let playerHome = $( "#player-home" )

    if ( playerHome.val() === "" ) {
      alert( "You must enter a home." )
      return false
    }
  
    if ( playerHome.val().length < 2 ) {
      alert( "Your home name must be at least 2 characters long." )
      return false
    }
  
    if ( playerHome.val().length > 25 ) {
      alert( "Your home name cannot exceed 25 characters." )
      return false
    }

    // Archetype:
    // 1. A choice must be made; cannot be blank
    let archetype = $( "[name=archetype-choice]:checked" )

    if ( archetype.val() === undefined ) {
      alert( "You must choose an archetype." )
      return false
    }

    // Set object's properties
    self.playerName = playerName
    self.playerHome = playerHome
    self.archetype = archetype

    // Create the character object in local storage
    self.createCharObj();
  },

  createCharObj: () => {
    let self = this
    
    // Set player's initial stats
    if ( self.archetype == 'creative' ) {
      self.characterObj.health = 100;
      self.characterObj.maxHealth = 100;
      self.characterObj.energy = 15;
      self.characterObj.maxEnergy = 15;
    }
    else if ( aself.archetype == 'balanced' ) {
      self.characterObj.health = 85;
      self.characterObj.maxHealth = 85;
      self.characterObj.energy = 30;
      self.characterObj.maxEnergy = 30;
    }
    else {
      self.characterObj.health = 70;
      self.characterObj.maxHealth = 70;
      self.characterObj.energy = 45;
      self.characterObj.maxEnergy = 45;
    }

    // Set player's base skill levels
    self.characterObj.luck = 1;
    self.characterObj.charisma = 1;
    self.characterObj.discipline = 1;
    self.characterObj.happiness = 1;
    self.characterObj.meaning = 1;

    // Set player's bank, income, job, and expenses
    self.characterObj.bankAccount = 0;
    self.characterObj.monthlyIncome = 0;
    self.characterObj.monthlyExpenses = 0;
    self.characterObj.job = null;

    // Set the player's age
    self.characterObj.age = 0;

    // Store the object in localStorage; you have to stringify the
    // object due to localStorage only handling key value pairs and
    // string values
    localStorage.setItem( "playerCharacter", JSON.stringify( playerCharacter ) );
  }

}

introObject.bindEvents()