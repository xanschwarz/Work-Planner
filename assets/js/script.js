// Set moment variable to be used throughout.
var theMoment = moment();
$('#currentDay').text(theMoment.format('dddd, MMMM Do'))

// Preliminarily set desciption areas to past coloring. Function will change as appropriate to present or future coloring.
var descriptionEl = $('.description');
descriptionEl.addClass('past');

// Function for color coding boxes based on current time of day.
function colorCoding() {
    var momentHours = parseInt(theMoment.format('H'));
    var rowTimeCheck = $('.row');
    
    // Step through rowTimeCheck, for each id match against momentHours and change color accordingly.
    for (i = 0; i < rowTimeCheck.length; i++) {
        var rowTime = parseInt($(rowTimeCheck[i]).attr('id'));

        if (momentHours == rowTime) {
            $(rowTimeCheck[i]).children('.description').addClass('present');
        }
        else if (momentHours < rowTime) {
            $(rowTimeCheck[i]).children('.description').addClass('future');
        }
    }

}
colorCoding();