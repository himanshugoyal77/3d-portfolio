import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const inputStyle =
    "w-full bg-white border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:border-indigo-500";
  const options = {
    position: "bottom-right",
    style: {
      backgroundColor: "midnightblue",
      border: "2px solid lightgreen",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_395xd0o",
        "template_ax959qb",
        form.current,
        "ZfkMHUs_Wx679UaLu"
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.status === 200) {
          toast.success("Message Send Successfull!", {
            style: {
              border: "3px solid #030014",
              padding: "16px",
              color: "#030014",
            },
            iconTheme: {
              primary: "#030014",
              secondary: "#FFFAEE",
            },
          });
        } else {
          toast.error("Message Send Failed!", {
            style: {
              border: "3px solid #030014",
              padding: "16px",
              color: "#030014",
            },
            iconTheme: {
              primary: "#030014",
              secondary: "#FFFAEE",
            },
          });
        }
      });
    e.target.reset();
  };
  return (
    <div id="contact" className="w-full mb-8">
      <h1
        className="text-[40px] font-semibold text-transparent 
      bg-clip-text bg-gradient-to-r from-purple-500 text-center
       to-cyan-500 pt-20 pb-10"
      >
        Contact Me
      </h1>
      <div
        className="
     w-[90%] md:max-w-lg mx-auto bg-gray-400
      rounded-md md:rounded-lg bg-clip-padding backdrop-filter 
      backdrop-blur-sm bg-opacity-10
      px-4 md:px-12 py-8
    "
      >
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full flex mx-auto flex-col gap-3 
          text-sm text-indigo-800 
          font-[500] 
        "
        >
          <div className="flex flex-col">
            <label className="mb-1 " htmlFor="email">
              YOUR Name
            </label>
            <input
              type="text"
              id="name"
              className={inputStyle}
              name="fname"
              required
            />
          </div>
          {/* email */}
          <div className="flex flex-col">
            <label className="mb-1 " htmlFor="email">
              YOUR EMAIL
            </label>
            <input
              type="email"
              id="email"
              className={inputStyle}
              name="email"
              required
            />
          </div>
          {/* email */}
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="subject">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              className={inputStyle}
              name="subject"
              required
            />
          </div>
          {/* message */}
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="message">
              MESSAGE
            </label>
            <textarea
              name="message"
              id=""
              rows="4"
              className={inputStyle}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primaryColor px-5 py-2 text-sm shadow-md 
             text-white font-bold my-2 rounded-md 
            bg-indigo-800 hover:shadow-slate-500 ease-in duration-300"
          >
            <span
              className={`text-sm ${loading ? "loading loading-spinner" : ""}`}
            >
              SEND MESSAGE
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
