import Link from "next/link";

export default function Home(){


  return(
    <div>

      <h1 className="text-center text-2xl text-yellow-300 "> welcome to world explorer.<br></br> 
      dive into deepest parts of your favorite countries</h1> 

    <div className="relative">
      <img src="/images.png" className=" h-[80vh] w-full object-cover" ></img>

       <Link href={"/countries"} 
       className=" rounded-full bg-yellow-400"> explore</Link>
    
    </div>


    

    </div>
  )
}