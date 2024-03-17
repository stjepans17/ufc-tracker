import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Table } from "react-bootstrap";
import axios from "axios";
import Loading from "../components/Loading.jsx";

const Home = () => {
    const [fighters, setFighters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:4000/data/poundforpound`)
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
    //

    const fixIndex = (index) => {
        return <p className="champ">{index + 1}</p>;
    };

    const fixName = (name, index) => {
        let splitName = name.split(", ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        return (
            <p className="champ">
                <b>
                    {firstName} {lastName}
                </b>
            </p>
        );
    };

    const capitalize = (name) => {
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
            <h1 className="division-name-h1-home">
                Current UFC Pound for pound list:{" "}
            </h1>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="main">
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
                                                index
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
            <Footer cn="created-by-home" />
        </div>
    );
};

export default Home;
