This is a site about a Project Exonaut revival service.

This is the final submission for the final project.

Files:

HTML:
- index.html - Landing page, download button
- blog.html - Blog entries listing: one real, and a bunch of dummies for figuring out organization
- blog/in-game.html - Blog entry for the project's start
- wiki.html - Navigation page to go to the exosuit lookup or the base weapons lookup, and sieve out JavaScript disablers
- exosuits.html - Listing of suits, a table containing suit stats, and a table containing weapon mod stats
- weapons.html - Listing of weapons and a table containing base weapon stats
- leaderboards.html - Tables containing faction and individual leaderboard metrics (made up, since that service does not exist yet)

CSS:
- css/noscript-handling.css - Definition of a class which is meant to only loaded if JavaScript is disabled
- css/common.css - CSS used across all pages
- css/blog-entry.css - A few CSS overrides used only for blog entries

JS:
- js/load-data.js - Common code for fetching the game data and calling a provided callback for processing it
- js/exosuits.js - Code for processing the game data into buttons for the suits and table data for the suits and their weapon mods
- js/weapons.js - Code for processing the game data into buttons and table data for the base weapons

data:
- data/gamedata.json - Extracted game data. (This'd be hosted on the cloud game server, but that's not running right now.)
- img/** - Page image assets
- ./*.png, favicon.ico, site.webmanifest - Favicon files, converted from small logo at https://favicon.io/favicon-converter/
