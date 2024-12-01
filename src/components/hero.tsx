import { Sixtyfour } from "next/font/google";

const font = Sixtyfour({
  subsets: ["latin"],
  variable: "--font-64",
});

export default function Hero() {
  return (
    <section className="h-64 text-center bg-base-200 rounded-3xl flex items-center justify-center relative overflow-hidden border-2 border-zinc-800">
      <div
        className="absolute inset-0 bg-rotate animate-scroll opacity-20 bg-repeat"
        style={{ width: "400%", height: "400%", left: "-150%", top: "-150%" }}
      />

      <span className="rotate-1 block relative z-10">
        <h1 className={font.className + " italic tracking-wide font-black text-5xl"}>
          wowowowowo ☆
        </h1>
        <h5 className="italic tracking-wide font-light text-lg ">
          install apps easily with{" "}
          <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget">
            <span className="font-mono link no-underline hover:underline font-semibold">
              winget
            </span>
          </a>
        </h5>
        <small className="italic tracking-wide font-light text-sm ">
          app search powered by{" "}
          <a href="https://winget.run/">
            <span className="font-mono link no-underline hover:underline">
              winget.run
            </span>
          </a>
        </small>
      </span>
    </section>
  );
}
