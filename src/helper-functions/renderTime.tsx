// Formats and renders the total time remaining (in seconds) as a string
export const renderTime = (totalSeconds: number) => {
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return (
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0')
    );
};
