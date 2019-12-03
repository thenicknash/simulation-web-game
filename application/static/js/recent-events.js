"use strict"

let recentEventsObj = {

  testApiCall: function () {
    let self = this

    $.post(
      "http://127.0.0.1:5000/api/test",
      function ( data ) {
        console.log( 'api data', data )
      }
    )
  },

  createNewEvent: function ( eventMessage ) {
    let self = this

    let recentEventsArray = JSON.parse( localStorage.getItem( "recentEventsArray" ) );

    recentEventsArray.push( eventMessage )

    localStorage.setItem( "recentEventsArray", JSON.stringify( recentEventsArray ) )    

    self.updateStream()
  },

  updateStream: function () {
    let self = this

    let recentActivityFeed = $( ".recent-activity-feed" )
    let rowColor = "has-background-custom-gray"
    let rowCounter = 1

    // The localStorage recent event array
    let recentEventsArray = JSON.parse( localStorage.getItem( "recentEventsArray" ) )

    // Clear out the HTML before appending to the recent activity stream
    recentActivityFeed.html( '' )
    
    // Loop over recent events
    for ( let i = 0; i < recentEventsArray.length; i++ ) {
      // Alternate row colors
      if ( rowColor == "has-background-custom-gray" ) {
        rowColor = "has-background-grey-lighter"
      }
      else {
        rowColor = "has-background-custom-gray"
      }

      // Append the recent event to page
      recentActivityFeed.append(
        `<p class="is-size-3 recent-activity-row ${ rowColor }">
          ${ rowCounter }. ${ recentEventsArray[i] }
        </p>`
      )

      rowCounter++
    }
  },

  ageUpByOne: function () {
    let self = this

    // Get the character object
    let characterObj = universalObj.getCharacterObj()

    let eventMessage = `${ characterObj.name } has aged to ${ characterObj.age } years old!`

    self.createNewEvent( eventMessage )
  }

}

// // TESTING ONLY
// recentEventsObj.testCreateRecentEvents()
// recentEventsObj.testGetRecentEvents()
recentEventsObj.testApiCall()

// Update activity stream UI
recentEventsObj.updateStream()