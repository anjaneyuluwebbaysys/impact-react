import React from "react";
// import { ReactDOM } from "react";

class Header extends React.Component {
    render() {
        return(
            <div>
                <section id="topbar" class="topbar d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div class="social-links d-none d-md-flex align-items-center">
                        <a href="/" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="/" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="/" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section>
            <header id="header" class="header d-flex align-items-center">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/home" class="logo d-flex align-items-center">
                        <h1>Impact<span>.</span></h1>
                    </a>
                    <nav id="navbar" class="navbar">
                        <ul>
                        <li><a href="/home" class="active">Home</a></li>
                        <li><a href="/home#about">About Us</a></li>
                        <li><a href="/home#services">Services</a></li>
                        <li><a href="/home#portfolio">Portfolio</a></li>
                        <li><a href="/home#team">Team</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                </div>
            </header>
        </div>
        )
    }
}

export default Header;