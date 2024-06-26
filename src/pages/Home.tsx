import Navbar from "@/components/custom/Navbar";
import bgImage from "@/assets/appolinary-kalashnikova-WYGhTLym344-unsplash.jpg";
import { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { GiPaperWindmill } from "react-icons/gi";

import { motion, useScroll, useTransform } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoBarChartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], ["0%", "40%"]);

  
  
  const navigate = useNavigate();
  const handleNavigate = (event: MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="">
          <Navbar />
        </div>

        <motion.div
          style={{ y }}
          className="bg-gradient-to-b from-gray-700 via-gray-500 to-black h-screen w-full  absolute left-0 top-0 -z-10"
        >
          {/* <div className="bg-main-img bg-no-repeat bg-cover bg-center"></div> */}
          <img
            src={bgImage}
            alt=""
            className="bg-no-repeat bg-cover bg-center mix-blend-overlay h-screen w-full bg-fixed"
          />
        </motion.div>
        <div className="flex items-center justify-center h-screen pt-28 lg:pt-0">
          <section className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              <h1 className="text-4xl text-center lg:text-start lg:text-5xl font-extrabold  inline-block py-4 bg-gradient-to-br from-green-200 via-green-400 to-green-500 text-transparent bg-clip-text tracking-wider">
                Harness the Power of Wind. Predict, Optimize, and Analyze.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-start gap-6 justify-center"
            >
              <div className="relative flex flex-col items-center lg:items-start gap-8">
                <p className="font-semibold text-white text-lg p-4  bg-white backdrop-blur-md bg-opacity-0 rounded-lg text-center lg:text-start">
                  Struggling to harness the full potential of your wind farm? We
                  can help. Our platform uses advanced AI to predict power
                  generation, optimize turbine performance, and deliver in-depth
                  analytics. Unleash the wind's power and maximize your wind
                  farm's potential.
                </p>
                <Button
                  className="rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-100 delay-75 ease-in-out bg-gradient-to-br from-white via-green-300 hover:via-green-500 to-green-600 hover:to-green-900"
                  onClick={(e) => handleNavigate(e, "/prediction")}
                >
                  <GiPaperWindmill className="text-green-800 text-xl animate-spin " />
                  <span className="text-black">Get Started!</span>
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
        <div className=" w-full  bg-black">
          <section className="container pt-40 pb-28">
            <motion.div
              initial={{ opacity: 0.5, x: "-20%" }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 0.5, x: "0%" }}
            >
              <h2 className="text-white text-5xl uppercase tracking-widest underline">
                Key Features
              </h2>
            </motion.div>
            <div className="flex flex-col items-center justify-center gap-28 mt-20">
              <div className="flex items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-green-400 p-8 rounded-full"
                >
                  <BsGraphUpArrow className="text-white text-3xl" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl text-white">Predictive Insights</h3>
                  <p className="text-white">
                    Accurately forecast power generation based on weather
                    patterns and historical data.
                  </p>
                </motion.div>
              </div>

              <div className="flex items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl text-white">
                    Data-Driven Optimization
                  </h3>
                  <p className="text-white">
                    Maximize wind farm output by optimizing turbine performance
                    and maintenance schedules.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-green-400 p-8 rounded-full"
                >
                  <GoGear className="text-white text-3xl" />
                </motion.div>
              </div>

              <div className="flex items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-green-400 p-8 rounded-full"
                >
                  <IoBarChartSharp className="text-white text-3xl" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl text-white">Actionable Analytics</h3>
                  <p className="text-white">
                    Gain deep insights into wind farm performance, identify
                    trends, and make informed decisions.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen  bg-blue-900"></div>
      </div>
    </>
  );
}

export default Home;
