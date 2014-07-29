var tzs = require('./data.json');

var tease = {
    all: allTimezones,
    get: getTimezone,
    has: hasTimezone,
    ids: listTimezones,
    dst: dstOffset,
    utc: utcOffset
};

module.exports = tease;

// allTimezones :: -> String:Timezone{}
function allTimezones() {
    return tzs;
}

// getTimezone :: String, Boolean -> Timezone
function getTimezone(tz, canonical) {
    if (hasTimezone(tz)) {
        var zone = tzs[tz];
        var link = zone.link;

        if (canonical && null !== link && hasTimezone(link)) {
            return getTimezone(link);
        }

        return zone;
    }
}

// hasTimezone :: String -> Boolean
function hasTimezone(tz) {
    return tzs.hasOwnProperty(tz);
}

// listTimezones :: -> String[]
function listTimezones() {
    var out = [], tz;
    for (tz in tzs) {
        out.push(tz);
    }

    return out;
}

// dstOffset :: String -> String
function dstOffset(tz) {
    if (hasTimezone(tz)) {
        return tzs[tz].dst;
    }
}

// utcOffset :: String -> String
function utcOffset(tz) {
    if (hasTimezone(tz)) {
        return tzs[tz].utc;
    }
}
