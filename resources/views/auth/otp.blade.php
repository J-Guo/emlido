@extends('layouts.login-layout')

@section('content')
<section class="second-temp">
    <div class="container">
        <section class="header">
            <img src="{{url('assets/Frontend/img/make-you-happy.png')}}">
        </section>
        <div class="other-content OTP-content">
            <form name="check_otp_frm" id="check_otp_frm" action="{{url('verify')}}" method="POST" autocomplete="off">

                {{csrf_field()}}
                <input name="userid" type="hidden" value="{{(isset($userid) ? $userid : old('userid') )}}" />
                <input name="mobileNum" type="hidden" value="{{(isset($mobileNum) ? $mobileNum : old('mobileNum') )}}" />
                <input name="userType" type="hidden" value="{{(isset($userType) ? $userType : old('userType') )}}" />

                <div class="code-txt">Please Enter the Confirmation Code </div>
                <div class="input-otp clearfix">
                    <input type="tel" id="digit1" name="digit[1]" class="form-control inputs-single" maxlength="1" onKeyUp="moveCursorBack(this.value, 2);" oninput="checkLength(1)"/>&nbsp;
                    <input type="tel" id="digit2" name="digit[2]" class="form-control inputs-single" maxlength="1" onKeyUp="moveCursorBack(this.value, 3);" oninput="checkLength(2)"/>  &nbsp;
                    <input type="tel" id="digit3" name="digit[3]" class="form-control inputs-single" maxlength="1" onKeyUp="moveCursorBack(this.value, 4);" oninput="checkLength(3)"/>&nbsp;
                    <input type="tel" id="digit4" name="digit[4]" class="form-control inputs-single" maxlength="1" onKeyUp="moveCursorBack(this.value);" oninput="checkLength(4)"/>&nbsp;
                </div>

                <div class="by-txt">By continue you have accepted <a href="javascript:void(0);"  data-toggle="modal" data-target="#tcModal"> T&C </a></div>
                <div class="find-btns acc-btn"> <button id="btn_submit" class="btn" href="javascript:void(0);">FIND A DATE</button></div>

            </form>
        </div>
        <!-- Show Authentication Failed Information-->
        @if(session()->has('message') )
            <div class="alert alert-info text-center">
                <strong>Login Failed!:</strong>
                <span>{{ session()->get('message') }}</span>
            </div>
        @endif
    </div>
</section>

<!-- Term of use modal -->
<div class="modal fade" id="tcModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Terms and Condition</h4>
            </div>
            <div class="modal-body">
                Additionally, you may give a description of your modal dialog with Additionally, you may give a description of your modal dialog with Additionally, you may give a description of your modal dialog with Additionally, you may give a description of your modal dialog with Additionally, you may give a description of your modal dialog with
            </div>
        </div>
    </div>
</div>
@stop

@section('footer')
    <script type="text/javascript">

        $(document).ready(function () {
            //called when key is pressed in textbox
            $("#digit1").keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    return false;
                }
            });
            $("#digit2").keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    return false;
                }
            });
            $("#digit3").keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    return false;
                }
            });
            $("#digit4").keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });


        });

        function checkLength(key)
        {
            var fieldLength = document.getElementById('digit' + key + '').value.length;
            if (fieldLength <= 1) {
                return true;
            }
            else
            {
                var str = document.getElementById('digit' + key + '').value;
                str = str.substring(0, str.length - 1);
                document.getElementById('digit' + key + '').value = str;
            }
        }

        function moveCursorBack(input, key) {

            if (input.length > 0) {
                if (input != '') {

                    $("#digit" + key).focus();
                    $("#digit" + key).focus();
                }
            }
        }
        $(document).ready(function () {
            $(':input').keyup(function (e) {
                if ((e.which == 8 || e.which == 46) && $(this).val() == '') {
                    $(this).prev('input').focus();
                }
            });
        });

        validationLength = 1;
        $('#digit4').on('keyup change', function () {
            var otp_1 = $('#digit1').val().length;
            var otp_2 = $('#digit2').val().length;
            var otp_3 = $('#digit3').val().length;
            var otp_4 = $('#digit4').val().length;

            if (otp_1 == validationLength && otp_2 == validationLength && otp_3 == validationLength && otp_4 == validationLength) {
                if ($.isNumeric(otp_1) && $.isNumeric(otp_2) && $.isNumeric(otp_3) && $.isNumeric(otp_4)) {
                    document.activeElement.blur();
                }
            }

        });


        /*validationLength = 1;
         $('#digit' + key).on('keyup change', function () {
         alert("I am an alert box!");
         if ($(this).val().length == validationLength) {
         if($.isNumeric($(this).val())){
         document.activeElement.blur();
         }
         }
         });*/

    </script>
@stop
