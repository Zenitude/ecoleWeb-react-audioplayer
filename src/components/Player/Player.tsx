/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { PlayerContainer, Title, Artist, Counter, Controls, Play, Switch, ProgressBar } from "./Player.style";
import { Context } from "../../utils/context/Context";
import { PrevIcon, NextIcon, PlayIcon, PauseIcon } from "../../assets";
import { switchMusic } from "../../utils/functions/switchMusic";
import { playMusic } from "../../utils/functions/playMusic";

export default function Player() {

    const { playlist, index, setIndex, currentSong, audioRef, playButton, setPlayButton } = useContext(Context)!;
    const [ maxTime, setMaxTime ] = useState('0:00');
    const [ currentTime, setCurrentTime ] = useState('0:00');
    
    useEffect(() => {
        const maxMin = Math.ceil(currentSong.time.duration / 60);
        const maxSeconds = Math.ceil(currentSong.time.duration % 60) < 10 
            ? `0${Math.ceil(currentSong.time.duration % 60)}` 
            : Math.ceil(currentSong.time.duration % 60);
        setMaxTime(`${maxMin} : ${maxSeconds}`);

        const currentMin = Math.ceil(currentSong.time.current / 60);
        const currentSeconds = Math.ceil(currentSong.time.current % 60) < 10 
            ? `0${Math.ceil(currentSong.time.current % 60)}` 
            : Math.ceil(currentSong.time.current % 60);
        setCurrentTime(`${currentMin} : ${currentSeconds}`);

    }, [currentSong.time.current])
    
    return (
        <PlayerContainer>
            <div>
                <Title>{currentSong.song.title}</Title>
                <Artist>{currentSong.song.artist}</Artist>
            </div>
            <Counter> {index + 1} / {playlist.length} </Counter>
            <Controls>
                <Switch className="previous" onClick={(e: React.MouseEvent<HTMLButtonElement>) => switchMusic(e, index+1, playlist.length, setIndex, audioRef)}><img src={PrevIcon} alt={"previous music"}/></Switch>
                <Play onClick={(e: React.MouseEvent<HTMLButtonElement>) => playMusic(e, setPlayButton, playButton, PlayIcon, PauseIcon, audioRef)}><img src={playButton} alt={"play or pause music"} /></Play>
                <Switch className="next" onClick={(e: React.MouseEvent<HTMLButtonElement>) => switchMusic(e, index+1, playlist.length, setIndex, audioRef)}><img src={NextIcon} alt={"next music"} /></Switch>
            </Controls>
            <ProgressBar max={currentSong.time.duration} value={currentSong.time.current}></ProgressBar>
            <span>Max : {maxTime}</span>
            <span>Current : {currentTime}</span>
        </PlayerContainer>
    )
}
