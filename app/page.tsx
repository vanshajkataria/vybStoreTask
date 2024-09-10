import React from "react";
import HeroVideo from "@/components/homePage/heroVideo";
import HeroInfo from "@/components/homePage/heroInfo";
import Products from "@/components/homePage/products";
import StartVybing from "@/components/homePage/startVybing";
import Payout from "@/components/homePage/payout";
import FAQ from "@/components/homePage/faq";

export default function Home() {
  return (
    <main className="transition-all">
      <section className="py-14 lg:py-28">
        <HeroVideo />
        <div className="px-12 py-12">
          <HeroInfo />
        </div>
      </section>
      <section className="bg-secondary">
        <Products />
      </section>
      <section>
        <StartVybing />
      </section>
      <section className="bg-secondary">
        <Payout />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
}
