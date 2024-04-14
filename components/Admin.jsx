// Admin.js
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
import { useState } from 'react';
// import flaticonIcon from './cctv.png'; // Update the path accordingly

import "./Admin.css";

const Admin = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([
    'Number of cars on Sarjapur Road',
    'Number of seatbelt violations on MG Road',
    'Number of cycles on the Bellary Road',
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowDropdown(value.length > 0);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className="page_layout">
      <section className="left">
       
      </section>
      <section className="right">
        <div className="top">
          {/* <div className="statistics">STATISTICS</div> */}
          <div className="typeIn">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a location and a parameter"
              className="input_field"
            /><button className="send">Enter</button>
            {showDropdown && (
              <div className="menu">
                <div className="dropdown-menu">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </div>
                ))}
              </div>
            </div>)}
          </div>
          {/* <div className="typeIn"><input type="text" placeholder="Enter a location and a road parameter" className="input_field"></input><button className="send">Enter</button></div> */}
          {/* <!-- helmets,potholes,stuff that help in traffic control indirectly stats --> */}
          {/* <div className="stats2">Satistics of the road parameters that affect traffic & saftey: </div><br></br> */}
          <div className="Located_in">Located in: <FontAwesomeIcon icon={faMapMarkerAlt} className="location_icon" /> Banglore</div><br></br>
          <div className="camera">Camera No. 46
            {/* <Image src={flaticonIcon} alt="CCTV Camera Icon" width={24} height={24} className="camera_icon" /> */}
             </div><br></br>


          <div className="input_answer">The number of cycles on the Ballary Road are 273.</div>
            <div className="statsTop2">
              <div className="cars">Cars <div className="value"> 273</div></div>
              <div className="bikes">Bikes <div className="value"> 273</div></div><br></br>
              <div className="cycles">Cycles <div className="value"> 273</div></div>
              <div className="trucks">Trucks <div className="value"> 273</div></div><br></br>
              <div className="seatbelts">Seatbelt <br></br> violations <div className="value"> 273</div> </div>
              <div className="helmet">Helmet <br></br> violations <div className="value"> 273</div></div>
          </div>
        </div>
        <div className="bottom"></div>
        
        
      
      </section>
    </div>
  );
};

export default Admin;