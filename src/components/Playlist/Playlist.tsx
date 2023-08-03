import { PlaylistContainer } from "./Playlist.style";
import { PlaylistProps } from "../../utils/types/types";

export default function Playlist({title, musics} : PlaylistProps) {

    const playMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    
    return (
        <PlaylistContainer>
            <h1>{title}</h1>
            <ul>
                {
                    musics.map((music, index) => (
                        <li key={index}><button onClick={(e: React.MouseEvent<HTMLButtonElement>) => playMusic(e)}>{music.title} - {music.artist}</button></li>
                    ))
                }
            </ul>
        </PlaylistContainer>
    )
}
