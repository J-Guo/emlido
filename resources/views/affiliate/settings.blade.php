@extends('layouts.main-layout')

@section('content')

    <section class="contact-top">

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

                <!-- Content -->
        <div class="menu-margin">
            <h1 class="clearfix">Emlido-Settings </h1>

            <div class="contact-form">
                <div class="container">

                    <div class="profile-pic">
                        <div class="profl-img">
                            <img  src="{{ url('assets/Frontend/img/setting.png') }}">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn"  style="width: 100%" onclick="location.href='{{url('aprofile/edit')}}'"><i class="fa fa-pencil-square-o"></i> Edit My Profile </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn"  style="width: 100%" onclick="location.href='{{url('bank-detail/edit')}}'"><i class="fa fa-credit-card"></i> Edit Bank Detail </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn"  style="width: 100%" onclick="location.href='{{url('#')}}'"><i class="fa fa-bell"></i> Notifications </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn"  style="width: 100%" onclick="location.href='{{url('faq')}}'"><i class="fa fa-question"></i> FAQs </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn"  style="width: 100%" onclick="location.href='{{url('logout')}}'"><i class="fa fa-sign-out"></i> Logout</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </section>
@stop