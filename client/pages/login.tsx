import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
