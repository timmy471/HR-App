import React from 'react';
import Login from '../partials/Login';
import Register from '../partials/Register';

import Logo from '../../images/Noregret2.webp';

import '../../stylesheets/auth.css';

const Auth = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 imgbox">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 auth">
                    <div className="auth_Form">
                        <div className="logo_container text-center" style={{marginBottom:"2rem"}}>
                            <img src={Logo} className="img-circle" alt="application Logo" height="150" width="200" />
                        </div>
                        <ul className="nav nav-tabs nav-justified" style={{marginBottom:"2rem"}}>
                            <li className="nav-item">
                                <a data-toggle="tab" className="nav-link active nav_ref" href="#login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="tab" className="nav-link nav-ref" href="#register">Register</a>
                            </li>

                        </ul>
                        <div className="tab-content">
                            <div id="login" className="tab-pane fade in active">
                                <Login />
                            </div>
                            <div id="register" className="tab-pane fade in">
                                <Register />
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Auth
