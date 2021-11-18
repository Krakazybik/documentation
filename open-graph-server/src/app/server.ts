import express from "express";
import log4js from "log4js";
import dotenv from "dotenv";
import sharp from "sharp";
import path from "path";
import TextToSVG from "text-to-svg";

dotenv.config();
const logger = log4js.getLogger();

logger.level = process.env.LOG_LEVEL || "all";

enum HTTP_STATUS {
    OK = 200,
    FORBIDDEN = 403,
}

function getText(text) {
    const textToSVG = TextToSVG.loadSync("assets/Kanit-Bold.ttf");
    const attributes = { fill: "white", stroke: "white" };
    const options = { fontSize: 72, anchor: "top", attributes: attributes };
    return textToSVG.getSVG(text, options);
}

const sharpImage = sharp("assets/preview.png");

const app = express();
const port = process.env.PORT || 5000;
app.get("/:template", async (request, response) => {
    const { template } = request.params;
    const { title, description } = request.query;
    console.log(template, title, description, request.query);

    if (!title || !description || !template)
        return response.status(HTTP_STATUS.FORBIDDEN).send(`403 Forbidden`);

    try {
        const clonedImage = sharpImage.clone();
        const buf = Buffer.from(getText(description));
        clonedImage.composite([{ input: buf, left: 20, top: 20 }]);
        clonedImage.pipe(response);
    } catch (err) {
        logger.error(err);
    }
});

app.listen(port, () => console.log(`Running on port ${port}`));
