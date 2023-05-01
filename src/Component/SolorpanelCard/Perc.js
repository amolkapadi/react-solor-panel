import React, {useState}from 'react'
import './SolorPanelCard.css'
import Monocrystalline from '../../img/Monocrystalline.jpg'
import './Perc.css'


export default function Polycrystalline() {
  const img = "https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"

  const [userData, setUserData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleInput() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-12 g-4">
          <div className="col">
            <div className="card1 row">
            <div className='col-md-6'>
            <div className="card1-body">
                <p className="card-text">PERC solar panels are more efficient as compared to traditional solar panels as they absorb more sunlight.</p>
                <p className="card-text">There is an additional layer at the back of the panels which reflects the unabsorbed sunlight back to the solar cells for further absorption of the sunlight</p>
                <div className="d-flex ">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal8">Get Quotes</button>
                  <button type="button" class="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal9">Create Auction</button>
                </div>

              </div>
            </div>
             
            <div className='col-md-6'>
             <div >
               <img src={Monocrystalline} className='img-fluid mono-img'/>
             </div>
             </div>

            </div>
          </div>
       

        </div>
      </div>


      <div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Get Quotes</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            <div>
      {/* <Stepper activeStep={currentStep} steps={[
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' }
      ]} /> */}

      {currentStep === 0 && (
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label class="form-label">capacity :- kwh</label>
            <input  type="text" class="form-control" onChange={(event) => setUserData({ ...userData, capacity: event.target.value })} required />
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Inverter warranty</label><br />

        <div class="form-check form-check-inline">
                <input  class="form-check-input" type="radio" name="inverterWarranty" value="5 Years" onChange={(event) => setUserData({ ...userData, inverterWarranty: event.target.value })} required />
              <label class="form-check-label">5 Years</label>
             </div>
             <div class="form-check form-check-inline">
                <input type="radio" name="inverterWarranty" value="10 Years" onChange={(event) => setUserData({ ...userData, inverterWarranty: event.target.value })} required />
                <label class="form-check-label"> 10 Years</label>
            </div>
         
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Insurance</label><br />

       
          <div class="form-check form-check-inline">
                <input type="radio" name="insurance" value="yes" onChange={(event) => setUserData({ ...userData, insurance: event.target.value })} required />
                <label class="form-check-label"> Yes </label>
          </div>
          <div class="form-check form-check-inline">
                <input type="radio" name="insurance" value="no" onChange={(event) => setUserData({ ...userData, insurance: event.target.value })} required />
                <label class="form-check-label"> No</label>
            </div>
        </div>
        <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Other products</label><br />

          
        
                <div class="form-check form-check-inline">

                <input type="checkbox" name="otherProducts" value="MC4 Connecto" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, mC4Connecto: event.target.checked } })} />
                <label class="form-check-label"> MC4 Connecto </label>
              </div>
              <div class="form-check form-check-inline">

                <input type="checkbox" name="otherProducts" value="Solar DC Wires" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, solarDCWires: event.target.checked } })} />
                <label class="form-check-label">  Solar DC Wires</label>
             </div>
             <div class="form-check form-check-inline">

                <input type="checkbox" name="otherProducts" value="Solar Structure" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, solarStructure: event.target.checked } })} />
                <label class="form-check-label">Solar Structure   </label>
           </div>
           <div class="form-check form-check-inline">
              
                <input type="checkbox" name="otherProducts" value="Crimping Tool" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, crimpingTool: event.target.checked } })} />
                <label class="form-check-label">Crimping Tool</label>
              </div>
              <div class="form-check form-check-inline">
             
                <input type="checkbox" name="otherProducts" value="Junction Boxes" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, junctionBoxes: event.target.checked } })} />
                <label class="form-check-label"> Junction Boxes </label>
             </div>
         
            <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="otherProducts" value="Other"onChange={toggleInput} id="inlineCheckbox2"   />
                  <label class="form-check-label" >Other</label>
                </div>
                {isOpen && <input class="form-control" type="text" />}
              

          
                <input type="checkbox" name="otherProducts" value="accessories:- sq.ft" onChange={(event) => setUserData({ ...userData, otherProducts: { ...userData.otherProducts, accessories: event.target.checked } })} />
                <label class="form-check-label"> accessories:- sq.ft</label>
            
           
         
          </div>
          <div class="mb-3">

          <label>
          Terrace Area </label><br />
            <input type="text"class="form-control" onChange={(event) => setUserData({ ...userData, terraceArea: event.target.value })} required />
         
          </div>
          <div class="mb-3">

          <label>
          Terrace photo
            <input type="file" onChange={(event) => setUserData({ ...userData,  terracePhoto: event.target.value })} />
          </label>
        </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      )}

      {currentStep === 1 && (
        <div>
          <p>Capacity: {userData.capacity}</p>
          <p>Inverter Warranty: {userData.inverterWarranty}</p>
          <p>Insurance: {userData.insurance}</p>
          <ul> 
            other Products
          {Object.entries(userData.otherProducts).map(([otherProducts, selected]) => selected && <li key={otherProducts}>{otherProducts}</li>)}
          </ul>
          
          <p>Terrace Area: {userData.terraceArea}</p>
          <p>Terrace photo: {userData.terracePhoto}</p>

          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h1>Congratulations!</h1>
          <p>You have successfully completed the form.</p>
          <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                  🎉
                </span>
          <button onClick={() => setCurrentStep(0)}>Start Over</button>
        </div>
      )}
    </div>

















            {/* <Stepper activeStep={currentStep} steps={[
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' }
      ]} />
            <Step label="Step 1" className="step1">
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
          </Step>

            <Step label="Step 2" className="step2">
          <input type="text" name="message"/>
          <button type="submit">Submit</button>

            </Step>
            </Stepper> */}
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
