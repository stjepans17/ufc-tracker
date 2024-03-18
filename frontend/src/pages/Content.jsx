import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";
import Header from "../components/Header.jsx";
import { Table } from "react-bootstrap";
import Footer from "../components/Footer.jsx";
import {
    convertISO3ToISO2,
    capitalize,
    fixRecord,
    fixIndex,
    fixName,
} from "../utils/functions.jsx";

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
                // console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <h1 className="division-name-h1">
                {capitalize(currentDivision)} rankings:{" "}
            </h1>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <Table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Fighter</th>
                                <th>Record</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fighters.map((fighter, index) => {
                                return (
                                    <tr>
                                        <td>
                                            {fixIndex(index, props.division)}
                                        </td>
                                        <td>
                                            {fixName(
                                                fighter.competitor.name,
                                                fighter.info
                                                    .fighting_out_of_country_code,
                                                fighter.info.birth_country_code
                                            )}
                                        </td>
                                        <td>
                                            {fixRecord(
                                                fighter.record.wins,
                                                fighter.record.losses,
                                                fighter.record.draws,
                                                index
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            )}
            {props.division === "poundforpound" ? (
                <Footer cn="created-by-home" />
            ) : (
                <Footer cn="created-by" />
            )}
        </div>
    );
};

export default Flyweight;
