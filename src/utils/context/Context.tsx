/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, createContext } from "react";
import { ContextProps, ContextType, CurrentType } from "../types/types";
import { PlayIcon } from "../../assets";

export const Context = createContext<ContextType | null>(null)

export default function ContextProvider ({children} : ContextProps) {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [ playlist, setPlaylist ] = useState();
    const [ index, setIndex ] = useState(0);
    const [ playButton, setPlayButton ] = useState(PlayIcon);
    const [ currentSong, setCurrentSong ] = useState<CurrentType>({
        song: {
            title: "",
            artist: "",
            url: "",
            id: ""
        }
    });

    useEffect(() => {
        async function getPlaylist() {
            const response = await fetch("/data/playlist.json");
            const {playlist} = await response.json();
            setPlaylist(playlist);
            setCurrentSong({
                song: playlist![index]
            })
        }
        getPlaylist();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
      
    if(playlist != undefined) {
        return (
            <Context.Provider value={{playlist, index, setIndex, currentSong, setCurrentSong, audioRef, playButton, setPlayButton}}>
                <audio ref={audioRef} src={currentSong.song.url} controls>Ce navigateur ne peut lire cette source.</audio>
                {children}
            </Context.Provider>
        )
    }
    
}