// import React, { useState, useEffect, useRef } from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';
import Card from './components/Card';
import Nav from './components/Nav';
import {Outlet} from 'react-router-dom';
function App() {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: myRef.current,
  //         backgroundColor: 0x241731,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         birdSize: 2.9,
  //         wingSpan: 19.0,
  //         separation: 50.0,
  //         alignment: 4.0,
  //         cohesion: 40.0,
  //         quantity: 4.0 - 0.18,
  //         size: 1.3,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
      {/* Background container with Vanta.js effect */}
      <div
        // ref={myRef}
        className="fixed inset-0 -z-10 pointer-events-none"
      ></div>

      {/* Content container with scrollbar */}
      <div className="container m-auto h-screen z-10 pt-36 ">
        <div className="template grid grid-cols-12 gap-5 grid-flow-row mt-40 mx-20">
          <div className="left col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            <Card />
          </div>
          <div className="right col-span-12 lg:col-span-8 ">
            <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                <Nav />  
            </header>
            <section>
              <div className="lg:rounded-2xl bg-white dark:bg-[#1d1d1d]">
                <div data-aos="fade" className="aos-init aos-animate">
                    <Outlet />
                    <footer className="overflow-hidden rounded-b-2xl" style={{ background: 'transparent' }}>
                      <p className="text-center py-6 text-[#a6a6a6]">© 2022 All Rights Reserved by <a className="hover:text-[#FA5252] duration-300 transition" href="https://linkedin.com/faaiz-amir" target="_blank" rel="noopener noreferrer">Faaiz Amir</a>.</p>
                    </footer>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
