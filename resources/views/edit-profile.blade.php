@extends('layouts.main-layout')

@section('content')

<section class="contact-top">

    <!-- Left Side Bar -->
    @include('partials.left-side-bar')

    <div class="menu-margin">
        <h1 class="clearfix">Emlido-Edit Profile </h1>

        <!-- Pages -->
        <div class="contact-form">
            <div class="container">

                <!-- Show Input Validation Errors Message-->
                @if (count($errors) > 0)
                    @foreach($errors->all() AS $error)
                        <div class="alert alert-info text-center">
                            {{$error}}
                            <a class="close" data-dismiss="alert">x</a>
                        </div>
                    @endforeach
                @endif

                <!-- Show Updated Information-->
                @if(session()->has('message') )
                    <div class="alert alert-success text-center">
                        <strong>Info!</strong>
                        <span>{{ session()->get('message') }}</span>
                        <a class="close" data-dismiss="alert">x</a>
                    </div>
                @endif

                <!-- Form to submit user profile edit information including image upload-->
                <form id="reg-form" action="{{url('profile/edit')}}" enctype="multipart/form-data" method="post">
                 {{csrf_field()}}

                    <div class="profile-pic">
                        <div id="validation-errors" ></div>
                        <div class="profl-img">

                            <img src="{{ isset($user) ? url("avatars/".$user->profile_photo) :url("avatars/default.jpg")}}"
                                 id="avatar-preview" height="75px" width="75px" alt="image"/>
                            <i class="fa fa-camera"></i>
                            <input type="file" id="avatar" name="avatar" accept='image/*'  />

                        </div>
                    </div>

                    <!-- Display Name Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">DISPLAY NAME</label>
                            <div class="input-all">
                                <input type="text" placeholder="Input your name" class="form-control" name="displayName" id="name"
                                       value="{{isset($user) ? $user->display_name :''}}">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- Gender Field-->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Gender</label>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                    <input  name="gender" id="gender" type="radio" value="male" checked></div>
                                                <span>Male </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                    <input name="gender" id="gender" type="radio" value="female"></div>
                                                <span>Female </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div for="gender" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- Age Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Age</label>
                            <div class="input-all arrow">
                                {{Form::selectRange('age',
                                18, 75,
                                isset($user) ? $user->age :18,['class' => 'form-control'])
                                }}
                                <label><img src="{{ url('assets/Frontend/img/edit1.png') }}"></label>
                            </div>
                            <div for="age" class="error"  generated="true"></div>
                        </div>
                    </div>
                    <!-- Smook Status-->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Do you smoke</label>
                            <div class="row">
                                <div class="col-xs-4">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                    <input name="smoke_status" type="radio" value="1" checked> </div><span>Always</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                    <input name="smoke_status" type="radio" value="2"> </div><span>Casual</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                    <input name="smoke_status" type="radio" value="3"> </div><span>No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div for="looking_for" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- Profile Status-->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Public Profile</label>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                {{ Form::radio('public_profile', '1',$user->public_profile == 1 ) }}
                                                </div>
                                                <span>Yes</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="radio-input-all">
                                        <div class="radio">
                                            <label>
                                                <div class="white">
                                                {{ Form::radio('public_profile', '2',$user->public_profile == 2) }}
                                                </div><span>No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div for="looking_for" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn" type="submit" id="btn_submit"><i class="fa fa-paper-plane"></i> SUBMIT</button>
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

<!--Scripts for image upload preview -->
<script>
    $('document').ready(function(){

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#avatar-preview').attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#avatar").change(function () {
            readURL(this);
        });

    });

</script>
@stop

