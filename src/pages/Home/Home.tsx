import { useState } from "react";
import { HomeContainer, GlobalStyle} from "./Home.style";
import { StyleSheetManager } from "styled-components";
import Playlist from "../../components/Playlist/Playlist";
import Player from "../../components/Player/Player";
import datasSongs from "../../utils/data/playlist.json";


export default function Home () {

    const [ playlist, setPlaylist ] = useState(datasSongs);

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <Playlist title={'PlayerMania - Your songs.'} musics={playlist.playlist}/>
                <Player title={playlist.playlist[0].title} artist={playlist.playlist[0].artist} current={1} max={playlist.playlist.length} />
            </HomeContainer>
        </StyleSheetManager>
    )
}