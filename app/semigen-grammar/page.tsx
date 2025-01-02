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
        <div className="container mx-auto">
          <div className="bg-gray-900 text-white">
            <div className="bg-gray-800 py-8 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Unleashing Creativity with Neit’s Semigen Grammar
              </h1>
              <p className="text-lg">
                Programming languages often come with fixed syntax, but what if you could customize how your code looks and behaves? That’s exactly what Neit’s <strong>Semigen Grammar</strong> offers—an innovative feature that lets you redefine commands to suit your unique coding style. With Semigen Grammar, Neit puts the power of syntax customization in your hands!
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  What is Semigen Grammar?
                </h2>
                <p className="text-lg">
                  Semigen Grammar in Neit allows you to replace existing commands with custom alternatives. Think of it as a way to speak your own programming language while still benefiting from Neit’s robust engine. By redefining commands, you can create syntax that feels natural to you or your team, enhancing readability and productivity.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Syntax for Customization
                </h2>
                <p className="text-lg">
                  To customize commands, use the following syntax:
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  &lt;original_command&gt; ~ &lt;replacement&gt;
                </pre>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li><strong>original_command:</strong> The default Neit command you want to replace.</li>
                  <li><strong>replacement:</strong> Your new custom command.</li>
                </ul>

                <h3 className="text-xl font-bold text-indigo-300">Example</h3>
                <pre className="bg-gray-800 p-4 text-white">
                  print ~ say
                </pre>
                <p className="text-lg">
                  Now, instead of writing:
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  print Hello World
                </pre>
                <p className="text-lg">
                  You can write:
                </p>
                <pre className="bg-gray-800 p-4 text-white">
                  say Hello World
                </pre>
                <p className="text-lg">
                  The functionality remains the same, but the style is entirely yours!
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Benefits of Semigen Grammar
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li><strong>Personalized Syntax:</strong> Create commands that resonate with your workflow or project requirements.</li>
                  <li><strong>Enhanced Readability:</strong> Use terms familiar to your domain or audience for clearer code comprehension.</li>
                  <li><strong>Collaboration-Friendly:</strong> Adapt Neit’s syntax to match team conventions or project-specific standards.</li>
                  <li><strong>Fun and Creativity:</strong> Make coding enjoyable by introducing playful or thematic commands.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Practical Applications
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li><strong>Industry-Specific Customization:</strong> If you’re working in finance, redefine terms to align with industry jargon.
                    <pre className="bg-gray-800 p-4 text-white">
                      print ~ logTransaction
                    </pre>
                  </li>
                  <li><strong>Educational Tools:</strong> Simplify commands for students or beginners to make learning intuitive.
                    <pre className="bg-gray-800 p-4 text-white">
                      print ~ show
                    </pre>
                  </li>
                  <li><strong>Thematic Coding:</strong> Create a fun coding experience for themed projects.
                    <pre className="bg-gray-800 p-4 text-white">
                      print ~ castSpell
                    </pre>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg">
                  Neit’s Semigen Grammar is more than just a feature—it’s a revolution in programming language design. By empowering developers to redefine syntax, Neit transforms coding into a deeply personal and flexible experience. Whether you want to make your code more readable, align it with specific workflows, or just have fun, Semigen Grammar is your tool for ultimate customization.
                </p>
                <p className="text-lg">
                  Dive into Semigen Grammar today and let your creativity shine—because in Neit, the language evolves with you!
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
