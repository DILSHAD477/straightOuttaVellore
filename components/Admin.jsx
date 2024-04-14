import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import "./Admin.css";

const Admin = () => {
  // State and handling functions for the first input field
  const [inputValue1, setInputValue1] = useState('');
  const [options1, setOptions1] = useState([
    'Sarjapur Road',
    'MG Road',
    'Bellary Road',
  ]);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const handleInputChange1 = (event) => {
    const value = event.target.value;
    setInputValue1(value);
    setShowDropdown1(value.length > 0);
  };

  const handleOptionSelect1 = (option) => {
    setInputValue1(option);
    setShowDropdown1(false);
  };

  // State and handling functions for the second input field
  const [inputValue2, setInputValue2] = useState('');
  const [options2, setOptions2] = useState([
    'tuk tuk',
    'ambulance',
    'truck',
  ]);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleInputChange2 = (event) => {
    const value = event.target.value;
    setInputValue2(value);
    setShowDropdown2(value.length > 0);
  };

  const handleOptionSelect2 = (option) => {
    setInputValue2(option);
    setShowDropdown2(false);
  };

  return (
    <div className="page_layout">
      <section className="left">
       
      </section>
      <section className="right">
        <div className="top">
          <div className="typeIn">
            <div className="landp">
              <input
                type="text"
                value={inputValue1}
                onChange={handleInputChange1}
                placeholder="Location"
                className="input_field1"
              />
              
            </div>
            {showDropdown1 && (
              <div className="menu">
                <div className="dropdown-menu">
                  {options1.map((option, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleOptionSelect1(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="typeIn">
            <div className="landp">
              <input
                type="text"
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="Enter a parameter"
                className="input_field2"
              />
              <button className="send">Enter</button>
            </div>
            {showDropdown2 && (
              <div className="menu">
                <div className="dropdown-menu">
                  {options2.map((option, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleOptionSelect2(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="Located_in">Located in: <FontAwesomeIcon icon={faMapMarkerAlt} className="location_icon" /> Banglore</div><br></br>
          <div className="camera">Camera No. 46</div><br></br>
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
