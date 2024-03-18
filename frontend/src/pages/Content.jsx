import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";
import Header from "../components/Header.jsx";
import { Table } from "react-bootstrap";
import Footer from "../components/Footer.jsx";
import { convertISO3ToISO2 } from "../utils/functions.js";

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

    const fixIndex = (index) => {
        if (props.division === "poundforpound") {
            return <p className="champ">{index + 1} (P4P)</p>;
        }
        if (index !== 0) {
            return <p className="champ">{index}</p>;
        }
        return <p className="champ">Champion</p>;
    };

    const fixName = (name, cnt, alt) => {
        let splitName = name.split(", ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        console.log(cnt);
        // if (
        //     cnt !== undefined &&
        //     convertISO3ToISO2(alt).toLowerCase() !== undefined
        // ) {
        //     let iso2 = convertISO3ToISO2(cnt).toLowerCase();

        //     return (
        //         <p className="champ">
        //             <b>
        //                 {firstName} {lastName}
        //             </b>
        //             {/* <img src={`https://flagcdn.com/24x18/${iso2}.png`}></img> */}
        //             <img
        //                 src={`https://flagcdn.com/w20/${iso2}.png`}
        //                 alt=""
        //                 className="flag"
        //             />
        //         </p>
        //     );
        // }
        // if (
        //     alt !== undefined &&
        //     convertISO3ToISO2(alt).toLowerCase() !== undefined
        // ) {
        //     let iso2 = convertISO3ToISO2(alt).toLowerCase();

        //     return (
        //         <p className="champ">
        //             <b>
        //                 {firstName} {lastName}
        //             </b>
        //             {/* <img src={`https://flagcdn.com/24x18/${iso2}.png`}></img> */}
        //             <img
        //                 src={`https://flagcdn.com/w20/${iso2}.png`}
        //                 alt=""
        //                 className="flag"
        //             />
        //         </p>
        //     );
        // }
        return (
            <p className="champ">
                <b>
                    {firstName} {lastName}
                </b>
                {/* <img src={`https://flagcdn.com/24x18/${iso2}.png`}></img> */}
            </p>
        );
    };

    const capitalize = (name) => {
        if (name === "poundforpound") {
            return "Pound for pound";
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const fixRecord = (w, l, d, index) => {
        return (
            <p className="champ">
                {w} - {l} - {d}
            </p>
        );
    };

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
                                        <td>{fixIndex(index)}</td>
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
