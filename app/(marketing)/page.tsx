import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heros";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 md:justify-start flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
