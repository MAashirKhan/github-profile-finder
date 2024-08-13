import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <div className="main-header-container">
                <div className="width85">
                    <div className="main_header">
                        <div className="logo_box">
                            <img
                                src={require("../../assets/logo.png")}
                                alt={"Logo"}
                            />
                            <div>
                                <h2>GitHub Profile Finder</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;