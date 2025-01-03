"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { ComponentsShowCase } from "@/components/showcase";
export default function Component() {
  // const fadeIn = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 },
  // };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden z-[1000]">
      <Header />
      <Hero />
      <div className="lg:px-24 px-6 mb-5 font-bold text-lg">Components</div>
      <ComponentsShowCase />
      <div className="flex flex-col items-center justify-center px-5 opacity-100 -z-10">
        <motion.div
          variants={stagger}
          className="absolute -z-10 top-0 -right-60 bottom-0 -left-96 glare-image opacity-20 blur-md "
        />
        <motion.div
          initial={{ opacity: 0, y: -20, x: 60 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -z-10 top-1 -right-96 bottom-0 -left-48 bg-opacity-40 mix-blend-color-dodge blur-md light-rays animate-rays"
        />
      </div>
      <Footer />
    </div>
  );
}
