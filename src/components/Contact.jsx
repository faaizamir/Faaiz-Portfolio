const Contact = () => {
  return (
    <div data-aos="fade" className="aos-init" data-aos-duration="1500">
      {/* Contact Heading */}
      <div className="py-12 md:py-12 px-3 sm:px-5 md:px-10 lg:px-14">
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
        <form id="myForm">
          <div className="relative  z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              name="name"
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333]  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
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
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
