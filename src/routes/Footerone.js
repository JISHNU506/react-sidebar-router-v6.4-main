import React from 'react'
import "./pagestyle.css";

export default function Footerone() {
  return (
  <>
  <footer className="padding_4x">
  <div className="flex">
    <section className="flex-content padding_1x">
      <h3>ABOUT</h3>
      <a href="#">Founders Letter</a>
      <a href="#">Newsroom</a>
      <a href="#">Investors</a>
      <a href="#">Xentice Platinum</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>EXPLORE</h3>
      <a href="#">Diversity & Discrimination</a>
      <a href="#">Accessibility</a>
      <a href="#">Xentice Associates</a>
      <a href="#">Xentice Team</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>SERVICES</h3>
      <a href="#">Mobile Apps</a>
      <a href="#">Brand Assets</a>
      <a href="#">For Companies</a>
      <a href="#">Mobile Apps</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>SUPPORT</h3>
      <a href="#">Cancellation options</a>
      <a href="#">FAQ</a>
      <a href="#">Help Centre</a>
      <a href="#">Payment gateway</a>
    </section>
  </div>
  <div className="flex">
    <section className="flex-content padding_1x">
      <h3>DISCLAIMER</h3>
      <p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com</p>
    </section>
    <section className="flex-content padding_1x">
      <a href="#">
        <i className="fa fa-facebook" />
      </a>
      <a href="#">
        <i className="fa fa-twitter" />
      </a>
      <a href="#">
        <i className="fa fa-dribbble" />
      </a>
      <a href="#">
        <i className="fa fa-linkedin" />
      </a>
    </section>
  </div>
</footer>
  </>
  )
}
