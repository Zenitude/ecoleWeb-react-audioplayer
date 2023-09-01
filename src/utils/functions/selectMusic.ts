import { PauseIcon } from "../../assets/index";

export const selectMusic = (
    e: React.MouseEvent<HTMLButtonElement>, 
    index: number, 
    set: React.Dispatch<React.SetStateAction<number>>,
    audio: React.RefObject<HTMLAudioElement>,
    setPlayButton: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();
    set(index);
    setTimeout(() => {
        audio.current?.play();
        setPlayButton(PauseIcon);
    }, 100)
    
    
}