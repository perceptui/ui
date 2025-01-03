import { Alert } from "@/components/percept-ui/alert";
import { Badge } from "@/components/percept-ui/badge";
import { Button } from "@/components/percept-ui/button";
import { PasswordInput } from "@/components/percept-ui/password-input";
import { Slider } from "@/components/percept-ui/slider";
import { Switch } from "@/components/percept-ui/switch";

export const ComponentShowCaseItems = [
  { title: "Slider", component: <Slider color="dark" /> },
  {
    title: "Alert",
    component: (
      <Alert
        message="Percept UI Is Awesome"
        variant="surface"
        type="info"
        className="text-xs"
      />
    ),
  },
  {
    title: "Button",
    component: <Button>Start Building</Button>,
  },
  // {
  //   title: "Hover Effects",
  //   component: (
  //     <div className="grid grid-cols-4 gap-5 w-full mx-auto  place-items-center">
  //       <div className="col-span-2">
  //         <Link
  //           href="#"
  //           className="no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400"
  //         >
  //           Hover Me
  //           <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out"></span>
  //         </Link>
  //       </div>
  //       <div className="col-span-2">
  //         <Link
  //           href="#"
  //           className="relative text-inherit no-underline after:content-[''] after:bg-sky-600 hover:after:bg-gradient-to-r hover:after:from-red-500 hover:after:via-pink-500 hover:after:to-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-no-repeat after:bg-[length:0%_3px] after:transition-[background-size] after:duration-1000 hover:after:bg-[length:100%_3px]"
  //         >
  //           Hover Me
  //         </Link>
  //       </div>
  //       <div className="col-span-2">
  //         <Link href="#" className="relative font-bold no-underline group">
  //           Hover Me
  //           <span className="absolute left-0 bottom-[3px] w-full h-[8px] dark:bg-sky-700 bg-sky-500 z-[-1] transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:h-full"></span>
  //         </Link>
  //       </div>
  //       <div className="col-span-2">
  //         <Link
  //           href="#"
  //           className="relative inline-block px-1 pr-3 -mx-1 text-sky-700 dark:text-sky-500 dark:hover:text-white font-bold text-md leading-[1.5] no-underline shadow-[inset_0_0_0_0_#04bbff] transition-all duration-300 ease-in-out hover:text-white hover:shadow-[inset_250px_0_0_0_#04bbff] w-full text-nowrap"
  //         >
  //           Hover Me
  //         </Link>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    title: "Password Input",
    component: <PasswordInput />,
  },
  {
    title: "Switch",
    component: <Switch />,
  },
  {
    title: "Badge",
    component: (
      <Badge variant={"soft"} radius={"full"} color="emerald">
        Percept UI Is Live Now
      </Badge>
    ),
  },
];
