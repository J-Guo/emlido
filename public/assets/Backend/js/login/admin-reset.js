/* login admin Js */
jQuery(document).ready(function(){
	jQuery("#frm_admin_reset").validate({
		errorElement:'div',
		rules: {
			user_password: {
				 required: true,
				 minlength: 8,
				 password_strenth: true
			},
			confim_user_password:{
				required: true,
                                equalTo:"#user_password"
			}
		},
		messages: {
			user_password:{
				required: "Please enter password.",
                                minlength: "Please enter atleast 8 characters."
			},
			confim_user_password: {
				required:"Please enter confirm password.",
                                equalTo:"Please enter same password as above"
			}
		}
	});
        
        jQuery.validator.addMethod("password_strenth", function(value, element) {
		return isPasswordStrong(value, element);
	}, "Password must be strong");
        
});