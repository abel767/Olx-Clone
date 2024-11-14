import './footer.css'
import cartrade_tech from '../../assets/cartrade_tech.svg'
import olx from '../../assets/olx.svg'
import carwale from '../../assets/carwale.svg'
import bikewale from '../../assets/bikewale.svg'
import cartrade from '../../assets/cartrade.svg'
import mobility from '../../assets/mobility.svg'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="upperFooter">
          <table>
            <thead>
              <tr>
                <th><strong>POPULAR LOCATIONS</strong></th>
                <th><strong>Trending Locations</strong></th>
                <th><strong>About Us</strong></th>
                <th><strong>OLX</strong></th>
                <th><strong>Follow Us</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kolkata</td>
                <td>Bhubaneshwar</td>
                <td>Tech@OLX</td>
                <td>Blog</td>
                <td></td>
              </tr>
              <tr>
                <td>Mumbai</td>
                <td>Hyderabad</td>
                <td></td>
                <td>Help</td>
                <td></td>
              </tr>
              <tr>
                <td>Chennai</td>
                <td>Chandigarh</td>
                <td></td>
                <td>Sitemap </td>
                <td></td>
              </tr>
              <tr>
                <td>pune</td>
                <td>Nashik</td>
                <td></td>
                <td>Legal & Privacy information</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lowerFooter">
         <img src={cartrade_tech} alt="" />
         <img src={olx} alt="" />
         <img src={carwale} alt="" />
         <img src={bikewale} alt="" />
         <img src={cartrade} alt="" />
         <img src={mobility} alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer;