const sound = document.querySelector('.sound');
const play = () => {
    sound.play();
};
const stop = () => {
    sound.pause();
    sound.load();
};

export { play, stop };
