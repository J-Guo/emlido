// JavaScript Document
$(document).ready(function(e) {     
	$("#frm_add_skill").validate({
		errorElement: "div",
		rules: {
			skill_name:{
				required:true,
				remote:{
					url: jQuery("#base_url").val()+"/admin/skill/check-skill",
                                        type: "get",
					data:{
						type:jQuery("#frm_type").val(),
						old_skill_name:jQuery('#old_skill_name').val()
                                         }
					
				}
			}
		},
		messages:{
			skill_name:{
				required:"Please enter skill name.",
				remote:"Skill name already exists."
			}
		},
		submitHandler: function (form) {
         	 $("#btnSubmit").hide();
            $('#loding_image').show();
            form.submit();
        }
	});
});