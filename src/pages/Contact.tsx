import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm("service_4guk7o2", "template_mjctsu2", form.current, {
        publicKey: "dW10F30XzZQ0DEqfI",
      })
      .then(
        () => {
          alert("Message sent successfully");
          setLoading(false);
        },
        () => {
          alert("Failed to send");
          setLoading(false);
        },
      );

    form.current.reset();
  };

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* TOP BAR */}
      <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12">
        <p>07</p>
        <p>/CONTACT</p>
      </div>

      {/* ❌ HIDE ON MOBILE */}
      <h1 className="hidden sm:block absolute left-0 md:left-6 top-40 md:top-60 text-[80px] md:text-[120px] font-bold text-gray-200/40 -rotate-90 origin-left pointer-events-none">
        /contact
      </h1>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-10 sm:mb-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          Let’s build something impactful together.
        </h1>
        <p className="text-gray-500 mt-3 sm:mt-4 max-w-lg text-xs sm:text-sm">
          Have an idea or project in mind? Drop a message and let’s turn it into
          reality.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 sm:space-y-6"
        >
          <div>
            <p className="text-xs sm:text-sm text-gray-400">Email</p>
            <h2 className="text-base sm:text-lg font-semibold break-all">
              rohitkumarsahu6200@gmail.com
            </h2>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-gray-400">Location</p>
            <h2 className="text-base sm:text-lg font-semibold">India</h2>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-gray-400">Availability</p>
            <h2 className="text-base sm:text-lg font-semibold">
              Open for Freelance
            </h2>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm">
            <a
              href="https://github.com/rohititgithub"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-kumar6200/"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/rohitc0des/"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 sm:space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border-b border-gray-300 bg-transparent py-2.5 sm:py-3 text-sm outline-none focus:border-black transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border-b border-gray-300 bg-transparent py-2.5 sm:py-3 text-sm outline-none focus:border-black transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full border-b border-gray-300 bg-transparent py-2.5 sm:py-3 text-sm outline-none focus:border-black transition resize-none"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="mt-2 sm:mt-4 border border-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full tracking-widest hover:bg-black hover:text-white transition disabled:opacity-50"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
