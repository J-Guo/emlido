// JavaScript Document
$(document).ready(function(e) {

	jQuery("#frm_role").validate({
		 errorElement:'label',
		errorPlacement: function(label, element) {
			if(element[0].name=="role_privileges[]")
			{
				label.insertAfter("#pre_div");
			}
			else
			{
				label.insertAfter(element);
			}
		},
		 rules: {
			role_name:{
				required: true,
				minlength: 3,
				remote:{
					url: jQuery("#base_url").val()+"/admin/role/check-role",
					type: "get",
					data:{
						type:jQuery("#frm_type").val(),
						old_role_name:jQuery('#old_role_name').val()
                                }
				}
			},
			"role_privileges[]": {
				required:true
			}
		},
		messages: {
			role_name:{
				required: "Please enter role name.",
				minlength: "Please enter at least 3 characters.",
				remote: "Role already exists."
			},
			"role_privileges[]": {
				required:"Please select atleast one privilege."
			}
		},
		 submitHandler: function (form) {
			$("#btnSubmit").hide();
            $('#loding_image').show();
            form.submit();
        }
		// set this class to error-labels to indicate valid fields
	
	});
	$("#pre_div").next('label').css('margin-left','180');
});