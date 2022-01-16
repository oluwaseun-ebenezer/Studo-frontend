export default function Home() {
  return (
    <div>
      <header>
        <title>Vehicle Description</title>
        <meta name="description" content="Task Scheduling App" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main>
        <div className="grid grid-cols-5 min-h-screen">
          <div className="flex flex-col gap-8">
            <a href="/" className="text-center my-8 font-bold text-lg">
              Vehicle Description
            </a>
            <nav>
              <a
                href="/"
                className="block px-8 py-2 hover:border-l-8 border-indigo-800 my-2 text-gray-700 hover:text-black font-medium"
              >
                VIN Prediction
              </a>
              <a
                href="/"
                className="block px-8 py-2 hover:border-l-8 border-indigo-800 my-2 text-gray-700 hover:text-black font-medium"
              >
                License Plate Classification
              </a>
              <a
                href="/"
                className="block px-8 py-2 hover:border-l-8 border-indigo-800 my-2 text-gray-700 hover:text-black font-medium"
              >
                License Plate Detection
              </a>
              <a
                href="/"
                className="block px-8 py-2 hover:border-l-8 border-indigo-800 my-2 text-gray-700 hover:text-black font-medium"
              >
                Vehicle View Classification
              </a>
            </nav>
          </div>
          <div className="col-span-4 bg-gray-100 py-12">
            <div className="text-center text-xl font-bold mb-12 mx-4">
              VIN Prediction
            </div>

            <div className="flex justify-center">
              <form
                method="post"
                action="LP_app"
                enctype="multipart/form-data"
                className="flex flex-col items-center"
              >
                <input type="file" name="file" autocomplete="off" required />
                <input
                  type="submit"
                  value="SUBMIT"
                  className="my-8 bg-indigo-700 text-white px-8 py-2 font-medium tracking-wider hover:cursor-pointer"
                />
              </form>
            </div>

            <div className="mx-4 flex justify-center gap-16">
              <div>
                <p className="font-bold text-base text-center my-8">
                  THIS IMAGE IS UNACCEPTABLE
                </p>

                <div className="flex flex-col sm:flex-row gap-12">
                  <img
                    src="{{ url_for('display_image', filename=filename) }}"
                    width="400"
                    height="400"
                    className="object-contain"
                  />
                  <div className="flex flex-col justify-center gap-4">
                    <button
                      id="yes"
                      className="bg-green-700 py-2 px-8 text-white font-medium tracking-wider"
                    >
                      YES
                    </button>
                    <button
                      id="no"
                      className="bg-red-700 py-2 px-8 text-white font-medium tracking-wider"
                    >
                      NO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
