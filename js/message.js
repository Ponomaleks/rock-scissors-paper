const roundMessage = (round, user, comp, isWon) => {
    user = user.charAt(0).toUpperCase() + user.slice(1);
    comp = comp.charAt(0).toUpperCase() + comp.slice(1);

    let message;

    switch (isWon) {
        case 'won':
            message = `Round ${round}, ${user} vs. ${comp}, You’ve WON!`;
            break;
        case 'lose':
            message = `Round ${round}, ${user} vs. ${comp}, You’ve LOST!`;
            break;
        case 'draw':
            message = `Round ${round}, ${user} vs. ${comp}, It's a draw`;
            break;
        default:
            return;
    }
    return message;
};

export default roundMessage;
