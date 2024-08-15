const UserGreeting = (props) => {
  console.log("props", props);
  return <p>Hello, {props.fullName}</p>;
};
export default UserGreeting;
