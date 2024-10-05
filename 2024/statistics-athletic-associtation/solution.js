"use strict";
function stat(s) {
    if (s === '')
        return '';
    const timesInSeconds = s.split(', ').map((time) => {
        const [hh, mm, ss] = time.split('|').map(Number);
        return hh * 3600 + mm * 60 + ss;
    });
    const rangeInSeconds = Math.max(...timesInSeconds) - Math.min(...timesInSeconds);
    const totalInSeconds = timesInSeconds.reduce((acc, val) => acc + val, 0);
    const averageInSeconds = Math.floor(totalInSeconds / timesInSeconds.length);
    const sortedTimes = [...timesInSeconds].sort((a, b) => a - b);
    let medianInSeconds;
    const middle = Math.floor(sortedTimes.length / 2);
    if (sortedTimes.length % 2 === 0) {
        medianInSeconds = Math.floor((sortedTimes[middle - 1] + sortedTimes[middle]) / 2);
    }
    else {
        medianInSeconds = sortedTimes[middle];
    }
    const toHHMMSS = (seconds) => {
        const hh = Math.floor(seconds / 3600)
            .toString()
            .padStart(2, '0');
        const mm = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, '0');
        const ss = (seconds % 60).toString().padStart(2, '0');
        return `${hh}|${mm}|${ss}`;
    };
    return `Range: ${toHHMMSS(rangeInSeconds)} Average: ${toHHMMSS(averageInSeconds)} Median: ${toHHMMSS(medianInSeconds)}`;
}
console.log(stat('01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17'));
