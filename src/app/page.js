"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Home() {
  let scriptURL = "https://script.google.com/macros/s/AKfycbywHCD8dWmty9Z7p4XQC3rYexxKFo7Mv4vztW_wEP30uvGPEpuXqEkVG_TlMQKowZWqJA/exec"
  let handleSubmit=  async function (e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
  fetch(scriptURL, { method: 'POST', body: formData})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  }

  return (
    <>
      
      <div className={styles.area} >
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div id="home" className={styles.home}>
        <div className={styles.intro}>
          <div className={styles.bigText}>
            Hey, Its <span className={styles.specialText}>Piyush Raj</span>
          </div>
          <div className={styles.smallText}>
            <p className={styles.line}>A dedicated and results-driven web developer proficient in crafting web applications. </p>
          </div>
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className={styles.aboutSection}>

          <div className={styles.bigText2}>
            <span className={styles.specialText}>About Me</span>
          </div>

          <div className={styles.textSubsection}>

            <div className={styles.leftSubsection}>
              <div className={styles.subSectionTitle}>
                Get To know Me
              </div>
              <div className={styles.smallText2}>
                A dedicated and results-driven web developer proficient in
                crafting and overseeing websites and web applications,
                contributing to the overall success of the products I
                engage with.<br></br> <br></br>With a keen eye for detail and a passion
                for delivering high-quality work, I bring a blend of
                technical expertise and creative problem-solving to every
                project. My goal is to not only meet but exceed expectations,
                ensuring a seamless and engaging user experience.
                Lets collaborate to bring your digital endeavors to fruition!
              </div>
            </div>
            <div className={styles.rightSubsection}>
              <div className={styles.subSectionTitle}>
                Skills
              </div>
              <div className={styles.skillsSection}>
                <div className={styles.row}>
                  <div className={styles.skills}>
                    HTML
                  </div>
                  <div className={styles.skills}>
                    CSS
                  </div>
                  <div className={styles.skills}>
                    Javascript
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.skills}>
                    NextJs
                  </div>
                  <div className={styles.skills}>
                    Django
                  </div>
                  <div className={styles.skills}>
                    Express
                  </div>
                  <div className={styles.skills}>
                    Git
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.skills}>
                    Bootstrap
                  </div>

                  <div className={styles.skills}>
                    Github
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>

      <div id="portfolio" className={styles.portfolio}>
        <div className={styles.coverPortfolio}>
        <div className={styles.projects}>
          <div className={styles.bigText}>
          <span className={styles.specialText}>
          Portfolio
          </span>
          </div>
          <div className={styles.sectionIntro}>
            My personal Projects!
          </div>

          <div className={styles.projectBanner}>
          <div className={styles.projectCard}>
            <div className={styles.projectImg}>
            <img src="/home.png" width={380} height={200}></img>
            </div>
            <div className={styles.projectDetail}>
            <b>Hospital Management System</b>, built using Django, is designed to streamline and enhance the operations of healthcare facilities.
            </div>
            <div className={styles.projectView}>
            <a href="https://github.com/PiyushRaj-27/HMS"><div className={styles.viewProject}>View Project</div></a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImg}>
            <img src="/blog.png" width={380} height={200}></img>
            </div>
            <div className={styles.projectDetail}>
            <b>Blog Application</b>, built using Django, Lets you share your thoughts on the internet.
            </div>
            <div className={styles.projectView}>
            <a href="https://github.com/PiyushRaj-27/BlogApp"><div className={styles.viewProject}>View Project</div></a>
            </div>
          </div>


          
          </div>
          <a href="https://github.com/PiyushRaj-27">
          <div className={styles.viewMore}>View More!</div>
          </a>
        </div>
        </div>
      </div>

      <div id="contact" className={styles.contact}>
        <div className={styles.bigText}> <span className={styles.specialText}>Contact Me!</span> </div>
      < div className={styles.contactForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="Name" placeholder="Your name" className={styles.formInput} required></input>
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" className={styles.formInput}  placeholder="Your Email" required></input>
          <label htmlFor="Msg">Message</label>
          <textarea name="Msg" id="Msg" rows={7} cols={50} placeholder="Your Message" className={styles.formInput} required></textarea>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      <div className={styles.contactUpper}>
        <div className={styles.Left}>
          <div className={styles.contactTitle}>
            PIYUSH RAJ
          </div>
          <div className={styles.contactInfo}>
          Email: piyushraj.270203@gmail.com <br></br>
          Institute: National Institute of Technology Patna
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            Socials
          </div>
          <div className={styles.socialsIcon}>
          <a href="https://github.com/PiyushRaj-27"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/piyush-raj-048702249/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/piyush.raj27?igsh=MXJiMGx5bGJ3Znd3cQ=="><FaInstagram /></a>

          </div>
          <div className={styles.email}>
          <MdEmail /> : piyushraj.270203@gmail.com
          </div>
        
        </div>

        
      </div>
      <div className={styles.contactlower}>
          © Copyright 2024. Made with 💓 and ☕ by Piyush Raj
        </div>
      </div>

    </>
  );
}
