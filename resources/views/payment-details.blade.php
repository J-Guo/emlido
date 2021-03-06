@extends('layouts.main-layout')

@section('content')
<section class="contact-top">

    <!-- Left Side Bar -->
    @include('partials.left-side-bar')

    <div class="menu-margin">
        <h1 class="clearfix">Emlido-Edit Payment Method </h1>

        <div class="contact-form">
            <div class="container">

                <div class="profile-pic">
                    <div id="validation-errors" ></div>
                    <div class="profl-img">
                        <img id="profile_img" src="{{ url('assets/Frontend/img/braintree2.png') }}">
                    </div>
                </div>

                <!-- Payment Method Updated Information-->
                @if(session()->has('message') )
                <div class="alert alert-info text-center">
                    <strong>Successful!:</strong>
                    <span>{{ session()->get('message') }}</span>
                    <a class="close" data-dismiss="alert">x</a>
                </div>
                @endif
                <!-- Show Braintree Checkout Errors-->
                @if(session()->has('braintreeError'))
                <div class="alert alert-danger text-center">
                    <strong>Failed!:</strong>
                    <span>{{ session()->get('braintreeError') }}</span>
                    <a class="close" data-dismiss="alert">x</a>
                </div>
                @endif
                <!-- Show Input Validation Errors-->
                @if(count($errors) > 0 )
                    @foreach($errors->all() AS $error)
                        <div class="alert alert-info text-center">
                            {{$error}}
                            <a class="close" data-dismiss="alert">x</a>
                        </div>
                    @endforeach
                @endif



                <form id="reg-form" action="{{url('payment-details')}}"  method="post">
                {{csrf_field()}}

                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">First Name</label>
                            <div class="input-all">
                                <input type="text" name="firstName" class="form-control"
                                       value="{{isset($firstName)? $firstName : "" }}"
                                       placeholder="{{isset($firstName)? $firstName : "Your First Name" }}">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>


                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Last Name</label>
                            <div class="input-all">
                                <input type="text" name="lastName" class="form-control"
                                       value="{{isset($lastName)? $lastName : "" }}"
                                       placeholder="{{isset($lastName)? $lastName : "Your Last Name" }}">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Current Card:{{isset($last4)? "*************".$last4 : "No Payment Method"}}</label>
                        </div>
                    </div>


                    <input type="hidden" id="clientToken" value="{{$clientToken}}">

                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <div class="input-all">
                                <div id="payment-form"></div>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn" >
                                <button class="btn" type="submit" id="submitButton" style="width: 100%">SUBMIT</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>

</section>
@stop

@section('footer')
    <script src="https://js.braintreegateway.com/js/braintree-2.20.0.min.js"></script>
    <script>
        // We generated a client token for you so you can test out this code
        // immediately. In a production-ready integration, you will need to
        // generate a client token on your server (see section below).
        //    var clientToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI4MjcyNGU1OTBkZmRjZGVkOWM2NzRlZTNiMGRkZDk2YWEwYWEwNThmZTFmYWQzN2YzZGJhZGE2NDhkOWMxM2Y0fGNyZWF0ZWRfYXQ9MjAxNi0wMi0yNVQwMDo1NTo0MS45MDkyNTA1NjErMDAwMFx1MDAyNm1lcmNoYW50X2lkPWN2aDRzbWpkODJkeWYzaHdcdTAwMjZwdWJsaWNfa2V5PTJtajVwbmtrOHk4d2J0YnciLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3ZoNHNtamQ4MmR5ZjNody9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diIsInBvc3RhbF9jb2RlIl0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9jdmg0c21qZDgyZHlmM2h3L2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiT3JiZWxsYSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6Im9yYmVsbGEiLCJjdXJyZW5jeUlzb0NvZGUiOiJBVUQifSwiY29pbmJhc2VFbmFibGVkIjpmYWxzZSwibWVyY2hhbnRJZCI6ImN2aDRzbWpkODJkeWYzaHciLCJ2ZW5tbyI6Im9mZiJ9";

        var clientToken = $("#clientToken").val(); //get client token


        braintree.setup(clientToken, "dropin", {
            container: "payment-form",
            styles: {
                'input': {
                    'color': '#1A41A4',
                    'font-family': 'Helvetica, sans-serif',
                    'font-size': '16pt'
                },
                'input.invalid': {
                    'color': 'red'
                }
            }
        });



    </script>
@stop

