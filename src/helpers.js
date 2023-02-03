export function convertFToC(f) {
    const c = Math.round((5 / 9) * (f - 32));
    return c
}

export function convertKToC(k) {
    const c = Math.round(k - 273.15);
    return c
}

export function getCurrentDate(separator = ',') {
    let newDate = new Date()
    let date = newDate.getDate();
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = daysArr[newDate.getDay()];
    let monthArr = ['January', 'February', 'March'];
    let month = monthArr[newDate.getMonth()];

    return `${day} ${date}${separator} ${month}`
}

export function formatAMPM(hours) {
    var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ' ' + ampm;
    return strTime;
}

