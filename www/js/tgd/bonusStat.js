tgd.calculateStatRoll = function(item, targetLight, withBonus) {
    var currentLight = item.primaryValues.Default;
    var isItemLeveled = item && item.inactiveStats && item.inactiveStats.length <= 1;
    var currentBonus = tgd.bonusStatPoints(item.armorIndex, currentLight);
    var targetBonus = tgd.bonusStatPoints(item.armorIndex, targetLight);
    //console.log("currentLight is " + currentLight + " bonus is " + bonus);
    var newStats = (item.getValue("All") - (isItemLeveled ? currentBonus : 0)) * targetLight / currentLight;
    //console.log("newStats", newStats);
    var finalStat = newStats + (withBonus ? targetBonus : 0);
    //console.log("Stat at " + targetLight + " is " + finalStat);
    return finalStat;
}

tgd.bonusStatPoints = function(armorIndex, light) {
    if (armorIndex == 0) { //Helmet
        if (light < 291) {
            return 15
        } else if (light < 307) {
            return 16
        } else if (light < 319) {
            return 17
        } else {
            return 18
        }
    } else if (armorIndex == 1) { //Gauntlet
        if (light < 287) {
            return 13
        } else if (light < 305) {
            return 14
        } else if (light < 319) {
            return 15
        } else {
            return 16
        }
    } else if (armorIndex == 2) { //Chest
        if (light < 287) {
            return 20
        } else if (light < 299) {
            return 21
        } else if (light < 310) {
            return 22
        } else if (light < 319) {
            return 23
        } else {
            return 24
        }
    } else if (armorIndex == 3) { //Boots
        if (light < 284) {
            return 18
        } else if (light < 298) {
            return 19
        } else if (light < 309) {
            return 20
        } else if (light < 319) {
            return 21
        } else {
            return 22
        }
    } else if (armorIndex == 4) { //Class Items
        if (light < 295) {
            return 8
        } else if (light < 319) {
            return 9
        } else {
            return 10
        }
    } else if (armorIndex == 5) { //Artifact
        if (light < 287) {
            return 34
        } else if (light < 295) {
            return 35
        } else if (light < 302) {
            return 36
        } else if (light < 308) {
            return 37
        } else if (light < 314) {
            return 38
        } else if (light < 319) {
            return 39
        } else {
            return 40
        }
    } else if (armorIndex == 6) { //Ghost
        if (light < 295) {
            return 8
        } else if (light < 319) {
            return 9
        } else {
            return 10
        }
    }
}