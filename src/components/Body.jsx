import React from 'react'
import { FaMapMarker } from 'react-icons/fa';


const Body = () => {
  return (

  <>
    <section classNameName='font-sans text-lg font-normal leading-7'>
          <div className="bg-white text-blue-600 font-bold text-md text-center py-5 mx-20 mt-5 mb-30 rounded-lg shadow-lg">
            <p>
              Health is the foundation upon which every other success is built, protect it with intention. <br /><br />
              We are here to help you live healthy and happy life.
            </p>
         </div>
    
     <div className=' flex bg-slate-100 h-112 mx-20 mb-20 font-semibold text-lg text-center gap-5 rounded-xl '>
      <div className='bg-white text-blue-600 w-1/3 ml-15 my-10 p-2 shadow-md rounded-lg'>
        <h2 className='font-bold text-3xl my-10 '>Mission Statement</h2>
        <p> 
          To ensure that clints are treated with respect and  great Care.
          To ensure that the amblance of the hospital is always hygienic and
          fresh. To save and enhance clint's life.
                    
        </p>
      </div>

      <div className='bg-red-500 text-white w-1/3  my-10 p-2 shadow-md rounded-lg'>
         <h2 className='font-bold text-3xl my-10'>Our Vision</h2>
         <p>
            Promotion Of Health Care Delivery Through Prompt Services.
            Staff-Patient Relationship and High Excellence Staff Motivation.
          </p>
      </div>

     <div className='bg-white text-blue-600 w-1/3  my-10 mr-15 p-2 shadow-md rounded-lg'>
       <h2 className='font-bold text-3xl my-10'>Our Core Vallues</h2>
       <p>
            Care <br /> Empathy <br /> Integrity <br /> Excellence <br /> Innovation <br /> Professionalism
       </p>
     </div>

  </div>
 
   </section>
</>
    
  )
}

export default Body;