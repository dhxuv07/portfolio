<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dhruv Shrivastava | Portfolio</title>
    <style>
        body {
            margin: 0;
            font-family: Poppins, Arial, sans-serif;
            background: #f5f7fa;
        }
        header {
            background: #1e1e2f;
            color: white;
            padding: 40px;
            text-align: center;
            font-size: 32px;
            letter-spacing: 1px;
        }
        nav {
            background: #333;
            display: flex;
            justify-content: center;
        }
        nav a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            font-size: 18px;
        }
        nav a:hover {
            background: #ff4081;
        }
        .hero {
            text-align: center;
            padding: 60px 20px;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: white;
        }
        .hero h1 {
            font-size: 42px;
            margin-bottom: 10px;
        }
        .hero p {
            font-size: 20px;
        }
        .section {
            padding: 40px 20px;
            max-width: 900px;
            margin: auto;
        }
        .card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin: 20px 0;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }
        .skill {
            background: #2575fc;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            transition: transform 0.3s;
        }
        .skill:hover {
            transform: scale(1.1);
        }
        footer {
            background: #1e1e2f;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
        footer a {
            color: #ff4081;
            text-decoration: none;
            margin: 0 10px;
        }
        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <header>Dhruv Shrivastava | Portfolio</header>

    <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <section class="hero">
        <h1>Hello, I'm Dhruv Shrivastava</h1>
        <p>B.Tech CSE Core Student at Galgotias University</p>
    </section>

    <section class="section" id="about">
        <div class="card">
            <h2>About Me</h2>
            <p>I am Dhruv Shrivastava, a B.Tech CSE (Core) student at Galgotias University. I am passionate about technology, web development, and continuously improving my skills. I enjoy creating meaningful projects, exploring new tools, and working on ideas that help me grow as a developer. My goal is to build a strong foundation in computer science and work on real-world projects that make an impact.</p>
        </div>
    </section>

    <section class="section" id="skills">
        <div class="card">
            <h2>My Skills</h2>
            <div class="skills">
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">Python</span>
                <span class="skill">Java</span>
                <span class="skill">C Programming</span>
                <span class="skill">JavaScript</span>
            </div>
        </div>
    </section>

    <section class="section" id="projects">
        <div class="card">
            <h2>My Projects</h2>
            <ul>
                <li>📌 Personal Portfolio Website – A responsive website showcasing my skills, education, and contact details.</li>
            </ul>
        </div>
    </section>

    <section class="section" id="contact">
        <div class="card">
            <h2>Contact Me</h2>
            <p>Email: Shrivastavadhruv74@gmail.com</p>
            <p>Phone: 7999602465</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dhruv-shrivastava-5646a3319" target="_blank">dhruv-shrivastava-5646a3319</a></p>
            <p>GitHub: <a href="https://github.com/dhxuv07" target="_blank">dhxuv07</a></p>
        </div>
    </section>

    <footer>
        © 2025 Dhruv | All rights reserved | 
        <a href="https://www.linkedin.com/in/dhruv-shrivastava-5646a3319" target="_blank">LinkedIn</a> | 
        <a href="https://github.com/dhxuv07" target="_blank">GitHub</a>
    </footer>
</body>
</html>
