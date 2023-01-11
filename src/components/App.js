// import '../public/styles.css';
import React, {useState} from 'react';
import BookOfExcersices from './BookOfExcersices';
import Header from './Header';
import Sidebar from './Sidebar'
import WorkoutRoomCalendar from './WorkoutRoomCalendar';



function App() {

  const [workoutRoom, setWorkoutRoom] = useState(false);

  function handleWorkoutRoom(){
    setWorkoutRoom(true);
  }

  const [excerciseBook, setExcerciseBook] = useState(false);

  function handleExcerciseBook(){
    setExcerciseBook(true);
  }

  return (
    <div >
      <Header />
      <Sidebar onClickWorkoutRoom={handleWorkoutRoom} onClickExcerciseBook={handleExcerciseBook}/>
      {workoutRoom && <WorkoutRoomCalendar />}
      {excerciseBook && <BookOfExcersices />}
    </div>
  );
}

export default App;
