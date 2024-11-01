"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  const handleDownload = () => {
    // Define the URL of the PDF file in the public folder
    const pdfUrl = '/sample.pdf'; 
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'sample.pdf'; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Development',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'App Development',
        1000,
        'React.js',
        1000,
        'Next.js',
        1000,
        'Expo',
        1000,
        'React-Native',
        1000,
        'Tailwind Css',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          I am open to learn new things and get involved with new projects
           that can help me learn or apply all that I have learned throughout my university career.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-4 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-4 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
            <button onClick={handleDownload} className="rounded-[20px] group relative bg-trasparent border border-white px-2 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}