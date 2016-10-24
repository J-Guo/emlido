// JavaScript Document
$(document).ready(function(e) {     
	$("#frm_add_category").validate({
		errorElement: "div",
		rules: {
			category_name:{
				required:true,
				remote:{
					url: jQuery("#base_url").val()+"/admin/category/check-category",
                                        type: "get",
					data:{
						type:jQuery("#frm_type").val(),
						old_category_name:jQuery('#old_category_name').val()
                                         }
					
				}
			},
                        category_description:{
                            required:true,
                            maxlength:200
                        }
                       
		},
		messages:{
			category_name:{
				required:"Please enter category name.",
				remote:"Category name already exists."
			},
                        category_description:{
                            required:"Please enter category description.",
                            maxlength:"Description should not exceed 200 characters. "
                        }
		},
		submitHandler: function (form) {
         	 $("#btnSubmit").hide();
                 $('#loding_image').show();
            form.submit();
        }
	});
});