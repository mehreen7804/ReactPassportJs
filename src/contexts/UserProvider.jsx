import React, { createContext, useState, useEffect } from "react";
const context = createContext(null); //default value is null
/// it iws a functional component that can act as a wrapper around all the component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <context.Provider value={user}>   // value we r passing to all child components is users object
            {children}
        </context.Provider>
    );
};
UserProvider.context = context;

export default UserProvider;

/// the last pert of code is gonna do thing that it will take user data and will pass it on to other children components

