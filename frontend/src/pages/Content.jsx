import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";

const Flyweight = (props) => {
    const currentDivision = props.division;
    const [fighters, setFighters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:4000/data/${currentDivision}`)
            .then((response) => {
                setFighters(response.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>{currentDivision.toUpperCase()} division: </h1>
            {isLoading ? (
                <Loading />
            ) : (
                <ul>
                    {fighters.map((fighter, index) => {
                        return (
                            <li key={index}>
                                {index} : <b>{fighter.competitor.name}</b> (
                                {fighter.info.fighting_out_of_country}) ---
                                Record:
                                {fighter.record.wins}-{fighter.record.losses}-
                                {fighter.record.draws}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Flyweight;
