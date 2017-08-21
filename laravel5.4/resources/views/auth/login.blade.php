<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="shortcut icon" href="favicon.ico" >
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="keywords" content="Credit Login / Register Form Responsive Widget,Login form widgets, Sign up Web forms , Login signup Responsive web form,Flat Pricing table,Flat Drop downs,Registration Forms,News letter Forms,Elements" />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!-- Custom Theme files -->
    <link href="css/plugin.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <script type="text/javascript" src="js/plugin.js"></script>
</head>
<body>
<h1>Welcome</h1>
<div class="main-agileits">
    <!--form-stars-here-->
    <div class="form-w3-agile">
        <h2>Login form</h2>
        <form action="{{ route('login') }}" method="post">
            {{ csrf_field() }}
            <div class="form-sub-w3{{ $errors->has('email') ? ' has-error' : '' }}">
                <input type="text" name="email" placeholder="Customer email" required="" />
                @if ($errors->has('email'))

                @endif
                <div class="icon-w3">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>
            <div class="form-sub-w3">
                <input type="password" name="password" placeholder="Password" required="" />
                @if ($errors->has('password'))

                @endif
                <div class="icon-w3">
                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                </div>
            </div>
            <div>
                <span class="p-bottom-w3ls" style="float: right">
                    <a class="w3_play_icon1" href="#small-dialog1">Register</a> /
                    <a class="w3_play_icon1" onclick="window.location.href='/password/reset'" href="">Forgot</a>
                </span>
            </div>

            <div class="submit-w3l">
                <input type="submit" value="Login">
            </div>
        </form>
    </div>
    <!--//form-ends-here-->
</div>
<div id="small-dialog1" class="mfp-hide">
    <div class="contact-form1">
        <div class="contact-w3-agileits">
            <h3>Register Form</h3>
            <form  method="POST" action="{{ route('register') }}">
                {{ csrf_field() }}
                <div class="form-sub-w3ls">
                    <input id="name" type="text"  placeholder="Customer username" name="name" value="{{ old('name') }}" required autofocus>
                    @if ($errors->has('name'))
                        <script>
                            this.toastr.error('{{ $errors->first('name') }}');
                        </script>
                    @endif
                    <div class="icon-agile">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="form-sub-w3ls">
                    <input placeholder="Email" name="email" type="email" name="password" required>
                    @if ($errors->has('email'))
                        <script>
                            this.toastr.error('{{ $errors->first('email') }}');
                        </script>
                    @endif
                    <div class="icon-agile">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="form-sub-w3ls">
                    <input placeholder="Password" name="password" type="password" name="password" required>
                    @if ($errors->has('password'))
                        <script>
                            this.toastr.error('{{ $errors->first('password') }}');
                        </script>
                    @endif
                    <div class="icon-agile">
                        <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="form-sub-w3ls">
                    <input placeholder="Confirm Password"  type="password" name="password_confirmation" required>
                    <div class="icon-agile">
                        <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    </div>
                </div>
        </div>
        <div class="login-check">
            <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><p>I Accept Terms & Conditions</p></label>
        </div>
        <div class="submit-w3l">
            <input type="submit"  value="Register">
        </div>
        </form>
    </div>
</div>
<!-- copyright -->
<div class="copyright w3-agile">
    <p> © 2017 Credit Login / Register Form . All rights reserved | Powered by <a href="#" target="_blank">huyaokun</a></p>
</div>
<!-- //copyright -->

<!-- pop-up-box -->
<script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
<!--//pop-up-box -->
<script>
    $(document).ready(function() {
        $('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    });
</script>
</body>
</html>