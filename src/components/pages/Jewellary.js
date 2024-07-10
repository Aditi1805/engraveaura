import React from "react";
import img2 from "../images/img2.jpg";
import {Link} from 'react-router-dom';
 function Jewellary(){

    return(
        <>
             <div className="conatiner mb-4" >
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Explore Jewellary</h3>

              <div className="underline mx-auto"></div>
           

            
            </div>
          </div>
        </div>

  
        {/* <section classNameName="section border-top mb-4 section-1st">            */}
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div className="card shadow product-box ">
                    <img src={img2} className="w-100 border-bottom" alt="..." />
                    <div className="card-body">
                      <h6>Wedding Signs</h6>
                      <div className="underline">
                      </div>
                      <p>
                        lorem loerem
                      </p>
                 

                  
                    </div>
                  </div>
          
              </div>
              <div className="col-3">
              <div className="card shadow product-box ">
                    <img src={img2} className="w-100 border-bottom" alt="..." />
                    <div className="card-body">
                      <h6>Wedding Signs</h6>
                      <div className="underline">
                      </div>
                      <p>
                        lorem loerem
                      </p>
                 

                   
             
                    </div>
                  </div>
          
              </div>
              <div className="col-3">
              <div className="card shadow product-box ">
                    <img src={img2} className="w-100 border-bottom" alt="..." />
                    <div className="card-body">
                      <h6>Wedding Signs</h6>
                      <div className="underline">
                      </div>
                      <p>
                        lorem loerem
                      </p>
                 

       
                    </div>
                  </div>
          
              </div>
              <div className="col-3">
              <div className="card shadow product-box ">
                    <img src={img2} className="w-100 border-bottom" alt="..." />
                    <div className="card-body">
                      <h6>Wedding Signs</h6>
                      <div className="underline">
                      </div>
                      <p>
                        lorem loerem
                      </p>
                 

                   
              
                    </div>
                  </div>
          
              </div>
            </div>
          </div>
        {/* </section> */}
     
        </>
    );

 }
export default Jewellary;