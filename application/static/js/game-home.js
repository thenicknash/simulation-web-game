"use strict";

let homeObj = {

  mood: null,

  bindEvents: function () {
    let self = this

    $( "#goToDoctorButton" ).click( function () {
      playerEventsObj.goToDoctor()
    });
  },

  updateUi: function () {
    let self = this

    let characterObj = universalObj.getCharacterObj()

    // ============================================================
    // Bank module UI
    // ============================================================
    $( "#player-bank-account" ).html( characterObj.bankAccount )
    $( "#player-monthly-income" ).html( characterObj.monthlyIncome )
    $( "#player-monthly-expenses" ).html( characterObj.monthlyExpenses )

    // ============================================================
    // Personal info UI
    // ============================================================
    $( "#player-name-display" ).html( characterObj.name )
    $( "#player-age-display" ).html( characterObj.age )
    $( "#player-home-display" ).html( characterObj.home )
    $( "#player-happiness-display" ).html( characterObj.happiness )
    $( "#player-discipline-display" ).html( characterObj.discipline )
    $( "#player-luck-display" ).html( characterObj.luck )
    $( "#player-charisma-display" ).html( characterObj.charisma )

    // ============================================================
    // Health and energy UI
    // ============================================================
    $( "#health-bar" ).val( characterObj.health )
    $( "#health-bar" ).attr( 'max', characterObj.maxHealth )
    $( "#energy-bar" ).val( characterObj.energy )
    $( "#energy-bar" ).attr( 'max', characterObj.maxEnergy )

    $( "#health-number-display" ).html( characterObj.health )
    $( "#maximum-health-number-display" ).html( characterObj.maxHealth )

    $( "#energy-number-display" ).html( characterObj.energy )
    $( "#maximum-energy-number-display" ).html( characterObj.maxEnergy )
  },

  calculateMood: function () {
    let self = this

    // The total number of adding health and energy will be used to
    // determine what the player's mood is
    let totalMoodScore = $( "#health-bar" ).val() + $( "#energy-bar" ).val()
    if ( totalMoodScore < 0 ) totalMoodScore = 0
  
    // Dispaly health & energy values in numerical form
    $( "#health-number-display" ).html( $( "#health-bar" ).val() )
    $( "#energy-number-display" ).html( $( "#energy-bar" ).val() )
  
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
    if ( totalMoodScore >= 200 ) {
      self.mood = 'Perfect'
      $( "#current-mood" ).html( "Perfect" )
      $( "#current-mood" ).addClass( "has-text-success" )
    }
    else if ( totalMoodScore < 200 && totalMoodScore >= 175 ) {
      self.mood = 'Overjoyed'
      $( "#current-mood" ).html( "Overjoyed" )
      $( "#current-mood" ).addClass( "has-text-success" )
    }
    else if ( totalMoodScore < 175 && totalMoodScore >= 150 ) {
      self.mood = 'Elated'
      $( "#current-mood" ).html( "Elated" )
      $( "#current-mood" ).addClass( "has-text-success" )
    }
    else if ( totalMoodScore < 150 && totalMoodScore >= 110 ) {
      self.mood = 'Happy'
      $( "#current-mood" ).html( "Happy" )
      $( "#current-mood" ).addClass( "has-text-info" )
    }
    else if ( totalMoodScore < 110 && totalMoodScore >= 90 ) {
      self.mood = 'Content'
      $( "#current-mood" ).html( "Content" )
      $( "#current-mood" ).addClass( "has-text-info" )
    }
    else if ( totalMoodScore < 90 && totalMoodScore >= 70 ) {
      self.mood = 'Disgruntled'
      $( "#current-mood" ).html( "Disgruntled" )
      $( "#current-mood" ).addClass( "has-text-info" )
    }
    else if ( totalMoodScore < 70 && totalMoodScore >= 50 ) {
      self.mood = 'Upset'
      $( "#current-mood" ).html( "Upset" )
      $( "#current-mood" ).addClass( "has-text-danger" )
    }
    else if ( totalMoodScore < 50 && totalMoodScore >= 25 ) {
      self.mood = 'Furious'
      $( "#current-mood" ).html( "Furious" )
      $( "#current-mood" ).addClass( "has-text-danger" )
    }
    else if ( totalMoodScore < 25 && totalMoodScore >= 1 ) {
      self.mood = 'Depressed'
      $( "#current-mood" ).html( "Depressed" )
      $( "#current-mood" ).addClass( "has-text-danger" )
    }
    else {
      self.mood = 'Suicidal'
      $( "#current-mood" ).html("Suicidal")
      $( "#current-mood" ).addClass( "has-text-danger" )
    }
  }

}

// Bind the click events
homeObj.bindEvents()

// Load the UI
homeObj.updateUi()

// Load the character's mood
homeObj.calculateMood()