jQuery(document).ready(function() {
    /**contact us form validation**/
    jQuery("#form_contact_us").validate({
        errorElement: 'div',
        errorClass: 'text-danger',
        rules: {
            first_name: {
                required: true
            },
            contact_no: {
                number: true,
                minlength: 10,
                maxlength: 12
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }

        },
        messages: {
            first_name: {
                required:"Please enter name."
            },
            contact_no: {
                number:"Enter numbers only."
            },
            email: {
                required: "Please enter your email.",
                email:"Please enter valid email."
            },
            subject: {
                required: "Please enter subject."
            },
            message: {
                required: "Please enter message."
            }
        },
        submitHandler: function(form) {
            jQuery("#btn_contact_us").attr('disabled',true);            
            form.submit();
        }
        

    });
});