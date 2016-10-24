@extends('layouts.login-layout')

@section('content')
<section class="first-temp">
    <div class="container">
        <section class="header"> <img src="{{asset('assets/Frontend/img/make-you-happy.png')}}"> </section>
        <div class="other-content">
            <form class="form nice-label" id="phone-form" action="{{url('otp')}}" method="POST">
                {!! csrf_field() !!}
                <div class="input-number">
                    <input class="form-control" type="tel" maxlength="10" id="mobileNum" name="mobileNum" placeholder="Mobile Number"/>
                </div>

                <!-- Determine usre type -->
                <input type="hidden" id="userType" name="userType" value="user">

                <!-- Show Authentication Failed Information-->
                @if(session()->has('message') )
                    <div class="error">
                        <span class="color-blue">{{ session()->get('message') }}</span>
                    </div>
                @endif

                <div class="find-btns">
                    <input type="hidden" name="latitude" id="latitude" >
                    <input type="hidden" name="latitude" id="longitude" >
                    {{--<input type="submit" id="userSubmit" class="button button-primary" value="Find a date">--}}
                    <button type="submit" name="userSubmit" id="customer_user_btn" class="btn" value="user">Find a date</button>

                    {{--<input type="submit" id="affiliateSubmit" class="button button-primary" value="Affilate Login">--}}
                    <button type="submit" name="userSubmit" id="affiliate_user_btn" class="btn" value="affiliate">Affiliate Login</button>
                </div>
            </form>
        </div>
    </div>
</section>
@stop

@section('footer')
    <script>

        validationLength = 10;
        $('#mobileNum').on('keyup change', function () {
            if ($(this).val().length == validationLength) {
                if($.isNumeric($(this).val())){
                    document.activeElement.blur();
                }
            }
        });

    </script>
@stop

