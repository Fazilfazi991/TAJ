import React from "react";
import { motion } from "framer-motion";
import {
  PackageCheck,
  ShieldCheck,
  Factory,
  Recycle,
  Leaf,
  Boxes,
  Truck,
  BadgeCheck,
  Layers,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const slideUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const specializations = [
  {
    title: "Food-Grade Packaging",
    description:
      "Certified safety-first packaging solutions for the F&B industry, built for freshness, hygiene, and compliance.",
    icon: PackageCheck,
  },
  {
    title: "Industrial Wraps",
    description:
      "Heavy-duty protection for logistics, storage, manufacturing, exports, and GCC supply-chain movement.",
    icon: Layers,
  },
  {
    title: "Custom Branding",
    description:
      "Tailored packaging designs that enhance visibility, improve shelf appeal, and strengthen brand recall.",
    icon: BadgeCheck,
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "Recyclable and biodegradable packaging options designed to reduce waste and support greener operations.",
    icon: Recycle,
  },
];

const whyChoose = [
  {
    title: "Durability",
    description:
      "Engineered for tough GCC climates, demanding handling, and long-distance logistics.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance",
    description:
      "Manufactured to meet international safety, quality, and packaging standards.",
    icon: ClipboardCheck,
  },
  {
    title: "Scalability",
    description:
      "From small custom runs to large-volume industrial supply, we scale with your business.",
    icon: Factory,
  },
];

const gallery = [
  {
    title: "Eco-Friendly Boxes",
    image:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehouse Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Packaging",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Branded Containers",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Protective Wraps",
    image:
      "https://images.unsplash.com/photo-1595246007497-15c9017c40cc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Export Packaging",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TajPackagingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 py-24 bg-[#0B1F3A] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=90"
            alt="Warehouse logistics packaging"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.22),transparent_35%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm text-emerald-200 mb-6">
              <Leaf size={16} />
              Sustainable Industrial Packaging
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-7">
              Packaging That Protects & Empowers Your Brand.
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-slate-200 leading-8 mb-10">
              Innovative, sustainable, and custom-engineered packaging solutions
              for the Middle East’s leading industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400">
                Request a Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/15">
                View Solutions
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideRight}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6">
                <Boxes className="text-emerald-300 mb-8" size={36} />
                <h3 className="text-4xl font-extrabold mb-2">B2B</h3>
                <p className="text-slate-300">
                  Packaging for industrial supply chains
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-500 p-6 text-white mt-12">
                <Recycle className="mb-8" size={36} />
                <h3 className="text-4xl font-extrabold mb-2">Eco</h3>
                <p className="text-emerald-50">
                  Recyclable and responsible material options
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-slate-900 -mt-4">
                <Truck className="text-[#0B1F3A] mb-8" size={36} />
                <h3 className="text-4xl font-extrabold mb-2">GCC</h3>
                <p className="text-slate-600">
                  Built for regional logistics demands
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-400/30 bg-white/10 backdrop-blur p-6">
                <ShieldCheck className="text-emerald-300 mb-8" size={36} />
                <h3 className="text-4xl font-extrabold mb-2">Safe</h3>
                <p className="text-slate-300">
                  Quality-focused and compliance-ready
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SPECIALIZATIONS */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="max-w-3xl mb-14"
          >
            <p className="text-emerald-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              Core Specializations
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A] mb-5">
              Structured Packaging Solutions for Modern Industries
            </h2>

            <p className="text-slate-600 text-lg leading-8">
              From food-grade safety to export-ready industrial protection, Taj
              Packaging delivers dependable solutions for businesses that need
              consistency, durability, and brand impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-7 group-hover:bg-emerald-500 group-hover:text-white transition">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-7 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="relative"
          >
            <div className="absolute -inset-5 bg-emerald-200/50 rounded-[2rem] blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1200&q=90"
              alt="Eco-friendly packaging boxes"
              className="relative w-full h-[520px] object-cover rounded-[2rem] border border-slate-200"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <p className="text-emerald-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              Sustainability Commitment
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A] mb-7">
              The Future is Green.
            </h2>

            <p className="text-slate-600 text-lg leading-8 mb-6">
              Taj Packaging supports businesses in reducing environmental impact
              through responsible material choices, recyclable packaging systems,
              and circular economy principles.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Our focus is to help brands protect their products while building
              more sustainable supply chains — without compromising on quality,
              durability, or presentation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Recycle className="text-emerald-600 mb-4" size={28} />
                <h4 className="font-extrabold text-[#0B1F3A] mb-2">
                  Recyclable Materials
                </h4>
                <p className="text-sm text-slate-600 leading-6">
                  Smarter packaging options for responsible businesses.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Leaf className="text-emerald-600 mb-4" size={28} />
                <h4 className="font-extrabold text-[#0B1F3A] mb-2">
                  Lower Impact
                </h4>
                <p className="text-sm text-slate-600 leading-6">
                  Designed to reduce waste across the product lifecycle.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-emerald-300 font-bold uppercase tracking-[0.25em] text-sm mb-4">
              Technical Specs / Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
              Built for Performance, Quality, and Scale
            </h2>

            <p className="text-slate-300 text-lg leading-8">
              We combine technical expertise, practical manufacturing knowledge,
              and regional market understanding to deliver packaging that works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl bg-white/10 border border-white/10 p-8 backdrop-blur hover:bg-white/15 transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-extrabold mb-4">{item.title}</h3>

                  <p className="text-slate-300 leading-8">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
          >
            <div>
              <p className="text-emerald-600 font-bold uppercase tracking-[0.25em] text-sm mb-4">
                Portfolio Gallery
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A]">
                Packaging Types We Deliver
              </h2>
            </div>

            <p className="max-w-md text-slate-600 leading-8">
              Explore packaging formats designed for retail, logistics,
              manufacturing, exports, and industrial use.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-extrabold text-[#0B1F3A]">
                    {item.title}
                  </h3>

                  <ArrowRight
                    size={20}
                    className="text-emerald-600 group-hover:translate-x-1 transition"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="max-w-7xl mx-auto rounded-[2rem] bg-[#0B1F3A] text-white overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-14 lg:p-16">
              <p className="text-emerald-300 font-bold uppercase tracking-[0.25em] text-sm mb-5">
                Work With Us
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Partner with Taj Packaging
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-9">
                Whether you need sustainable retail packaging, food-grade
                solutions, or industrial-scale protective systems, Taj Packaging
                is ready to support your next phase of growth.
              </p>

              <button className="group inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-400">
                Get a Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>

            <div className="relative min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=90"
                alt="Industrial warehouse logistics"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
