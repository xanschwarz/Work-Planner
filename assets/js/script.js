var saveButton = $('.saveBtn');

// Set moment variable to be used throughout. Display the day and date above the planner.
var theMoment = moment();
$('#currentDay').text(theMoment.format('dddd, MMMM Do'));

// Preliminarily set desciption areas to past coloring. Function will change as appropriate to present or future coloring.
var descriptionEl = $('.description');
descriptionEl.addClass('past');

// Function for color coding boxes based on current time of day.
function colorCoding() {
    var momentHours = parseInt(theMoment.format('H'));
    var rowTimeCheck = $('.row');
    
    // Step through rowTimeCheck, for each id match against momentHours and change color accordingly (by class).
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

};
colorCoding();

saveButton.on('click', function(event) {
    var clicked = $(event.target);
    var targetHour = clicked.closest('section').attr('id');
    var scheduleItem = JSON.stringify(clicked.siblings('.description').val());
    localStorage.setItem(targetHour, scheduleItem);
});

function init() {
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
}
init();