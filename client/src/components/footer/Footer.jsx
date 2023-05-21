import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Java</span>
            <span>Python</span>
            <span>C++</span>
            <span>C</span>
            <span>Music & Audio</span>
            <span>Programming</span>
            <span>Data Structures</span>
            <span>Autometa</span>
            <span>Cloud</span>
            <span>Software Engineering</span>
            <span>Electrical</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling</span>
            <span>Buying</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Student Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Tutors</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Tutor</span>
          </div>
          <div className="item">
            <h2>More From Study With Buddy</h2>
            <span>Business</span>
            <span>Pro</span>
            <span>Logo Maker</span>
            <span>Guides</span>
            <span>Get Inspired</span>
            <span>Buddy Select</span>
            <span>ClearVoice</span>
            <span>Buddy Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Study With Buddy</h2>
            <span>© Study With Buddy International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <a href="https://twitter.com/JitinKu81671706" target="_black"><img src="/img/twitter.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/jitin-kumar-799b44177/" target="_black"><img src="/img/linkedin.png" alt="" /></a>
              <a href="www.facebook.com" target="_blank"><img src="/img/facebook.png" alt="" /></a>
              <a href="https://www.instagram.com/" target="_blank"><img src="/img/instagram.png" alt="" /> </a>
              <a href="https://www.pinterest.com/" target="_blank"><img src="/img/pinterest.png" alt="" /></a>              
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>RS</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
