@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - Send Offer </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

            <!-- Task Poster Information-->
            <div class="listing-blok">
                <div class="media">
                    <div class="media-left">
                        <div class="list-img">
                            <img src="{{ isset($task_poster) ? url("avatars/".$task_poster->profile_photo) :url("avatars/default.jpg")}}"
                                 height="100" width="100">
                        </div>
                        <!-- Show User Rating-->
                        <div class="date-list">
                        <span class="star-rating">
                        @include('partials.review-stars',['rate' => $task_poster->avgRateAsUser()])
                        </span>
                        </div>
                    </div>
                    <div class="media-body"> <a class="media-heading">Task Information</a>
                        <p>Poster: {{$task_poster->display_name}}</p>
                        <p>Price: ${{isset($posted_task) ? $posted_task->price :''}}</p>
                        <p>Date  : {{isset($posted_task) ? $posted_task->date :''}}</p>
                        <div class="item-subtitle"><p>Place: CBD Sydney</p></div>
                    </div>
                </div>
            </div>

            <!-- Make Offer Form-->

            <form  class="form nice-label" id="offerForm" action="{{url('send-offer')}}" method="POST">
                {{csrf_field()}}
                <input type="hidden" name="task_id" value="{{$posted_task->id}}">

                <div class="form-group clearfix">
                    <div class="col-xs-12">
                        <label class="control-label">Price</label>
                        <div class="input-all">
                            <input type="text" id="price" name="price" class="form-control" value="{{$posted_task->price}}">
                            <label>
                                <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                            </label>
                        </div>
                        <div for="name" class="error"  generated="true"></div>
                    </div>
                </div>

                <div class="form-group clearfix">
                    <div class="col-xs-12">
                        <label class="control-label">Prefer Date</label>
                        <div class="input-all">
                            <input type="date" id="date" name="date" class="form-control" placeholder="Input Date"
                                   value="{{date('Y-m-d')}}">
                            <label>
                                <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                            </label>
                        </div>
                        <div for="name" class="error"  generated="true"></div>
                    </div>
                </div>


                <!-- Submit Button-->
                <div class="form-group">
                    <div class="col-xs-12">
                        <div class="find-btns acc-btn" >
                            <button class="btn" type="submit" style="width: 100%" > Send Offer</button>
                        </div>
                    </div>
                </div>
            </form>

            <!-- Show Input Errors Message-->
            <div class="content-block">
            @if (count($errors) > 0)
                @foreach($errors->all() AS $error)
                    <div class="alert alert-info text-center">
                        {{$error}}
                        <a class="close" data-dismiss="alert">x</a>
                    </div>
                @endforeach
            @endif
            </div>





            </div>
        </div>
    </div>

</section>
@stop

