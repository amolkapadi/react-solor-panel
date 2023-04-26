import React from 'react'
import './SolorPanelCard.css'

export default function SolorPanelCard() {
  const img = "https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"

  return (
    <>
      <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card1">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card1-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex  justify-content-between">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Quotes</button>
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Create Auction</button>
                </div>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card1">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card1-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex  justify-content-between">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Quotes</button>
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Create Auction</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card1">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card1-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex  justify-content-between">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Quotes</button>
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Create Auction</button>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>


      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Get Quotes</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Capacity </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Inverter warranty</label>
                <div class="form-check form-check-inline ms-5">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Insurance</label>
                <div class="form-check form-check-inline ms-5">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Other products</label>
                <div class="form-check form-check-inline ms-3">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">MC4 Connecto</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Solar DC Wires</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Solar Structure</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Crimping Tool</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Junction Boxes</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Terrace Area  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Optional' required />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Terrace Photo   </label>
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder='Optional' required />
              </div>
              <div class="d-flex">
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>





      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Auction</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Capacity </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" required />
              </div>
              
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Inverter warranty</label>
                <div class="form-check form-check-inline ms-5">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">5 Year</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">10 Year</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Insurance</label>
                <div class="form-check form-check-inline ms-5">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Other products</label>
                <div class="form-check form-check-inline ms-3">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">MC4 Connecto</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Solar DC Wires</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Solar Structure</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Crimping Tool</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Junction Boxes</label>
                </div>
              </div>

              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Maximum Amount to be paid  </label>

              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Terrace Area  </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Optional' required />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Terrace Photo   </label>
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder='Optional' required />
              </div>
              <div class="d-flex">
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>


    </>
  )
}
