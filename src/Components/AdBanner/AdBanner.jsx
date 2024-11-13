import adbanner from '../../assets/adbanner.mp4';
import './adbanner.css';
import icon from '../../assets/CleverLogo.ico';

function AdBanner() {
  return (
    <>
      <div className="adbanner">
        <img src={icon} alt="" className='icon' />
        <div className='bgColor'>
          <video src={adbanner} muted autoPlay loop></video>
        </div>
      </div>
    </>
  );
}

export default AdBanner;
