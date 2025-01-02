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
                Neit Requirements: Unlock the Magic of Programming
              </h1>
              <p className="text-lg">
                Ready to dive into the world of Neit? Hold onto your hats, because this is unlike anything you’ve ever experienced before. Neit isn’t just a programming language—it’s a revolution, designed to make coding feel like a magical experience. Let’s explore the powerful ingredients that make Neit the ultimate tool for modern developers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12" id="semigen-engine">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  1. Semigen Engine: Your Coding Magic Wand
                </h2>
                <p className="text-lg">
                  At the heart of Neit lies the Semigen Engine, which is basically a magic wand for code! It lets you bend the language’s syntax to your will. Forget rigid, outdated rules—Neit is like a blank canvas where you can paint your perfect coding masterpiece. Think of it like a genie who grants your every wish… but instead of three wishes, you get infinite code customization. Whether you’re building tiny apps or supercomputers, Neit adapts to YOU, making it feel like the language was created just for your brain!
                </p>
              </section>

              <section className="mb-12" id="compiler">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  2. Compiler: Super-Charged Performance
                </h2>
                <p className="text-lg">
                  But wait, there’s more! Neit isn’t just customizable—it’s lightning fast. We’ve stripped away all the unnecessary bloat that other languages drag along, leaving you with a lean, mean coding machine. No more headaches over endless boilerplate code and configuration files—Neit goes straight to the point, making your coding experience feel like an F1 car race (but without the risk of crashing!).
                </p>
                <p className="text-lg">
                  And here’s where it gets really spicy: Neit boasts a super-powered compiler that churns out clean, high-performance C code. Using Clang for next-level optimizations, your programs will run faster than a squirrel on espresso. Neit is not just a tool—it’s a code wizard casting spells to make your software go vroom-vroom. Need to tweak some settings or change the speed of your code? Neit makes it so easy, even your pet hamster could do it (if it learned how to read, of course).
                </p>
              </section>

              <section className="mb-12" id="interpreter">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  3. Rust-based Interpreter: Run Code Instantly
                </h2>
                <p className="text-lg">
                  Not into wrestling with compilers? No worries—Neit’s got your back with its Rust-based interpreter. This little gem lets you run Neit code without needing to go through a full compilation process. Think of it like a portable, pocket-sized Neit-runner that fits snugly in your metaphorical pocket. Just fire it up, and BAM—you’re ready to run your code like a pro, wherever and whenever you want. No need for complex setups or fancy machines—Neit is quick, portable, and works anywhere!
                </p>
                <p className="text-lg">
                  Sure, the interpreter may not be as fast as the Clang-compiled version, but it’s still quicker than most languages—and we’re constantly improving it. Soon, the interpreter will be so fast you’ll think it’s time-traveling. Whether you’re on your laptop or a spaceship, Neit will always be there, helping you get things done.
                </p>
              </section>

              <section className="mb-12" id="artificial-intelligence">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  4. Artificial Intelligence: The Power of Customization
                </h2>
                <p className="text-lg">
                  Neit is built for the future, and we’re not just talking about performance. Neit brings AI-driven tools to the table, enhancing your coding experience with intelligent suggestions, code completion, and error detection. With Neit, you don’t just type out code—you get a tailored, AI-powered assistant that’s always at your side, ensuring that you write cleaner, faster, and smarter code.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Why Choose Neit?
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Customizable syntax:</span> Make Neit fit your exact needs.
                  </li>
                  <li>
                    <span className="font-semibold">Speed and performance:</span> Optimize your code for lightning-fast execution.
                  </li>
                  <li>
                    <span className="font-semibold">AI-assisted coding:</span> Get help from intelligent tools that make programming more efficient.
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg">
                  Neit is a game-changer in the world of programming languages. With its Semigen Engine, super-powered compiler, Rust-based interpreter, and AI tools, it offers the flexibility, speed, and magic you need to create anything you can imagine. Whether you’re a newbie or a coding pro, Neit helps you bring your vision to life in the most efficient and fun way possible.
                </p>
                <p className="text-lg">
                  So, what are you waiting for? Give Neit a try today and experience the next evolution in programming. Speed, power, flexibility—it’s all yours. Welcome to the future of coding. It’s Neit. It’s awesome. It’s ready for you!
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
