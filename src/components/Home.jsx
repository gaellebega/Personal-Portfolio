function Home() {
  return (
    <>
      <section className="flex ">
        <div className="w-1/2  bg-[#0b1120] h-screen">
        <p className="text-gray-500">Hi all. I am</p>
        <h3 className="text-4xl">ISHAMI Gaelle Bega</h3>
        <p className="text-[#4d4dff] text-2xl"><span className="ml-1">{">"}</span>Front-end developer</p>

        <div>
          <p className="text-gray-500">//find my profle on Github:</p>
          <p className="text-[#4d4dff]">const <span className="text-[#19ccbd]">githubLink</span> <a li="https://github.com/gaellebega" className="text-red-300">https://github.com/gaellebega</a></p>
        </div>

        </div>

        <div className="w-1/2 bg-gradient-to-r from-[#0b1120] via-[#0f766e] to-[#4338ca] text-white p-8 rounded-lg">
        right content
        </div>

      </section>
    </>
  )
}

export default Home