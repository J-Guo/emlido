@extends('layouts.affiliate-layout')

@section('header')
<meta name="chat-csrf-token" content="{{ csrf_token() }}" />
<meta name="pusher-key" content="{{env("PUSHER_KEY")}}" />
<meta name="post-url" content="{{url('post-message')}}" />
<!-- Pusher Chatroom CSS -->
<link rel="stylesheet" type="text/css" href="{{asset('assets/css/chat-pusher.css')}}" />
@stop

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - Assigned Date Chat Room</h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

    <!-- Pages -->
        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                @if(!isset($assignedTaskArray) || empty($assignedTaskArray))
                    <h2> You do not have any assigned task</h2>
                @else

                <!-- Chat Room Header-->
                <div class="listing-blok">
                    <div class="media">
                        <div class="media-left">
                            <div class="list-img">
                                <img src="{{ isset($assignedTaskArray) ? url("avatars/".$assignedTaskArray['user']->profile_photo) :url("avatars/default.jpg")}}"
                                     height="100"  width="100">
                            </div>
                            <!-- Show User Rating-->
                            <div class="date-list">
                            <span class="star-rating">
                            @include('partials.review-stars',['rate' =>$assignedTaskArray['user']->avgRateAsUser()])
                            </span>
                            </div>
                        </div>
                        <div class="media-body"> <a class="media-heading">Task Information</a>
                            <p>Poster: {{$assignedTaskArray['user']->display_name}}</p>
                            <p>Price : ${{isset($assignedTaskArray) ? $assignedTaskArray['offer']->price:''}}</p>
                            <p>Date  : {{isset($assignedTaskArray) ? $assignedTaskArray['offer']->date:''}}</p>
                        </div>
                    </div>
                </div>

                <div class="form-group clearfix" style="margin-top: 20px">
                    <!-- Chat Room Content-->
                    <div id="chatRoom" class="messages messages-auto-layout">

                    <!-- Show Chat History -->
                    @if($chat_history)
                        @foreach($chat_history as $message)
                        <!-- If sender is user -->
                         @if($message->sender == Auth::user()->id)
                            <div class="message message-sent">
                            <div class="message-text">
                                {{$message->message}}
                            </div>
                            </div>
                        @else
                            <div class="message message-received">
                                <div class="message-text">
                                    {{$message->message}}
                                </div>
                            </div>
                            @endif
                        @endforeach
                    @endif

                    <!-- Chat Message From Users-->

                    </div>
                    <form id="chatForm" action="">
                        <div class="form-group clearfix" style="margin-top: 20px">
                            <div class="input-all">
                                <input type="hidden" id="roomNum"
                                       value="{{isset($assignedTaskArray) ? $assignedTaskArray['offer']->id:'default'}}">
                                <input id="m" autocomplete="off"  style="width: 80%" />
                                <button class="btn-message" style="width: 18%">Send</button>
                            </div>
                        </div>
                    </form>
                </div>

                @endif

            </div>

        </div>
    </div>
</section>
@stop

@section('footer')
<!-- Pusher Socket -->
<script src="https://js.pusher.com/3.0/pusher.min.js"></script>
<script src="{{asset('assets/js/pages/chat-pusher.js')}}"></script>
@stop
