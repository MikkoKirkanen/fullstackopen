const Course = ({ course }) => {
  const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => <strong>Total of {total} exercises</strong>;

export default Course;
