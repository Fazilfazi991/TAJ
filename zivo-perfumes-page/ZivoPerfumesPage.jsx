import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Flower2,
  Gem,
  Gift,
  Droplets,
  Leaf,
  Flame,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const collections = [
  {
    title: "Signature Scents",
    text: "Modern classics crafted for the contemporary individual who leaves a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    icon: Sparkles,
  },
  {
    title: "Oud Collections",
    text: "Deep, intense and traditionally luxurious fragrances inspired by Middle Eastern heritage.",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80",
    icon: Gem,
  },
  {
    title: "Luxury Gift Sets",
    text: "Curated fragrance experiences designed for celebrations, milestones and meaningful moments.",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=80",
    icon: Gift,
  },
  {
    title: "Private Blends",
    text: "Distinctive compositions made for those who prefer rarity, elegance and personal expression.",
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=900&q=80",
    icon: Droplets,
  },
];

const notes = [
  {
    title: "Rare Oud",
    text: "Rich, smoky and deeply luxurious.",
    icon: Gem,
  },
  {
    title: "Damask Rose",
    text: "Soft floral elegance with timeless depth.",
    icon: Flower2,
  },
  {
    title: "Pure Amber",
    text: "Warm, sensual and long-lasting.",
    icon: Flame,
  },
  {
    title: "Sandalwood",
    text: "Creamy, smooth and grounding.",
    icon: Leaf,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
];

export default function ZivoPerfumesPage() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#F7F0E3] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1800&q=90"
            alt="Luxury perfume bottle"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#101010]/70 to-[#101010]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_45%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 max-w-4xl text-center"
        >
          <p className="tracking-[0.45em] text-[#D4AF37] uppercase text-xs md:text-sm mb-6">
            Zivo Perfumes
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            The Art of <br className="hidden md:block" />
            Unforgettable Scents.
          </h1>

          <p className="max-w-2xl mx-auto text-[#E8DDC9]/80 text-lg md:text-xl leading-relaxed mb-10">
            Crafted for elegance. Designed for legacy. Discover the essence of
            Zivo.
          </p>

          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#B88A2B] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:scale-105">
            Explore the Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
        </motion.div>
      </section>

      {/* BRAND STORY */}
      <section className="px-6 py-24 md:py-32 bg-[#101010]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
              Brand Story
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
              A Legacy of Fragrance
            </h2>

            <p className="text-[#E8DDC9]/75 text-lg leading-8 mb-6">
              Zivo Perfumes is built on the quiet power of craftsmanship. Every
              scent is composed with intention, blending rare ingredients,
              refined notes and a deep respect for traditional perfumery.
            </p>

            <p className="text-[#E8DDC9]/65 leading-8">
              From premium Oud to warm Amber, Damask Rose and Sandalwood, each
              creation is designed to feel personal, memorable and timeless — a
              fragrance that becomes part of one’s presence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/30 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1100&q=90"
              alt="Premium perfume craftsmanship"
              className="relative rounded-[2rem] w-full h-[520px] object-cover border border-[#D4AF37]/20"
            />
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="px-6 py-24 bg-[#F7F0E3] text-[#101010]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-[#B88A2B] uppercase tracking-[0.35em] text-xs mb-5">
              The Collections
            </p>

            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Crafted for Every Signature
            </h2>

            <p className="text-black/60 text-lg leading-8">
              Explore a refined selection of fragrances made for identity,
              celebration and everyday sophistication.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-[1.8rem] overflow-hidden bg-white shadow-xl border border-black/5"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#D4AF37] text-black flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                    <p className="text-black/60 leading-7 text-sm">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24 md:py-32 bg-[#101010]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
          >
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
                Visual Gallery
              </p>

              <h2 className="font-serif text-4xl md:text-6xl">
                The Zivo Experience
              </h2>
            </div>

            <p className="max-w-md text-[#E8DDC9]/65 leading-8">
              Atmospheric, elegant and sensory — every detail of Zivo is created
              to feel premium before the first spray.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/15 ${
                  index === 0 || index === 3
                    ? "md:col-span-2 md:h-[420px]"
                    : "md:col-span-1 md:h-[420px]"
                }`}
              >
                <img
                  src={image}
                  alt="Zivo luxury perfume experience"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="px-6 py-24 bg-[#151515]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs mb-5">
              The Notes
            </p>

            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Ingredients of Distinction
            </h2>

            <p className="text-[#E8DDC9]/65 text-lg leading-8">
              The soul of every Zivo fragrance lies in carefully selected notes
              that create richness, depth and lasting character.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {notes.map((note, index) => {
              const Icon = note.icon;

              return (
                <motion.div
                  key={note.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[1.8rem] bg-[#101010] border border-[#D4AF37]/15 p-8 text-center hover:border-[#D4AF37]/50 transition"
                >
                  <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6A1F] text-black flex items-center justify-center">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-serif text-2xl mb-3">{note.title}</h3>
                  <p className="text-[#E8DDC9]/60 leading-7">{note.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="relative px-6 py-28 bg-[#F7F0E3] text-[#101010] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.28),transparent_50%)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto text-center"
        >
          <p className="text-[#B88A2B] uppercase tracking-[0.35em] text-xs mb-5">
            Discover Zivo
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            Find Your Signature Scent
          </h2>

          <p className="max-w-2xl mx-auto text-black/60 text-lg leading-8 mb-10">
            Step into the world of Zivo Perfumes and experience fragrances
            crafted for elegance, confidence and unforgettable presence.
          </p>

          <button className="group inline-flex items-center gap-3 rounded-full bg-[#101010] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#F7F0E3] transition-all duration-300 hover:bg-black">
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
