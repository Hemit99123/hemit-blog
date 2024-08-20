import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";
import { GITHUB, LINKEDIN, YTCHANNEL } from "@/config/sharedVariables";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="HEMCODE" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={YTCHANNEL}
          target="blank"
        >
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={GITHUB} target="blank">
          <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={LINKEDIN}
          target="blank"
        >
          <BsLinkedin className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{" "}
        <Link
          href={GITHUB}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @Hemit99123
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
