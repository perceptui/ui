import { BounceLoader } from "@/components/percept-ui/bounce-loader";
import { Loader } from "@/components/percept-ui/loader";
import { MusicLoader } from "@/components/percept-ui/music-loader";
import { Spinner } from "@/components/percept-ui/spinner";
// import { TwinLoader } from "@/components/percept-ui/twin-loader";
import { WheelLoader } from "@/components/percept-ui/wheel-loader";

export const LoadersShowCaseItems = [
  {
    title: "Spinner",
    component: <Spinner color="indigo" />,
    link: "docs/components/spinner",
  },
  {
    title: "Simple Loader",
    component: <Loader color="indigo" />,
    link: "/docs/loaders/loader",
  },
  {
    title: "Pin Wheel Loader",
    component: <WheelLoader color="indigo" />,
    link: "/docs/loaders/wheel-loader",
  },
  {
    title: "Music Loader",
    component: <MusicLoader color="indigo" />,
    link: "/docs/loaders/music-loader",
  },
  {
    title: "Bounce Loader",
    component: <BounceLoader color="indigo" />,
    link: "/docs/loaders/bounce-loader",
  },
  // {
  //   title: "Twin Loader",
  //   component: <TwinLoader color="indigo" />,
  //   link: "/docs/loaders/bounce-loader",
  // },
];
