/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/6b621cca-5651-4230-b74f-2b25a758b596-9o8ou8.jpg",
  "https://utfs.io/f/46b349a0-dc46-449c-b736-5d2517cad7f5-766md.jpg",
  "https://utfs.io/f/ceae8bd8-bb23-4703-a140-8ddcc8c65675-43r7fp.jpg",
  "https://utfs.io/f/f6c19446-7e00-453d-8b8e-1fa4725b9766-un1z1d.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

// console.log([...mockImages, ...mockImages, ...mockImages]);

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            {/* <Image
              src={image.url}
              priority={true}
              width={400}
              height={400}
              alt="image"
            /> */}
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
