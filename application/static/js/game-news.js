"use strict";


// ===========================================================
// TESTING PURPOSES
// ===========================================================
let globalNewsStoriesArr = [];
let nationalNewsStoriesArr = [];
let localNewsStoriesArr = [];

globalNewsStoriesArr.push( { year: 2000, story: "Y2K crisis avoided!" }, { year: 2000, story: "Y2K crisis avoided!" } );
nationalNewsStoriesArr.push( { year: 2000, story: "Y2K crisis avoided!" }, { year: 2000, story: "Y2K crisis avoided!" } );
localNewsStoriesArr.push( { year: 2000, story: "Y2K crisis avoided!" }, { year: 2000, story: "Y2K crisis avoided!" } );

localStorage.setItem( "globalNewsStories", JSON.stringify( globalNewsStoriesArr ) );
localStorage.setItem( "nationalNewsStories", JSON.stringify( nationalNewsStoriesArr ) );
localStorage.setItem( "localNewsStories", JSON.stringify( localNewsStoriesArr ) );

// ===========================================================
// Load in the news stories on page load
// ===========================================================
function getNewsStoriesOnPageLoad () {

  // ===========================================================
  // Row color for the news stories
  // ===========================================================
  let rowColor = "has-background-white";
  let rowCounter = 1;

  // ============================================================
  // Getting the news stories items that are of string type
  // ============================================================
  let globalNewsStories = localStorage.getItem( "globalNewsStories" );
  let nationalNewsStories = localStorage.getItem( "nationalNewsStories" );
  let localNewsStories = localStorage.getItem( "localNewsStories" );

  // ============================================================
  // Parsing the strings into JS objects
  // ============================================================
  let globalNewsStoriesArr = JSON.parse( globalNewsStories );
  let nationalNewsStoriesArr = JSON.parse( nationalNewsStories );
  let localNewsStoriesArr = JSON.parse( localNewsStories );

  console.log( globalNewsStoriesArr );

  // ===========================================================
  // Add global stories to page
  // ===========================================================
  for ( var i = 0; i < globalNewsStoriesArr.length; i++ ) {
    
    // ===========================================================
    // Alternate background colors for the news stories
    // ===========================================================
    if ( rowColor == "has-background-white" ) {
      rowColor = "has-background-grey-lighter";
    }
    else {
      rowColor = "has-background-white";
    }

    // ===========================================================
    // The object for the news story
    // ===========================================================
    let globalNewsStoriesObj = globalNewsStoriesArr[i];

    // ===========================================================
    // Where to append stories
    // ===========================================================
    let globalNewsFeed = $( ".global-news-stories" );

    globalNewsFeed.append(`
      <p class="is-size-4 news-story-row ${rowColor}">
        ${ globalNewsStoriesObj.year }: ${ globalNewsStoriesObj.story }
      </p>
    `);
  }

  // ===========================================================
  // Add national stories to page
  // ===========================================================
  for ( var i = 0; i < nationalNewsStoriesArr.length; i++ ) {
    
    // ===========================================================
    // Alternate background colors for the news stories
    // ===========================================================
    if ( rowColor == "has-background-white" ) {
      rowColor = "has-background-grey-lighter";
    }
    else {
      rowColor = "has-background-white";
    }

    // ===========================================================
    // The object for the news story
    // ===========================================================
    let nationalNewsStoriesObj = nationalNewsStoriesArr[i];

    // ===========================================================
    // Where to append stories
    // ===========================================================
    let nationalNewsFeed = $( ".national-news-stories" );

    nationalNewsFeed.append(`
      <p class="is-size-4 news-story-row ${rowColor}">
        ${ nationalNewsStoriesObj.year }: ${ nationalNewsStoriesObj.story }
      </p>
    `);
  }

  // ===========================================================
  // Add local stories to page
  // ===========================================================
  for ( var i = 0; i < localNewsStoriesArr.length; i++ ) {
    
    // ===========================================================
    // Alternate background colors for the news stories
    // ===========================================================
    if ( rowColor == "has-background-white" ) {
      rowColor = "has-background-grey-lighter";
    }
    else {
      rowColor = "has-background-white";
    }

    // ===========================================================
    // The object for the news story
    // ===========================================================
    let localNewsStoriesObj = localNewsStoriesArr[i];

    // ===========================================================
    // Where to append stories
    // ===========================================================
    let localNewsFeed = $( ".local-news-stories" );

    localNewsFeed.append(`
      <p class="is-size-4 news-story-row ${rowColor}">
        ${ localNewsStoriesObj.year }: ${ localNewsStoriesObj.story }
      </p>
    `);
  }

}
getNewsStoriesOnPageLoad();