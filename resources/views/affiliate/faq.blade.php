@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Notification -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - FAQs </h1>

    <!-- FAQ Header -->
    <div class="contact-head">
        <div class="container">
            <h4>FAQs</h4>
            <p>Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu,
                diam erant convenire et vis. Et essent evertitur sea.</p>
        </div>
    </div>

    <!-- FAQ Content -->
    <div class="faq-section">
        <div class="container">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne3">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3" class="">
                                There are many variations of passages??
            <span class="plus-btn">
            <i class="fa fa-minus"></i>
            </span>
                            </a>
                        </h4>

                    </div>
                    <div id="collapseOne3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne3" aria-expanded="true">
                        <div class="panel-body">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo4">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                                Contrary to popular belief???
                <span class="plus-btn">
           <i class="fa fa-minus"></i>
           </span>
                            </a>
                        </h4>

                    </div>
                    <div id="collapseTwo4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo4" aria-expanded="false" style="height: 0px;">
                        <div class="panel-body">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo8">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo8" aria-expanded="false" aria-controls="collapseTwo8">
                                Lorem Ipsum is simply??
                <span class="plus-btn">
           <i class="fa fa-minus"></i>
           </span>
                            </a>
                        </h4>

                    </div>
                    <div id="collapseTwo8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo8" aria-expanded="false" style="height: 0px;">
                        <div class="panel-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
                <div class="find-btns faq-btn">
                    <form action="{{url('begin-task')}}" method="POST" id="acceptForm">
                        {{csrf_field()}}
                        <input type="submit" form="acceptForm" class="btn" value="Accpet">
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>

</section>

@stop