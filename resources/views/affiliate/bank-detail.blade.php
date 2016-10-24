@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Left Side Bar -->
    @include('partials.left-side-bar-affiliate')

    <div class="menu-margin">
        <h1 class="clearfix">Emlido-Bank Detail </h1>

        <!-- Affiliate Bank Detail -->
        <div class="contact-form">
            <div class="container">
            <!-- Show Input Validation Errors Message-->
            @if (count($errors) > 0)
                @foreach($errors->all() AS $error)
                    <div class="alert alert-info text-center">
                        {{$error}}
                    </div>
                @endforeach
            @endif


                <form class="form nice-label" id="affiliateDetail" action="{{url('bank-detail/create')}}" method="POST">
                    {{csrf_field()}}


                    <div class="profile-pic">
                        <div id="validation-errors" ></div>
                        <div class="profl-img">
                            <img  src="{{ url('assets/Frontend/img/bank.png') }}">
                        </div>
                    </div>

                    <!-- Name Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Your Full Name</label>
                            <div class="input-all">
                                <input type="text" name="userName" id="name" class="form-control">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- Bank Name Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Bank Name</label>
                            <div class="input-all">
                                <input type="text" name="bankName" id="bankName" class="form-control">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- BSB Number Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">BSB </label>
                            <div class="input-all">
                                <input type="tel" name="bsbNo" id="bsbNo" class="form-control">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>

                    <!-- Account No. Field -->
                    <div class="form-group clearfix">
                        <div class="col-xs-12">
                            <label class="control-label">Account Number</label>
                            <div class="input-all">
                                <input type="tel" name="accountNo" id="accountNo" class="form-control">
                                <label>
                                    <img src="{{ url('assets/Frontend/img/fav-icon.png') }}">
                                </label>
                            </div>
                            <div for="name" class="error"  generated="true"></div>
                        </div>
                    </div>



                    <!-- Submit Button-->
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn" type="submit" style="width: 100%"> Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

         </div>

    </div>

</section>

@stop