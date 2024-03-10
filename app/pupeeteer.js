import 'dotenv/config';
import puppeteer from 'puppeteer';
import config from './config.json' assert { type: 'json' };
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
        'https://tennis.paris.fr/tennis/jsp/site/Portal.jsp?page=tennis&view=start&full=1',
        { waitUntil: 'load' }
    );
    await page.setViewport({ width: 1450, height: 2000 });

    /** PORTAIL DE CONNEXION */

    new Promise((r) => setTimeout(r, 2000));

    const newPagePromise = new Promise((x) => page.once('popup', x));

    await page.click('#button_suivi_inscription');

    const popup = await newPagePromise;

    await popup.waitForSelector('#username-login', { timeout: 3000 });
    await popup.type('#username-login', process.env.EMAIL);
    await popup.type('#password-login', process.env.PASSWORD);

    await popup.click('button[type="submit"]');

    await page.waitForSelector('.main-informations');

    /** RESERVATION DE CRÉNEAU */

    await page.goto(
        'https://tennis.paris.fr/tennis/jsp/site/Portal.jsp?page=recherche&view=recherche_creneau#!'
    );

    const tennisCourtName = config.location;

    // Select Tennis Court
    await page.type('.tokens-input-text', tennisCourtName);
    await delay(800);
    await page.click(`.tokens-suggestions-list-element`);

    const searchButton = await page.waitForSelector(`#rechercher`);
    console.log('searchButton', searchButton);
    await searchButton.click();
})();

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
