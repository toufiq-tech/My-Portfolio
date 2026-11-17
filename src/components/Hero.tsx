import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090E18] pt-32 lg:min-h-screen">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[35%] bg-[#111925] lg:block"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 55% 100%, 0 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-120px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[60px]">
              Hi, I'm Toufiqur Rahaman!
            </h1>

            <h2 className="mt-4 text-xl font-black leading-tight sm:text-2xl lg:text-3xl xl:text-4xl">
              <span className="text-white">FULL STACK </span>
              <br />
              <span className="text-[#52E6AC]">WEB DEVELOPER</span>
            </h2>

            <p className="mx-auto mt-8 max-w-[650px] text-base font-medium leading-8 text-[#A6AAB3] sm:text-lg lg:mx-0">
              I'm a passionate Computer Science student and Full Stack Developer
              with a mission to create modern and user-friendly digital
              experiences. I enjoy building responsive web applications, solving
              problems and turning creative ideas into real-world solutions.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="/resume/Toufiqur-Rahaman-CV.pdf"
                download
                className="inline-flex h-14 items-center gap-3 bg-[#52E6AC] px-8 font-bold text-[#090E18] transition-all duration-300 hover:bg-white"
              >
                Download Resume
                <Download size={20} />
              </a>
              <a
                href="/static/My CV.pdf"
                download
                className="inline-flex h-14 items-center gap-3 bg-[#52E6AC] px-8 font-bold text-[#090E18] transition-all duration-300 hover:bg-white"
              >
                Download CV
                <Download size={20} />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/toufiq-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#52E6AC] text-[#090E18] transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/toufiqur-rahaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#52E6AC] text-[#090E18] transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.2V9h2.85v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.15Z" />
                  </svg>
                </a>

                
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 mx-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[430px] lg:max-w-[530px]">
            <div
              className="relative aspect-[0.92/1] w-full bg-[#52E6AC] shadow-[0_0_50px_rgba(82,230,172,0.25)]"
              style={{
                clipPath:
                  "polygon(50% 0%, 58% 1%, 94% 23%, 100% 31%, 100% 69%, 94% 77%, 58% 99%, 50% 100%, 42% 99%, 6% 77%, 0% 69%, 0% 31%, 6% 23%, 42% 1%)",
              }}
            >
              <div
                className="absolute inset-2
                overflow-hidden bg-[#151C28]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 58% 1%, 94% 23%, 100% 31%, 100% 69%, 94% 77%, 58% 99%, 50% 100%, 42% 99%, 6% 77%, 0% 69%, 0% 31%, 6% 23%, 42% 1%)",
                }}
              >
                <Image
                  src="/images/MyPic.png"
                  alt="Toufiqur Rahaman"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width:768px) 90vw, 530px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
