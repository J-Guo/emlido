// JavaScript Document
$(document).ready(function(e) {
    jQuery.validator.addMethod(
            "money",
            function(value, element) {
//                var isValidMoney = /^[1-9]\d*((\,\d{0,3})?(\.\d{0,2})?)$/.test(value);
                var isValidMoney = /^[0-9,.]+$/.test(value);
                return this.optional(element) || isValidMoney;
            },
            "Please enter valid amount."
            );
    jQuery("#frm_voucher").validate({
        errorElement: 'div',
        rules: {
            voucher_code: {
                required: true,
                minlength: 3,
                remote: {
                    url: jQuery("#base_url").val() + "/admin/voucher/check-voucher",
                    type: "get",
                    data: {
                        type: jQuery("#type").val(),
                        old_voucher_code: jQuery('#old_voucher_code').val()
                    }
                }
            },
            voucher_type: {
                required: true
            },
            voucher_amount: {
                required: true,
                money: true
            },
            voucher_status: {
                required: true
            },
        },
        messages: {
            voucher_code: {
                required: "Please enter voucher code.",
                minlength: "Please enter at least 3 characters.",
                remote: "Voucher code already exists."
            },
            voucher_type: {
                required: "Please select voucher type.",
            },
            voucher_amount: {
                required: "Please enter voucher amount.",
                money: "Please enter valid voucher amount.",
            },
            voucher_status: {
                required: "Please select voucher status.",
            },
        },
        submitHandler: function(form) {
            $("#btnSubmit").hide();
            $('#loding_image').show();
            form.submit();
        }
        // set this class to error-labels to indicate valid fields

    });
    $("#pre_div").next('label').css('margin-left', '180');


    $(function() {
        $("#voucher_expaired_date").datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: 0,
            dateFormat: 'yy-m-d',
            yearRange: '2015:2070',
            onClose: function(selected_date) {
                $("#voucher_expaired_date").datepicker("option", "maxDate", selected_date);
            }
        });
    });   
});

 