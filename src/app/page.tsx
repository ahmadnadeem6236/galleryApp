/* eslint-disable @next/next/no-img-element */

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Image
            className="h-[200px]"
            src={image.url}
            alt="image"
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
          />
          <div className=" text-center">{image.name.split("-")[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className=" w-full text-center text-2xl ">
          Please Sign In above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
