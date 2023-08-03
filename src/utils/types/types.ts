export type PlaylistProps = {
    title : string;
    musics: Music[];
}

export type Music = {
    title: string;
    artist: string;
}

export type PlayerProps = {
    title: string;
    artist: string;
    current: number;
    max: number;
}