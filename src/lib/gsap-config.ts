"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create("marrianOut", "0.22, 1, 0.36, 1");
  CustomEase.create("marrianInOut", "0.65, 0, 0.35, 1");
  registered = true;
}

export { gsap, ScrollTrigger, CustomEase };
