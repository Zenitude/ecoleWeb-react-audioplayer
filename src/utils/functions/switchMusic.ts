export const switchMusic = (
    e: React.MouseEvent<HTMLButtonElement>, 
    current: number, 
    max: number,
    set:React.Dispatch<React.SetStateAction<number>>,
    audio: React.MutableRefObject<HTMLAudioElement | null>
) => {
    e.preventDefault();

    const index = current - 1;
    
    if(e.currentTarget.classList.contains('previous')) {
        if(audio.current?.paused) {
            decrement(index, max, set);
            audio.current?.pause();
        } else {
            decrement(index, max, set);
            setTimeout(() => {
                audio.current?.play();
            }, 100)
        }
    } else if(e.currentTarget.classList.contains('next')) {
        if(audio.current?.paused) {
            increment(index, max, set);
            audio.current?.pause();
        } else {
            increment(index, max, set);
            setTimeout(() => {
                audio.current?.play();
            }, 100)
        }
        
    }
    
    
}

function decrement (index: number, max: number, set: React.Dispatch<React.SetStateAction<number>>) {
    index--;
    if(index < 0) { set(max - 1); } 
    else { set(index); }
}

function increment (index: number, max: number, set: React.Dispatch<React.SetStateAction<number>>) {
    index++;
    if(index > (max - 1)) { set(0); } 
    else { set(index); }
}