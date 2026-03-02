function Student(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Year: {new Date().getFullYear()}</p>
    </div>
  );
}

export default Student;