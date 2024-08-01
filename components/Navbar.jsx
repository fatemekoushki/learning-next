"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
	const pathName  = usePathname() ;
    return ( 
        <div className="top-area">
				<div className="header-area">
				    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div className="container">

				            <div className="navbar-header">
				                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <a className="navbar-brand" href="index.html">carvilla<span></span></a>

				            </div>

				            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li className=" scroll "><Link href={'/'} style={{color : pathName == "/" && "blue"}} >Home</Link></li>
				                    <li className="scroll"><Link href={'/cars'} style={{color : pathName.startsWith('/cars') && "blue"}}  >Cars</Link></li>
				                    <li className="scroll"><Link href={'/services'} style={{color : pathName == "/services" && "blue"}}  >Services</Link></li>
				                    <li className="scroll"><Link href={'/login'} style={{color : pathName == "/login" && "blue"}}  >Login</Link></li>

				                    {/* <li className="scroll"><a href="#brand">brands</a></li> */}
				                    {/* <li className="scroll"><a href="#contact">contact</a></li> */}
				                </ul>
				            </div>
				        </div>
				    </nav>
				   
				</div>
			    <div class="clearfix"></div>

			</div>
     );
}
 
export default Navbar;