import React from "react";
import HeroVideo from "@/components/homePage/heroVideo";
import HeroInfo from "@/components/homePage/heroInfo";
import Products from "@/components/homePage/products"
import StartVybing from "@/components/homePage/startVybing"
import Payout from "@/components/homePage/payout"
import FAQ from "@/components/homePage/faq"

export default function Home() {
  return (
    <main>
      <section className="py-14 lg:py-28">
        <HeroVideo />
        <HeroInfo />
      </section>
      <section className="bg-secondary">
        <Products />
      </section>
      <section>
        <StartVybing />
      </section>
      <section  className="bg-secondary">
        <Payout />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
}
