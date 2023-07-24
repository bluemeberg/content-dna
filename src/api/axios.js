import axios from "axios";

export const localServerInstance = axios.create({
  baseURL: "http://192.168.155.56:8080/",
});

export const serverInstance = axios.create({
  baseURL: "https://uncrapi.link",
});

export const youtubeDataAPIInstacne = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const youtubeOauthAPI = "AIzaSyCBl9sZ1BbgWzhIPqvJZFoewOVZc4q3HA0";
export const youtubeGeneralAPI = "AIzaSyDp2Iw7uoEunRQZ-fvNGGw5kry3ZP9uMRs";
