import React from "react";
import img2 from "../images/img2.jpg";

function AllProducts() {
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">Explore All Products</h3>
                    <div className="underline mx-auto"></div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Wedding Signs</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                {/* Repeat this structure for other products */}
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Personalized Gifts</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Birthday Return Gifts</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Kids Gifts</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Baby Shower Gifts</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Corporate Orders</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Home Decor</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Welcome Signs</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow product-box">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">Jewelry</h6>
                            <div className="underline"></div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;