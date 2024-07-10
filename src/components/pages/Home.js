import React from "react";
import Slider from "./Slider";
import {Link} from 'react-router-dom';
import Products from "./Products";
import Gifts from "./Gifts";

/* Rectangle 1249 */





function Home() {
  return (
    <div>

<div className="container all-hero">

  <div className="row">

    <div className="col-md-6">
    <Gifts/>

    </div>

    <div className="col-md-6">

    <Slider />
</div>
  </div>


</div>

  

      <section className="section">
      <Products/>
      </section>

{/* products Page */}




    </div>
  );
}
export default Home;
