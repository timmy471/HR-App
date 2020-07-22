import React from 'react'

const Login = () => {
    return (
        <div>
        <div className="row register">
           
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text"  placeholder="abc@gmail.com" className="form-control reg_input" />
                </div>
            </div>
           
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password"  placeholder="NR Inc." className="form-control reg_input" />
                </div>
            </div>
            
            <input type="submit" value="Register" />
        </div>
    </div>
    )
}

export default Login
