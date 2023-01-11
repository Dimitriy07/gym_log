import React from "react";

function Sidebar(props){
    return(
        <div className="sidebar">
        <ul>
          <li><span><i className="fa-solid fa-house"></i>Home Sweet Home</span></li>
          <li><span onClick={props.onClickWorkoutRoom}><i className="fa-solid fa-dumbbell"></i>Workout Room</span></li>
          <li><span><i className="fa-solid fa-chart-line"></i>Progress Poster</span></li>
          <li><span onClick={props.onClickExcerciseBook}><i className="fa-solid fa-book-open"></i>Book of Excersices</span></li>
          <li><span><i className="fa-solid fa-apple-whole"></i>Book of Recipies</span></li>
        </ul>
      </div>
    );
}

export default Sidebar;