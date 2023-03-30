import { faCloudUpload, faGreaterThan, faHome, faHomeAlt, faHomeLgAlt, faHomeUser, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Listings from '../component/listings'
import Navbar2 from '../component/navbar2'
import Defaultnav1 from '../layouts/defaultnav1'



function Listing(){
    return(

       <section>
        <Navbar2/>
   <div style={{margin:"auto",width:"700px" ,height:"500px",marginTop:"50px"}}>
   <h1 style={{fontSize:"30px",marginBottom:"30px"}}> Welcome back,odedoyin esther</h1>
   <h3 style={{marginBottom:"18px"}}>Finish your listing</h3>
 
   <Listings name="Your  listing startedmarch,2023"/>
   <Listings name="Your  listing startedmarch,2023"/>
   <Listings name="Your unique space listing startedmarch,2023"/>
   <Listings name="Your unique space listing startedmarch,2023"/>
   <h3 style={{marginTop:"50px"}}>Start a new listing</h3>
   <Link to="/getstarted" style={{color:"black",textDecoration:"none"}}>
   <div style={{ width:"650px", borderBottom:"1px solid rgb(221,221,221)" ,display:"flex",marginTop:"30px",  alignItems:"center",paddingBottom:"20px",justifyContent:"space-between"}}>
    <div style={{display:"flex"}}>
    <FontAwesomeIcon style={{fontSize:"30px"}} icon={faHomeLgAlt}></FontAwesomeIcon>
    <h3 style={{fontSize:"20px",marginLeft:"20px"}}>Create a new listing</h3>
    </div>
    <div>
     <FontAwesomeIcon  icon={faGreaterThan}></FontAwesomeIcon> 
    </div>
    </div> </Link>
    <div style={{ width:"650px", borderBottom:"1px solid rgb(221,221,221)" ,display:"flex",marginTop:"30px",  alignItems:"center",paddingBottom:"20px",justifyContent:"space-between"}}>
    <div style={{display:"flex"}}> 
    <FontAwesomeIcon style={{fontSize:"30px"}} icon={faHomeUser}></FontAwesomeIcon>
    <h3 style={{fontSize:"20px",marginLeft:"20px"}}>Duplicate an existing listing</h3>
    </div>
     <div>
     <FontAwesomeIcon  icon={faGreaterThan}></FontAwesomeIcon> 
    </div>    
    </div>
   </div>



       </section>

    )
}
export default Listing