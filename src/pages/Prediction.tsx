import Navbar from "@/components/custom/Navbar";
import React, { useState } from "react";
import { GiPaperWindmill } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdWindPower } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type formdata = {
  Air_temperature: string;
  Pressure: string;
  Wind_speed: string;
};

function Prediction() {
  const [formData, setFormData] = useState<formdata>({
    Air_temperature: "",
    Pressure: "",
    Wind_speed: "",
  });

  const [prediction, setPrediction] = useState<string>("");

  return (
    <div className="">
      <Navbar />
      <div className="bg-black">
        <section className="container grid grid-cols-1 lg:grid-cols-2 py-28 gap-8  w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-white text-lg p-4  bg-gray-800 backdrop-blur-md bg-opacity-50 rounded-lg ">
              Uncertain wind conditions can make it challenging to predict power
              generation from your windmill. But what if you could leverage
              cutting-edge technology to make informed decisions? Our website
              offers a powerful tool that utilizes a machine learning model to
              predict your windmill's power output based on real-time data.
            </p>
            <div className="p-4">
              <h3 className="text-green-600 font-bold text-2xl mb-4">
                How it Works:
              </h3>
              <h5 className="text-green-200 font-semibold text-lg mb-2">
                Our model takes three key environmental factors into account:
              </h5>
              <ul className="flex flex-col items-center gap-4">
                <li className="text-green-50 flex items-center gap-8">
                  <div className="p-1">
                    <MdWindPower className="text-green-400 text-4xl" />
                  </div>
                  <p>
                    <span className=" text-green-400">Wind Speed:</span> As the
                    primary driver of windmill power, wind speed is crucial for
                    accurate predictions.
                  </p>
                </li>
                <li className="text-green-50 flex items-center gap-8">
                  <div className="p-1">
                    <LuWind className="text-green-400 text-4xl" />
                  </div>
                  <p>
                    <span className=" text-green-400">Air Pressure:</span> Air
                    pressure influences wind speed. Higher pressure often
                    indicates calmer conditions, while lower pressure can
                    suggest stronger winds.
                  </p>
                </li>
                <li className="text-green-50 flex items-center gap-8">
                  <div className="p-1">
                    <FaTemperatureHigh className="text-green-400 text-4xl" />
                  </div>
                  <p>
                    <span className=" text-green-400">Temperature:</span> While
                    not as direct an impact as wind speed, temperature can
                    affect air density, and therefore, wind turbine efficiency.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Predict power generation</CardTitle>
                <CardDescription className="flex flex-col items-center gap-1">
                  <p>Enter the current data to predict power generation</p>
                  <h5>Or</h5>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-full">
                        <Button variant="outline" className="w-full">
                          Auto fill
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Auto fills the data with current location</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Tempertaure(°C)</Label>
                      <Input id="name" placeholder="e.g. 32°C" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Pressure(atm)</Label>
                      <Input id="name" placeholder="e.g. 1.05 atm" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Wind Speed(m/s)</Label>
                      <Input id="name" placeholder="e.g. 10.8 m/s" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Predict</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        The Predicted power generation is :
                      </DialogTitle>
                      <DialogDescription>
                        <Input
                          id="name"
                          className="mt-4 text-black text-lg"
                          disabled
                          value={prediction}
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Prediction;
