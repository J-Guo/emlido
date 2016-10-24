// JavaScript Document
$(document).ready(function(e) {
    jQuery.validator.addMethod("phonenumber", function(value, element) {
        return this.optional(element) || /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value);
    }, "Please enter valid mobile number.");

    var baseUrl = jQuery("#base_url").val();
    $("#frm_user_details").validate({
        errorElement: "div",
        highlight:false,
        errorPlacement: function(label, element) {
            if (element[0].name == "admin_privileges[]")
            {
                label.insertAfter("#pre_div");
            } else
            {
                label.insertAfter(element);
            }
        },
        rules: {
            
            first_name: {
                required: true,
                notNumber: true,
//                chk_full_name: true

            },
            last_name: {
                required: true,
                notNumber: true
            },
            user_email: {
                required: true,
                email: true,
                remote: {
                    url: jQuery("#base_url").val() + "/backend/admin/check-admin-email",
                    type: "post",
                    data: {
                        type: "edit",
                        old_email: jQuery('#old_email').val()
                    }
                }
            },
            user_password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                equalTo: '#user_password'
            },
            profile_picture: {
                accept: "jpg|jpeg|png|gif"
            },
           // user_status: {
              //  required: true
           // },
            mobile_number: {
                required: true,
                phonenumber:true
            },
            user_age: {
                required: true
            },
            inputCountryId:{
                required: true
            },
            address:{
                required: true
            }
            
        },
        messages: {
            first_name: {
                required: "Please enter name.",
                notNumber: "Please enter valid name.",
                chk_full_name: "Please enter your full name.",
            },
            
            last_name: {
                required: "Please enter last name.",
                notNumber: "Please enter valid name."
            },
            user_email: {
                required: "Please enter an email address.",
                email: "Please enter a valid email address.",
                remote: "Email address already exists."
            },
            user_password: {
                required: "Please enter password.",
                minlength: "Please enter atleast 8 characters."
            },
            confirm_password: {
                required: "Please enter the confirm password.",
                equalTo: "Password and confirm password do not match."
            },
            profile_picture: {
                accept: "Please select valid photo. eg : jpg | jpeg | png | gif"
            },
           // user_status: {
                //required: "Please select user status."
           /// },
             mobile_number: {
                required: "Please enter mobile number."
            },
            user_age:{
                required: "Please select user age."
            },
            inputCountryId:{
                required: "Please select country name."
            },
            address:{
                required: "Please enter address."
            }
        },
        submitHandler: function(form) {
            $("#btnSubmit").hide();
            $('#loding_image').show();
            form.submit();
        }
    });
    jQuery.validator.addMethod("notNumber", function(value, element, param) {
        var reg = /[0-9]/;
        if (reg.test(value)) {
            return false;
        } else {
            return true;
        }
    }, "Number is not permitted");
    jQuery.validator.addMethod('chk_username_field', function(value, element, param) {
        if (value.match('^[0-9a-zA-Z-._-]{5,20}$')) {
            return true;
        } else {
            return false;
        }

    }, "");
    
    jQuery.validator.addMethod('chk_full_name', function (value, element, param) {
        if (value.match("^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$")) {
            return true;
        } else {
            return false;
        }

    }, "");
    
    $("#check_box").css({display: "block", opacity: "0", height: "0", width: "0", "float": "right"});

    jQuery(".hide-show-pass-div").next().on("click", function() {

        if (jQuery(".hide-show-pass-div").is(":checked"))
        {
            jQuery('#change_password_div').css('display', 'block');
        }
        else
        {
            jQuery('#change_password_div').css('display', 'none');
        }
    });


});


//function stateLoad()
//{
//    /* changing the user status*/
//    var obj_params = new Object();
//    obj_params.country_id = $('#country').val();
//    obj_params.lang_id = 17;
//    jQuery.post($('#base_url').val()+"/backend/user/load-state", obj_params, function(msg) {
//        if (msg.error == "1")
//        {
//            alert(msg.error_message);
//        }
//        else
//        {
//            var str='';
//            str = '<option value="">Select state</option>';
//            $.each( msg, function( key, value ) {
//                str += '<option value="'+value.state_id+'">'+value.state_name+'</option>';
//            });
//            
//            $('#state').html(str);
//        }
//    }, "json");
//
//}
//
//function universitiesLoad()
//{
//    /* changing the user status*/
//    var obj_params = new Object();
//    obj_params.country_id = $('#country').val();
//    obj_params.state_id = $('#state').val();
//    obj_params.city_id = $('#city').val();
//    obj_params.lang_id = $('#lang_id').val();
//    
//    jQuery.post($('#base_url').val()+"/backend/user/load-universities", obj_params, function(msg) {
//        if (msg.error == "1")
//        {
//            alert(msg.error_message);
//        }
//        else
//        {
//            var str='';
//            str = '<option value="">Select university</option>';
//            $.each( msg, function( key, value ) {
//                str += '<option value="'+value.university_id+'">'+value.university_name+'</option>';
//            });
//            
//            $('#university').html(str);
//        }
//    }, "json");
//
//}
//
//
//
//function cityLoad()
//{
//    /* changing the user status*/
//    var obj_params = new Object();
//    obj_params.country_id = $('#country').val();
//    obj_params.state_id = $('#state').val();
//    obj_params.lang_id = $('#lang_id').val();
//    jQuery.post($('#base_url').val()+"/backend/user/load-city", obj_params, function(msg) {
//        if (msg.error == "1")
//        {
//            alert(msg.error_message);
//        }
//        else
//        {
//            var str='';
//            str = '<option value="">Select city</option>';
//            $.each( msg, function( key, value ) {
//                str += '<option value="'+value.city_id+'">'+value.city_name+'</option>';
//            });
//            
//            $('#city').html(str);
//        }
//    }, "json");
//
//}
//
//
//function degreeLoad()
//{
//    /* changing the user status*/
//    var obj_params = new Object();
//    obj_params.university_id = $('#university').val();
//    jQuery.post($('#base_url').val()+"/backend/user/load-degree", obj_params, function(msg) {
//        if (msg.error == "1")
//        {
//            alert(msg.error_message);
//        }
//        else
//        {
//            var str='';
//            str = '<option value="">Select degree</option>';
//            $.each( msg, function( key, value ) {
//                str += '<option value="'+value.degree_id+'">'+value.degree+'</option>';
//            });
//            
//            $('#degree').html(str);
//        }
//    }, "json");
//
//}