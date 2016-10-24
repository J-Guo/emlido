// JavaScript Document
$(document).ready(function (e) {
    $("#state_id").change(function () {
        var val = $(this).val();
        var url=$('#base_url').val();
        $.ajax({
            url: url+"/admin/institute/add-inst-get-city",
            type: "get",
            data: {state_id: val},
            success: function (res)
            {
                $("#city_result").html(res);
            }
        });
    });
    jQuery.validator.addMethod("specialChars", function (value, element) {
        var regex = new RegExp("^[a-zA-Z0-9.@_-]+$");
        var key = value;

        if (!regex.test(key)) {
            return false;
        }
        return true;
    }, "please enter a valid value for the field.");
    $("#frm_institute_details").validate({
        errorElement: "div",
        errorPlacement: function (label, element) {
            if (element[0].name == "admin_privileges[]")
            {
                label.insertAfter("#pre_div");
            }
            else
            {
                label.insertAfter(element);
            }
        },
        rules: {
            institute_name: {
                required: true
            },
            institue_address: {
                required: true
            },
            contact_person_name: {
                required: true,
                notNumber: true
            },
            contact_number: {
                required: true,
                number: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true,
                specialChars: true,
                remote: {
                    url: jQuery("#base_url").val() + "/admin/institute/check-institute-email",
                    type: "get",
                    data: {
                        old_email: "",
                        type: '1'
                    }
                }
            },
            user_password: {
                required: true,
                minlength: 8,
                password_strenth: true
            },
            confirm_password: {
                required: true,
                equalTo: '#user_password'
            },
            role_id: {
                required: true
            },
            institute_type: {
                required: true
            },
            state_id: {
                required: true
            },
            city_id: {
                required: true
            }

        },
        messages: {
            institute_name: {
                required: "Please enter institute name."
            },
            institue_address: {
                required: "Please enter institute address."
            },
            contact_number: {
                required: "Please enter contact number.",
                number: "Please enter valid contact number.",
                minlength: "Please enter 10 digit conact number"
            },
            contact_person_name: {
                required: "Please enter contact person name."
            },
            email: {
                required: "Please enter an email address.",
                specialChars: "Please enter valid email address.",
                email: "Please enter a valid email address.",
                remote: "Email address already exists."
            },
            user_password: {
                required: "Please enter password.",
                minlength: "Please enter atleast 8 characters."
            },
            confirm_password: {
                required: "Please enter the confirm password.",
                equalTo: "Password and confirm password does not match."
            },
            role_id: {
                required: "Please select admin user role."
            },
            institute_type: {
                required: "Please select institute type."
            },
            state_id: {
                required: "Please select state."
            },
            city_id: {
                required: "Please select city."
            }
        },
        submitHandler: function (form) {
		var selected = $("#listDepartments option:selected");
		var message = "";
		selected.each(function () {
			message += $(this).val() + ",";
		});
		$("#dep_ids").val(message);
            $("#btnSubmit").hide();
            $('#loding_image').show();
            form.submit();
        }
    });
    jQuery.validator.addMethod("notNumber", function (value, element, param) {
        var reg = /[0-9]/;
        if (reg.test(value)) {
            return false;
        } else {
            return true;
        }
    }, "Number is not permitted");
    jQuery.validator.addMethod('chk_username_field', function (value, element, param) {
        if (value.match('^[0-9a-zA-Z-._-]{5,20}$')) {
            return true;
        } else {
            return false;
        }

    }, "");

    jQuery.validator.addMethod("password_strenth", function (value, element) {
        return isPasswordStrong(value, element);
    }, "Password must be strong");

    $("#check_box").css({display: "block", opacity: "0", height: "0", width: "0", "float": "right"});
});