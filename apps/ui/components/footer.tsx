import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="lg:px-28 px-6 z-[70] w-full">
      <div className="lg:container mx-auto px-4 text-center text-sm z-40 border-t h-20 flex items-center justify-between">
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
    </footer>
  );
};

export default Footer;
