import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HelloWorld from "./components/HelloWorld";
import Students from "./components/Students";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import UserGreeting from "./components/UserGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./App.css";

const students = [
  "Nikola",
  "Angela",
  "Stefan",
  "Cvetanka",
  "Valentin",
  "Jana",
  "Kristina",
];

const changeAcademyStudents = [
  {
    name: "Cvetanka Apostolova",
    bio: "A passionate developer with a love for coding and technology.",
    email: "cvetanka_example@gmail.com",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Angela Petreska",
    bio: "A passionate developer with a love for coding and technology.",
    email: "angela_example@gmail.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stefan Paunovski",
    bio: "A passionate developer with a love for coding and technology.",
    email: "stefan@gmail.com",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Valentin Filkovski",
    bio: "A passionate developer with a love for coding and technology.",
    email: "valentina@gmail.com",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Jana Jankulovska",
    bio: "A passionate developer with a love for coding and technology.",
    email: "jana@gmail.com",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Kristina Georgievska",
    bio: "A passionate developer with a love for coding and technology.",
    email: "kristina@gmail.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nikola Ristoski",
    bio: "A passionate developer with a love for coding and technology.",
    email: "Nikola@gmail.com",
  },
];

function App() {
  const [count, setCount] = useState(0);

  const name = "Nikola";

  return (
    <>
      <h1>Change Academy</h1>
      {/* <p>{name}</p> */}
      {/* <HelloWorld />
      <Students />
      <Fruits />
      <Counter />
      <hr />
      <Counter />
      <hr /> */}
      {/* <UserGreeting fullName="Kristina Georgievska" />

      {students.map((student) => (
        <UserGreeting fullName={student} key={student} />
      ))} */}
      {/* <ProfileCard params={student} /> */}
      {changeAcademyStudents.map((student) => (
        <ProfileCard key={student.email} params={student} />
      ))}
    </>
  );
}

export default App;
