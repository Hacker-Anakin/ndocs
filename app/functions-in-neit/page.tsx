import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function FunctionsInNeit() {
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
                Mastering Functions in Neit
              </h1>
              <p className="text-lg">
                Functions, referred to as ’’commands’’ in Neit, are the backbone of organized and reusable code. With Neit, defining and using functions is as simple as giving commands to your program. Whether you’re creating a basic greeting or a complex algorithm, Neit makes it seamless. Let’s dive into how functions work in Neit!
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Defining Functions
                </h2>
                <p className="text-lg">
                  In Neit, functions are defined using the <code>cmd</code> keyword. The syntax is designed to be straightforward, allowing you to focus on logic rather than boilerplate code.
                </p>
                <h3 className="text-xl font-bold text-purple">
                  Basic Function Definition
                </h3>
                <pre className="bg-gray-800 p-4 text-white">
                  cmd hi {"{"}
                  {"\n  "} (name:str)
                  {"\n  "} println hi
                  {"\n"}
                  {"}"}
                </pre>
                <p className="text-lg">
                  <strong>cmd hi:</strong> Declares a function named <code>hi</code>.
                  <br />
                  <strong>(name:str):</strong> Takes an argument <code>name</code> of type string.
                  <br />
                  <strong>println hi:</strong> Prints ’’hi’’ to the console.
                </p>

                <h3 className="text-xl font-bold text-purple">
                  Optional Arguments
                </h3>
                <pre className="bg-gray-800 p-4 text-white">
                  cmd greet {"{}"}
                </pre>
                <p className="text-lg">
                  This creates a function <code>greet</code> that doesn’t require input arguments.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Calling Functions
                </h2>
                <p className="text-lg">
                  Once your function is defined, you can call it using the <code>call</code> keyword.
                </p>

                <h3 className="text-xl font-bold text-purple">
                  Calling a Function with Arguments
                </h3>
                <pre className="bg-gray-800 p-4 text-white">
                  call hi &lbrace;’’&lbrace;’’&rbrace;’’joy’’&lbrace;’’&rbrace;’’&rbrace;
                </pre>
                <p className="text-lg">
                  This calls the <code>hi</code> function and passes ’’joy’’ as the argument.
                </p>

                <h3 className="text-xl font-bold text-purple">
                  Calling a Function Without Arguments
                </h3>
                <pre className="bg-gray-800 p-4 text-white">
                  call greet
                </pre>
                <p className="text-lg">
                  For functions without parameters, no additional input is required.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Key Features of Neit Functions
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    <strong>Simple Syntax:</strong> No verbose declarations—just focus on logic.
                  </li>
                  <li>
                    <strong>Optional Arguments:</strong> Flexibility to define functions with or without parameters.
                  </li>
                  <li>
                    <strong>Readability:</strong> The command-style structure makes your code easy to understand.
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
