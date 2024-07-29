import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/css/style.css'



const HomePage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

  return (
    <>
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2"></i>Lagos State,Nigeria.</small>
                <small className="ms-4"><i className="fa fa-envelope me-2"></i>koladefoluke84@gmail.com</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a className="text-body ms-3" href="https://www.facebook.com/naturio_fingalickin"><i className="fab fa-facebook-f"></i></a>
                <a className="text-body ms-3" href="https://x.com/kolade_foluke"><i className="fab fa-twitter"></i></a>
                <a className="text-body ms-3" href="https://www.linkedin.com/in/naturio_fingalickin/"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-body ms-3" href="https://www.instagram.com/naturio_fingalickin/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <nav
      className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
      data-aos="fade-down" // Add this line to apply AOS
    >
      <a href="index.html" className="navbar-brand ms-4 ms-lg-0" style={{ display: "flex", alignItems: "center" }}>
        <span>
          <img src="../src/assets/logo.png" alt="Logo" className="navbar-logo" style={{ maxWidth: "50px", maxHeight: "50px" }} />
        </span>
        <h1 className="fw-bold text-primary m-0">
          Na<span className="text-secondary">tur</span>io
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="#about" className="nav-item nav-link">About Us</a>
          <a href="#Menu" className="nav-item nav-link">Menu</a>
          <a href="https://shorturl.at/sBxKJ" className="nav-item nav-link">Order Now</a>
        </div>
      </div>
    </nav>
    </div>


    <div className="container-fluid p-0 mb-5" data-aos="fade-up" data-aos-delay="100">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="../src/assets/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">Welcome to Naturio</h1>
                      <a href="/login" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">
                        <small className="fa fa-user text-body"></small> Login
                      </a>
                      <a href="https://shorturl.at/sBxKJ" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">
                        <small className="fa fa-shopping-bag text-body"></small> Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="../src/assets/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">Goodness from Nature</h1>
                      <a href="/login" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">
                        <small className="fa fa-user text-body"></small> Login
                      </a>
                      <a href="https://shorturl.at/sBxKJ" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">
                        <small className="fa fa-shopping-bag text-body"></small> Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div id="about" className="container-xxl py-5" data-aos="fade-up" data-aos-delay="300">
        <div className="container content">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="500">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="../src/assets/about.jpg" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="700">
              <h1 className="display-5 mb-4">About US</h1>
              <p className="mb-4">
                Welcome to Naturio Finga Lickin Restaurant! At Naturio Finga Lickin, we believe in serving up more than just delicious food; we're dishing out an experience that tickles your taste buds and warms your soul. Nestled in the heart of Lagos, our restaurant is a haven for foodies seeking bold flavors, fresh ingredients, and a whole lot of finger-lickin' goodness!
                <span className="dots">...</span>
                <span className="more-content">
                  Our Flavorful Story Picture this: a cozy kitchen filled with the aroma of sizzling spices and the sound of laughter. That's where our journey began. Inspired by Grandma Naturio's secret recipes and a passion for bringing people together over a hearty meal, we set out to create a dining destination like no other. Mission: Flavor, Fun, and Family Our mission is simple: to delight your senses with every bite. From our signature crispy chicken to our mouthwatering vegan options, each dish is crafted with love and care. But it's not just about the food—it's about the memories we create and the connections we forge with our community. What Makes Us Finger-Lickin' Good? Fresh Ingredients: We source the finest locally-grown produce and quality meats to ensure every dish bursts with flavor and nutrition. Creative Flair: Our chefs are culinary wizards, infusing traditional recipes with innovative twists that keep you coming back for more. Warm Hospitality: Step into our cozy restaurant, and you're instantly part of the family. Our friendly staff is here to make sure your dining experience is nothing short of exceptional. Join the Finga Lickin' Family Whether you're craving comfort classics or exploring new culinary horizons, there's something for everyone at Naturio Finga Lickin Restaurant. So gather your friends, bring your appetite, and get ready to indulge in a feast for the senses! Connect with Us Hungry for more? Follow us on social media for the latest updates, mouthwatering photos, and behind-the-scenes peeks into our kitchen. Location:1b,Okeigbala junction,Ayobo Roundabout,Ayobo,Lagos Contact: +2348065237399 Hours of Operation: Monday - Saturday: 8:00am - 8:00pm Sunday: 12:00pm - 8:00pm.
                </span>
              </p>
              <button className="btn btn-primary rounded-pill py-3 px-5 mt-3" id="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
   
      <div id="Menu" className="container-xxl py-5">
    <div className="container">
        <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="section-header text-start mb-5" style={{ maxWidth: "500px" }}>
                    <h1 className="display-5 mb-3">Our Menu</h1>
                    <p>We have a combination of fresh, healthy ingredients with mouth-watering flavors.</p>
                </div>
            </div>
            <div className="col-lg-6 text-start text-lg-end" data-aos="slide-in-right" data-aos-delay="100">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                    <li className="nav-item me-2">
                        <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Food</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Drinks</a>
                    </li>
                    <li className="nav-item me-0">
                        <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Cakes</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/13.png" alt="Jollof Rice" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Jollof Rice</a>
                                <span className="text-primary me-1">N3,000.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/14.png" alt="Fried Rice" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Out of Stock</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Fried Rice</a>
                                <span className="text-primary me-1">N3,000.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/4.png" alt="Chicken and Chips" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Chicken and Chips</a>
                                <span className="text-primary me-1">N7,500.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/efo riro.png" alt="Efo Riro" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Efo Riro</a>
                                <span className="text-primary me-1">N10,000.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/gizzard.png" alt="Gizzard" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Gizzard</a>
                                <span className="text-primary me-1">N15,000.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/okro.png" alt="Okro 2 Liters" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Out of Stock</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Okro 2 Liters</a>
                                <span className="text-primary me-1">N15,000.00</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/seafood.png" alt="Seafood Okro 2 Liters" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Seafood Okro 2 Liters</a>
                                <span className="text-primary me-1">N30,000</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                        <div className="product-item">
                            <div className="position-relative bg-light overflow-hidden">
                                <img className="img-fluid w-100" src="../src/assets/small_chops.png" alt="Small Chops" />
                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5 mb-2" href="">Small Chops</a>
                                <span className="text-primary me-1">N1,500</span>
                                <span className="text-body text-decoration-line-through">N00.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                    </div>
                </div>
            </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/tiger_nut.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Tiger Nut</a>
                                    <span className="text-primary me-1">N1,500</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/zobo.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Zobo Drink</a>
                                    <span className="text-primary me-1">N1,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/chapman.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Chapman</a>
                                    <span className="text-primary me-1">N2,000.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/pineapple.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Pineapple and Orange Juice</a>
                                    <span className="text-primary me-1">N1,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                <div className="d-flex border-top">
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/lemon.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Alovera and Lemon Juice</a>
                                    <span className="text-primary me-1">N1,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/fruitparfait.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Fruit Parfait</a>
                                    <span className="text-primary me-1">N1,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/Yourghot.png" alt=" "/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Yoghurt</a>
                                    <span className="text-primary me-1">N1,000</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/tiger_nut.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Suya Milk</a>
                                    <span className="text-primary me-1">N1,500</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake_parfait.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Parfait </a>
                                    <span className="text-primary me-1">N2,500.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake 6.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Size 6</a>
                                    <span className="text-primary me-1">N8,500</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake 8.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Size 8</a>
                                    <span className="text-primary me-1">N9,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake 10.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Size 10</a>
                                    <span className="text-primary me-1">N10,500.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake 12.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Size 12</a>
                                    <span className="text-primary me-1">N14,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/cake 14.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Cake Size 14</a>
                                    <span className="text-primary me-1">N16,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/wed cake.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Ceremonial Cakes</a>
                                    <span className="text-primary me-1">N20,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="../src/assets/wedd.png" alt="" />
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5 mb-2" href="">Wedding Cake</a>
                                    <span className="text-primary me-1">N20,000.00</span>
                                    <span className="text-body text-decoration-line-through">N00.00</span>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container-fluid bg-primary bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
                    <p className="text-white mb-0">Discover the taste of pure goodness at naturio finga lickin resturant.Are you ready for an unforgettable culinary journey?Step into our resturant, where nature's finest ingredients come together to create a symphony of flavors that will leave you craving for more.</p>
                </div>
                <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                </div>
            </div>
        </div>
    </div>
    

    <div className="container-fluid bg-light bg-icon py-6 mb-5" data-aos="fade-up">
    <div className="container">
        <div className="section-header text-center mx-auto mb-5" data-aos="fade-in" data-aos-delay="100" style={{ maxWidth: "500px" }}>
            <h1 className="display-5 mb-3">Customer Review</h1>
            <p>"Naturio is my new favorite spot! The Garden Fresh Salad was incredibly crisp and bursting with flavor. The atmosphere is cozy and welcoming, making it perfect for a casual lunch or a special dinner. I can't wait to come back!".</p>
        </div>
        <Slider {...settings}>
            <div className="testimonial-item position-relative bg-white p-5 mt-4" data-aos="fade-up" data-aos-delay="200">
                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p className="mb-4">The staff at Naturio finga lickin are exceptional, they go above and beyond to ensure you have a pleasant experience.</p>
                <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 rounded-circle" style={{ width: "50px", height: "50px" }} src="../src/assets/Esther.jpg" alt=""/>
                    <div className="ms-3">
                        <h5 className="mb-1">Esther Praise</h5>
                        <span>Student</span>
                    </div>
                </div>
            </div>
            <div className="testimonial-item position-relative bg-white p-5 mt-4" data-aos="fade-up" data-aos-delay="300">
                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p className="mb-4">"Their jollof rice was a revelation! Naturio is doing something truly special with their menu. Every visit has been a delightful experience".</p>
                <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 rounded-circle" style={{ width: "50px", height: "50px" }} src="../src/assets/Fayo.jpg" alt="" />
                    <div className="ms-3">
                        <h5 className="mb-1">Solomon Fayowole</h5>
                        <span>Immigration Consultant</span>
                    </div>
                </div>
            </div>
            <div className="testimonial-item position-relative bg-white p-5 mt-4" data-aos="fade-up" data-aos-delay="400">
                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p className="mb-4">If you are in search of a dining experience that tantalizes your taste buds and leaves you craving more, Naturio finga lickin restaurant is the place to be.</p>
                <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 rounded-circle" style={{ width: "50px", height: "50px" }} src="../src/assets/chinedu.jpg" alt="" />
                    <div className="ms-3">
                        <h5 className="mb-1">Chinedu</h5>
                        <span>Web Developer</span>
                    </div>
                </div>
            </div>
            <div className="testimonial-item position-relative bg-white p-5 mt-4" data-aos="fade-up" data-aos-delay="500">
                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p className="mb-4">"The service was outstanding, and the staff made sure we had a fantastic dining experience. Highly recommend!".</p>
                <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 rounded-circle" style={{ width: "50px", height: "50px" }} src="../src/assets/yemisi.jpg" alt="" />
                    <div className="ms-3">
                        <h5 className="mb-1">Omojowo Yemisi</h5>
                        <span>Data Scientist</span>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
</div>

    
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold text-primary mb-4">Na<span className="text-secondary">tur</span>io</h1>
                    <p>The quality of the food and the overall dinning experience justify the cost.You are paying for more than just a meal;you are paying for an experience that delights all your senses.</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p><i className="fa fa-map-marker-alt me-3"></i>1b,Oke Igbala Street, Lagos, Nigeria.</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+234 (0)806 5237 899</p>
                    <p><i className="fa fa-envelope me-3"></i>koladefoluke84@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">Home</a>
                    <a className="btn btn-link" href="#about">About</a>
                    <a className="btn btn-link" href="#Menu">Our Menu</a>
                    <a className="btn btn-link" href="https://shorturl.at/sBxKJ">Order Now</a>
                
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>The resturant boasts a cozy, yet vibrant atmosphere that perfectly blends rustic charm with modern comfort.</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="https://www.instagram.com/techiekraft/">Foluke & Chinedu,</a>, All Right Reserved 2024.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    Designed By <a href="https://www.instagram.com/techiekraft/">Foluke & Chinedu</a>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  )
}

export default HomePage