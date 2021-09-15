import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Navbar from "./Navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
