
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
<h1 class="text-white split-title">AI Facial Analysis</h1>
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
                                     AI facial analysis
                                    </li>
</ul>
</div>
</div>
</div>
<!-- Analysis Section Start -->
<section class="analysis-section section-padding pt-0">
<div class="container">
<div class="analysis-wrapper">
<div class="row g-4">
<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
<div class="analysis-icon-items">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon1.svg"/>
</div>
<span class="title">Ai powered analysis</span>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
<div class="analysis-icon-items">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon2.svg"/>
</div>
<span class="title">100% secure &amp; private</span>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
<div class="analysis-icon-items">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon3.svg"/>
</div>
<span class="title">personalized result</span>
</div>
</div>
</div>
</div>
<div class="analysis-box-wrapper">
<div class="row g-4">
<div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
<div class="analysis-box-left-items">
<div class="analysis-box">
<div class="number">01</div>
<h2 class="title">upload your photo</h2>
<p>
                                                    Our expert care focuses on personal solutions that highlight your best features
                                                </p>
</div>
<div class="upload-box-items">
<!-- Cloud Icon SVG -->
<div class="icon-wrapper">
<svg fill="none" height="24" viewbox="0 0 30 24" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9954 7.80336C23.6089 2.27986 18.0073 -1.07379 12.4838 0.312736C8.16732 1.39631 5.03307 5.12697 4.71014 9.56561C1.64526 10.071 -0.429613 12.9653 0.0758197 16.0302C0.525126 18.7549 2.88608 20.7503 5.64753 20.7394H10.3345V18.8646H5.64753C3.57671 18.8646 1.89794 17.1858 1.89794 15.115C1.89794 13.0442 3.57671 11.3654 5.64753 11.3654C6.16527 11.3654 6.58493 10.9458 6.58493 10.428C6.58024 5.76862 10.3537 1.98763 15.0131 1.983C19.0465 1.97896 22.5185 4.83041 23.2987 8.78757C23.3758 9.18268 23.6964 9.48452 24.0955 9.53749C26.6582 9.90243 28.4398 12.2757 28.0749 14.8384C27.7473 17.1396 25.7825 18.853 23.4581 18.8646H19.7085V20.7394H23.4581C27.0821 20.7284 30.011 17.7817 29.9999 14.1577C29.9908 11.1411 27.926 8.51924 24.9954 7.80336Z" fill="#03AFE5"></path>
<path d="M14.3551 11.6374L10.6055 15.3869L11.9272 16.7087L14.0832 14.562V23.5517H15.958V14.562L18.1046 16.7087L19.4264 15.3869L15.6768 11.6374C15.3111 11.2739 14.7207 11.2739 14.3551 11.6374Z" fill="#03AFE5"></path>
</svg>
</div>
<p class="main-text">Drag &amp; Drop Here Your Photo</p>
<span class="or-text">Or</span>
<div class="form-group">
<input class="hidden-input" id="photo-upload" style="display: none;" type="file"/>
<label class="custom-file-label upload-btn" for="photo-upload">
                                                        Upload Photo
                                                    </label>
</div>
<div class="footer-text">
<p>
                                                        Supported Format : Jpg, PNG, Webp
                                                        Max File Size : 10MB
                                                    </p>
