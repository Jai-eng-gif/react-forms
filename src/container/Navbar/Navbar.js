import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="form__navbar">
                <div className="form__navbar-form-name">
                    <p>Title</p>
                </div>
                <div className="form__navbar-tabs">
                    <p>Profiles</p>
                    <p>Register</p>

                    <div className="form__navbar-profile-photo">
                        <img />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
