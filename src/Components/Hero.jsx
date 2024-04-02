import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero12.png";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>Thanks for booking</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Explore The World With{" "}
              <span className={Classes.nickName}>Anish Travels</span>
            </h1>
            <p>
              Save at least 20% on stay
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Select Destination</label>
              <input type="text" placeholder="search your location" />
            </div>

            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            <button onClick={() => setModal(true)}>book Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
