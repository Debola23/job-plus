import Styles from './Footer.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={Styles.footer}>
        <div className='container' id={Styles.cont}>
            <div className={Styles.columns}>

                <div className={Styles.hold1}>
                  <ul className={Styles.columnsList}>
                    <li>
                      <a href="">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Feedback
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Trust, Saftefy & Security
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={Styles.hold1}>
                  <ul className={Styles.columnsList}>
                    <li>
                      <a href="">
                        Help & Support
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Job-Plus Foundation
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Terms & Condition
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={Styles.hold1}>
                  <ul className={Styles.columnsList}>
                    <li>
                      <a href="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Accessibility
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Desktop App
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={Styles.hold1}>
                  <ul className={Styles.columnsList}>
                    <li>
                      <a href="">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>


            </div>
            <div className={Styles.socials}>
              <div className={Styles.socialIcons}>
                <div className={Styles.f}>Follow us</div>
                <ul className={Styles.iconList}>
                  <li>
                    <a href="">
                      <FaFacebookF className="text-blue-600 hover:text-blue-800 text-1xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter className="text-blue-600 hover:text-blue-800 text-1xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram className="text-blue-600 hover:text-blue-800 text-1xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedinIn className="text-blue-600 hover:text-blue-800 text-1xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className={Styles.copyRight}>
              <span>
                © 2015 - 2025 Job Plus®
              </span>
            </p>
        </div>
    </div>
  )
}
