$(document).ready(function() {

    var testObject = {
            creator: 'Vojislav Grujic',
            language: 'JavaScript'
        };

    testObject.addProperty = function(property) {
        // property is property object returned by function getProperty()
        var propertyName = property.propertyName,
            propertyValue = property.propertyValue;
        this[propertyName] = propertyValue;
    }

    function getProperty(elements) {
        var propertyName = $(elements).find('.property-name').val(),
            propertyValue = $(elements).find('.property-value').val(),
            propertyObject = {};

        propertyObject.propertyName = propertyName;
        propertyObject.propertyValue = propertyValue;
        if (propertyName === '') return;

        return propertyObject;
    }

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.add-property').click(function() {
        testObject.addProperty(getProperty('.data'));
        $('.result p').html(JSON.stringify(testObject, null, 4));
        $('.assignment-app').css({'height': $('.result p').css('height')});
    });

});
