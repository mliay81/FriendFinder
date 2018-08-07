$( document ).ready(function() {
    console.log( "ready!" );

var friendsArray = []

$('#submit').on('click', function(event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $("#name").val().trim(),
        photo: $("#pic").val().trim(),
        scores:[
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    }
    friendsArray.push(userInput)
    console.log(friendsArray)
})



});