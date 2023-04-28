import React from 'react'
import './Solorpanel.css'
import SolorPanelCard from '../SolorpanelCard/SolorPanelCard'
import Polycrystalline from '../SolorpanelCard/Polycrystalline'
import Bifacial from '../SolorpanelCard/Bifacial'
import Thin from '../SolorpanelCard/Thin'
import Perc from '../SolorpanelCard/Perc'
export default function SolorPanel() {
    return (
        <div className='container mt-5' id='solar-panel'>
            <div className='py-5 mt-5'>
                <h3 className='text-center'>Solar Panel</h3>
                <hr />
                <div className='d-flex py-5'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="Monocrystalline-tab" data-bs-toggle="tab" data-bs-target="#Monocrystalline" type="button" role="tab" aria-controls="home" aria-selected="true">Monocrystalline</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Polycrystalline" type="button" role="tab" aria-controls="Polycrystalline" aria-selected="false">Polycrystalline</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Bifacial-tab" data-bs-toggle="tab" data-bs-target="#Bifacial" type="button" role="tab" aria-controls="Bifacial" aria-selected="false">Bifacial</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Thin-tab" data-bs-toggle="tab" data-bs-target="#Thin" type="button" role="tab" aria-controls="Thin" aria-selected="false">Thin Film</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="PERC-tab" data-bs-toggle="tab" data-bs-target="#PERC" type="button" role="tab" aria-controls="PERC" aria-selected="false">PERC</button>
                    </li>
                </ul>
                <div className="tab-content ps-5" id="myTabContent">
                    <div className="tab-pane fade show active" id="Monocrystalline" role="tabpanel" aria-labelledby="Monocrystalline-tab">
                        <SolorPanelCard />
                    </div>
                    <div className="tab-pane fade" id="Polycrystalline" role="tabpanel" aria-labelledby="Polycrystalline-tab">
                        <Polycrystalline />
                        </div>
                    <div className="tab-pane fade" id="Bifacial" role="tabpanel" aria-labelledby="Bifacial-tab">
                        <Bifacial />
                        </div>
                    <div className="tab-pane fade" id="Thin" role="tabpanel" aria-labelledby="Thin-tab">
                        <Thin />
                        </div>
                    <div className="tab-pane fade" id="PERC" role="tabpanel" aria-labelledby="PERC-tab">
                        <Perc />
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
