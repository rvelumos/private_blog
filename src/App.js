import React, {useEffect, useState} from 'react';
import './App.css';
import posts from './data/posts.json';
import HomePage from './pages/HomePage';
import BlogPostsPage from './pages/BlogPostsPage';
import BlogPostDetailsPage from "./pages/BlogPostDetailsPage";
import UserProfilePage from './pages/UserProfilePage';
import LoginPage from './pages/LoginPage';
import {
    Switch,
    Route,
} from 'react-router-dom';
import TopNavigationItems from "./Navigation/NavigationItems/NavigationItems";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            setUsername(localStorage.getItem('username'))
            setPassword(localStorage.getItem('password'));
            toggleIsAuthenticated(true);
        }
    },[])

    return (
            <>
            <div className="BlogContainer">
                <TopNavigationItems auth={isAuthenticated} />
                <Switch>
                    <Route path={["/home", "/"]} exact>
                        <HomePage />
                    </Route>

                    <Route path="/blogitems/">
                        <BlogPostsPage blog_items={posts} />
                    </Route>

                    <Route path="/blogitem/:id/">
                        <BlogPostDetailsPage />
                    </Route>

                    <Route path="/profiel/">
                        {isAuthenticated === true ?
                            <UserProfilePage username={username} />
                            :
                            <LoginPage />
                        }
                    </Route>
                </Switch>
            </div>
          </>
  );
}

export default App;
