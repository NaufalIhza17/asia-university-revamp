import Image from "next/image";
import { LoginSignUpBG } from "~/public/images";

export default function Login() {
  return (
    <main className="relative">
      <section
        id="Login"
        className="font-satoshi flex justify-between items-center h-screen relative overflow-hidden"
      >
        <div className="w-3/5 h-full flex items-center justify-center bg-white rounded-r-3xl relative z-10 shadow-2xl">
          <div className="w-[404px] grid gap-14">
            <h1 className="font-medium text-[32px]">Get Started Now</h1>
            <form action="" className="flex flex-col justify-start gap-5">
              <label htmlFor="name" className="text-md font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <label htmlFor="email-adress" className="text-md font-medium">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <label htmlFor="password" className="text-md font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-black/10 rounded-xl p-2 font-medium text-sm placeholder:text-black/20"
              />
              <div className="flex gap-1">
                <input type="checkbox" className="w-fit" />
                <p className="font-medium text-xs">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="underline hover:font-semibold transition-all"
                  >
                    terms & policy
                  </a>
                </p>
              </div>
              <button className="p-2 w-full bg-[#36967E] rounded-xl mt-3">
                <p className="font-bold text-white">Signup</p>
              </button>
            </form>
            <div className="border-b-2 border-black/10 relative">
              <p className="bg-white px-2 font-medium absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs w-fit">
                Or
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex justify-between">
                <button className="w-[190px] rounded-xl border border-black/10">
                  <p className="font-medium text-sm p-2">Sign in with Google</p>
                </button>
                <button className="w-[190px] rounded-xl border border-black/10">
                  <p className="font-medium text-sm p-2">Sign in with Apple</p>
                </button>
              </div>
              <p className="w-full text-center">
                Don&apos;t have account?{" "}
                <a href="" className="underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-1/4 min-w-max h-screen overflow-hidden">
          <Image src={LoginSignUpBG} alt="" className="w-full h-full" />
        </div>
      </section>
    </main>
  );
}
