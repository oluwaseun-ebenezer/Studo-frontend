import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import Layout from "../../components/Layout";

const Signup = () => {
  return (
    <Layout site_title="Signup">
      <div className="bg-indigo-900 min-h-screen grid content-center pb-0 px-4 sm:py-12 overflow-y-scroll">
        <h1 className="text-center text-3xl pb-12 text-white font-bold">
          Sign up
        </h1>
        <div className="bg-white rounded-xl w-full sm:w-6/12 md:w-4/12 mx-auto">
          <div className="grid px-4 sm:px-8">
            <h1 className="font-semibold text-xl py-8">Let's Get Started!</h1>
            <div className="grid gap-2">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />
              <Input
                name="password"
                type="password"
                placeholder="Confirm Password"
                style="w-full border-b-2 border-gray-700 appearance-none text-base placeholder-black font-medium focus:outline-none hover:border-b-indigo-400 focus:border-b-indigo-400 focus:border-transparent py-4"
              />

              <Button
                title="Sign Up"
                style="w-full bg-indigo-900 rounded-xl p-4 text-white text-base my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
