// Admin.js
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Admin.css";

const Admin = () => {
  return (
    <div className="page_layout">
      <section className="left">
        <iframe src="http://127.0.0.1:5500/components/test.html" width="100%" height="100%"></iframe>
      </section>
      <section className="right">
        <div className="top">
          {/* <!-- helmets,potholes,stuff that help in traffic control indirectly stats --> */}
          <div className="stats2">Satistics of the road parameters that affect traffic & saftey: </div><br></br>
          <div className="Located_in">Located in:</div><br></br>
          <div className="Number_of">Number of:</div>
          <div className="statsTop1">
            <div className="statsTop2">
              <div className="potholes">Potholes:</div>
              <div className="helmets">Helmet Violations:</div>
              <div className="seatbelts">Seatbelt Violations:</div></div>
            <div className="typeIn"><input type="text" placeholder="type in a parameter and or a location" className="input_field"></input><button className="send"><FontAwesomeIcon icon={faPaperPlane}/></button></div></div>
        </div>
        <div className="bottom">
           <div className="stats3">Real-time analysis:</div><br></br>
          {/* real time analyisis */}
          {/* <!-- traffic control stats --> */}
          <div calssName="weather">Harsh Weather Conditions noticed:</div>
          <div className="congestion">Traffic Congestion found:<br></br></div>
          <div className="alerts"><h3>ALERTS:</h3></div>
          <div className="accidents">Accidients</div>

        </div>
      </section>
    </div>
  );
};

export default Admin;