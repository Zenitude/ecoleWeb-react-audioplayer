/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, createContext } from "react";
import { ContextProps, ContextType, CurrentType } from "../types/types";
import { PlayIcon/*, PauseIcon*/ } from "../../assets";

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
        },
        time: {
            current: 0,
            duration: 0
        },
        play: false
    });

    useEffect(() => {
        async function getPlaylist() {
            const response = await fetch("/data/playlist.json");
            const {playlist} = await response.json();
            setPlaylist(playlist);
            setCurrentSong({
                song: playlist![index],
                time: {
                    current: audioRef.current?.currentTime,
                    duration: audioRef.current?.duration
                },
                play: false
            })
        }
        getPlaylist();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        audioRef.current?.addEventListener('playing', () => {
            setCurrentSong((prevTime) => {
                const time = {...prevTime};
                time.time.current = audioRef.current?.currentTime;
                return time;
            })  
        })

        audioRef.current?.addEventListener('pause', () => {
            setCurrentSong((prevTime) => {
                const time = {...prevTime};
                time.time.current = audioRef.current?.currentTime;
                return time;
            })
        })
    }, [audioRef.current?.currentTime])

    useEffect(() => {
        if(currentSong.play === true) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [currentSong.play])

    /*
    useEffect(() => {
        if(audioRef) {
            let interval;
            audioRef.current?.addEventListener('playing', () => {
                interval = setInterval(() => {
                    setCurrentSong((prevSong) => {
                        const thisSong = {...prevSong};
                        thisSong.time.current++;
                        thisSong.time.duration = audioRef.current?.duration;
                        return thisSong;
                    });

                    if((currentSong.time.current > 0) && (currentSong.time.current === currentSong.time.duration)) {
                        const newIndex = index +1;
                        if(playlist && Array.isArray(playlist)) {
                            if(newIndex > playlist.length - 1) {
                                setIndex(0);
                            } else {
                                setIndex(newIndex);
                            }
                        }
    
    
                        setCurrentSong((prevSong) => {
                            const thisSong = {...prevSong}
                            thisSong.song = playlist![index + 1];
                            thisSong.time = { 
                                current: audioRef.current?.currentTime,
                                duration: audioRef.current?.duration
                            }
                            return thisSong;
                        })
                        setTimeout(() => {
                            audioRef.current?.play();
                            setPlayButton(PauseIcon);
                        }, 100)
                    }
                    
                }, 1000);
            });
        }
    })
    */
            
    if(playlist != undefined) {
        return (
            <Context.Provider value={{playlist, index, setIndex, currentSong, setCurrentSong, audioRef, playButton, setPlayButton}}>
                <audio ref={audioRef} src={currentSong.song.url} controls>Ce navigateur ne peut lire cette source.</audio>
                {children}
            </Context.Provider>
        )
    }
    
}