const students = [
  "Nikola",
  "Angela",
  "Cvetanka",
  "Jana",
  "Stefan",
  "Kristina",
  "Angela",
];

const Students = () => {
  return (
    <>
      <h3>Students</h3>
      <ol>
        {students.map((student, index) => {
          return <li key={`${student}-${index}`}>{student}</li>;
        })}
      </ol>
    </>
  );
};
export default Students;
