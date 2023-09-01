/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import { HomeContainer, GlobalStyle} from "./Home.style";
import { StyleSheetManager } from "styled-components";
import { Context } from "../../utils/context/Context";
import Playlist from "../../components/Playlist/Playlist";
import Player from "../../components/Player/Player";

export default function Home () {

    const { playlist, index, setCurrentSong, audioRef } = useContext(Context)!;

    useEffect(() => {
        setCurrentSong((prevSong) => {
            const previousSong = {...prevSong};
            previousSong.song = playlist[index];
            previousSong.time = {
                current: audioRef.current?.currentTime,
                duration: audioRef.current?.duration
            }
            return previousSong;
        })
    }, [index])

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                {
                    playlist != null
                    && (
                        <>
                            <Playlist title={'PlayerMania - Your songs.'} position={index}/>
                            <Player />
                        </>
                    )
                }
                
            </HomeContainer>
        </StyleSheetManager>
    )
}