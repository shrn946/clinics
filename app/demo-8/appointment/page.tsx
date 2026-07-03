
export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: `
<!-- ========== Meta Tags ========== -->
<meta charset="utf-8"/>
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="Gramentheme" name="author"/>
<meta content="Lumina Beauty Clinic offers premium cosmetic procedures, skincare, and aesthetic treatments to bring out your natural glow." name="description"/>
<!-- ======== Page title ============ -->
<title>Lumina Beauty Clinic - Premium Aesthetics &amp; Care</title>
<!--<< Favcion >>-->
<link href="/demo-8/assets/img/favicon.svg" rel="shortcut icon"/>
<!--<< Bootstrap min.css >>-->
<link href="/demo-8/assets/css/bootstrap.min.css" rel="stylesheet"/>
<!--<< All Min Css >>-->
<link href="/demo-8/assets/css/all.min.css" rel="stylesheet"/>
<!--<< Animate.css >>-->
<link href="/demo-8/assets/css/animate.css" rel="stylesheet"/>
<!--<< Magnific Popup.css >>-->
<link href="/demo-8/assets/css/magnific-popup.css" rel="stylesheet"/>
<!--<< Swiper Bundle.css >>-->
<link href="/demo-8/assets/css/swiper-bundle.min.css" rel="stylesheet"/>
<!--<< DatePicker.css >>-->
<link href="/demo-8/assets/css/datepickerboot.css" rel="stylesheet"/>
<!--<< Nice Select.css >>-->
<link href="/demo-8/assets/css/nice-select.css" rel="stylesheet"/>
<!--<< Main.css >>-->
<link href="/demo-8/assets/css/main.css" rel="stylesheet"/>
`}} />
      <div dangerouslySetInnerHTML={{__html: `
<!-- Breadcrumb Section Start -->
<div class="breadcrumb-wrapper hero-ptb image-distortion p-relative z-index-1 bg-cover" data-background="assets/img/breadcrumb-bg.jpg">
<div class="container">
<div class="page-heading">
<div class="breadcrumb-sub-title">
<h1 class="text-white split-title">Book Appointment</h1>
</div>
<ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
<li>
<a href="/demo-8">
<i class="fa-solid fa-house"></i> Home
                                        </a>
</li>
<li>
                                        /
                                    </li>
<li>
                                      Book appointment
                                    </li>
</ul>
</div>
</div>
</div>
<!-- Book Appointment Section Start -->
<section class="book-appointment-section fix section-padding">
<div class="container">
<div class="row g-4">
<div class="col-lg-6">
<div class="book-appointment-image fix">
<img alt="img" data-speed=".8" src="/demo-8/assets/img/inner-page/book-appointment.jpg"/>
</div>
</div>
<div class="col-lg-6">
<div class="book-appointment-content">
<div class="section-title mb-0">
<h2>
<span class="style-font">Appointment</span> Form
                                            </h2>
<p>
                                                Our expert care focuses on personalized solutions that highlight your best features while promoting a healthy, luminous appearance.
                                            </p>
<form action="#" class="contact-form-box" id="contact-form">
<div class="row g-4 align-items-center">
<div class="col-lg-12">
<div class="form-clt">
<div class="form">
<select class="single-select w-100">
<option>Select Service</option>
<option>Select Procedure</option>
<option>Pick a Service</option>
</select>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt">
<div class="form">
<select class="single-select w-100">
<option>Select Staff</option>
<option>Choose Doctor</option>
<option>Select Specialist</option>
</select>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt style-2">
<div class="input-group date" data-date-format="dd-mm-yyyy" id="datepicker">
<input class="form-control" placeholder="Select date" readonly="" type="text"/>
<span class="input-group-addon"><i class="far fa-calendar"></i></span>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt">
<div class="form">
<select class="single-select w-100">
<option>Select start time</option>
<option>9.00AM</option>
</select>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt">
<div class="form">
<select class="single-select w-100">
<option>Select end time</option>
<option>10.00PM</option>
</select>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="form-clt">
<textarea name="message" placeholder="write message"></textarea>
</div>
</div>
<div class="col-lg-12">
<button class="contact-btn" type="submit">
                                                            Submit now <i class="fa-regular fa-arrow-up-right"></i>
</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer Section Start -->

`}} />
    </>
  );
}
