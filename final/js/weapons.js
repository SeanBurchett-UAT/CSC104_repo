// depends on load-data.js to be loaded first.

function makeWeapons () {
    let template = document.getElementById("weapon-template"); // this is the a tag
    for (i = 0; i < gamedata.weapons.length; i++) {
        let weaponData = gamedata.weapons[i];
        let weaponNode = template.cloneNode(true); // deep clone

        weaponNode.removeAttribute("style");
        weaponNode.removeAttribute("id");
        weaponNode.setAttribute("onclick", "placeWeaponData(" + i + ");"); // insert our table fill function for the click action

        // this is the img tag
        weaponNode.firstElementChild.setAttribute("alt", "[" + weaponData.Name + " icon]");
        weaponNode.firstElementChild.setAttribute("src", "./img/weapons/" + encodeURIComponent(weaponData.Name) + ".jpg");

        // this is the h4 tag
        weaponNode.lastElementChild.innerText = weaponData.Name; // sets the text inside the element

        template.parentElement.appendChild(weaponNode); // adds the element we've just constructed to the DOM next to the template
    }
    template.remove(); // delete the template element from the DOM

    placeWeaponData(0); // fill the first suit's data into the table
    document.getElementsByTagName("article")[0].removeAttribute("style"); // remove our "display: none" from the table container
}

function placeWeaponData (index) {
    let weaponData = gamedata.weapons[index];
    let projectileType = "";
    let explosive = false;
    switch (index) { // do stuff according to the given value
        case 5: // falls through
        case 8:
            projectileType = "Grenade";
            explosive = true;
            break; // breaks out of the switch, otherwise it'd fall through
        case 6:
            projectileType = "Hitscan";
            explosive = false;
            break;
        case 7:
            projectileType = "Rocket";
            explosive = true;
            break;
        default:
            projectileType = "Bullet";
            explosive = false;
            break;
    }

    document.getElementById("weapon-name").innerText = weaponData.Name;
    document.getElementById("weapon-image").setAttribute("alt", "[" + weaponData.Name + " icon]");
    document.getElementById("weapon-image").setAttribute("src", "./img/weapons/" + encodeURIComponent(weaponData.Name) + ".jpg"); // encodeURIComponent ensures stuff like spaces gets encoded correctly
    document.getElementById("weapon-description").innerText = weaponData.Description;
    document.getElementById("weapon-projectile-type").innerText = projectileType;
    document.getElementById("weapon-projectiles-per-fire").innerText = weaponData.Projectiles;
    document.getElementById("weapon-projectiles-spread").innerText = weaponData.Angle;
    document.getElementById("weapon-clip-size").innerText = weaponData.Clip_Size;
    document.getElementById("weapon-clip-count").innerText = weaponData.Num_Clips === "9999" ? "infinite" : weaponData.Num_Clips; // 9999 is just used to refer to infinity
    document.getElementById("weapon-fire-rate").innerText = weaponData.Fire_Rate;
    document.getElementById("weapon-reload-rate").innerText = index === 8 ? "pickup" : weaponData.Reload_Rate;
    document.getElementById("weapon-range").innerText = explosive || weaponData.Range === "9999" ? "infinite" : weaponData.Range;
    document.getElementById("weapon-accuracy").innerText = weaponData.Accuracy;
    document.getElementById("weapon-damage-per-projectile").innerText = weaponData.Damage;
    document.getElementById("weapon-first-explosion-radius").innerText = explosive ? weaponData.Radius1 : "N/A";
    document.getElementById("weapon-first-explosion-radius-damage").innerText = explosive ? weaponData.Radius1_Damage : "N/A";
    document.getElementById("weapon-second-explosion-radius").innerText = explosive ? weaponData.Radius2 : "N/A";
    document.getElementById("weapon-second-explosion-radius-damage").innerText = explosive ? weaponData.Radius2_Damage : "N/A";
    document.getElementById("weapon-time-to-detonate").innerText = projectileType === "Grenade" ? weaponData.Expire_Time : "N/A";
    document.getElementById("weapon-velocity").innerText = weaponData.Velocity;
}

getGamedata(makeWeapons); // call the function that loads the game data, and give it the callback of our weapon button creator
