
import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-4xl font-bold">Dhruv Shrivastava</h1>
        <p className="text-xl text-gray-600 mt-2">Aspiring Software Engineer | Tech Enthusiast</p>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        {/* About Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm Dhruv Shrivastava — a tech enthusiast passionate about becoming a software engineer. I enjoy learning new technologies and building cool projects with code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python</li>
            <li>Java</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: <a className="text-blue-600" href="mailto:shrivastavadhruv74@gmail.com">shrivastavadhruv74@gmail.com</a></p>
          <p>Phone: <span className="text-gray-800">+91 7999602465</span></p>
          <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/dhruv-shrivastava-5646a3319" target="_blank" rel="noopener noreferrer">linkedin.com/in/dhruv-shrivastava-5646a3319</a></p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4 border-t">
        © {new Date().getFullYear()} Dhruv Shrivastava. All rights reserved.
      </footer>
    </div>
  );
}
