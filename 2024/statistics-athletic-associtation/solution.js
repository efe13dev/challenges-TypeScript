var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function stat(s) {
    if (s === '')
        return '';
    var timesInSeconds = s.split(', ').map(function (time) {
        var _a = time.split('|').map(Number), hh = _a[0], mm = _a[1], ss = _a[2];
        return hh * 3600 + mm * 60 + ss;
    });
    var rangeInSeconds = Math.max.apply(Math, timesInSeconds) - Math.min.apply(Math, timesInSeconds);
    var totalInSeconds = timesInSeconds.reduce(function (acc, val) { return acc + val; }, 0);
    var averageInSeconds = Math.floor(totalInSeconds / timesInSeconds.length);
    var sortedTimes = __spreadArray([], timesInSeconds, true).sort(function (a, b) { return a - b; });
    var medianInSeconds;
    var middle = Math.floor(sortedTimes.length / 2);
    if (sortedTimes.length % 2 === 0) {
        medianInSeconds = Math.floor((sortedTimes[middle - 1] + sortedTimes[middle]) / 2);
    }
    else {
        medianInSeconds = sortedTimes[middle];
    }
    var toHHMMSS = function (seconds) {
        var hh = Math.floor(seconds / 3600)
            .toString()
            .padStart(2, '0');
        var mm = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, '0');
        var ss = (seconds % 60).toString().padStart(2, '0');
        return "".concat(hh, "|").concat(mm, "|").concat(ss);
    };
    return "Range: ".concat(toHHMMSS(rangeInSeconds), " Average: ").concat(toHHMMSS(averageInSeconds), " Median: ").concat(toHHMMSS(medianInSeconds));
}
console.log(stat('01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17'));
