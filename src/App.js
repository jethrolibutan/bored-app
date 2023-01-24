import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = `http://www.boredapi.com/api/activity/`;

function App() {
  const [activity, setActivity] = useState("Eat a Sandwich");

  // useEffect(() => {
  //   axios.get(URL).then((response) => {
  //     console.log(response);
  //     setActivity(response.data.activity);
  //   });
  // }, [URL]);

  const getActivity = () => {
    axios.get(URL).then((response) => {
      console.log(response);
      setActivity(response.data.activity);
    });
  };

  return (
    <div className="App">
      {" "}
      This app will tell you what to do you when your bored
      <div>You should {activity};</div>
      <div>
        {" "}
        Click this button to get a new activity!{" "}
        <button onClick={getActivity}> click me</button>{" "}
      </div>
    </div>
  );
}

export default App;
