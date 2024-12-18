import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import About from "@/components/About";
import { CardDemo } from "@/components/CardDemo";
import Events from "@/components/Events";
import Product_services from "@/components/Product_services";

export default function Home() {
  return (
    <div>
    <Hero/>
    {/* <About/> */}
    <CardDemo/>
    <Events/>
    <Product_services/>
    <Teams/>
    </div>
  );
}
