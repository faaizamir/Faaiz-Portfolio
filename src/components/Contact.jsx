import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(success);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dvnl8fj", "template_i1fre3s", form.current, {
        publicKey: "jRNa0RbgVbRJjvcSd",
      })
      .then(
        () => {
          setSuccess(true);
          setShowAlert(true);
        },
        () => {
          setSuccess(false);
          setShowAlert(true);
        }
      );
    e.target.reset();
  };

  const handleShowAlert = () => {
    setShowAlert(false);
  };

  return (
    <div data-aos="fade" className="aos-init" data-aos-duration="1500">
      {/* Contact Heading */}
      <div className="pt-12 pb-4 md:pt-12 px-3 sm:px-5 md:px-10 lg:px-14">
        <h2
          className="relative text-white text-4xl md:text-5xl font-semibold lg:pb-4 
                      from-[#DD2476] to-[#fa5252ef] 
                      after:content-[''] after:absolute 
                      after:w-48 after:h-[3px]
                      after:hidden sm:after:block 
                      after:bg-gradient-to-l
                      sm:after:top-1/2 lg:after:top-1/3 sm:after:left-40 md:after:left-52 lg:after:left-56 
                      after:transform after:translate-y-1/3"
        >
          Contact
        </h2>
      </div>

      {/* Alert  */}
      {showAlert && (
        <div className="px-4 sm:px-6 md:px-16 lg:px-16">
          <div
            className={`container font-regular relative block mx-auto rounded-lg ${
              success ? "bg-green-500" : "bg-red-500"
            }  px-4 py-4  mb-3 text-base text-white`}
            data-dismissible="alert"
          >
            <div className="absolute top-4 left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mt-px h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-8 mr-12">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                {success ? "Success" : "Failed"}
              </h5>
              <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                {success
                  ? "Congratulations! 🎉 Your submission has been received successfully. Thank you for sharing with us!"
                  : "Oops! Something went wrong. Please try again later."}
              </p>
            </div>
            <div
              data-dismissible-target="alert"
              data-ripple-dark="true"
              className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
            >
              <div
                role="button"
                className="w-max rounded-lg p-1"
                onClick={handleShowAlert}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div
        data-aos="fade"
        className="mx-4 md:mx-[60px] p-4 md:p-16 border-[#212425] border-2 bg-color-810 rounded-xl bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate"
      >
        <h3 className="text-xl xl:text-2xl pb-2">
          <span className="text-gray-lite text-[#A6A6A6] ">
            I am always available to collaborate on projects,
          </span>
          <br />
          <span className="font-semibold text-white">
            or explore partnership opportunities.
          </span>
        </h3>

        {/* FORM  */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="relative  z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              name="from_name"
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333]  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="from_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Name *
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="user_email"
              className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px]  appearance-none text-white border-[#333333]  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              id="user_email"
              required
            />
            <label
              htmlFor="user_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email *
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="message"
              className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] ] appearance-none text-white border-[#333333]  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              id="message"
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Message *
            </label>
          </div>

          <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
            <input
              type="submit"
              className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   text-white "
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
