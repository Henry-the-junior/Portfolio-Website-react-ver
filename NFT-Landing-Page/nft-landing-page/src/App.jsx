import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProfilePic3 from "./assets/profile-pic-3.png";
import InstagramPic from "./assets/instagram.png";
import GitHubPic from "./assets/github.png";
import AboutPic from "./assets/about-pic-1.jpg";
import ExperiencePic from "./assets/experience.png";
import EducationPic from "./assets/education.png";
import Arrow from "./assets/arrow.png";
import EmailPic from "./assets/email.png";
import CheckmarkPic from "./assets/checkmark.png";
import ComingsoonPic from "./assets/coming-soon.jpeg";
import FigmablockchainPic from "./assets/Figma_blockchain.jpeg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./mediaqueries.css";

function App() {
  const [count, setCount] = useState(0);
  const toggleMenu = () => {
    console.log("1");
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <>
      <body>
        <nav id="desktop-nav">
          <div class="logo">Henry</div>
          <div>
            <ul class="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div class="logo">Henry</div>
          <div class="hamburger-menu">
            <div class="hamburger-icon" onClick={() => toggleMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="menu-links">
              <li>
                <a href="#about" onClick={() => toggleMenu()}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => toggleMenu()}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => toggleMenu()}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => toggleMenu()}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </nav>
        <section id="profile">
          <div class="section__pic-container">
            <img src={ProfilePic3} alt="Henry profile picture" />
          </div>
          <div class="section__text">
            <p class="section__text__p1">
              <span class="zh">哈囉！我是</span>
            </p>
            <h1 class="title">Henry &#9996;</h1>
            <p class="section__text__p2">Web Developer</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2"
                onclick="window.open('./assets/resume-Henry-20240317.pdf')"
              >
                Download CV
              </button>
              <button
                class="btn btn-color-1"
                onclick="location.href='./#contact'"
              >
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <img
                src={InstagramPic}
                alt="My IG profile"
                class="icon"
                onclick="location.href='https://www.instagram.com/henry_the_junior/'"
              />
              <img
                src={GitHubPic}
                alt="My Github profile"
                class="icon"
                onclick="location.href='https://github.com/Henry-the-junior'"
              />
            </div>
            <p class="quote">
              A ship in harbor is safe, <br />
              but that is not what ships are built for.
            </p>
          </div>
        </section>

        <section id="about">
          <p class="section__text__p1">Get To Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section-container">
            <div class="section__pic-container">
              <img src={AboutPic} alt="Profile picture" class="about-pic" />
            </div>
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <img src={ExperiencePic} alt="Experience icon" class="icon" />
                  <h3>
                    <span class="zh">經歷</span>
                  </h3>
                  <p class="details-container-text">
                    <span class="zh">
                      後端工程師
                      <br />
                      <br />
                      研究助理
                      <br />
                      <br />
                      國立臺灣師範大學
                      <br />
                      資訊研究社教學
                    </span>
                  </p>
                </div>
                <div class="details-container">
                  <img src={EducationPic} alt="Education icon" class="icon" />
                  <h3>
                    <span class="zh">學歷</span>
                  </h3>
                  <p class="details-container-text">
                    <span class="zh">
                      國立臺灣師範大學
                      <br />
                      資訊教育碩士 <br />
                      <br />
                      東吳大學
                      <br />
                      巨量資料管理學士
                    </span>
                  </p>
                </div>
              </div>
              <div class="text-container">
                <p>
                  <span class="zh">
                    <span class="highlight-text">&#128247; </span>
                    喜歡拍照的工程師。
                    <br />
                    - 後端工程師 (Flask/ASP.NET Core 6/MS SQL/MySQL) <br />
                    - 資料分析 (Python/Machine Learning/Deep Learning)
                    <br />
                    - 良好適應環境能力及學習新知的渴望
                    <br />
                    - 在學期期間於課內外皆有豐富的團隊合作經驗
                    <br />
                    - 資訊教育碩士背景，邏輯清晰，具換位思考能力
                    <br />- 興趣:吉他、攝影
                  </span>
                </p>
              </div>
            </div>
          </div>
          <img
            src={Arrow}
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#experience'"
          />
        </section>
        <section id="experience">
          <p class="section__text__p1">Explore My</p>
          <h1 class="title">Experience</h1>
          <div class="experience-details-container">
            <div class="experience-containers">
              <div class="details-container">
                <h2 class="experience-sub-title">
                  <span class="zh">
                    後端工程師<span class="highlight-text">🧑🏻‍💻</span>
                  </span>
                </h2>
                <div class="article-container">
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>.NET Core 6</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>C#</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>MySQL</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>MS SQL</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Vue JS</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>JWT</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="details-container">
                <h2 class="experience-sub-title">
                  <span class="zh">
                    研究助理<span class="highlight-text">👨🏻‍🎓</span>
                  </span>
                </h2>
                <div class="article-container">
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Linux</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Data Analysis</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>ML/DL</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Nginx</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Swift</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="details-container">
                <h2 class="experience-sub-title">
                  <span class="zh">
                    自學<span class="highlight-text">📝</span>
                  </span>
                </h2>
                <div class="article-container">
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>HTML/CSS/JS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>React JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Python</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Flask</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={CheckmarkPic}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Figma</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Arrow}
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#projects'"
          />
        </section>
        <section id="projects">
          <p class="section__text__p1">Browse My Recent</p>
          <h1 class="title">Projects</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src={ComingsoonPic}
                    alt="React Weather App"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">
                  React Weather App
                </h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/Henry-the-junior'"
                  >
                    GitHub
                  </button>
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/Henry-the-junior'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>

              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src={ComingsoonPic}
                    alt="Social App"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Social App</h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/Henry-the-junior'"
                  >
                    GitHub
                  </button>
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/Henry-the-junior'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>

              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src={FigmablockchainPic}
                    alt="Social App"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">
                  Blockchain <br />
                  Landing Page
                </h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://www.figma.com/proto/HIhxeNFo2mQloBKzQNmScm/Landing-Page?type=design&node-id=201-4&t=YYbsh1Mmw9QrrcBx-1&scaling=scale-down&page-id=0%3A1&mode=design'"
                  >
                    Figma
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Arrow}
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#contact'"
          />
        </section>
        <section id="contact">
          <p class="section__text__p1">Get in Touch</p>
          <h1 class="title">Contact Me</h1>
          <div class="contact-info-upper-container">
            <div class="contact-info-container">
              <img
                src={EmailPic}
                alt="Email icon"
                class="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:sssh10130338@gmail.com">
                  sssh10130338@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div class="nav-links-container">
              <ul class="nav-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2023 Henry Tsai. All Rights Reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default App;
