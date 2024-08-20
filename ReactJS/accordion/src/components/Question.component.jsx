import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, info, isOpen, toggleQuestion }) => {
  return (
    <article className="question">
      <header>
        {/* display the question title */}
        <h4>{title}</h4>

        {/* Button to toggle the question */}
        <button onClick={toggleQuestion}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* Display the answer only if the question is open (isOpen===true) */}
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
