import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

export default function Layout({ children, showHero = false }: Props) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      {showHero && <Hero />}

      <div className="container  flex-1 mx-auto  py-10">{children}</div>
      <Footer />
    </div>
  );
}