import Image from "next/image";
import Link from "next/link";
import { AULogoOnly } from "~/public/icons";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black relative px-5 overflow-hidden">
      <p className="absolute text-[clamp(10rem,0.845rem+39.061vw,36rem)] text-transparent font-satoshi font-black bg-clip-text bg-gradient-to-r from-emerald-800/40 to-white/20 blur-sm">
        404
      </p>
      <div className="relative z-20 flex flex-col gap-5 items-center justify-center text-white/80">
        <div className="flex flex-col gap-2 max-w-96 font-satoshi">
          <h1 className="text-5xl font-black">Oops...</h1>
          <p>
            Page Not Found - The page you are looking for was moved, removed,
            renamed or might never existed
          </p>
          <Link
            href={"/"}
            className="border-2 border-white px-4 py-2 rounded-md shadow-lg mt-2 text-center hover:bg-white hover:text-black transition-all"
          >
            GO HOME
          </Link>
        </div>
        <Image alt="" src={AULogoOnly} width={160} height={160} />
      </div>
    </section>
  );
}
