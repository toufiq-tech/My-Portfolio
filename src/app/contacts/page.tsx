"use client";

import { SiGmail, SiGithub } from "react-icons/si";

import {
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0D1320] px-5 py-25 text-white md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium tracking-widest text-[#52E6AC]">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Contact <span className="text-[#52E6AC]">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Have a project in mind or want to work together? Feel free to
            contact me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-2xl border border-gray-800 bg-[#111925] p-7 md:p-9">
            <h3 className="mb-4 text-2xl font-semibold">Let&apos;s Talk</h3>

            <p className="mb-8 leading-7 text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas,
              and opportunities to be part of your vision.
            </p>

            {/* Email */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#52E6AC]/10">
                <SiGmail className="text-2xl text-[#EA4335]" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="break-all transition hover:text-[#52E6AC]"
                >
                  toufiqur10rahaman@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#52E6AC]/10">
                <FaLocationDot className="text-xl text-[#52E6AC]" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#52E6AC]/10">
                <FaWhatsapp className="text-2xl text-[#25D366]" />
              </div>

              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <a
                  href="https://wa.me/8801846043286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#52E6AC]"
                >
                  01846043286
                </a>
              </div>
            </div>

            <div className="mb-4 h-px bg-gray-800" />

            <h4 className="mb-5 text-lg font-semibold">Connect With Me</h4>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/toufiq-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 transition hover:border-[#52E6AC] hover:bg-[#52E6AC]/10"
              >
                <SiGithub className="text-2xl text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/toufiqur-rahaman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 transition hover:border-[#52E6AC] hover:bg-[#52E6AC]/10"
              >
                <FaLinkedin className="text-2xl text-[#0A66C2]" />
              </a>

              {/* Gmail */}
              <a
                href="mailto:toufiqur10rahaman@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 transition hover:border-[#52E6AC] hover:bg-[#52E6AC]/10"
              >
                <SiGmail className="text-2xl text-[#EA4335]" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-gray-800 bg-[#111925] p-7 md:p-9">
            <h3 className="mb-7 text-2xl font-semibold">Send Me a Message</h3>

            <form
              action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Message From Portfolio"
              />

              <input type="hidden" name="_template" value="table" />

              <input type="hidden" name="_captcha" value="true" />

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-700 bg-[#0D1320] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#52E6AC]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-700 bg-[#0D1320] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#52E6AC]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-700 bg-[#0D1320] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#52E6AC]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-700 bg-[#0D1320] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#52E6AC]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#52E6AC] px-6 py-3 font-semibold text-[#0D1320] transition hover:bg-[#3bd69b]"
              >
                Send Message
                <FaArrowUpRightFromSquare />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
