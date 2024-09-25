import NavMenu from "./components/NavMenu";
import SocialLinks from "./components/SocialLinks"



export default function Home() {
  return (
   <main className=" flex h-screen bg-red-50">
      <HomeElement>LEFT</HomeElement>
      <HomeElement>
        <NavMenu />
      </HomeElement>
      <SocialLinks />
   </main>
  );
}

export function HomeElement({children}){
  return(
    <div className="flex-1 h-screen bg-black flex justify-center items-center">
      {children}
    </div>
  )
}