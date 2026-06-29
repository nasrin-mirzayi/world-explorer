import Link from "next/link";

export default function Home(){


  return(
    <div>

      <h1 className="text-center text-2xl text-yellow-300 "> welcome to world explorer.<br></br> 
      dive into deepest parts of your favorite countries</h1> 

    <div className="relative">
      <img src="/images.png" className=" h-[80vh] w-full object-cover" ></img>

     
  <div className="absolute buttom-24 left-1/2 -translate-x-1/2">
  <Link
    href="/countries"
    className="group inline-flex items-center gap-3 rounded-full border border-yellow-300/40 bg-white/10 px-10 py-4 text-lg font-medium tracking-wide text-yellow-100 backdrop-blur-lg shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all duration-300 hover:scale-105 hover:bg-yellow-400/15 hover:border-yellow-300/70 hover:shadow-[0_0_40px_rgba(251,191,36,0.45)]"
  >
    ✦ Explore Now
    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
    
    </div>


    

    </div>
  )
}