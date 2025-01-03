import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./percept-ui/button";
const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="text-start flex justify-center md:items-center items-start flex-col min-h-[80dvh] z-50 md:px-24 px-4 text-pretty gap-4"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <Link
        className="mt-20 z-[100]"
        href="https://www.producthunt.com/posts/percept-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-percept&#0045;ui"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=733091&theme=dark"
          alt="Percept&#0032;UI - A&#0032;modern&#0044;&#0032;customizable&#0044;&#0032;and&#0032;accessible&#0032;component&#0032;library&#0046; | Product Hunt"
          className="w-auto h-auto z-50"
        />
      </Link>
      <motion.h1
        className="text-3xl md:text-5xl font-bold sm:text-4xl tracking-tight lg:text-6xl relative z-50"
        variants={fadeIn}
      >
        Build Beautiful UIs Faster
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-sky-500/70 to-purple-500/70 blur-2xl"
          aria-hidden="true"
        ></span>
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground max-w-[800px] md:text-center"
        variants={fadeIn}
      >
        A modern, customizable, and accessible component library for React
        applications. Packed with beautiful components and templates to help you
        build faster
      </motion.p>
      <motion.div
        variants={fadeIn}
        className="flex items-center md:justify-center w-full gap-4 z-50 mt-5"
      >
        <Button
          variant={"solid"}
          color="indigo"
          size={"lg"}
        >
          <Link href="/docs/components/alert">Start Building</Link>
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-sm border-2 text-sky-400 hover:text-sky-400 hover:bg-transparent cursor-text text-sm px-8 py-4 font-mono bg-sky-400/5"
        >
          {">"}_ {"  "}npm install @perceptui/ui
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
