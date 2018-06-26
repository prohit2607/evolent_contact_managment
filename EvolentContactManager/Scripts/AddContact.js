function idValidation() {
    var id = document.getElementsByName("Id")[0].value;
    $(function () {
        $.getJSON('api/contact', function (contactsJsonPayload) {
            contactsJsonPayload.map(function (value, index) {
                if (value.Id == id) {
                    alert("ID is already present");
                    return document.getElementsByName("Id")[0].value=""
                }
                        
            });
        });
    });


}

function myFunction() {
    var formValues = document.getElementById("saveContactForm");
    var flag = true;
    var ak = Object.values(formValues).map(function (v, i) {
        if (v.name === "Id") {
            var reg = new RegExp('^[0-9]$');
            if (!reg.test(v.value) || !v.value) {
                alert("Contact ID should contain only numbers");
                v.value = "";
                return flag = false;
            }

        }
        else if (v.name === "FirstName") {
            var reg = /^[a-zA-Z ]*$/;
            if (!reg.test(v.value) || !v.value) {
                alert("FirstName should contain only alphabets");
                v.value = "";
                return flag = false;
            }

        }
        else if (v.name === "LastName") {
            var reg = /^[a-zA-Z ]*$/;
            if (!reg.test(v.value) || !v.value) {
                alert("LastName should contain only alphabets");
                v.value = "";
                return flag = false;
            }
        }
        else if (v.name === "PhoneNumber") {
            var reg = /^\d{10}$/;
            if (!reg.test(v.value) || !v.value) {
                alert("PhoneNumber should be of 10 digits");
                v.value = "";
                return flag = false;
            }

        }
        else if (v.name === "status") {
            if (v.value!="Active" &&  v.value!="Inactive") {
                alert("status Should be either Active or Inactive");
                v.value = "";
                return flag = false;
            }
             
        }

        return flag;
    })
    if (flag) {
        (function () {
            $.post('api/contact', $('#saveContactForm').serialize(),
                function (value) {
                    $('#contacts').append('<li id="' + "contact" + value.Id + '">' + value.FirstName + ' ' + value.LastName + '  ' + value.Email + ' ' + value.PhoneNumber + ' ' + value.status + '</li>' + '<input type="button" id="' + value.Id + '" value="Delete" />');
                },
                "json"
            );
            var formValues = document.getElementById("saveContactForm");
            formValues[0].form.reset();

        })();
    }
}