type WelcomeMsg = {
  user: string;
  course: string;
};

function Welcome({ user, course }: WelcomeMsg) {
  return (
    <section>
      <h1>Welcome, {user}</h1>
      <p>You are learning {course}</p>
    </section>
  );
}

export default Welcome;
