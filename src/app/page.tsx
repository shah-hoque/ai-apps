"use client";
import React from "react";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              AI tools to boost <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                your productivity
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/test.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
