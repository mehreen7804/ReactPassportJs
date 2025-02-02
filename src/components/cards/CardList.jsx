import React from "react";
import Card from "./Cards";
import { data } from "../data";

const CardList = () => {
    return data.map(app => {
        return (
            <Card {...app} key={app.name} />
        );

    });
};

export default CardList;