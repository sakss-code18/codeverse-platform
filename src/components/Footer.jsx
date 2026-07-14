function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 py-10">

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            CodeVerse
          </h2>

          <p className="mt-3 text-gray-400">
            Learn coding and build your future with industry-focused courses.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold">
            Contact
          </h3>

          <p className="mt-3 text-gray-400">
            support@codeverse.com
          </p>

          <p className="text-gray-400">
            Mumbai, India
          </p>
        </div>

      </div>


      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">

        © 2026 CodeVerse. All rights reserved.

      </div>


    </footer>
  );
}

export default Footer;