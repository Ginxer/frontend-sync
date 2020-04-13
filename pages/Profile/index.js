import React from "react";

const Dashboard = () => {
  return (
    <body>

      <div className ="header">
      <a href='/dashboard' className = "logo">Synchrify</a>
      <div className = "menu">
        <a href='/logout'>Logout</a>
      </div>
      </div>
  <div class="b"></div>
      <div class = "dontSeperate">
        <div class="c">
        <div class = 'profileLeftNums'>Plays</div>
        <div class = 'profileLeftNums'>Playlists</div>
        <div class = 'profileLeftNums'>Followers</div>
        <div class = 'profileLeftNums'>Following</div>
        <div class= 'profileLeft'> Explore</div>
        <div class= 'profileLeft'> Friends</div>
        <div class= 'profileLeft'> Playlists</div>
        <div class= 'profileLeft'> Settings</div>
        </div>
    <div class="d">
    </div>
    </div>
      

      <footer>
		    <p>&#169;2020 Group 1</p>
	    </footer>
    </body>
    
  )
};

export default Dashboard;