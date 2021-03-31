import React from 'react';
import { NavLink } from "react-router-dom";


const NavigationMenuItem = (props) => {

    return (
        <div className="TopNavigationMenuItem">
            <NavLink
                to={props.url}
                activeStyle={{
                    fontWeight: "bold",
                    color: "#86BCDA"
                }}
            >{props.name}
            </NavLink>

        </div>
    )
}

export default NavigationMenuItem;