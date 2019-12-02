"use strict"

let eventsObj = {

  goToDoctor: function () {
    // Get the character object
    let characterObj = universalObj.getCharacterObj();

    // ============================================================
    // If the player is under 18, there will be no charge for going
    // to the doctor as the parent(s) will pay for the visit;
    // Else, you must pay a doctor's fee ($150 for now)
    // ============================================================
    let doctorFee = 0;

    if ( characterObj.age >= 18 ) {
      doctorFee = 150;
    }

    characterObj.bankAccount -= doctorFee;

    // Add health back to the player
    characterObj.health += 50;

    // Make sure that health value is not greater than the max 
    // health
    if ( characterObj.health > characterObj.maxHealth ) {
      characterObj.health = characterObj.maxHealth;
    }

    // Set the values of the player obj
    universalObj.setCharacterObj( characterObj );

    // ============================================================
    // Updates the health and energy and bank account UI modules
    // ============================================================
    homeObj.updateUi()

    // Inform player that the event has completed
    let message = "You had a great check up!";
    universalObj.displayOverlay( message );
  }

}