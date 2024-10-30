import SocialLinks from "../components/SocialLinks"
import BackBtn from "../components/BackBtn"
import HeaderNav from "../components/HeaderNav"

export default function PagesLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="bg-zinc-100 min-h-screen flex justify-center"  >
        <header>
          <BackBtn />
          <HeaderNav />
        </header>
        <div className="w-4/5 py-24">
            {children}
        </div>
      </main>
    )
  }