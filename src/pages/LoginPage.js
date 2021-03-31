import React, {useState} from 'react';
import login from './../data/login.json';
import Spinner from "../Spinner/Spinner";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, toggleIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async e => {
        e.preventDefault();

        const foundUser = login.find(obj => obj.username === username && obj.password=== password)
        toggleIsLoading(true);

        window.location.reload(false);
        if(foundUser) {
            console.log(foundUser);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            const timer = setTimeout(() => {
                //dirty solution, sorry...
                window.location.reload(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            console.log("fout");
            toggleIsLoading(false);
            setError(true);
        }
    };


    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Inloggen</legend>
                    <label htmlFor="gebruikersnaam">Gebruikersnaam:</label><br />
                    <input
                        type="text"
                        value={username}
                        placeholder="Voer naam in"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <div>
                        <label htmlFor="password">Wachtwoord:</label><br />
                        <input
                            type="password"
                            value={password}
                            placeholder="Voer wachtwoord in"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>

                    <button type="submit">
                        {isLoading ? <Spinner /> : "Login" }
                    </button>
                    {error && <p>{error.message} </p> }
                </fieldset>
            </form>
        </div>
    );
}

export default LoginPage;