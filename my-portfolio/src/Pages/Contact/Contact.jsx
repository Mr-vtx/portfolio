import { useState } from "react";
import { motion } from "framer-motion";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormStatus(
            "Thank you for reaching out! I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setFormStatus("Oops, something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section relative bg-primary-color h-screen flex items-center justify-center text-center text-color">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-xl"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <div className="z-10 px-4 sm:px-8">
          <h2 className="text-6xl sm:text-7xl font-bold text-color mb-6">
            Let's Get In Touch
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-lg mx-auto opacity-80">
            Whether you want to work together, ask a question, or just say
            hello, feel free to drop me a message!
          </p>
          <a
            href="#contact-form"
            className="bg-[var(--accent-color)] text-primary-color py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="contact-form py-24 px-8 bg-primary-color text-text-color"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side (Contact Info) */}
          <div className="contact-info space-y-8">
            <h3 className="text-4xl font-semibold">Contact Info</h3>
            <ul className="text-lg space-y-4">
              <li className="flex items-center">
                <MdLocationOn className="text-secondary-color mr-4 text-xl" />
                <span>Enugu, Nigeria</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-secondary-color mr-4 text-xl" />
                <a
                  href="tel:+2349065320183"
                  className="text-[var(--secondary-color)] hover:underline"
                >
                  +234 906-5320-183
                </a>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-secondary-color mr-4 text-xl" />
                <a
                  href="mailto:chibuikeejiheri34@gmail.com"
                  className="text-[var(--secondary-color)] hover:underline"
                >
                  chibuike@mail.com
                </a>
              </li>
            </ul>
            <p className="text-lg ">
              Feel free to reach out if you have any inquiries, or just to say
              hi! I’d love to hear from you.
            </p>
          </div>

          {/* Right Side (Form) */}
          <div className="form-container bg-primary-color p-8 rounded-xl shadow-xl">
            <h3 className="text-4xl font-semibold mb-8">Send A Message</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-5 bg-transparent text-text-color border-2 border-[var(--secondary-color)] rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-accent-color transition duration-300"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-5 bg-transparent text-text-color border-2 border-[var(--secondary-color)] rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-accent-color transition duration-300"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-5 bg-transparent text-text-color border-2 border-[var(--secondary-color)] rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-accent-color transition duration-300"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-[var(--accent-color)] text-primary-color rounded-full shadow-lg hover:shadow-2xl transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
              {formStatus && (
                <p className="mt-4 text-center text-lg text-white">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Optional Map Section */}
      <section className="contact-map py-24 px-8 bg-primary-color text-text-color">
        <div className="max-w-full mx-auto relative rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31717.976740067214!2d7.5168586!3d6.4265302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a1cc32b9eaff%3A0x6dc2d102396baacf!2suniversity%20of%20Nigeria%20Enugu%20campus!5e0!3m2!1sen!2sng!4v1739824329763!5m2!1sen!2sng"
            className="w-full h-96 rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
