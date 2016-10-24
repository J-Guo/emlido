jQuery(document).ready(function () {
    var baseUrl = jQuery("#base_url").val();
    /*Contact Us Form Validation Start */
    jQuery.validator.addMethod('chk_username_field', function (value, element, param) {
        if (value.match('^[a-zA-Z0-9-_.]{5,20}$')) {
            return true;
        } else {
            return false;
        }

    }, "");
    jQuery.validator.addMethod('chk_name', function (value, element, param) {
        if (value.match('^[a-zA-Z]{1,20}$')) {
            return true;
        } else {
            return false;
        }

    }, "");
    $.validator.addMethod("chk_mail", function (value, element) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
    });
    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Please enter valid name");

    jQuery.validator.addMethod("lettersonly7", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Please enter valid name");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.indexOf(" ") < 0 && value != "";
    }, "Please enter valid characters");
    jQuery.validator.addMethod('chk_full_name', function (value, element, param) {
        if (value.match("^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$")) {
            return true;
        } else {
            return false;
        }

    }, "");
    jQuery.validator.addMethod("password_strenth", function (value, element) {
        return isPasswordStrong(value, element);
    }, "Password must be combination of at least 1 number, 1 special character, 1 lower case letter and 1 upper case letter with minimum 6 characters");

    jQuery.validator.addMethod("numbersonly", function (value, element) {
        return this.optional(element) || /^[0-9]+$/i.test(value);
    }, "Please enter number only. ");

    jQuery.validator.addMethod("phonenumber", function (value, element) {
        return this.optional(element) || /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value);
    }, jQuery('#edit_profile_mobile_no').val());
    /* landing Form Validation Start */


    jQuery("#login_signup").validate({
        errorClass: 'error',
        errorElement: 'div',

        rules: {
            mobile_number: {
                required: true,
                number: true,
                minlength:10,
                maxlength:10
            }
        },
        messages: {
            mobile_number: {
                required: 'Please enter mobile number.',
                number: 'Please enter only number.',
                minlength: 'Please enter only 10 digit mobile number.',
                maxlength: 'Please enter only 10 digit mobile number.'
            }

        },
        submitHandler: function (form) {
            jQuery("#btn_register").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }
    });
    jQuery("#check_otp_frm").validate({
        debug: true,
        errorClass: 'error',
        errorElement: 'div',
        errorPlacement: function (label, element) {
            $("#otp_error").html(label);
        },
        rules: {
            'otp_number[1]': {
                required: true,
                number: true,
                maxlength:1
            },
            'otp_number[2]': {
                required: true,
                number: true,
                maxlength:1
            },
            'otp_number[3]': {
                required: true,
                number: true,
                maxlength:1
            },
            'otp_number[4]': {
                required: true,
                number: true,
                maxlength:1
            }
        },
        messages: {
            'otp_number[1]': {
                required: 'Please enter otp.',
                number: 'Please enter only number.',
                maxlength: 'Please enter only 1 number.'
                
            },
            'otp_number[2]': {
                required: 'Please enter otp.',
                number: 'Please enter only number.',
                maxlength: 'Please enter only 1 number.'
            },
            'otp_number[3]': {
                required: 'Please enter otp.',
                number: 'Please enter only number.',
                maxlength: 'Please enter only 1 number.'
            },
            'otp_number[4]': {
                required: 'Please enter otp.',
                number: 'Please enter only number.',
                maxlength: 'Please enter only 1 number.'
            }
        }, submitHandler: function (form) {
            jQuery("#btn_register").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }
    });
    /* User Registration Form Validation End */

    /**contact us form validation**/
    jQuery("#form_contact_us").validate({
        errorElement: 'div',
        rules: {
            first_name: {
                required: true,
                chk_full_name: true
            },
            email: {
                required: true,
                email: true,
                chk_mail: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            },
        },
        messages: {
            first_name: {
                required: "Please enter your name.",
                chk_full_name: "Please enter your full name.",
            },
            email: {
                required: "Please enter your email id.",
                email: "Please enter valid email id.",
                chk_mail: 'Please enter only letters, numbers, @ , _ and (.) dot.'
            },
            subject: {
                required: "Please enter subject.",
            },
            message: {
                required: "Please enter message.",
            },
        },
        submitHandler: function (form) {
            jQuery("#btn_submit").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }

    });
    /**contact us form validation**/
    jQuery("#user_edit_profile").validate({
        errorElement: 'div',
        errorClass: 'error',
        rules: {
            name: {
                required: true
            },
            gender: {
                required: true
            },
            age: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Please enter your name.'
            },
            gender: {
                required: "Plase select gender."
            },
            address: {
                required: "Please enter your address."
            },
            age: {
                required: "Please select your age."
            }
        },
        submitHandler: function (form) {
            jQuery("#btn_submit").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }

    });
    
    jQuery("#personal_details").validate({
        errorElement: 'div',
        errorClass: 'error',
        rules: {
            name: {
                required: true
            },
            bank_name: {
                required: true
            },
            bsb:{
                required: true,
                number:true,
                maxlength:6,
                minlength:6
            },
            account_number: {
                required: true,
                number:true,
                maxlength:14,
                minlength:12
            }
        },
        messages: {
            name: {
                required: 'Please enter your name.',
            },
            bank_name: {
                required: "Please enter bank name."
            },
            bsb:{
                required: "Please enter BSB number.",
                number:"Please enter only number.",
                maxlength:"Please enter BSB number equal to six.",
                minlength:"Please enter BSB number equal to six."
            },
            account_number: {
                required: "Please enter account number.",
                number:"Please enter only number.",
                maxlength:"Please enter account number less than or equal to 14.",
                minlength:"Please enter account number greater than or equal to 12."
            }
        },
        submitHandler: function (form) {
            jQuery("#btn_submit").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }

    });
    jQuery("#post_task_frm").validate({
        errorElement: 'div',
        errorClass: 'error',
        rules: {
            price: {
                required: true,
                number:true
            },
            place: {
                required: true
            },
            date:{
                required: true
            },
            duration:{
                required: true,
                number:true
            }
        },
        messages: {
            price: {
                required: 'Please enter price.',
                number: "Please enter only number."
            },
            place: {
                required: "Please enter place."
            },
            date:{
                required: "Please select date."
            },
            duration:{
                required: "Please enter duration.",
                number: "Please enter only number."
            }
        },
        submitHandler: function (form) {
            jQuery("#btn_submit").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }

    });
    
    jQuery("#video_frm").validate({
        errorElement: 'div',
        errorClass: 'error',
        rules: {
            'images[]': {
                required: true
            }
        },
        messages: {
            'images[]': {
                required: 'Please select video.'
            }
        },
        submitHandler: function (form) {
            jQuery("#btn_submit").hide();
            jQuery("#btn_loader").show();
            form.submit();
        }
    });
    
     jQuery("#make_payment").validate({
        errorElement: 'div',
        errorClass: 'error',
        rules: {
            name: {
                required: true
            },
            number: {
                required: true,
                number:true,
                maxlength:16,
                minlength:14
            },
            cvv:{
                required: true,
                number:true,
                maxlength:4,
                minlength:3
            },
            month:{
                required: true
            },
            year:{
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter card holder name."
            },
            number: {
                required: "Please enter card number.",
                number:"Please enter only number.",
                maxlength:"Please enter {0} number digit.",
                minlength:"Please enter {0} number digit."
            },
            cvv:{
                required: "Please enter CSV number.",
                number:"Please enter only number.",
                maxlength:"Pease enter {0} CSV number.",
                minlength:"Pease enter {0} CSV number."
            },
            month:{
                required: "Please select expired month."
            },
            year:{
                required: "Please select expired year."
            }
        },
        submitHandler: function (form) {
        jQuery("#btn_submit").hide();
        jQuery("#btn_loader").show();
        form.submit();
        }
    });
    

});