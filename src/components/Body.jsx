import React from 'react'
import { FaMapMarker } from 'react-icons/fa';


const Body = () => {
  return (

  <>
    <section classNameName='font-sans text-lg font-normal leading-7'>
          <div className="bg-slate-100 text-blue-600 font-bold text-xl text-center py-15 w-3/5 mx-auto mt-20 rounded-lg shadow-md">
            <p>
              Health is the foundation upon which every other <br /> success is built, protect it with intention. <br /><br />
              We are here to help you live healthy and happy life.
            </p>
         </div>
    
       <section className="flex w-3/4 h-96 bg-white text-blue-600 gap-6 justify-center-safe items-center mt-20 px-8 mx-auto 
                          font-semibold border border-blue-500 rounded-xl">
            <div className="mx-auto shadow-lg p-6 w-2/4">
            <FaMapMarker className='inline' />
                  <h2  className="font-bold text-3xl mb-10">Mission Statement</h2>
                  <p> 
                    To ensure that clints are treated with respect and <br /> great Care. <br />
                    To ensure that the amblance of the hospital is always <br /> hygienic and
                    fresh. <br /> To save and enhance clint's life.
                    
                  </p>
            </div>
            <div className="mx-auto shadow-lg p-6 w-2/4">
                  <h2 className="font-bold text-3xl mb-10 mx-auto">Our Vision</h2>
                  <p>
                    Promotion Of Health Care Delivery Through <br /> Prompt Services.
                    Staff-Patient Relationship <br /> and High Excellence Staff Motivation.
                  </p>
            </div>
        </section>
 
        <div className="bg-blue-500 text-white font-bold  text-center p-10 w-3/5 mx-auto mt-30 mb-30 border-3 border-red-900
                          rounded-3xl shadow-md">
                <h2  className="font-bold text-3xl mb-5">Our Core Vallues</h2>
                <p className='text-xl'>
                  Care <br /> Empathy <br /> Integrity <br /> Excellence <br /> Innovation <br /> Professionalism
                </p>
        </div>
          
    
    </section>
  </>
    
  )
}

export default Body;