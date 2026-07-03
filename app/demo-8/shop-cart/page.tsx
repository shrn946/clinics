
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
<h1 class="text-white split-title">Shop Cart</h1>
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
                                      Shop Cart
                                    </li>
</ul>
</div>
</div>
</div>
<!-- cart section start -->
<div class="cart-section section-padding">
<div class="container">
<div class="cart-list-area">
<div class="table-responsive">
<table class="table common-table">
<thead>
<tr>
<th class="text-center">Product</th>
<th class="text-center">Price</th>
<th class="text-center">Quantity</th>
<th class="text-center">Subtotal</th>
</tr>
</thead>
<tbody>
<tr class="align-items-center py-3">
<td>
<div class="cart-item-thumb d-flex align-items-center gap-4">
<i class="fas fa-times"></i>
<img alt="product" class="w-100" src="/demo-8/assets/img/inner-page/shop/shop-cart-01.png"/>
<span class="head text-nowrap">Organic Banana - 1 KG</span>
</div>
</td>
<td class="text-center">
<span class="price-usd">
                                            \$12.40 USD
                                        </span>
</td>
<td class="price-quantity text-center">
<div class="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
<button class="quantityDecrement"><i class="fal fa-minus"></i></button>
<input class="quantityValue" type="text" value="1"/>
<button class="quantityIncrement"><i class="fal fa-plus"></i></button>
</div>
</td>
<td class="text-center">
<span class="price-usd">
                                            \$12.40 USD
                                        </span>
</td>
</tr>
<tr class="align-items-center py-3">
<td>
<div class="cart-item-thumb d-flex align-items-center gap-4">
<i class="fas fa-times"></i>
<img alt="product" class="w-100" src="/demo-8/assets/img/inner-page/shop/shop-cart-02.png"/>
<span class="head text-nowrap">Fresh Fruits - 1 KG</span>
</div>
</td>
<td class="text-center">
<span class="price-usd">
                                            \$25.50 USD
                                        </span>
</td>
<td class="price-quantity text-center">
<div class="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
<button class="quantityDecrement"><i class="fal fa-minus"></i></button>
<input class="quantityValue" type="text" value="1"/>
<button class="quantityIncrement"><i class="fal fa-plus"></i></button>
</div>
</td>
<td class="text-center">
<span class="price-usd">
                                            \$25.50 USD
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="coupon-items d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center gap-4 pt-4">
<form action="#" class="d-flex flex-sm-nowrap flex-wrap align-items-center gap-3">
<input placeholder="Enter coupon code" type="text"/>
<button class="theme-btn alt-color radius-xs" type="submit">Apply</button>
</form>
<button class="theme-btn alt-color radius-xs" type="button">Update Cart</button>
</div>
</div>
</div>
</div>
<!-- Cart Total section end -->
<div class="cart-total-area section-padding pt-0">
<div class="container">
<div class="cart-total-items">
<h2>Cart totals</h2>
<ul>
<li>
                            Subtotal <span class="subtotal">\$37.90 USD</span>
</li>
<li>
                            Total <span class="price">\$37.90 USD</span>
</li>
</ul>
<a class="theme-btn" href="/demo-8/checkout">Proceed to Checkout</a>
</div>
</div>
</div>
<!-- Footer Section Start -->

`}} />
    </>
  );
}
