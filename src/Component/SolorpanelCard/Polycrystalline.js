import React from 'react'
import './SolorPanelCard.css'

export default function Polycrystalline() {
  const img = "https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"

  return (
    <>
      <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-12 g-4">
          <div className="col">
            <div className="card1">
              <div className="card1-body">
                <p className="card-text">Polycrystalline panels absorbs 15% of sunlight available</p>
                <p className="card-text">These panels do not perform well in low light</p>
                <p className="card-text">Their lifespan is of 25 years</p>
                <p className="card-text">Polycrystalline solar panels have lower efficiency than monocrystalline solar panels as they are composed of multiple silicon crystals due to which there is limited room available for the electrons to move.</p>
                <p className="card-text">These panels are more affordable than monocrystalline solar panels as the manufacturing process is simpler and less silicon is wasted during the whole process.</p>
                <div className="d-flex ">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">Get Quotes</button>
                  <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal5">Create Auction</button>
                </div>

              </div>
            </div>
          </div>
       
     


        </div>
      </div>


      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content p-3">
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
                <label for="exampleFormControlInput1" class="form-label">Inverter warranty</label><br />
                <div class="form-check form-check-inline ">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Insurance</label><br />
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Other products</label><br />
                <div class="form-check form-check-inline">
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
              <div class="form-check form-check-inline ">
              
                  <label class="form-check-label" for="inlineCheckbox1">Other</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
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





     
      <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content p-3">
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
                <label for="exampleFormControlInput1" class="form-label">Inverter warranty</label><br />
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">5 Year</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">10 Year</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Insurance</label><br />
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Other products</label><br />
                <div class="form-check form-check-inline ">
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
