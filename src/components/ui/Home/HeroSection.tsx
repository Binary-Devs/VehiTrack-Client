export default function HeroSection() {
  return (
    <section className=" rounded-xl">

    <div className="relative bg-[url(https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat  my-2 max-h-[80vh] rounded-lg">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-700">
              {" "}
              Vehicle.{" "}
            </strong>
          </h1>

          <p className="mt-7 max-w-lg sm:text-xl/relaxed ">
          Lobortis pretium si sapien vitae habitant justo adipiscing sagittis vivamus interdum felis magna magnis diam lectus faucibus porta sodales vehicula aptent neque vestibulum rhoncus mollis nunc pellentesque euismod
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
