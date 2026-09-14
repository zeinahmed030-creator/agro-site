import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata={title:"AgroCommunity",description:"Connect, learn, collaborate and grow through sustainable agriculture."};
export default function RootLayout({children}){return <><Header/>{children}<Footer/></>}
