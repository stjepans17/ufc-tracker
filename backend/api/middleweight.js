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