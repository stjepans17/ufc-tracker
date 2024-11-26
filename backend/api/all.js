import fs from 'fs';

export default function(req, res) {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) {
            console.error("Error reading data.json:", err);
            return res.status(500).send("Internal Server Error");
        }
        const jsonData = JSON.parse(data);
        return res.status(200).json(jsonData);
    });
}