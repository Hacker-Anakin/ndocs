import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto p-2">
      <header className="bg-transparent text-white w-[100%]">
        <Navbar />
      </header>
      <main className="flex w-full">
        <Sidebar />
        <div className=" mx-auto">
          <div className="bg-gray-900 text-white">
            <div className="bg-gray-800 py-8 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Introduction to Neit: The Future of Programming
              </h1>
              <p className="text-lg">
                In today’s fast-paced technological landscape, programming languages are continually evolving to meet the demands of developers. Neit is a groundbreaking programming language that stands at the forefront of this evolution, offering a unique blend of performance, flexibility, and cutting-edge technology.
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  What is Neit?
                </h2>
                <p className="text-lg">
                  Neit is an innovative programming language designed to push the boundaries of what’s possible in software development. At its core, Neit is powered by three key technologies:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <h3 className="text-xl font-bold text-purple">
                      Semigen Engine
                    </h3>
                    <p className="text-lg">
                      A highly flexible engine that allows developers to customize syntax and grammar, offering complete control over how code is structured and executed.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold text-purple">
                      Rust-Based Interpreter
                    </h3>
                    <p className="text-lg">
                      A lightweight interpreter built using the performance-centric Rust language, ensuring fast and efficient execution of Neit code.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold text-purple">
                      Super-Powered Compiler
                    </h3>
                    <p className="text-lg">
                      Neit features a powerful compiler that generates high-performance C code, optimized for efficiency and speed.
                    </p>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Why Use Neit?
                </h2>
                <p className="text-lg">
                  There are several compelling reasons to choose Neit for your next project:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Custom Grammar Rules:</span> Neit offers developers the ability to create their own syntax rules, allowing for a personalized coding experience.
                  </li>
                  <li>
                    <span className="font-semibold">AI-Driven Tools:</span> With AI tools integrated into the language, Neit enhances your coding workflow by providing intelligent suggestions, automating repetitive tasks, and ensuring better code quality.
                  </li>
                  <li>
                    <span className="font-semibold">Portability and Efficiency:</span> Neit is designed to be both portable and highly efficient, making it suitable for modern development needs across a variety of platforms and applications.
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <p className="text-lg">
                  Whether you&apos;re a beginner or an experienced developer, Neit offers the power, flexibility, and performance to meet your programming needs.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
