import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[40vh] p-5 ">
        <div className={` flex flex-col justify-center items-center `} >

          <h1 className="text-4xl ">We are fastest URL Shortener</h1>
          <p className="text-lg">Just paste your link here</p>
          <div className="my-3">
          <Link href={"/shorten"}><button  className="bg-slate-300 p-2  mx-2 rounded-lg" type="button">Try Now</button></Link>
          
          </div>
        </div>

        <div className="relative">
        <Image className="" alt="meeting" src={"/meeting.png"} fill={true} />

        </div>
      </section>
    </main>
  );
}
