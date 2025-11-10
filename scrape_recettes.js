import puppeteer from "puppeteer";
import axios from "axios";

const STRAPI_URL = "http://localhost:1337/api/recettes";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzYyNzcxMjg0LCJleHAiOjE3NjUzNjMyODR9.ig6Z_q5JQfa_LJBtK4sqPWNwclAC-adH2qLK5vmHADM";

async function scrapeRecipe(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => {
        const titre = document.querySelector("h1")?.innerText || "Sans titre";
        const description = document.querySelector("main")?.innerText || "Pas de description trouvée";
        const temps_preparation = 3;
        const difficulte = 1;
        const budget = 1;
        return { titre, temps_preparation, difficulte, budget, description };
    });

    await browser.close();
    return data;
}

async function main() {
    const urls = [
        "https://encuisine.adrienrossignol.fr/recette/24",
    ];


    for (const url of urls) {
        const recette = await scrapeRecipe(url);

        if (recette.titre === "Générer des idées de repas") {
            console.log("Recette non valide, saut de l'envoi à Strapi.");
            continue;
        }

        console.log("Envoi à Strapi...");
        try {
            const res = await axios.post(STRAPI_URL, { data: recette }, {
                headers: {
                    Authorization: TOKEN,
                },
            });
            console.log("Recette ajoutée");
        } catch (err) {
            console.error(" Error :");
        }
    }
}

main();
