import { useState, useRef, useEffect } from "react";
import data from "../src/assets/data";
import Question from "./components/Question.component";

function App() {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const containerRef = useRef(null);
  console.log("containerRef", containerRef);
  // Function to toggle the open state of a question
  const toggleQuestion = (id) => {
    // If the current question is open, close it (set to null), otherwise open it (set to the question id)
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    // useEffect to handle clicks outside the container to close the open question
    // Function to handle click outsite the container
    const handleClickOutside = (even) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        console.log("clicked outside");
        setOpenQuestionId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Clean up function
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount and unmount

  return (
    <main>
      {/* Main container for the app */}
      <div className="container" ref={containerRef}>
        {/* Heading for the accordion */}
        <h2>Questions and answers about login</h2>
        {/* Section to hold all the questions */}
        <section className="info">
          {data.map((question) => (
            <Question
              key={question.id}
              // title={question.title}
              // info={question.info}
              {...question}
              isOpen={question.id === openQuestionId}
              toggleQuestion={() => toggleQuestion(question.id)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
