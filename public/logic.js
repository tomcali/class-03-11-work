// Initialize Firebase (YOUR OWN APP)


// Create a variable to reference the database
var config = {
    apiKey: "AIzaSyCAvVoNcHa_sb2lHjo6Emy2N6ftCDyXQfw",
    authDomain: "tomproject-92e56.firebaseapp.com",
    databaseURL: "https://tomproject-92e56.firebaseio.com",
    storageBucket: "tomproject-92e56.appspot.com",
    messagingSenderId: "529039500415"
  };

    firebase.initializeApp(config);

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot) {}
var database = firebase.database();
    database.ref().on("value", function(snapshot) {
      console.log(snapshot.val())
    });


      // $("#click-value").html(snapshot.val().clickCount);
      // clickCounter = snapshot.val().clickCount;
    // }, function(errorObject) {
      // console.log("The read failed: " + errorObject.code);
    // });


// Inside our .on function...

// Console.log the initial "snapshot" value (the object itself)
    console.log('initialValue', initialValue)

// Change the initial value to reflect the initial value in Firebase
// HINT: snapshot.val().__________

// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________
//    clickCounter = database.get(firebase)



// Change the HTML using jQuery to reflect the updated clickCounter value


// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});