</div>
</div>
<div class="icon-box">
<div class="icon-2">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2465_379)">
<path d="M10 2.88083C9.655 2.88083 9.375 2.60083 9.375 2.25583V0.625C9.375 0.28 9.655 0 10 0C10.345 0 10.625 0.28 10.625 0.625V2.25583C10.625 2.60083 10.345 2.88083 10 2.88083Z" fill="#03AFE5"></path>
<path d="M15.4764 5.14908C15.3164 5.14908 15.1564 5.08824 15.0347 4.96574C14.7905 4.72158 14.7905 4.32574 15.0347 4.08158L16.188 2.92824C16.4322 2.68408 16.828 2.68408 17.0722 2.92824C17.3164 3.17241 17.3164 3.56824 17.0722 3.81241L15.9189 4.96574C15.7964 5.08741 15.6364 5.14908 15.4764 5.14908Z" fill="#03AFE5"></path>
<path d="M19.375 10.625H17.7441C17.3991 10.625 17.1191 10.345 17.1191 10C17.1191 9.655 17.3991 9.375 17.7441 9.375H19.375C19.72 9.375 20 9.655 20 10C20 10.345 19.72 10.625 19.375 10.625Z" fill="#03AFE5"></path>
<path d="M16.6297 17.2541C16.4697 17.2541 16.3097 17.1932 16.188 17.0707L15.0347 15.9174C14.7905 15.6732 14.7905 15.2774 15.0347 15.0332C15.2789 14.7891 15.6747 14.7891 15.9189 15.0332L17.0722 16.1866C17.3164 16.4307 17.3164 16.8266 17.0722 17.0707C16.9497 17.1932 16.7897 17.2541 16.6297 17.2541Z" fill="#03AFE5"></path>
<path d="M3.37089 17.2541C3.21089 17.2541 3.05089 17.1932 2.92922 17.0707C2.68505 16.8266 2.68505 16.4307 2.92922 16.1866L4.08255 15.0332C4.32672 14.7891 4.72255 14.7891 4.96672 15.0332C5.21089 15.2774 5.21089 15.6732 4.96672 15.9174L3.81339 17.0707C3.69089 17.1932 3.53089 17.2541 3.37089 17.2541Z" fill="#03AFE5"></path>
<path d="M2.25583 10.625H0.625C0.28 10.625 0 10.345 0 10C0 9.655 0.28 9.375 0.625 9.375H2.25583C2.60083 9.375 2.88083 9.655 2.88083 10C2.88083 10.345 2.60083 10.625 2.25583 10.625Z" fill="#03AFE5"></path>
<path d="M4.52422 5.14908C4.36422 5.14908 4.20422 5.08824 4.08255 4.96574L2.92922 3.81241C2.68505 3.56824 2.68505 3.17241 2.92922 2.92824C3.17339 2.68408 3.56922 2.68408 3.81339 2.92824L4.96672 4.08158C5.21089 4.32574 5.21089 4.72158 4.96672 4.96574C4.84339 5.08741 4.68422 5.14908 4.52422 5.14908Z" fill="#03AFE5"></path>
<path d="M12.5 17.5V18.5417C12.5 19.3417 11.8417 20 11.0417 20H8.95833C8.25833 20 7.5 19.4667 7.5 18.3V17.5H12.5Z" fill="#03AFE5"></path>
<path d="M13.6754 5.46658C12.3088 4.35825 10.5088 3.92492 8.75042 4.29992C6.54209 4.75825 4.75042 6.55825 4.29209 8.76658C3.82542 11.0332 4.67542 13.2832 6.49209 14.6582C6.98375 15.0249 7.32542 15.5916 7.44209 16.2499V16.2582C7.45875 16.2499 7.48375 16.2499 7.50042 16.2499H12.5004C12.5171 16.2499 12.5254 16.2499 12.5421 16.2582V16.2499C12.6588 15.6166 13.0338 15.0332 13.6088 14.5832C15.0171 13.4666 15.8338 11.7999 15.8338 9.99992C15.8338 8.23325 15.0504 6.58325 13.6754 5.46658ZM13.1254 10.4166C12.7838 10.4166 12.5004 10.1332 12.5004 9.79158C12.5004 8.52492 11.4754 7.49992 10.2088 7.49992C9.86709 7.49992 9.58375 7.21658 9.58375 6.87492C9.58375 6.53325 9.86709 6.24992 10.2088 6.24992C12.1588 6.24992 13.7504 7.84158 13.7504 9.79158C13.7504 10.1332 13.4671 10.4166 13.1254 10.4166Z" fill="#03AFE5"></path>
<path d="M7.44141 16.25H7.49974C7.48307 16.25 7.45807 16.25 7.44141 16.2583V16.25Z" fill="#03AFE5"></path>
<path d="M12.5417 16.25V16.2583C12.525 16.25 12.5167 16.25 12.5 16.25H12.5417Z" fill="#03AFE5"></path>
</g>
<defs>
<clippath id="clip0_2465_3791">
<rect fill="white" height="20" width="20"></rect>
</clippath>
</defs>
</svg>
</div>
<span>
                                                    Tips for best results
                                                </span>
<p>
                                                    Remove makeup, use natural
                                                    light and face the camera
                                                    directly.
                                                </p>
</div>
</div>
</div>
<div class="col-xl-6 order-2 order-xl-1 wow fadeInUp" data-wow-delay=".4s">
<div class="ai-results-box-wrapper">
<div class="analysis-box">
<div class="number">02</div>
<h2 class="title">Your AI Analysis Results</h2>
</div>
<ul class="nav">
<li class="nav-item">
<a class="nav-link active" data-bs-toggle="tab" href="#Facilities">
                                                        Overview
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#Curriculum">
                                                       Symmetry
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#Mission">
                                                        Nose
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#Jawline">
                                                        Jawline
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#Skin">
                                                        Skin
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#faces">
                                                        face
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#drop">
                                                        eye drop
                                                    </a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" href="#wrinkles">
                                                        wrinkles
                                                    </a>
