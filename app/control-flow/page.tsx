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
        <div className="mx-auto">
          <div className="bg-gray-900 text-white">
            <div className="bg-gray-800 py-8 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Mastering Control Flow in Neit
              </h1>
              <p className="text-lg">
                Control flow is the cornerstone of programming logic, determining how your code behaves based on conditions and loops. Neit offers an intuitive way to implement conditional statements and loops, ensuring that your code remains easy to read and powerful to execute. Let’s explore how control flow works in Neit!
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-purple mb-4">
                  1. While Loop
                </h2>
                <p className="text-lg">
                  The <strong>while</strong> loop in Neit is perfect for repeating a block of code as long as a specified condition is true.
                </p>

                <h3 className="text-xl font-bold text-purple">Syntax</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  while (condition) &lbrace;
                  {"\n  "}#code
                  {"\n"}&rbrace;
                </pre>
                <p className="text-lg">
                  <strong>condition:</strong> A Boolean expression that determines if the loop will execute.
                  <br />
                  <strong>#code:</strong> The block of code to execute while the condition is true.
                </p>

                <h3 className="text-xl font-bold text-purple">Example</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may count = 0
                  {"\n"}while (count &lt; 5) &lbrace;
                  {"\n  "}println &lbrace;count&rbrace;
                  {"\n  "}count = count + 1
                  {"\n"}&rbrace;
                </pre>
                <p className="text-lg">
                  This loop prints numbers from 0 to 4.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  2. Conditional Statements
                </h2>
                <p className="text-lg">
                  Conditional statements are the backbone of decision-making in Neit. The <strong>if</strong> statement executes code blocks based on whether a condition is true.
                </p>

                <h3 className="text-xl font-bold text-purple">Syntax</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  if (condition) &lbrace;
                  {"\n  "}#code
                  {"\n"}&rbrace;
                </pre>
                <p className="text-lg">
                  <strong>condition:</strong> A Boolean expression.
                  <br />
                  <strong>#code:</strong> The block of code to execute if the condition evaluates to true.
                </p>

                <h3 className="text-xl font-bold text-purple">Example</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may age = 18
                  {"\n"}if (age &gt;= 18) &lbrace;
                  {"\n  "}println You are an adult.
                  {"\n"}&rbrace;
                </pre>
                <p className="text-lg">
                  This checks if the value of <code>age</code> is 18 or more and prints a message accordingly.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  3. Combining Conditions with String Comparison
                </h2>
                <p className="text-lg">
                  Neit allows for seamless comparison of strings within conditional statements, making user input processing effortless.
                </p>

                <h3 className="text-xl font-bold text-purple">Example</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  may name = takein()
                  {"\n"}if (name == &quot;joy&quot;) &lbrace;
                  {"\n  "}println Hello Joy!!!
                  {"\n"}&rbrace;
                </pre>
                <p className="text-lg">
                  <strong>takein():</strong> Reads user input.
                  <br />
                  <strong>if (name == &quot;joy&quot;):</strong> Compares the input to &quot;joy&quot;.
                  <br />
                  <strong>println:</strong> Outputs a personalized greeting if the condition is true.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Key Features of Neit Control Flow
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    <strong>Simple Syntax:</strong> Neit’s syntax is clean and beginner-friendly.
                  </li>
                  <li>
                    <strong>Flexibility:</strong> Use loops and conditions to build dynamic, interactive programs.
                  </li>
                  <li>
                    <strong>Efficiency:</strong> Lightweight and powerful tools to control your program’s logic.
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
