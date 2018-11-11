import axios from "axios";

const API = {

 


  searchYoutube:function(term){
    const key = "&key=AIzaSyDvRtq9mRjNQjPPiuiPKU8gWpo3AHkCLaY";
    const queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + term + key;
   // term;
    term;
    //const fullQueryURL = queryURL + key + term;
    return axios.get(queryURL);
  
  }
  
};

export default API