import { useContext } from "react";
import { Context } from "../../utils/context/Context";
import { PlaylistContainer } from "./Playlist.style";
import { PlaylistProps } from "../../utils/types/types";
import { selectMusic } from "../../utils/functions/selectMusic";

export default function Playlist({title, position} : PlaylistProps) {

    const { playlist, setIndex, audioRef, setPlayButton } = useContext(Context)!;

    return (
        <PlaylistContainer>
            <h1>{title}</h1>
            <ul>
                {
                    playlist.map((music, index) => (
                        <li key={index}><button className={position === index ? 'active' : 'inactive'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            selectMusic(e, index, setIndex, audioRef, setPlayButton);
                        }}>{music.title} - {music.artist}</button></li>
                    ))
                }
            </ul>
        </PlaylistContainer>
    )
}
