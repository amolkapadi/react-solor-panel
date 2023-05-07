import React from "react";
import "./About.css";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import about from "../../img/about.jpg";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5 ">
        <div className="row py-5">
          <h3 className="text-center">About Us</h3> <hr />
          <div className="col-md-6">
            <img src={about} className="img-fluid about-img" />
          </div>
          <div className="col-md-6">
            <p className=" py-5">
              Welcome to Bidprotrade- Middleman to the better/ sustainable
              future We are proud to be the first-ever platform that encourages
              green energy usage with a dedicated reverse auction system for a
              range of biomass briquet products and solar panels With us, buyers
              skip the whole hassle of finding and going through quotations from
              multiple vendors to find the best deal. Instead, we bring the
              other end to the buyer and make them compete to provide the lowest
              price possible. The suppliers on our platform have to go through
              strict KYC checks, so the buyer doesn’t have to limit themselves
              to the deals offered by only their trustworthy neighborhood
              supplier With features like real-time reverse bidding, auto-quote
              generation and comparison, secure payment system, partial volume
              allocation, and much more, you can focus on getting the best deal
              without stressing about connectivity and security
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Bid with Vision</h5>
                <p class="card-text">
                  we bridge the gap between buyer and seller by inhibiting a
                  healthy competitive environment through reverse auctioning,
                  where the buyer holds power.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Pro factor Mission</h5>
                <p class="card-text">
                  To be a user-friendly, safe space for our customers to achieve
                  the most efficient and affordable solution so as to promote
                  sustainable energy alternatives.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 row row-cols-1 row-cols-md-1 g-4">
            <div className="col">
              <div class="card-body">
                <h5 class="card-title">Trade with Values</h5>
                <p class="card-text">we believe in trading with our.</p>
                <div className=" row row-cols-1 row-cols-md-4 g-4">
                  <div className="col">
                    <ul class="list-group">
                      <li class="list-group-item active" aria-current="true">
                        Transparency
                      </li>
                      <li class="list-group-item">
                        where you know the quality of the product you are to bid
                        for, the process where it is getting bid on, and trace
                        the procured product.
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul class="list-group">
                      <li class="list-group-item active-fai" aria-current="true">
                        Fairness
                      </li>
                      <li class="list-group-item">
                        where bidders are given a completely unbiased ground to
                        work on Community building- where you connect with
                        diverse people that share your passion in the field
                      </li>
                    </ul>
                  </div>
                  <div className="col ">
                    <ul class="list-group">
                      <li class="list-group-item active-int" aria-current="true">
                        Intellectual assets
                      </li>
                      <li class="list-group-item">
                        where you can depend on us to bring you the most
                        reliable information regarding your product of interest
                      </li>
                    </ul>
                  </div>
                  <div className="col ">
                    <ul class="list-group">
                      <li class="list-group-item active-acc" aria-current="true">
                        Accessibility
                      </li>
                      <li class="list-group-item">
                        where you don’t have to be intimidated by a complicated
                        system/ website.
                      </li>
                    </ul>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
