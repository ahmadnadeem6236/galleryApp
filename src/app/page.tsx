/* eslint-disable @next/next/no-img-element */

import { db } from "~/server/db";

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

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
