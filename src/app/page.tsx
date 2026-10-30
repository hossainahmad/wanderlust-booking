import { Nav } from "@/components/nav";
import { Banner } from "@/components/banner";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <WhyChoose />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
