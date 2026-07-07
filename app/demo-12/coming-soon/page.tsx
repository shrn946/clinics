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
<main>
<!-- comming-soon-area-star -->
<section class="comming-soon pt-190 pb-190">
<div class="comming-soon-bg"></div>
<div class="container">
<div class="row">
<div class="col-lg-6 order-2 order-lg-1">
<div class="comming-soon-wrapper">
<div class="comming-soon mb-120">
<h4 class="comming-soon-title mb-35">Comming Soon</h4>
<p>The grand opening to make you fall in love with <br/> us. Drop by and get the experience.</p>
</div>
<div class="tpcoming__count">
<div class="tpcoming__countdown" data-countdown="2023/11/10"></div>
</div>
</div>
</div>
<div class="col-lg-6 order-1 order-lg-2">
<div class="comming-soon-wrap p-relative mb-40">
<div class="comming-soon-thumb">
<img alt="" src="/demo-12/assets/img/banner/comming-soon-1.html"/>
</div>
<div class="comming-soon-shape">
<img alt="" src="/demo-12/assets/img/shape/yellow-shape-1.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- comming-soon-area-end -->
</main>
<!-- JS here -->






















`}} />
  );
}
