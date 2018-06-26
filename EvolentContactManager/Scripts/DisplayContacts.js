$(function () {
    $.getJSON('api/contact', function (contactsJsonPayload) {
        $(contactsJsonPayload).each(function (index, item) {
            $('#contacts').append('<li id="' + "contact" + item.Id + '">' + item.FirstName + ' ' + item.LastName + '  ' + item.Email + ' ' + item.PhoneNumber + ' ' + item.status + '</li>' + '<input type="button" id="' + item.Id + '" value="Delete" />');
        });
    });
});