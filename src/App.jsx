/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import Card from "./components/Card";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
// import particlesJS from "particles.js";

function App() {
  AOS.init();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const mockData = { message: "Data loaded successfully!" };
        setData(mockData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       WAVES({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.00,
  //         scaleMobile: 1.00,
  //         color: 0x1b1b1b,
  //         shininess: 5.00,
  //         waveHeight: 15.00,
  //         waveSpeed: 1.50,
  //         zoom: 0.75,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="h-screen w-screen overflow-x-hidden relative">

      {loading && <Loader />}
      {/* <div ref={myRef} className="fixed inset-0 -z-10 pointer-events-none hidden lg:block"></div> */}
      <div id="particles-js" className="fixed inset-0   hidden lg:block"></div>
      {/* <div id="particles-js" className="fixed inset-0 w-full pointer-events-none hidden lg:block"></div> */}
      {!loading && (
        <div className="lg:container lg:m-auto h-screen relative p-0 m-0  lg:pt-36">
          <div className="template grid grid-cols-12 gap-5 xl:gap-10 grid-flow-row lg:mt-40 xl:mx-20 lg:pb-28 2xl:pb-16">
            <div className="left col-span-12 lg:col-span-5 xl:col-span-4 hidden lg:block h-screen sticky top-44">
              <Card />
            </div>
            <div className="right col-span-12 lg:col-span-7 xl:col-span-8">
              <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                <Nav />
              </header>
              <header className="lg:hidden">
                <MobileNav />
              </header>
              <section>
                <div className="lg:rounded-2xl bg-primary mt-5 lg:mt-0">
                  <div data-aos="fade" className="aos-init aos-animate">
                    <Outlet />
                    <footer className="overflow-hidden rounded-b-2xl" style={{ background: "transparent" }}>
                      <p className="text-center py-6 text-[#a6a6a6]">
                        © 2024 All Rights Reserved by{" "}
                        <a className="hover:text-[#FA5252] duration-300 transition" href="https://linkedin.com/in/faaiz-amir" target="_blank" rel="noopener noreferrer">
                          Faaiz Amir
                        </a>
                        .
                      </p>
                    </footer>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
