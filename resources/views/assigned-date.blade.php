@extends('layouts.main-layout')

@section('content')

<section class="contact-top">

    <div class="menu-margin">
        <h1 class="clearfix">Emlido - My Date </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar')

        <!-- Pages -->
        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                <!-- Chat Room-->
                <div class="page-content">

                @if(!isset($assignedDateArray) || empty($assignedDateArray))
                <h2> You do not have any assigned date</h2>
                @else
                <!-- Chat Room Header-->
                <div class="listing-blok">
                    <div class="media">
                        <div class="media-left">
                            <div class="list-img">
                                <img src="{{ isset($assignedDateArray) ? url("avatars/".$assignedDateArray['affiliate']->profile_photo) :url("avatars/default.jpg")}}"
                                     height="100" width="100">
                            </div>
                        </div>
                        <div class="media-body"> <a class="media-heading">Offer Information</a>
                            <p>Sender: {{$assignedDateArray['affiliate']->display_name}}</p>
                            <p>Price : ${{isset($assignedDateArray) ? $assignedDateArray['offer']->price:''}}</p>
                            <p>Date  : {{isset($assignedDateArray) ? $assignedDateArray['offer']->date:''}}</p>
                        </div>
                    </div>
                </div>


                <!-- Chat Room Body-->
                <div class="card">
                    <div class="card-content">
                        <!-- Chat Room Content-->
                        <div id="chatRoom" class="messages messages-auto-layout">

                        <!-- Chat Message From Users-->

                        </div>
                        <form id="chatForm" action="">
                        <div class="toolbar messagebar">
                            <div class="toolbar-inner">
                                <input type="hidden" id="roomNum"
                                       value="{{isset($assignedDateArray) ? $assignedDateArray['offer']->id:'default'}}">
                                <input id="m" autocomplete="off" />
                                <button class="button button-small">Send</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>

                     @endif

                    </div>

                <!-- End Chat Room-->


            </div>
        </div>
    </div>
    </div>
</section>
@stop

@section('footer')
<!-- Socket io-->
<script src="{{asset('assets/js/socket.io.js')}}"></script>
<script src="{{asset('assets/js/pages/chat-client.js')}}" type="text/javascript"></script>
@stop