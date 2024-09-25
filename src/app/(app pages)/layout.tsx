import SocialLinks from "../components/SocialLinks"
import BackBtn from "../components/BackBtn"

export default function PagesLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="bg-zinc-100 min-h-screen flex justify-center"  >
        <div className="w-4/5 border-solid border-2 border-black">
            {children}
        </div>
        <BackBtn />
        <SocialLinks />
      </main>
    )
  }