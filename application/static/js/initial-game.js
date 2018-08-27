"use strict";


// ============================================================
// This function will load the player's initial object info.
// We will use a function expression so that the code is local
// in scope and executed immediately
// ============================================================
( function () {

  // ============================================================
  // Get the player's character info from localStorage
  // ============================================================
  let playerCharacterObj = localStorage.getItem( "playerCharacter" );

  // ============================================================
  // You must parse the object since when retrieved it is of a
  // string type
  // ============================================================
  console.log( "Player Character Obj:", JSON.parse( playerCharacterObj ) );
} ) ();
