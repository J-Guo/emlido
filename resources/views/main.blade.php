@extends('layouts.main-layout')

@section('content')
<section class="contact-top">
    <div class="menu-margin">
        <h1 class="clearfix">Emlido-Start Your Date</h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar')

        <div id="User-Map"></div>

        <div class="contact-form" >
            <div class="container">



            <form id="dateForm" name="dataForm" action="{{url('post-task')}}" method="POST">
                {{csrf_field()}}

                <div class="profile-pic">
                    <div class="profl-img">
                        <img  src="{{ url('assets/Frontend/img/clge4.png') }}">
                    </div>
                </div>

                <!-- Date Field-->
                <div class="form-group clearfix">
                    <div class="col-xs-12">
                        <label class="control-label">Prefer Date</label>
                        <div class="input-all">
                            <select name="date" class="form-control">
                                <?php for($i=0;$i<=4;$i++){ ?>
                                <option value="<?php echo date('Y-m-d', strtotime("+$i days")); ?>"> <?php echo date('d-m-Y', strtotime("+$i days")); ?> </option>
                                <?php } ?>
                            </select>
                            <label>
                                <img src="{{ url('assets/Frontend/img/form-1.png') }}">
                            </label>
                        </div>
                        <div for="name" class="error"  generated="true"></div>
                    </div>
                </div>

                <!-- Rate Field-->
                <div class="form-group clearfix">
                    <div class="col-xs-12">
                        <label class="control-label">Rate</label>
                        <div class="input-all">
                            <select name="rate" class="form-control">
                                <option value="200">A$ 200</option>
                                <option value="300">A$ 300</option>
                                <option value="400">A$ 400</option>
                                <option value="500">A$ 500</option>
                                <option value="600">A$ 600</option>
                                <option value="700">A$ 700</option>
                            </select>
                            <label>
                                <img src="{{ url('assets/Frontend/img/form-2.png') }}">
                            </label>
                        </div>
                        <div for="name" class="error"  generated="true"></div>
                    </div>
                </div>

                <!-- Duration Field-->
                <div class="form-group clearfix">
                    <div class="col-xs-12">
                        <label class="control-label">Duration</label>
                        <div class="input-all">
                            <select name="duration" class="form-control">
                                <option value="1">1 hr Outing</option>
                                <option value="2">2 hrs Outing</option>
                                <option value="3">3 hrs Outing</option>
                                <option value="4">4 hrs Outing</option>
                            </select>
                            <label>
                                <img src="{{ url('assets/Frontend/img/form-4.png') }}">
                            </label>
                        </div>
                        <div for="name" class="error"  generated="true"></div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-xs-12">
                        <div class="find-btns acc-btn">
                            <button class="btn" type="submit" style="width: 100%"> Request a Date</button>
                        </div>
                    </div>
                </div>

            </form>
            </div>
        </div>
    </div>
</section>
@stop

@section("footer")

<!--Build Vue.js -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.14/vue.min.js"></script>
<!--Build Local JavaScripts -->
<script src="{{asset('assets/js/google-map.js')}}"></script>
<!--Build Google Map API -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAomTWe6-_JXMoza7hm9olIQLZ8TEq5PdY&callback=app.createMap"
        async defer></script>

@stop

