import { Link } from "react-router-dom"



function Footer2(){
    return(
<div className="d-flex justify-content-between mt-2 pt-4"style={{backgroundColor:"white"}}>
<button className="border-0 bg-transparent "style={{marginLeft:"30px"}} >
<Link to="/getstarted">back</Link>
</button>
<Link to="/">
<button style={{width:"150px",backgroundColor:"black",padding:"10px",borderRadius:"5px",border:"0",color:"white",marginRight:"60px"}}>Next</button></Link>
</div>
    )
}
export default Footer2