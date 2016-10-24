// JavaScript Document
$(document).ready(function(e) {     
	$("#frm_add_skill").validate({
		errorElement: "div",
		rules: {
			skill_name:{
				required:true,
				remote:{
					url: jQuery("#base_url").val()+"/admin/skill/check-skill",
					data:{type:""},
					type: "get"
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