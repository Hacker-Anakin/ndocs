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
                Neit Syntax: Crafting Your Code with Ease
              </h1>
              <p className="text-lg">
                Neit offers a flexible and user-friendly syntax that empowers you to write clean, efficient code in no time. Whether you’re declaring variables, printing messages, or handling user input, Neit simplifies the process. Here’s a breakdown of Neit’s core syntax elements to help you get started!
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Variable Declaration
                </h2>
                <p className="text-lg">
                  In Neit, declaring variables is as simple as saying ’’may’’ followed by the variable name and its value. The syntax is intuitive and allows for easy manipulation of data.
                </p>
                <h3 className="text-xl font-bold text-purple">String:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may name = ’’joy’’
                </pre>
                <p className="text-lg">
                  This creates a string variable name with the value ’’joy’’.
                </p>
                <h3 className="text-xl font-bold text-purple">Integer:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may age = 16
                </pre>
                <p className="text-lg">
                  Here, we declare an integer age with the value 16.
                </p>
                <h3 className="text-xl font-bold text-purple">Float:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may height = 16.2
                </pre>
                <p className="text-lg">
                  For floating-point numbers, you can use the ’’may’’ keyword, followed by the variable name and its decimal value.
                </p>
                <h3 className="text-xl font-bold text-purple">Reference Another Variable:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may name2 = name
                </pre>
                <p className="text-lg">
                  Neit allows you to reference another variable, so name2 will hold the value of name.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Reassigning Values
                </h2>
                <p className="text-lg">
                  Reassigning a value to an existing variable is straightforward in Neit:
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  name = ’’yoj’’
                </pre>
                <p className="text-lg">
                  Here, the name variable is updated with a new value, ’’yoj’’.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Print Statements
                </h2>
                <p className="text-lg">
                  Neit makes it simple to print messages to the console, whether it’s static text or the value of a variable.
                </p>
                <h3 className="text-xl font-bold text-purple">Normal Text:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  print Hello World
                </pre>
                <p className="text-lg">
                  This prints ’’Hello World’’ to the console.
                </p>
                <h3 className="text-xl font-bold text-purple">Variable:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  print &lbrace;name&rbrace;
                </pre>
                <p className="text-lg">
                  If you want to print the value stored in a variable, simply wrap the variable name in curly braces.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Comments
                </h2>
                <p className="text-lg">
                  Neit supports both single-line and multi-line comments to help you document your code clearly.
                </p>
                <h3 className="text-xl font-bold text-purple">Single-Line Comment:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  # This is a comment
                </pre>
                <p className="text-lg">
                  Single-line comments are preceded by a # symbol.
                </p>
                <h3 className="text-xl font-bold text-purple">Multi-Line Comment:</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  ## This is a
                  multi-line comment ##
                </pre>
                <p className="text-lg">
                  For multi-line comments, wrap the text in ## at both the beginning and end.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Input from User
                </h2>
                <p className="text-lg">
                  Neit allows you to easily take input from the user and store it in a variable.
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  may name = takein()
                  print &lbrace;name&rbrace;
                </pre>
                <p className="text-lg">
                  This code prompts the user to enter their name, stores it in the variable name, and then prints the value.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Clear Screen
                </h2>
                <p className="text-lg">
                  To clear the console screen, simply use the cls command:
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  cls
                </pre>
                <p className="text-lg">
                  This clears the terminal before running your code, helping you keep the workspace neat.
                </p>
              </section>
            </div>
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