</li>
</ul>
<div class="ai-results-box-items">
<div class="analysis-container">
<!-- Left Side: Main Image -->
<div class="image-box">
<img alt="img" src="/demo-8/assets/img/ai.jpg"/>
</div>
<!-- Right Side: Results Cards -->
<div class="results-column">
<div class="tab-content">
<div class="tab-pane fade show active" id="Facilities">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="Curriculum">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="Mission">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="Jawline">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="Skin">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="faces">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="drop">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
<div class="tab-pane fade" id="wrinkles">
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon4.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Face Symmetry</span>
<span class="point">
                                                                                    85%
                                                                                </span>
</div>
<div class="progress">
<div class="progress-value"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon5.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Nose Shape</span>
<span class="point">
                                                                                    78%
                                                                                </span>
</div>
<div class="progress bg-2">
<div class="progress-value style-two"></div>
</div>
</div>
</div>
<p class="status-text">Good</p>
</div>
<div class="result-card mb-0">
<div class="card-header">
<div class="icon-title">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon6.svg"/>
</div>
</div>
<div class="pro-items">
<div class="pro-head">
<span class="pro-title">Skin Condition</span>
<span class="point">
                                                                                    68%
                                                                                </span>
</div>
<div class="progress bg-3">
<div class="progress-value style-three"></div>
</div>
</div>
</div>
<p class="status-text">Fair</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-6 col-md-6 order-1 order-xl-2 wow fadeInUp" data-wow-delay=".6s">
<div class="analysis-box-right-items">
<div class="analysis-box">
<div class="number">03</div>
<h2 class="title">Recommended Treatments</h2>
<p>
                                                  Based on your AI analysis
                                                </p>
</div>
<div class="gt-recent-post-area">
<div class="gt-recent-items">
<div class="gt-recent-thumb">
<img alt="img" src="/demo-8/assets/img/post1.jpg"/>
</div>
<div class="gt-recent-content">
<span class="title">
                                                           Skin Rejuvenation
                                                        </span>
<p>
                                                            Improve nose shape and facial harmony
                                                        </p>
<a class="read-more" href="/demo-8/contact">
                                                            learn more
                                                        </a>
</div>
</div>
<div class="gt-recent-items">
<div class="gt-recent-thumb">
<img alt="img" src="/demo-8/assets/img/post2.jpg"/>
</div>
<div class="gt-recent-content">
<span class="title">
                                                          Jawline Contouring
                                                        </span>
<p>
                                                            Improve nose shape and facial harmony
                                                        </p>
<a class="read-more" href="/demo-8/contact">
                                                            learn more
                                                        </a>
</div>
</div>
<div class="gt-recent-items">
<div class="gt-recent-thumb">
<img alt="img" src="/demo-8/assets/img/post3.jpg"/>
</div>
<div class="gt-recent-content">
<span class="title">
                                                          Facial Balancing
                                                        </span>
<p>
                                                            Improve nose shape and facial harmony
                                                        </p>
<a class="read-more" href="/demo-8/contact">
                                                            learn more
                                                        </a>
</div>
</div>
</div>
<div class="button-items">
<a class="book-btn" href="/demo-8/contact">
                                                   Book Free Consultation
                                                </a>
<p class="disclaimer">
<img alt="" src="/demo-8/assets/img/icon.png"/> It's free, secure &amp; no obligation
                                                </p>
</div>
</div>
</div>
</div>
<div class="analysis-box-wrapper-two">
<div class="row">
<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
<div class="analysis-box-wraps">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon7.svg"/>
</div>
<div class="content">
<h3>
                                                        Advanced AI Technology
                                                    </h3>
<p>
                                                        Your photos are encrypted and secure
                                                    </p>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
<div class="analysis-box-wraps">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon8.svg"/>
</div>
<div class="content">
<h3>
                                                        100% Privacy Protected
                                                    </h3>
<p>
                                                        Your photos are encrypted and secure
                                                    </p>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
<div class="analysis-box-wraps">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon9.svg"/>
</div>
<div class="content">
<h3>
                                                        Expert Verification
                                                    </h3>
<p>
                                                        Your photos are encrypted and secure
                                                    </p>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
<div class="analysis-box-wraps">
<div class="icon">
<img alt="icon" src="/demo-8/assets/img/icon10.svg"/>
</div>
<div class="content">
<h3>
                                                        Personalized Results
                                                    </h3>
<p>
                                                        Your photos are encrypted and secure
                                                    </p>
</div>
</div>
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
