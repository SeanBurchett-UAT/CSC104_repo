let gamedata = {}; // the object our game data will be loaded to

let docLoaded = false;
let gamedataLoaded = false;
let gamedataCallback = () => {}; // variable holding a function

function getGamedata (callback) { // callback being a function to call when the DOM and the game data are ready
    if (!gamedataLoaded) {
        fetch('./data/gamedata.json') // initiates an HTTP request. relative urls are relative to the page that this script is loaded from!
            .then(response => response.json()) // register something to be done later whenever the fetch is finished; in this case, reading the page as JSON into an object
            .then(json => { // when the json reading and parsing is done
                gamedata = json;
                gamedataCallback = callback;
                gamedataLoaded = true;
                if (docLoaded) {
                    gamedataCallback();
                }
            });
    }
}

function onDocumentLoad () {
    docLoaded = true;
    if (gamedataLoaded) {
        gamedataCallback();
    }
}

document.addEventListener('DOMContentLoaded', onDocumentLoad); // add a callback to our function that fires when the DOM is constructed
docLoaded = document.readyState === "interactive" || document.readyState === "complete"; // sometimes the dom loads so fast that it's already done by callback's registration
