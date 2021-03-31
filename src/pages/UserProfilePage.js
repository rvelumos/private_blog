import React, {useState} from 'react';

import Spinner from "../Spinner/Spinner";

const UserProfilePage = (props) => {
    const [isLoading, toggleIsLoading] = useState(false);
    const {username} = props;

    const HandleLogout = () => {
        localStorage.clear();
        toggleIsLoading(true);

        const timer = setTimeout(() => {
            //dirty solution, sorry...
            window.location.reload(true);
        }, 500);
        return () => clearTimeout(timer);
    };

    return (
        <>
            <div className="home">
                <h1>Welkom terug op jouw profiel, {username}!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius iste necessitatibus qui, veniam vitae voluptas. Cum, possimus vel. A doloremque nisi non officiis perferendis quasi recusandae saepe ut voluptate.</p>
                <button type="submit" onClick={HandleLogout}>
                    {isLoading ? <Spinner /> : "Uitloggen" }
                </button>
            </div>
        </>
    )
}

export default UserProfilePage;