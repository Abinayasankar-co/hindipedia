import React from "react";

const Footer = () =>{
    return(
        <div>
            <footer className="footer text-white bg-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>FINE ART</h4>
                            </div>
                            
                            <div className="col-2">
                                <h5>Section</h5>
                                <ul classname="nav flex-column">
                                    <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">
                                        Home
                                    </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                              Banking
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;