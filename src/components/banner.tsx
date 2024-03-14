const Banner = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl py-16 px-10 lg:flex lg:h-auto lg:items-center">
          <div className="flex lg:items-center">
            <div className="w-1/2">
              <h1 className="text-2xl font-extrabold sm:text-5xl">
                Transform Your Home with Our Stunning
                <strong className="font-extrabold text-red-700 sm:block">
                  Furniture Collection
                </strong>
              </h1>
            </div>

            <div className="w-1/2">
              <p className="mt-4 sm:text-[17px]/relaxed">
                Welcome to our furniture store, where we believe that a
                well-furnished home <br />
                is a happy home. We offer a wide selection of high-quality
                furniture for every <br />
                room in your home, from cozy sofas and elegant dining sets to
                stylish <br />
                office desks and comfortable beds.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border rounded-lg p-5 mx-10">
        <div
          className="bg-cover bg-center h-[400px] text-white py-24 px-10 object-fill rounded-md"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Banner;
