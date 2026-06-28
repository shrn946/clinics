import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Image src="/images/untitled_logo.png" alt="Footer Logo" width={200} height={100} unoptimized />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>Providing high-quality dental care with experienced specialists to give you a bright, healthy smile.</p>
              </div>
              {/* Footer Contact Content Start */}
              <div className="footer-contact-content">
                <h3>support@domain.com</h3>
                <h3>(+01) 789 987 645</h3>
              </div>
              {/* Footer Contact Content End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-2 col-md-4">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>quick links</h3>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">about us</Link></li>
                <li><Link href="/services">services</Link></li>
                <li><Link href="/appointment">appointment</Link></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-3 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>socials</h3>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-5 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>our services</h3>
              <ul>
                <li><Link href="/services/general-dentistry">General Dentistry</Link></li>
                <li><Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
                <li><Link href="/services/restorative-dentistry">Restorative Dentistry</Link></li>
                <li><Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright © {new Date().getFullYear()} Untitled Design. All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>

            <div className="col-lg-6 col-md-6">
              {/* Footer Social Link Start */}
              <div className="footer-privacy-policy">
                <ul>
                  <li><Link href="/privacy-policy">term & condition</Link></li>
                  <li><Link href="/contact">support</Link></li>
                  <li><Link href="/privacy-policy">privacy policy</Link></li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
}
