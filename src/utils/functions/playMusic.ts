export const playMusic = (
    e: React.MouseEvent<HTMLButtonElement>,
    set: React.Dispatch<React.SetStateAction<string>>,
    button: string,
    play: string,
    pause: string,
    audio: React.MutableRefObject<HTMLAudioElement | null>,
) => {
    e.preventDefault();
    
    if(button === play) {
        set(pause);
        audio.current?.play();
    } else {
        audio.current?.pause();
        set(play);
    }
}

// const interval = setInterval(() => {
        //     setTimes((prevTimes) => {
        //         const time = {...prevTimes};
        //         time.current = audio.current?.currentTime;
        //         time.duration = audio.current?.duration;
        //         return time;
        //     })
            
        // }, 1000)

        // if(times.current > 0 && times.duration > 0 && times.current === times.duration ) {
        //     console.log("hello");
        //     clearInterval(interval);
        //     audio.current?.pause();
            
        // }