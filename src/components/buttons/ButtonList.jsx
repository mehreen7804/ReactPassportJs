import React from "react";
import IconButton from "./IconButton";
import GradientButton from "./GradientButton";
import { data } from "../data";

const ButtonList = () => {
    return data.map(app => {      //it will map over data structure 
        if (app.colors)
            return <GradientButton app={app} key={app.name} />;    //if app has color it will show gradient btn otherwise it will hoe plain icon butn

        return (
            <IconButton app={app} key={app.name} />
        );

    });
};

export default ButtonList;