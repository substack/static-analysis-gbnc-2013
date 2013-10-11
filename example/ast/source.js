function beep (n) {
    return 'beep' + boop(n);
}

function boop (n) {
    return ' boop' + Array(n+1).join('!');
}

console.log(beep(5));
