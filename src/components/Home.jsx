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
            <p className="text-[#4d4dff]">const <span className="text-[#19ccbd] ">githubLink</span> <a href="https://github.com/gaellebega" className="text-red-300" target="_blank">https://github.com/gaellebega</a></p>
          </div>

        </div>

        <div className="w-1/2 relative  bg-gradient-to-r from-[#0b1120] via-[#0f766e] to-[#4338ca] text-white p-8 ">
          <div className="absolute bg-white backdrop-blur-md border-white rounded-lg">
            <div className="absolute bg-[#0b1120] ml-14  h-screen w-60 rounded-md ">
              <div>
                <p className=" font-bold text-2xl text-[#19ccbd] drop-shadow-[0_0_8px_rgba(25,204,189,0.7)]">SNAKE GAME</p>
                <p className="text-[#19ccbd]">PRESS TO START TO PLAY</p>

                <p className="bg-[#e8a62a]  rounded-md h-10 w-16 text-[#0b1120]">start game</p>
                  <p className="  rounded-md border-1 border-white  h-10 w-16 text-white">skip game</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home