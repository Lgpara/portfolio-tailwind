import Header from "../components/Header"

export default function PagesLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        <main className="bg-zinc-100 min-h-screen flex justify-center"  >
          <div className="w-4/5 py-24">
              {children}
          </div>
        </main>
      </>
    )
  }