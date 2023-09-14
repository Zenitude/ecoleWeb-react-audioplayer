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
}

export type ContextProps = {
    children: React.ReactNode;
}

export type CurrentType = {
    song: PlaylistType;
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