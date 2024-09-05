import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1 className="text-4xl text-red-800 underline text-center">
        Hello world!
      </h1>
      <Outlet />
    </>
  );
}
