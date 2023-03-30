import { faHomeLgAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Listings(props){
    return(
<div style={{width:"650px",height:"90px",padding:"20px",borderRadius:"10px",border:"1px solid rgb(221,221,221)",display:"flex",alignItems:"center",cursor:"pointer",marginTop:"10px"}}> 
<div style={{padding:"10px",borderRadius:"3px",backgroundColor:"rgb(235,235,235)"}}>
   <FontAwesomeIcon style={{fontSize:"20px"}} icon={faHomeLgAlt}></FontAwesomeIcon>
</div>
   <span style={{marginLeft:"20px",fontSize:"18px"}}>
   {props.name}</span>
   </div>

    )
}
export default Listings