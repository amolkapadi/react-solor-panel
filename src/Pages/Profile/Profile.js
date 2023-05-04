import React from "react";
import "./Profile.css";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-5">
        <div className="row py-5">
          <h3>My Profile</h3> <hr />
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  My Open Auctions
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="container">
                  <div className="row">
                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 1</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 2</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 3</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  My Quotes
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="container">
                  <div className="row">
                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 1</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 2</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="card p-3 ">
                      <div className="d-flex justify-content-between">
                        <h5>Product 3</h5>
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  My Order
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExampleone"
              >
                <div className="accordion-body">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Product 1
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExampleone"
                    >
                      <div className="accordion-body">
                        <div className="container-fluid py-5">
                          <div className="py-5 timeline">
                            <ul class="base-timeline">
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  order placed
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Request send to manufacture
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  In-transit
                                </span>
                              </li>
                              <li class="base-timeline__item deliverd">
                                <span class="base-timeline__summary-text">
                                  Deliverd
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Installation in process
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Installation Done
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Product 2
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExampleone"
                    >
                      <div className="accordion-body">
                        <div className="container-fluid py-5">
                          <div className="py-5 timeline">
                            <ul class="base-timeline">
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  order placed
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Request send to manufacture
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  In-transit
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Deliverd
                                </span>
                              </li>
                              <li class="base-timeline__item installation">
                                <span class="base-timeline__summary-text">
                                  Installation in process
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Installation Done
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Product 3
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExampleone"
                    >
                      <div className="accordion-body">
                        <div className="container-fluid py-5">
                          <div className="py-5 timeline">
                            <ul class="base-timeline">
                              <li class="base-timeline__item order">
                                <span class="base-timeline__summary-text">
                                  order placed
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Request send to manufacture
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  In-transit
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Deliverd
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Installation in process
                                </span>
                              </li>
                              <li class="base-timeline__item">
                                <span class="base-timeline__summary-text">
                                  Installation Done
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>L1 :- The Best Choice </p>
              <p>L2 </p>
              <p>L3 </p>
              <p>L4 </p>
              <p>L5 </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Quote 1 :- The Best Choice </p>
              <p>Quote 2 </p>
              <p>Quote 3 </p>
              <p>Quote 4 </p>
              <p>Quote 5 </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
