import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/all", (request, response) => {
    try {
        fs.readFile("./data/data.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/champions", (request, response) => {
    try {
        fs.readFile("./data/champions.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/flyweight", (request, response) => {
    try {
        fs.readFile("./data/flyweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/bantamweight", (request, response) => {
    try {
        fs.readFile("./data/bantamweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/featherweight", (request, response) => {
    try {
        fs.readFile("./data/featherweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/lightweight", (request, response) => {
    try {
        fs.readFile("./data/lightweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});
router.get("/welterweight", (request, response) => {
    try {
        fs.readFile("./data/welterweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});
router.get("/middleweight", (request, response) => {
    try {
        fs.readFile("./data/middleweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/lightheavyweight", (request, response) => {
    try {
        fs.readFile("./data/lightheavyweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});
router.get("/heavyweight", (request, response) => {
    try {
        fs.readFile("./data/heavyweight.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

router.get("/poundforpound", (request, response) => {
    try {
        fs.readFile("./data/poundforpound.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});
export default router;
