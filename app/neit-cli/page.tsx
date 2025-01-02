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
                Neit Command-Line Interface (CLI): Empowering Your Coding Workflow
              </h1>
              <p className="text-lg">
                Neit is designed to be as intuitive and user-friendly as possible, and its Command-Line Interface (CLI) is no exception. Whether you’re running code in the interpreter or compiling it into high-performance C code, Neit makes the process smooth and efficient. Here’s a breakdown of the key CLI commands and options you’ll use when working with Neit.
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12" id="main-commands">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  1. Run Command: Execute Neit Code Instantly
                </h2>
                <p className="text-lg">
                  Running your Neit code has never been easier. With just one command, you can execute your code in the interpreter and see it in action.
                </p>
                <pre className="bg-gray-700 text-white p-4 rounded-md">
                  <code className="font-mono">neit run filename.nsc</code>
                </pre>
                <p className="text-lg">
                  This command instantly runs the specified .nsc file (Neit’s source code file) in the interpreter, allowing you to see your code work without needing a compiler setup.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  2. Build Command: Generate Optimized C Code
                </h2>
                <p className="text-lg">
                  When you’re ready to compile your Neit code into C for better performance, the build command steps in. This command generates and compiles C code from your .nsc file using the Clang compiler.
                </p>
                <pre className="bg-gray-700 text-white p-4 rounded-md">
                  <code className="font-mono">neit build filename.nsc</code>
                </pre>
                <p className="text-lg">
                  By using this command, you can leverage Neit’s powerful super-charged compiler to generate optimized C code for lightning-fast performance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4" id="options">
                  Command-Line Options
                </h2>
                <ul className="space-y-6">
                  <li>
                    <h3 className="text-xl font-semibold text-purple">Display Help: -h or --help</h3>
                    <p className="text-lg">
                      Stuck on a command? Neit’s help feature is just a flag away. The -h or --help option displays a helpful guide for all available commands and options.
                    </p>
                    <pre className="bg-gray-700 text-white p-4 rounded-md">
                      <code className="font-mono">neit -h</code>
                    </pre>
                  </li>

                  <li>
                    <h3 className="text-xl font-semibold text-purple">Optimization Levels: -opt=&lt;level&gt;</h3>
                    <p className="text-lg">
                      For those who want to fine-tune their code, the -opt option allows you to specify an optimization level for compiling C code. Optimization levels range from 1 (basic) to 4 (maximum performance).
                    </p>
                    <pre className="bg-gray-700 text-white p-4 rounded-md">
                      <code className="font-mono">neit build filename.nsc -opt=2</code>
                    </pre>
                  </li>

                  <li>
                    <h3 className="text-xl font-semibold text-purple">Specify Output File Name: -o=&lt;name&gt;</h3>
                    <p className="text-lg">
                      Need to name your output file something specific? Use the -o option to specify your desired output filename after the code is compiled.
                    </p>
                    <pre className="bg-gray-700 text-white p-4 rounded-md">
                      <code className="font-mono">neit build filename.nsc -o=mybinary</code>
                    </pre>
                  </li>

                  <li>
                    <h3 className="text-xl font-semibold text-purple">Retain C Files After Building: --retain-c or -rc</h3>
                    <p className="text-lg">
                      If you’d like to keep the generated C files after building, the --retain-c flag ensures the files remain in your project folder.
                    </p>
                    <pre className="bg-gray-700 text-white p-4 rounded-md">
                      <code className="font-mono">neit build filename.nsc -retain-c</code>
                    </pre>
                  </li>

                  <li>
                    <h3 className="text-xl font-semibold text-purple">Clear Screen Before Running: -cls</h3>
                    <p className="text-lg">
                      For a clean slate before running your code, use the -cls flag to clear the terminal screen.
                    </p>
                    <pre className="bg-gray-700 text-white p-4 rounded-md">
                      <code className="font-mono">neit run filename.nsc -cls</code>
                    </pre>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
