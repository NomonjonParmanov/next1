import Header from "@/components/header/Header";
import Sale from "@/components/sale/Sale";
import AboutUs from "@/components/aboutUs/AboutUs";
import Premium from "@/components/premium/Premium";
import Choose from "@/components/choose/Choose";
export default function Home() {
  return (
    <div>
      <Header />
      <Sale />
      <AboutUs />
      <Premium />
      <Choose />
    </div>
  );
}
