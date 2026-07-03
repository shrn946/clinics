
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
<h1 class="text-white split-title">CheckOut</h1>
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
                                      CheckOut
                                    </li>
</ul>
</div>
</div>
</div>
<!-- Checkout Section Start -->
<section class="checkout-section fix section-padding">
<div class="container">
<div class="row">
<div class="col-12">
<form action="#" method="post">
<div class="row g-4">
<div class="col-md-5 col-lg-4 col-xl-3">
<div class="checkout-radio">
<p class="primary-text">Select any one</p>
<div class="checkout-radio-wrapper">
<div class="checkout-radio-single">
<input class="form-check-input" id="cCard" name="pay-method" type="checkbox" value="Credit/Debit Cards"/>
<label for="cCard">Credit/Debit Cards</label>
</div>
<div class="checkout-radio-single">
<input class="form-check-input" id="paypal" name="pay-method" type="checkbox" value="PayPal"/>
<label for="paypal">PayPal</label>
</div>
<div class="checkout-radio-single">
<input class="form-check-input" id="payoneer" name="pay-method" type="checkbox" value="Payoneer"/>
<label for="payoneer">Payoneer</label>
</div>
<div class="checkout-radio-single">
<input class="form-check-input" id="visa" name="pay-method" type="checkbox" value="Visa"/>
<label for="visa">Visa</label>
</div>
<div class="checkout-radio-single">
<input class="form-check-input" id="mastercard" name="pay-method" type="checkbox" value="Mastercard"/>
<label for="mastercard">Mastercard</label>
</div>
<div class="checkout-radio-single">
<input class="form-check-input" id="fastPay" name="pay-method" type="checkbox" value="Fastpay"/>
<label for="fastPay">Fastpay</label>
</div>
</div>
</div>
</div>
<div class="col-md-7 col-lg-8 col-xl-9">
<div class="checkout-single-wrapper">
<div class="checkout-single boxshado-single">
<h2>Billing address</h2>
<div class="checkout-single-form">
<div class="row g-4">
<div class="col-lg-6">
<div class="input-single">
<input id="userFirstName" name="user-first-name" placeholder="First Name" required="" type="text"/>
</div>
</div>
<div class="col-lg-6">
<div class="input-single">
<input id="userLastName" name="user-last-name" placeholder="Last Name" required="" type="text"/>
</div>
</div>
<div class="col-lg-6">
<div class="input-single">
<input id="userCheckEmail" name="user-check-email" placeholder="Your Email" required="" type="email"/>
</div>
</div>
<div class="col-lg-6">
<div class="input-single">
<div class="form">
<select class="single-select w-100">
<option>USA</option>
<option>Aus</option>
<option>UK</option>
</select>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="input-single">
<textarea id="userAddress" name="user-address" placeholder="Address"></textarea>
</div>
</div>
</div>
</div>
</div>
<div class="checkout-single checkout-single-bg">
<h3>Payment Methods</h3>
<div class="checkout-single-form">
<p class="payment"></p>
<div class="row g-3">
<div class="col-lg-12">
<div class="input-single">
<label for="userCardNumber">Card number</label>
<input id="userCardNumber" name="user-card-number" placeholder="0000 0000 0000 0000" type="number"/>
</div>
</div>
<div class="col-lg-6">
<div class="input-single">
<label for="userCardDate">Expiry date</label>
<input id="userCardDate" placeholder="DD/MM/YY" type="text"/>
</div>
</div>
<div class="col-lg-6">
<div class="input-single">
<label for="userCvc">Cvc / Cvv</label>
<input id="userCvc" maxlength="3" name="user-card-cvc" placeholder="3 Digits" required="" type="text"/>
</div>
</div>
<div class="col-lg-12">
<div class="input-single">
<label for="userCardName">Name on card</label>
<input id="userCardName" name="user-card-name" placeholder="Name" type="text"/>
</div>
</div>
</div>
</div>
<div class="input-single input-check payment-save">
<input class="form-check-input" id="saveForNext" name="save-for-next" type="checkbox"/>
<label for="saveForNext">Save for my next payment</label>
</div>
<div class="mt-4">
<a class="theme-btn" href="/demo-8/checkout">
<span> Payment Now</span>
</a>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
<!-- Footer Section Start -->

`}} />
    </>
  );
}
