$('#contactDisplay').on("click", "input", function () {
    var contactId = $(this).attr('id');
    $("#contact" + contactId).remove();
    $("#" + contactId).remove();
});