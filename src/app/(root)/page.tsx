"use client";

import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import {
  LandingBackground,
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
  GalleryFive,
  Clouds,
} from "~/public/images";
import {
  AULogo,
  LandingBook,
  LandingMoney,
  LandingPeople,
  LandingStudent,
} from "~/public/icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-fit relative overflow-hidden">
      <section className="bg-gradient-to-b from-[#6490D1] via-[#A7CAFF] to-white h-[732px] md:h-[915px] relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 py-5 px-5 md:px-20 w-screen flex items-center justify-between max-w-[1440px]">
          <AULogo className="w-[133px] h-[44px] md:w-[190px] md:h-[63px]" />
          <div className="text-white font-bold flex divide-x-2 divide-gray-2">
            <Link href={`/login`}>
              <p className="px-2">Sign In</p>
            </Link>
            <Link href={`/signup`}>
              <p className="px-2">Sign Up</p>
            </Link>
          </div>
        </div>
        <div className="font-bold text-white text-center flex flex-col items-center justify-center mt-44">
          <p className="text-xl md:text-[32px] tracking-[0.8em] md:tracking-[1.4em] w-fit text-transparent bg-gradient-to-r from-[#36967E] to-[#123E44] bg-clip-text translate-x-2 md:translate-x-6">
            WELCOME TO
          </p>
          <h1 className="text-5xl md:text-8xl w-fit mt-3 md:mt-5">
            <span className="text-transparent bg-gradient-to-br from-[#36967E] to-[#005B66] bg-clip-text">
              A
            </span>
            sia{" "}
            <span className="text-transparent bg-gradient-to-br from-[#36967E] to-[#005B66] bg-clip-text">
              U
            </span>
            niversity
          </h1>
          <p className="mt-1 md:mt-3 text-xl md:text-[32px] font-normal">
            亞洲大學
          </p>
        </div>
        <Image
          src={LandingBackground}
          alt=""
          width={1440}
          height={506}
          className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 min-w-[1152px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-70 left-0 min-w-[1152px] w-full"
        >
          <Image src={Clouds} alt="" width={1766} height={379} />
        </motion.div>
      </section>

      <section className="w-full bg-[#3D5F4E] flex justify-center mb-[75px] md:mb-[150px]">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center text-white max-w-[1440px]">
          <motion.div
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="grid items-center justify-center gap-[5px] lg:gap-[10px] bg-[#2D5433] px-[27.5px] lg:px-[55px] py-[58px] lg:py-[116px]"
          >
            <div className="w-full flex justify-center">
              <LandingStudent
                width={64}
                height={64}
                className="max-lg:w-[40px]"
              />
            </div>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="grid items-center justify-center gap-[5px] lg:gap-[10px] bg-[#2F4B2C] px-[27.5px] lg:px-[55px] py-[58px] lg:py-[116px]"
          >
            <div className="w-full flex justify-center">
              <LandingMoney
                width={64}
                height={64}
                className="max-lg:w-[40px]"
              />
            </div>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
            className="grid items-center justify-center gap-[5px] lg:gap-[10px] bg-[#3D5F4E] px-[27.5px] lg:px-[55px] py-[58px] lg:py-[116px]"
          >
            <div className="w-full flex justify-center">
              <LandingBook width={64} height={64} className="max-lg:w-[40px]" />
            </div>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={4}
            className="grid items-center justify-center gap-[5px] lg:gap-[10px] bg-[#4C704B] px-[27.5px] lg:px-[55px] py-[58px] lg:py-[116px]"
          >
            <div className="w-full flex justify-center">
              <LandingPeople
                width={64}
                height={64}
                className="max-lg:w-[40px]"
              />
            </div>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-[1440px] flex justify-center mb-[75px] md:mb-[150px]">
        <div className="max-w-[1143px] flex flex-col gap-8 text-2xl md:text-4xl text-center px-10">
          <motion.h2
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <span className="font-black">ABOUT</span> AU
          </motion.h2>
          <motion.p
            variants={fadeInAnimationVariationsBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="text-[#252525] leading-normal"
          >
            Asia University, stands as a beacon of academic excellence in the
            heart of East Asia. Established in 2001, 亞洲大學 or Asia University
            was founded with the goal of becoming an internationally competitive
            comprehensive university, and has been growing quickly since its
            creation.
          </motion.p>
        </div>
      </section>

      <section className="w-full max-w-[1440px] flex justify-center mb-[125px] md:mb-[200px]">
        <div className="flex max-lg:flex-col gap-5 xl:gap-[25px]">
          <div className="grid sm:grid-cols-2 gap-5 xl:gap-[25px]">
            <motion.div
              variants={fadeInAnimationVariationsScale}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              className="relative w-[280px] h-100 xl:w-[350px] xl:h-125 group"
            >
              <Image
                src={GalleryOne}
                alt=""
                width={350}
                height={500}
                className="max-xl:w-[280px] max-xl:h-100"
              />
              <div className="opacity-0 absolute z-10 top-0 left-0 w-full h-full bg-[#82684B]/50 text-white group-hover:opacity-100 transition-opacity delay-200 flex flex-col gap-4 xl:gap-6 py-8 xl:py-16 px-4 xl:px-8">
                <p className="text-xl">
                  <span className="text-[#CAFF86]">&#47;&#47;</span> Student Hall
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariationsScale}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
              className="relative w-[280px] h-100 xl:w-[350px] xl:h-125 group"
            >
              <Image
                src={GalleryTwo}
                alt=""
                width={350}
                height={500}
                className="max-xl:w-[280px] max-xl:h-100"
              />
              <div className="opacity-0 absolute z-10 top-0 left-0 w-full h-full bg-[#82684B]/50 text-white group-hover:opacity-100 transition-opacity delay-200 flex flex-col gap-4 xl:gap-6 py-8 xl:py-16 px-4 xl:px-8">
                <p className="text-xl">
                  <span className="text-[#CAFF86]">&#47;&#47;</span> Student Hall
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariationsScale}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
              className="max-sm:hidden relative col-span-full w-[580px] xl:w-[725px] h-[200px] xl:h-[250px] group"
            >
              <Image
                src={GalleryFour}
                alt=""
                width={725}
                height={250}
                className="max-xl:w-[580px] max-xl:h-[200px]"
              />
              <div className="opacity-0 absolute z-10 top-0 left-0 w-full h-full bg-[#82684B]/50 text-white group-hover:opacity-100 transition-opacity delay-200 flex flex-col gap-4 xl:gap-6 py-8 xl:py-16 px-4 xl:px-8">
                <p className="text-xl">
                  <span className="text-[#CAFF86]">&#47;&#47;</span> Student Hall
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex max-sm:flex-col lg:flex-col gap-5 xl:gap-[25px]">
            <motion.div
              variants={fadeInAnimationVariationsScale}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={4}
              className="relative w-[280px] xl:w-[350px] h-[200px] xl:h-[250px] group"
            >
              <Image
                src={GalleryThree}
                alt=""
                width={350}
                height={250}
                className="max-xl:w-[280px] max-xl:h-[200px]"
              />
              <div className="opacity-0 absolute z-10 top-0 left-0 w-full h-full bg-[#82684B]/50 text-white group-hover:opacity-100 transition-opacity delay-200 flex flex-col gap-4 xl:gap-6 py-8 xl:py-16 px-4 xl:px-8">
                <p className="text-xl">
                  <span className="text-[#CAFF86]">&#47;&#47;</span> Student Hall
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariationsScale}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={5}
              className="relative w-[280px] xl:w-[350px] h-100 xl:h-125 group"
            >
              <Image
                src={GalleryFive}
                alt=""
                width={350}
                height={500}
                className="max-xl:w-[280px] max-xl:h-100"
              />
              <div className="opacity-0 absolute z-10 top-0 left-0 w-full h-full bg-[#82684B]/50 text-white group-hover:opacity-100 transition-opacity delay-200 flex flex-col gap-4 xl:gap-6 py-8 xl:py-16 px-4 xl:px-8">
                <p className="text-xl">
                  <span className="text-[#CAFF86]">&#47;&#47;</span> Student Hall
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#3D5F4E] h-80 md:h-100 w-full mb-[75px] md:mb-[150px] overflow-visible flex items-center justify-center">
        <motion.div
          variants={fadeInAnimationVariationsLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
          className="max-w-[1063px] w-full flex justify-between items-center relative max-xl:px-5 gap-5"
        >
          <h1 className="absolute left-5 xl:left-0 -top-33 sm:-top-44 md:-top-16 z-10 font-black text-[46px] sm:text-[64px] leading-none text-[#65944F] mix-blend-multiply">
            What they think
            <br />
            about us
          </h1>
          <p className="max-w-[583px] font-medium text-xl lg:text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <motion.div
            variants={fadeInAnimationVariationsScale}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={5}
            className="hidden md:block min-w-[324px] h-100 bg-graydark"
          ></motion.div>
          <div className="flex flex-col gap-2">
            <div className="w-[10px] h-[10px] bg-[#8DAD63] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#8DAD63] rounded-full"></div>
            <div className="w-[10px] h-[27px] bg-[#CAFF86] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      <section className="w-full max-w-[1103px] px-5 flex justify-center mb-[75px] md:mb-[150px]">
        <div className="w-full flex flex-col gap-10 lg:gap-15">
          <motion.h2
            variants={fadeInAnimationVariationsLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="text-2xl md:text-4xl w-full max-md:text-center"
          >
            CURRENT <span className="font-black">NEWS</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 text-white">
            {newsStatic.map((news, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariationsRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={3 * index}
                className="col-span-1"
              >
                <div className="bg-[#4C704B]/80 grid gap-4 p-6">
                  <p className="text-2xl md:text-3xl font-black">
                    {news.title}
                  </p>
                  <p className="text-lg md:text-xl">{news.desc}</p>
                </div>
                <Link href={news.url}>
                  <div className="bg-black-2 text-sm font-light">
                    <p className="w-full text-center p-2">SEE MORE</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-2 w-full text-white flex justify-center px-10 py-20 text-center">
        <p>
          © 2024 Asia University Website
          <br />
          by Naufal, Satria, Liana | All Right Reserved
        </p>
      </section>
    </main>
  );
}

const newsStatic = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    url: "/",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    url: "/",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    url: "/",
  },
];

const fadeInAnimationVariationsBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationVariationsScale = {
  initial: {
    opacity: 0,
    scale: 0.1,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationVariationsLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationVariationsRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
