import Navbar from "@/components/custom/Navbar";
import React, { useState, useRef } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
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
import { FaSearchLocation } from "react-icons/fa";

type formdata = {
  Air_temperature: string;
  Pressure: string;
  Wind_speed: string;
};

function LocationPrediction() {
  const [formData, setFormData] = useState<formdata>({
    Air_temperature: "",
    Pressure: "",
    Wind_speed: "",
  });

  const [prediction, setPrediction] = useState<string>("");


  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
  //   libraries: ["places"],
  // });

  const [searchResult, setSearchResult] =
    useState<google.maps.places.Autocomplete>();

  function onLoad(autocomplete: google.maps.places.Autocomplete) {
    setSearchResult(autocomplete);
  }

  function locationSelected() {
    if (searchResult) {
      const place = searchResult.getPlace();
      console.log("Search : ", place);
      const latitude = place.geometry?.location?.lat();
      const longitude = place.geometry?.location?.lng();
      console.log(latitude,longitude);
      
    }
  }

  return (
    <div className="">
      <Navbar />
      <div className="bg-black">
        <section className="container grid grid-cols-1 lg:grid-cols-2 py-28 gap-8 h-screen  w-full">
          <div className="flex items-center justify-center">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <FaSearchLocation className="text-black text-xl" />
              </div>

              <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={locationSelected}
                className="w-full"
              >
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search location..."
                />
              </Autocomplete>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Predict power generation</CardTitle>
                <CardDescription className="flex flex-col items-center gap-1">
                  Enter the current data to predict power generation
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

export default LocationPrediction;
