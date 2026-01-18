// Reversa – Full Ecommerce Website (Next.js + Tailwind)
// ================================================
// This is a COMPLETE, scalable starter for your brand REVERSA
// You can push this directly to your GitHub repo and run it

// IMPORTANT FIX ⚠️
// =================
// The error you are seeing is NOT about decorators.
// It happens because MULTIPLE FILE TYPES (config, css, components)
// were pasted into a SINGLE index.tsx file.
// Next.js tries to parse it as React code and fails.

// ---------------- CORRECT STRUCTURE ----------------
// You MUST split this into separate files as shown below.
// DO NOT put tailwind.config.js or CSS inside index.tsx.


// ==================================================
// FILE 4: pages/index.tsx  (INSPIRED D2C LAYOUT)
// ==================================================
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="bg-light text-dark">
      {/* HERO – inspired by Plix / Setu / Moxie */}
      <section className="relative px-8 py-32 bg-gradient-to-br from-[#6C4CFF]/10 via-[#FF5DA2]/10 to-[#00E5A8]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Feel younger.
              <br />From within.
            </h1>
            <p className="text-lg opacity-80 mb-8">
              High‑potency effervescent nutrition designed to support glow, energy, and biological balance.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full">
                Shop Super Glow
              </button>
              <button className="border border-dark/20 px-8 py-4 rounded-full">
                View Science
              </button>
            </div>
          </div>
          <div className="h-[420px] rounded-3xl bg-dark/90 flex items-center justify-center text-white">
            <span className="opacity-60">Product Visual</span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-8 py-16 border-t border-b border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
          <div>Clinically studied ingredients</div>
          <div>High‑absorption effervescent</div>
          <div>GMP manufactured</div>
          <div>No unnecessary fillers</div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Best Sellers</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <ProductCard
              title="Super Glow"
              desc="Glutathione effervescent for skin radiance and antioxidant support."
              slug="super-glow"
            />
            <ProductCard
              title="Burn Flow"
              desc="L‑Carnitine effervescent for energy, metabolism, and performance."
              slug="burn-flow"
            />
          </div>
        </div>
      </section>

      {/* WHY REVERSA */}
      <section className="px-8 py-24 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Reversa</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Designed for today</h3>
              <p className="text-sm opacity-70">Formulations built for modern stress, diet, and lifestyle.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backed by science</h3>
              <p className="text-sm opacity-70">Ingredients chosen for evidence, not trends.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Crafted with care</h3>
              <p className="text-sm opacity-70">Clean labels and thoughtful dosages.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Built for you</h3>
              <p className="text-sm opacity-70">Simple routines that fit daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION STRIP */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Learn with Reversa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-dark text-white p-6">What is biological age?</div>
            <div className="rounded-2xl bg-dark text-white p-6">Why glutathione matters</div>
            <div className="rounded-2xl bg-dark text-white p-6">Effervescent vs capsules</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-32 bg-gradient-to-r from-primary to-accent text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Start your Reversa routine</h2>
        <p className="opacity-90 mb-8">Two products. One simple daily habit.</p>
        <button className="bg-white text-dark px-10 py-4 rounded-full">
          Shop Now
        </button>
      </section>
    </main>
  );
}
