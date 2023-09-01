/* eslint-disable @typescript-eslint/no-explicit-any */

export type PlaylistType = {
    title: string;
    artist: string;
    url: string;
    id: string;
}

export type PlaylistProps = {
    title : string;
    position: number;
    /*musics: Music[];
    set: React.Dispatch<React.SetStateAction<number>>
    audio: React.RefObject<HTMLAudioElement>;*/
}

/*export type Music = {
    title: string;
    artist: string;
}*/

/*export type PlayerProps = {
    source: {
        song: PlaylistType;
        time: TimesAudio;
    };
    current: number;
    max: number;
    set: React.Dispatch<React.SetStateAction<number>>;
    audioRef: React.RefObject<HTMLAudioElement>;
}*/

export type TimesAudio = {
    current: any;
    duration: any;
}

export type ContextProps = {
    children: React.ReactNode;
}

export type CurrentType = {
    song: PlaylistType;
    time: TimesAudio;
    play: boolean;
}

export type ContextType = {
    playlist: PlaylistType[];
    index : number;
    setIndex : React.Dispatch<React.SetStateAction<number>>;
    currentSong: CurrentType;
    setCurrentSong: React.Dispatch<React.SetStateAction<CurrentType>>;
    audioRef: React.MutableRefObject<HTMLAudioElement | null>;
    playButton: string;
    setPlayButton: React.Dispatch<React.SetStateAction<string>>;

}