function updateLight(current) {
    if (current === 'green')
        return 'yellow';
    if (current === 'yellow')
        return 'red';
    if (current === 'red')
        return 'green';
    return 'the color doesnt exist';
}
console.log(updateLight('green'));
