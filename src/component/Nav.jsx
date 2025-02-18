import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div style={{display:"flex",justifyContent:'center',fontSize:'20px'}}>
    <Link to='/card'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/contact'>contact</Link>
    <Link to='/page'>pages</Link>
    </div>
  )
}
