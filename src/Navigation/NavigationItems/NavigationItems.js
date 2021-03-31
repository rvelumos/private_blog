import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
    const {auth} = props;

    return (
        <>
            <div className="TopNavigationItems">
                <div className="TopNavigationMenu" >
                    <NavigationItem url="/home" name="home" exact />
                    <NavigationItem url="/blogitems/" name="Alle posts" />
                    {auth ?
                        <NavigationItem url="/profiel/" name="mijn profiel"/>
                        :
                        <NavigationItem url="/profiel/" name="login"/>
                    }
                </div>
            </div>
        </>
    )
}

export default NavigationItems;