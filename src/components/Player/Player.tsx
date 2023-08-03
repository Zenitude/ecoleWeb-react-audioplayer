import { useState } from "react";
import { PlayerContainer, Title, Artist, Counter, Controls, Play, Switch} from "./Player.style";
import { PlayerProps } from "../../utils/types/types";
import { PrevIcon, NextIcon, PlayIcon, PauseIcon } from "../../assets";

export default function Player({title, artist, current, max} : PlayerProps) {

    const [ playButton, setPlayButton ] = useState(PlayIcon);

    const switchMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(e.currentTarget.classList.contains('previous')) {
            console.log('previous');
        } else if(e.currentTarget.classList.contains('next')) {
            console.log('next');
        }
    }

    const playMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if(playButton === PlayIcon) {
            setPlayButton(PauseIcon)
        } else {
            setPlayButton(PlayIcon);
        }
    }

    return (
        <PlayerContainer>
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
            <Counter> {current} / {max} </Counter>
            <Controls>
                <Switch className="previous" onClick={(e: React.MouseEvent<HTMLButtonElement>) => switchMusic(e)}><img src={PrevIcon} alt={"previous music"}/></Switch>
                <Play onClick={(e: React.MouseEvent<HTMLButtonElement>) => playMusic(e)}><img src={playButton} alt={"play or pause music"} /></Play>
                <Switch className="next" onClick={(e: React.MouseEvent<HTMLButtonElement>) => switchMusic(e)}><img src={NextIcon} alt={"next music"} /></Switch>
            </Controls>
        </PlayerContainer>
    )
}
