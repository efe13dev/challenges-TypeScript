function minimumSteps(nums, value) {
    if (value <= 0)
        return -1;
    nums.sort(function (a, b) { return a - b; });
    var sum = 0;
    var steps = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum >= value) {
            return steps;
        }
        steps++;
    }
    return steps;
}
console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));
