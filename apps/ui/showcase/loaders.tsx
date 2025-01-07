import { Loader } from "@/components/percept-ui/loader";
import { MusicLoader } from "@/components/percept-ui/music-loader";
import { Spinner } from "@/components/percept-ui/spinner";
import { WheelLoader } from "@/components/percept-ui/wheel-loader";

export const LoadersShowCaseItems = [
  {
    title: "Spinner",
    component: <Spinner color="light" />,
    link: "docs/components/spinner",
  },
  {
    title: "Simple Loader",
    component: <Loader color="light" />,
    link: "/docs/loaders/loader",
  },
  {
    title: "Pin Wheel Loader",
    component: <WheelLoader color="light" />,
    link: "/docs/loaders/wheel-loader",
  },
  {
    title: "Music Loader",
    component: <MusicLoader color="light" />,
    link: "/docs/loaders/wheel-loader",
  },
];
