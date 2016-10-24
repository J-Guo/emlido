// JavaScript Document
$(document).ready(function(e) {
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
            user_name: {
                required: true,
                chk_username_field: true,
                remote: {
                    url: jQuery("#base_url").val() + "/chk-username-duplicate",
                    method: 'post'
                }
            },
            
            first_name: {
                required: true,
                notNumber: true

            },
            location: {
                required: true

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
                    type: "post"
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
           profile_picture: {
                accept: "jpg|jpeg|png|gif"
            },
            user_status: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: "Please enter first name.",
                notNumber: "Please enter valid name."
            },
            location: {
                required: "Please enter location."

            },
            last_name: {
                required: "Please enter last name.",
                notNumber: "Please enter valid name."
            },
            
            user_name: {
                required: "Please enter username.",
                chk_username_field: "Please enter a valid username. It must contain 5-20 characters. Characters other than <b> A-Z, a-z, 0-9, _ , . , - </b>  are not allowed.",
                remote: "Username already exists."
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
            user_status: {
                required: "Please select user status"
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

	jQuery.validator.addMethod("password_strenth", function(value, element) {
            return isPasswordStrong(value, element);
        }, "Password must be strong");

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
//function stateLoad()
//{
// 
//    /* changing the user status*/
//    var obj_params = new Object();
//    obj_params.country_id = $('#country').val();
//    obj_params.lang_id = $('#lang_id').val();
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

//}