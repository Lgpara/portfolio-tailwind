import localFont from "next/font/local";
import "./globals.css";
import "./customAnim.css"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const protestGuerrillaRegular = localFont({
  src: "./fonts/ProtestGuerrilla-Regular.woff2",
  variable: "--customFont-1"
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      </head>

      <body className={`${protestGuerrillaRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
