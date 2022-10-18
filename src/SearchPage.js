import React from "react";
import ChannelRow from './ChannelRow'
import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css'
import VideoRow from "./VideoRow";

function SearchPage() {
    return(
        <div className="searchPage">
             <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
             </div>
            <hr /> 
        

            <ChannelRow 
                image="https://yt3.ggpht.com/aEOfUdbo5TaedXAWwA33CcHrPQ5bzG-xAjDiaA6a58maPkOaDrh5eJomH-LNHOzAMJUOoXhIMg=s900-c-k-c0x00ffffff-no-rj"
                channel="Venkii's Choice"
                verified
                subs="1.36k"
                noOfVideos={33}
                description="Food Vlogger - Food is love and it is better than love, if you think about it"
            />

            <hr />

            <VideoRow 
               views="20M"
               subs="695k"
               description="Food Vlogger - Food is love and it is better than love, if you think about it"
               timestamp="20 days ago"
               channel="Venkii's Choice"
               title="😋Palagaram🔥99.Rs special offer😋|Venkii's Choice| #vlog #food #chidambaram"
               image="https://i.ytimg.com/vi/CNv4rsmbx88/maxresdefault.jpg"
            />

            <VideoRow 
               views="2M"
               subs="695k"
               description="Food Vlogger - Food is love and it is better than love, if you think about it"
               timestamp="1 month ago"
               channel="Venkii's Choice"
               title="today 💥😻😊paani puri eating #shorts❤ #viralshorts #chidambaram 😚#viral #food 🍲"
               image="https://i.ytimg.com/vi/HyHX_S9Jkh4/maxresdefault.jpg"
            />
             
            <VideoRow 
               views="36k"
               subs="695k"
               description="Food Vlogger - Food is love and it is better than love, if you think about it"
               timestamp="3 months ago"
               channel="Venkii's Choice"
               title="✨Night-outing🚴 with food♨️ is Heaven🔥|Venkii's Choice| #shorts #reels #vlog #chennai #trending"
               image="https://i.ytimg.com/vi/DzBOUJkW-o8/hqdefault.jpg"
            />

            <VideoRow 
               views="1M views"
               subs="695k"
               description="Food Vlogger - Food is love and it is better than love, if you think about it"
               timestamp="jun 21, 2012"
               channel="Venkii's Choice"
               title="Chidambaram best porotta #short#porrotta#shorts #100boy#food#trendingshorts #chidambaram#all#public"
               image="https://i.ytimg.com/vi/rOZVSuOgIiI/mqdefault.jpg"
            />


            
     </div>     
        
    )
}

export default SearchPage;