'use client';

import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if (typeof (window as any).WOW !== 'undefined') {
          try {
            new (window as any).WOW().init();
          } catch (e) {}
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: `
<!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->
<!-- pre loader area start -->

<!-- pre loader area end -->
<!-- back to top start -->

<!-- back to top end -->
<!-- header area start -->

<!-- header area end -->
<!-- offcanvas area start -->
<div class="offcanvas__area">
<div class="offcanvas__wrapper">
<div class="offcanvas__close">
<button class="offcanvas__close-btn offcanvas-close-btn">
<svg fill="none" height="12" viewbox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1L1 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 1L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</button>
</div>
<div class="offcanvas__content">
<div class="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
<div class="offcanvas__logo logo">
<a href="/demo-12/index2">
<img alt="logo" src="/demo-12/assets/img/logo/logo.png"/>
</a>
</div>
</div>
<div class="tp-main-menu-mobile"></div>
<div class="offcanvas__btn">
<a class="tp-btn-offcanvas" href="/demo-12/contact">Getting Started <i class="fa-regular fa-chevron-right"></i></a>
</div>
<div class="side-info-contact">
<span>we are here</span>
<p>1489 Langley Ave <br/> Grand Forks Afb, North.</p>
</div>
<div class="side-info-social">
<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
</div>
</div>
</div>
</div>
<div class="body-overlay"></div>
<!-- offcanvas area end -->
<!-- header-search -->
<div class="tpsearchbar tp-sidebar-area">
<button class="tpsearchbar__close"><i class="fal fa-times"></i></button>
<div class="search-wrap text-center">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-8 col-md-12 col-12 pt-100 pb-100">
<h2 class="tpsearchbar__title">What Are You Looking For?</h2>
<div class="tpsearchbar__form">
<form action="#">
<input name="search" placeholder="Search Product..." type="text"/>
<button class="tpsearchbar__search-btn"><i class="fal fa-search"></i></button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="search-body-overlay"></div>
<!-- header-search-end -->
<main>
<!-- breadcrumb-area-start -->
<section class="breadcrumb-area tpbreadcrumb-overlay" data-background="assets/img/breadcrumb/breadcrumb-bg-1.html">
<div class="container">
<div class="row align-items-center">
<div class="col-12">
<div class="tpbreadcrumb text-center">
<h2 class="tpbreadcrumb-title">Checkout</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- checkout area start -->
<section class="tp-checkout-area pt-145 pb-145" data-bg-color="#EFF1F5">
<div class="container">
<div class="row">
<div class="col-xl-7 col-lg-7">
<div class="tp-checkout-verify">
<div class="tp-checkout-verify-item">
<p class="tp-checkout-verify-reveal">Returning customer? <button class="tp-checkout-login-form-reveal-btn" type="button">Click here to login</button></p>
<div class="tp-return-customer" id="tpReturnCustomerLoginForm">
<form action="#">
<div class="tp-return-customer-input">
<label>Email</label>
<input placeholder="Your Email" type="text"/>
</div>
<div class="tp-return-customer-input">
<label>Password</label>
<input placeholder="Password" type="password"/>
</div>
<div class="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
<div class="tp-return-customer-remeber">
<input id="remeber" type="checkbox"/>
<label for="remeber">Remember me</label>
</div>
<div class="tp-return-customer-forgot">
<a href="/demo-12/forgot-password">Forgot Password?</a>
</div>
</div>
<button class="tp-return-customer-btn tp-checkout-btn" type="submit">Login</button>
</form>
</div>
</div>
<div class="tp-checkout-verify-item">
<p class="tp-checkout-verify-reveal">Have a coupon? <button class="tp-checkout-coupon-form-reveal-btn" type="button">Click here to enter your code</button></p>
<div class="tp-return-customer" id="tpCheckoutCouponForm">
<form action="#">
<div class="tp-return-customer-input">
<label>Coupon Code :</label>
<input placeholder="Coupon" type="text"/>
</div>
<button class="tp-return-customer-btn tp-checkout-btn" type="submit">Apply</button>
</form>
</div>
</div>
</div>
</div>
<div class="col-lg-7">
<div class="tp-checkout-bill-area">
<h3 class="tp-checkout-bill-title">Billing Details</h3>
<div class="tp-checkout-bill-form">
<form action="#">
<div class="tp-checkout-bill-inner">
<div class="row">
<div class="col-md-6">
<div class="tp-checkout-input">
<label>First Name <span>*</span></label>
<input placeholder="First Name" type="text"/>
</div>
</div>
<div class="col-md-6">
<div class="tp-checkout-input">
<label>Last Name <span>*</span></label>
<input placeholder="Last Name" type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Company name (optional)</label>
<input placeholder="Example LTD." type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Country / Region </label>
<input placeholder="United States (US)" type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Street address</label>
<input placeholder="House number and street name" type="text"/>
</div>
<div class="tp-checkout-input">
<input placeholder="Apartment, suite, unit, etc. (optional)" type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Town / City</label>
<input placeholder="" type="text"/>
</div>
</div>
<div class="col-md-6">
<div class="tp-checkout-input">
<label>State / County</label>
<select class="tp-checkout-country doctor-name">
<option>New York US</option>
<option>Berlin Germany</option>
<option>Paris France</option>
<option>Tokiyo Japan</option>
</select>
</div>
</div>
<div class="col-md-6">
<div class="tp-checkout-input">
<label>Postcode ZIP</label>
<input placeholder="" type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Phone <span>*</span></label>
<input placeholder="" type="text"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Email address <span>*</span></label>
<input placeholder="" type="email"/>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-option-wrapper">
<div class="tp-checkout-option">
<input id="create_free_account" type="checkbox"/>
<label for="create_free_account">Create an account?</label>
</div>
<div class="tp-checkout-option">
<input id="ship_to_diff_address" type="checkbox"/>
<label for="ship_to_diff_address">Ship to a different address?</label>
</div>
</div>
</div>
<div class="col-md-12">
<div class="tp-checkout-input">
<label>Order notes (optional)</label>
<textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="col-lg-5">
<!-- checkout place order -->
<div class="tp-checkout-place white-bg">
<h3 class="tp-checkout-place-title">Your Order</h3>
<div class="tp-order-info-list">
<ul>
<!-- header -->
<li class="tp-order-info-list-header">
<h4>Product</h4>
<h4>Total</h4>
</li>
<!-- item list -->
<li class="tp-order-info-list-desc">
<p>Marshol - Vitamin Sanitizer <span> x 2</span></p>
<span>\$274:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Cocooil - Body Oil <span> x 1</span></p>
<span>\$74:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Davines - Oi All in One Milk  <span> x 3</span></p>
<span>\$362:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Body Works Mens Collection <span> x 1</span></p>
<span>\$145:00</span>
</li>
<!-- subtotal -->
<li class="tp-order-info-list-subtotal">
<span>Subtotal</span>
<span>\$507.00</span>
</li>
<!-- shipping -->
<li class="tp-order-info-list-shipping">
<span>Shipping</span>
<div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
<span>
<input id="flat_rate" name="shipping" type="radio"/>
<label for="flat_rate">Flat rate: <span>\$20.00</span></label>
</span>
<span>
<input id="local_pickup" name="shipping" type="radio"/>
<label for="local_pickup">Local pickup: <span>\$25.00</span></label>
</span>
<span>
<input id="free_shipping" name="shipping" type="radio"/>
<label for="free_shipping">Free shipping</label>
</span>
</div>
</li>
<!-- total -->
<li class="tp-order-info-list-total">
<span>Total</span>
<span>\$1,476.00</span>
</li>
</ul>
</div>
<div class="tp-checkout-payment">
<div class="tp-checkout-payment-item">
<input id="back_transfer" name="payment" type="radio"/>
<label data-bs-toggle="direct-bank-transfer" for="back_transfer">Direct Bank Transfer</label>
<div class="tp-checkout-payment-desc direct-bank-transfer">
<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
</div>
</div>
<div class="tp-checkout-payment-item">
<input id="cheque_payment" name="payment" type="radio"/>
<label for="cheque_payment">Cheque Payment</label>
<div class="tp-checkout-payment-desc cheque-payment">
<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
</div>
</div>
<div class="tp-checkout-payment-item">
<input id="cod" name="payment" type="radio"/>
<label for="cod">Cash on Delivery</label>
<div class="tp-checkout-payment-desc cash-on-delivery">
<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
</div>
</div>
<div class="tp-checkout-payment-item paypal-payment">
<input id="paypal" name="payment" type="radio"/>
<label for="paypal">PayPal <img alt="" src="/demo-12/assets/img/icon/payment-option.html"/> <a href="#">What is PayPal?</a></label>
</div>
</div>
<div class="tp-checkout-agree">
<div class="tp-checkout-option">
<input id="read_all" type="checkbox"/>
<label for="read_all">I have read and agree to the website.</label>
</div>
</div>
<div class="tp-checkout-btn-wrapper">
<a class="tp-checkout-btn w-100" href="#">Place Order</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- checkout area end -->
<!-- brand-slider-area-start -->
<section class="brand-slider-area">
<div class="brand-slider-wrap brand-slider-4">
<div class="brand-slide-active splide">
<div class="splide__track">
<div class="splide__list">
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <i><img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.html"/></i> <a href="#">Get In Touch</a> </h4>
</div>
</div>
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"><i> <img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.html"/></i> <a href="#">Healing Is Better</a></h4>
</div>
</div>
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <a href="#">Improving life</a></h4>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- brand-slider-area-end -->
</main>
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->






















`}} />
  );
}
