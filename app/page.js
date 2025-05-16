"use client"
import { Suspense } from "react";
import HomeBG from "../Components/HomeBG/HomeBG";

export default function page() {
  return (
    <Suspense>
      <HomeBG/>
    </Suspense>
  );
}
