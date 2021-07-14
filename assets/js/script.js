// Initialize the timeblock save buttons and description boxes, and a moment variable.
var saveButton = $('.saveBtn');
var descriptionEl = $('.description');
var theMoment = moment();

// Display the current day and date above the planner.
$('#currentDay').text(theMoment.format('dddd, MMMM Do'));

// Preliminarily set desciption areas to past coloring.
descriptionEl.addClass('past');

// Function for color coding timeblocks based on current time of day and whether time is past, present,
// or future.
$(function colorCoding() {
    // Variables for current moment in hours and the timeblock rows.
    var momentHours = parseInt(theMoment.format('H'))-8;
    var rowTimeCheck = $('.row');
    
    // Step through rowTimeCheck, for each rows assigned time (as identified by id) match against momentHours
    // and change color accordingly (by class).
    for (i = 0; i < rowTimeCheck.length; i++) {
        currentRow = $(rowTimeCheck[i]);
        var rowTime = parseInt(currentRow.attr('id'));

        if (momentHours == rowTime) {
            currentRow.children('.description').addClass('present').removeClass('past');
        }
        else if (momentHours < rowTime) {
            currentRow.children('.description').addClass('future').removeClass('past');
        }
    }

});

// If the save button is clicked, get the time id of the row it's a part of and the input to the textarea and
// save them in local storage.
saveButton.on('click', function(event) {
    var clicked = $(event.target);
    var targetHour = clicked.closest('section').attr('id');
    var scheduleItem = (clicked.siblings('.description').val());
    localStorage.setItem(targetHour, scheduleItem);
});

// Display any locally stored textarea input in the row they were input to on page loading.
$(function init() {
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
    $('#19 .description').val(localStorage.getItem('19'));
});
