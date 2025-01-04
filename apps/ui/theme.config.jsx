import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
export default {
  logo: (
    <div className="flex items-center justify-center gap-2">
      <span className="my-0 font-bold text-2xl">Percept UI</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/perceptui/docs/tree/main",
  project: {
    link: "https://github.com/perceptui/ui",
  },
  head: () => {
    return (
      <>
        <link rel="shortcut icon" href="./assets/favicon.ico" />
        <title>Percept UI - Build UIs Faster</title>
      </>
    );
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: (
      <div className="lg:px-28 px-6 w-full">
        <div className="lg:container mx-auto px-4 text-center text-sm flex items-center justify-between">
          <div className="text-muted-foreground">
            Building in Public by{" "}
            <Link
              href="https://x.com/j1_kapil"
              className="underline text-mute hover:text-white transition-all duration-300 "
            >
              Kapil Jangid
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Link
              href="https://x.com/j1_kapil"
              className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter size={16} />
            </Link>
            <Link
              href="https://github.com/perceptui/ui"
              className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={16} />
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  darkMode: {
    default: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  navigation: true,
};
