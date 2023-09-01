import { TimesAudio } from "../types/types";

export const updateTime = (
    e: React.SyntheticEvent<HTMLAudioElement, Event>,
    setTimes : React.Dispatch<React.SetStateAction<TimesAudio>>
) => {
    setInterval(() => {
        setTimes((prevTimes) => {
            const time = {...prevTimes};
            time.current = e.currentTarget?.currentTime;
            return time;
        })
    }, 1000)
    
}