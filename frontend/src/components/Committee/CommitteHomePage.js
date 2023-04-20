import exp from "constants";
import React from "react";



function Committee_Home(){
    return (
        <div className="Committee_Home">
            <h1>Committee Home page</h1>
            <div className="comNav"></div>
            <div className="Pending_req">
                <Pending_requests></Pending_requests>
            </div>


        </div>
    )
}



function Pending_requests()
{

    /*fetch committee pending requests should top N show list of pending requests 
    and should have next and previous reqeusts*/
}








export default Committee_Home;