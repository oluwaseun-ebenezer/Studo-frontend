import { useState } from "react/cjs/react.development";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import Layout from "../../components/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout site_title="Login">
      <div className="bg-indigo-900 min-h-screen grid content-center pb-0 px-4 sm:py-12 overflow-y-scroll">
        <h1 className="text-center text-3xl pb-12 text-white font-bold">
          Login
        </h1>

        <div className="bg-white rounded-xl w-full sm:w-6/12 md:w-4/12 mx-auto">
          <div className="grid px-4 sm:px-8">
            <h1 className="font-semibold text-xl py-8">Welcome back!</h1>
            <div className="grid gap-2">
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChangeAction={setEmail}
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChangeAction={setPassword}
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />

              <Button
                title="Login"
                style="w-full bg-indigo-900 rounded-xl p-4 text-white text-base my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
