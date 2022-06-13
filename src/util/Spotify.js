import axios from 'axios';

const clientId = '0bc2a824406e484792bf2435fee1e0a0';
const redirectUri = 'http://localhost:3000/callback/';

let accessToken;
const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location= accessUrl;
        }
    },
    search(term){
        const accessToken = Spotify.getAccessToken();
        console.log(accessToken)
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(response =>{
            console.log('response: ',response)
            return response.json();
        }).then(jsonResponse => {
            console.log('error:',jsonResponse)
            if (!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id:track.id,
                name:track.name,
                artist:track.artists[0].name,
                album: track.album.name,
                uri:track.uri
            }))
        })
    },
    savePlayList(name,checked, trackUrls){
        console.log('saved status:   ',checked)
        if(!name || !trackUrls.length){
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers= {Authorization: `Bearer ${accessToken}`};
        let userId;
        return fetch('https://api.spotify.com/v1/me',{headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse=>{
            userId= jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name, public: true})
            }).then(response => response.json()
            ).then(jsonResponse=>{
                const playlistId = jsonResponse.id;
                if(checked === false){
                    fetch(`https://api.spotify.com/v1/playlists/${playlistId}`,{
                    headers: headers,
                    method: 'PUT',
                    body: JSON.stringify({public : false})
                    })
                }
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUrls})
                })
                
            }).catch(error => {
                console.log(error)
            })
        })
    },
    async getPlayLists(){
        const accessToken = Spotify.getAccessToken();
        const headers= {Authorization: `Bearer ${accessToken}`};
        let result = await axios('https://api.spotify.com/v1/me/playlists',{ method: 'GET',headers: headers })
        return result.data
    },
    async getTracks(url){
        const accessToken = await Spotify.getAccessToken();
        const headers= {
            Authorization: `Bearer ${accessToken}`
        };
        let result = await axios(url,{ method: 'GET', headers: headers })
        return result.data
    },
    async followPlaylist(playlistId){
        const accessToken = await Spotify.getAccessToken();
        const headers= {
            Authorization: `Bearer ${accessToken}`
        };
        let response = await axios(`https://api.spotify.com/v1/playlists/${playlistId}/followers`,{ 
            method: 'PUT',
            headers: headers,
            data : JSON.stringify({email: 'moiseniyonkuru1@gmail.com', username: 'niyo'})
         })
        return response.data
    }
}



export default Spotify;