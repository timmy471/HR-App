import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="row register">
            <div class="form-group text-center">
                        <p>
                        I am a: <span><strong>Staff</strong></span> <span><strong>Corporate Organization</strong></span>
                            </p>

                    </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                   
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" placeholder="John" className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text"  placeholder="Doe" className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="form-group">
                        <label>Official Email:</label>
                        <input type="text"  placeholder="abc@gmail.com" className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="number"  placeholder="080123456789" className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                        <label>Organization Name:</label>
                        <input type="text"  placeholder="NR Inc." className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"  placeholder="NR Inc." className="form-control reg_input" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                        <label>Retype Password:</label>
                        <input type="password"  placeholder="NR Inc." className="form-control reg_input" />
                    </div>
                </div>
                <input type="submit" value="Register" />
            </div>
        </div>
    )
}

export default Register
