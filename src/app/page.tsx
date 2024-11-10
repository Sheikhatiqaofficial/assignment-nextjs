import Image from "next/image";
import Card from "./components/recent-post-card";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am Atiqa, Creative Technologist
              </h1>
              <p className="main-para">
                My portfolio reflects a blend of technical expertise and artistic vision.From design to development, I create seamless, impactful experiences.Explore my work and discover how I transform ideas into digital solutions.
              </p>
              <button className="resume-btn">
                <a href="/resume.png" download>Download Resume</a>
              </button>

            </div>
            <div>
              <div>
                <Image
                  src="/pic.png"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>

            </div>

            <div className="card-parent">
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>

            <div className="card-parent">
              <div className="card">
                <Image
                  src="/resume.png"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>Resume builder</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Nextjs13</p>
                  </div>
                  <p>
                    Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/todo.png"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>To-do List</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>CLI-based</p>
                  </div>
                  <p>
                    Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/word-counter.png"
                  width={245}
                  height={180}
                  alt="image"
                ></Image>

                <div className="card-content">
                  <h2>Word Counter</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>CLI-based</p>
                  </div>
                  <p>
                    Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}