import React from 'react'
import '../Styles/Navbar.css'

const Navbar1 = () => {
  return (
     <>
     <div className='navbar'>
     <nav>
        
        <div className='nav1'>
          <div className='nav11'> <img src='../Img/Aweganyzlogo.svg'></img></div>
          </div>
         

        <div className='nav2'> 
        <div className='nav21'>
         <div >Awe-Suite</div>
         <div>Awe-ntrepreneur In-House</div>
         <div>Business design</div>
         <div>Startup Bundle</div>
         {/* <a><img src='../Img/col3.svg'></img></a>
         <a><img src='../Img/col4.svg'></img></a>
         <a><img src='../Img/col5.svg'></img></a>
         <a><img src='../Img/col6.svg'></img></a> */}
        </div>
        </div>

        <div className='nav3'>
             <div className='nav31'> 
             <a> <img src='../Img/col2.svg'></img></a>

             {/* <a>collaborate with us</a> */}
             {/* <a> <img src='../Img/col1.svg'></img></a>
              <a> <img src='../Img/arrow1.svg'></img></a> */}
              </div>        
         </div>

     </nav>
     </div>
     
     </>
  )
}

export default Navbar1