import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MessageSquare, Send, Share2, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SocialLinks from "../components/SocialLinks";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      await fetch("https://formsubmit.co/k.prabhakaran.in@gmail.com", {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
     <div className="h-auto pt-[5%] pb-[1%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]  sm-mt-0" id="Contact">
    <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
    >
        <span
            style={{
                color: "#6366f1",
                backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
        >
            Contact Me
        </span>
    </h2>
</div>


      <div className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10 w-full max-w-lg"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Get in Touch
              </h2>
              <p className="text-gray-400">
                Have something to discuss? Send me a message and let's talk.
              </p>
            </div>
            <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="100" className="relative group">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="relative group">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white h-[9.9rem]"
                required
              />
            </div>
            <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
>
  <Send className="w-5 h-5" />
  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
</button>

          </form>

          <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
