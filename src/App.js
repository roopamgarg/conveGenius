import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/Contact_card/Contact_card'
import Nav from './components/nav';
function App() {
  return (
    <div className="App">  
    <Nav/>
      <header className="App-header">
     
      </header>
    
      <div className="contact-us__container">
        
        <div className="contact-us__header">CONTACT US</div>
        <ul className="contact-us__breadcrump">
        <li>Home </li>
        <li>/ Contact Us</li>
      </ul>
      <ContactCard/>
      
      </div>
      <div className="contact-us__email">
        <div>You can also write to us at <a _ngcontent-c5="" href="mailto:info@convegeniusglobal.com">info@convegeniusglobal.com</a></div>
      </div>
      <div className="contact-us__newsletter">
        <div className="contact-us__newsletter__message">
        <div className="contact-us__newsletter__heading">
          Get updates & newsletters in your inbox.
          
        </div>
        <div className="contact-us__dash"></div>
        </div>

        <div>
        <form class="newsletter-form ng-pristine ng-invalid ng-touched" novalidate="">
                <input class="email-box ng-pristine ng-invalid ng-touched" name="email" placeholder="Enter your Email Address" required="" type="email"/>
                <div class="mail-icon">
                    <img alt="Subscribe to get updates about Convegenius and receive our newsletter" src="https://s3-ap-southeast-1.amazonaws.com/slate-data/cg-impact-client/assets/icons/Newsletter_icon.png"/>
                </div>
            </form>
        </div>
      </div>
      <div className="contact-us__copyright">
              <div class="cg-links mr10 ml10">
        <div class="social">
            <div class="social-header">STAY CONNECTED :</div>
            <div class="social-icons">
                <div class="ng-star-inserted">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/slate-data/cg-impact-client/assets/social/linkedin.PNG" alt="LinkedIn | Connect with ConveGenius"/>
                </div>
                <div class="ng-star-inserted">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/slate-data/cg-impact-client/assets/social/twitter.PNG" alt="Twitter | Connect with ConveGenius"/>
                </div><div class="ng-star-inserted">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/slate-data/cg-impact-client/assets/social/facebook.PNG" alt="Facebook | Connect with ConveGenius"/>
                </div>
            </div>
        </div>
        <div class="copyright-text">
            <div _ngcontent-c3="">© 2013 ConveGeniusGlobal.com. All rights reserved.</div>
        </div>
        </div>

    </div>
    </div>
  );
}

export default App;
