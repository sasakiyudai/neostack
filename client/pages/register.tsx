import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form action="/api/register" method="post">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
