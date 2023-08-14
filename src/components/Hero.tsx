import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ComputersCanvas from "./canvas/Computer";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hello, my name is Nghia",
      "I'm a Web Developer",
      "Welcome to my Portfolio",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-[70vh] mx-auto">
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 px-6">
        <div className="flex flex-col justify-center items-center mt-5l">
          <div
            className="rounded-full w-5 h-5 bg-neonblue"
            style={{ boxShadow: "1px 2px 50px 16px #00f2fe" }}
          />

          <div className="w-1 h-44 lg:h-80 blue-gradient" />
        </div>
        <div className=" w-full h-[100%] absolute lg:top-[-10%] lg:left-0 lg:right-0 -left-8 -top-25">
          <ComputersCanvas />
        </div>
        <div className="absolute max-w-7xl ml-6">
          <h1 className="text-4xl lg:text-5xl font-semibold px-6 h-16 lg:h-12">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#2cf9fa" />
          </h1>
          <h2 className="text-sm uppercase text-white-500 pt-3 lg:pt-8 tracking-[10px] px-6">
            Software Engineer
          </h2>
        </div>
      </div>
    </section>
  );
}
