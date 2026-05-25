import React from "react";
import { motion } from "framer-motion";
import {
  Recycle,
  Factory,
  Truck,
  ShieldCheck,
  HardHat,
  Hammer,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  PackageCheck,
  Leaf,
  AlertTriangle,
  Cog,
} from "lucide-react";

const fadeHeavy = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const serviceCards = [
  {
    title: "Dismantling & Demolition",
    description:
      "Engineering-driven site clearance, factory decommissioning, structural dismantling, and heavy machinery removal for industrial projects.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Scrap Processing",
    description:
      "Advanced sorting, handling, and processing of ferrous, non-ferrous, and non-metallic materials for reuse and resale.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=90",
  },
];

const impactStats = [
  {
    value: "1M+",
    label: "Tons",
    description: "Processed Annually",
  },
  {
    value: "15+",
    label: "Years",
    description: "Industrial Expertise",
  },
  {
    value: "Zero-Waste",
    label: "Goal",
    description: "Driving the Circular Economy",
  },
];

const cycle = [
  {
    title: "Collect",
    description:
      "Industrial scrap, machinery, metals, and recyclable materials are collected safely.",
    icon: Truck,
  },
  {
    title: "Process",
    description:
      "Materials are sorted, graded, processed, and prepared for reuse.",
    icon: Factory,
  },
  {
    title: "Re-use",
    description:
      "Recovered resources are redirected into productive industrial supply chains.",
    icon: RotateCcw,
  },
];

const safetyItems = [
  "Site-specific safety planning",
  "Trained industrial workforce",
  "Compliant logistics handling",
  "Controlled demolition protocols",
  "International quality standards",
  "Responsible material documentation",
];

const gallery = [
  {
    title: "Industrial Scrap Yard",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Heavy Excavator Operations",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Recycling Plant",
    image:
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Demolition Site",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Metal Processing",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Industrial Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=90",
  },
];

export default function TajRecyclePage() {
  return (
    <main className="min-h-screen bg-[#111827] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 py-24 bg-[#111827]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=90"
            alt="Heavy industrial demolition site"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-[#111827]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,140,0,0.24),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,140,0,0.08)_0%,transparent_35%,rgba(22,101,52,0.18)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="visible" variants={slideLeft}>
            <p className="inline-flex items-center gap-2 rounded-none border-l-4 border-[#FF8C00] bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-200 mb-7">
              <Recycle size={18} />
              Industrial Recycling & Resource Recovery
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Transforming Industrial Waste into Global Resources.
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-slate-300 leading-8 mb-10">
              Leading the Middle East in scrap processing and industrial
              demolition with a focus on the circular economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-3 bg-[#FF8C00] px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-orange-400">
                Enquire for Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15">
                Our Impact
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
              <div className="border border-white/10 bg-white/10 p-7 backdrop-blur">
                <HardHat className="text-[#FF8C00] mb-10" size={40} />
                <h3 className="text-5xl font-black mb-3">SAFE</h3>
                <p className="text-slate-300 leading-7">
                  Safety-first demolition and site handling.
                </p>
              </div>

              <div className="border border-green-500/30 bg-green-900/40 p-7 mt-12">
                <Leaf className="text-green-300 mb-10" size={40} />
                <h3 className="text-5xl font-black mb-3">GREEN</h3>
                <p className="text-slate-300 leading-7">
                  Circular economy focused material recovery.
                </p>
              </div>

              <div className="border border-orange-500/30 bg-[#FF8C00] p-7 text-black -mt-4">
                <Factory className="mb-10" size={40} />
                <h3 className="text-5xl font-black mb-3">SCALE</h3>
                <p className="font-semibold leading-7">
                  Built for heavy industrial operations.
                </p>
              </div>

              <div className="border border-white/10 bg-white/10 p-7 backdrop-blur">
                <ShieldCheck className="text-green-300 mb-10" size={40} />
                <h3 className="text-5xl font-black mb-3">TRUST</h3>
                <p className="text-slate-300 leading-7">
                  Compliance-led project execution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="px-6 py-20 bg-[#0B111C] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeHeavy}
              transition={{ delay: index * 0.12 }}
              className="border-l-4 border-[#FF8C00] bg-[#111827] p-8"
            >
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase mb-3">
                {stat.value}
              </h2>

              <p className="text-[#FF8C00] font-black uppercase tracking-[0.2em] mb-3">
                {stat.label}
              </p>

              <p className="text-slate-400 leading-7">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="px-6 py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeHeavy}
            className="max-w-3xl mb-16"
          >
            <p className="text-[#FF8C00] font-black uppercase tracking-[0.25em] text-sm mb-5">
              Core Services
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Industrial Solutions Built for Scale
            </h2>

            <p className="text-slate-400 text-lg leading-8">
              Taj Recycle delivers end-to-end support for heavy industries —
              from controlled dismantling to resource recovery and material
              processing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeHeavy}
                  className="group bg-[#0B111C] border border-white/10 overflow-hidden"
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="w-16 h-16 bg-[#FF8C00] text-black flex items-center justify-center mb-7">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-5">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 leading-8">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CIRCULAR ECONOMY */}
      <section className="px-6 py-24 bg-[#F3F4F6] text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeHeavy}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-green-700 font-black uppercase tracking-[0.25em] text-sm mb-5">
              The Circular Economy
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Collect → Process → Re-use
            </h2>

            <p className="text-slate-600 text-lg leading-8">
              We help industries move away from waste-heavy operations by
              recovering valuable materials and redirecting them into productive
              use.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            {cycle.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeHeavy}
                  transition={{ delay: index * 0.15 }}
                  className="relative bg-white border border-slate-200 p-8 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-green-700 text-white flex items-center justify-center">
                      <Icon size={30} />
                    </div>

                    <span className="text-6xl font-black text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8">
                    {item.description}
                  </p>

                  {index < cycle.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 z-10 w-12 h-12 bg-[#FF8C00] text-black items-center justify-center">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section className="px-6 py-24 bg-[#0B111C] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <p className="text-[#FF8C00] font-black uppercase tracking-[0.25em] text-sm mb-5">
              Safety & Compliance
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-7">
              Safety First. Every Site. Every Shift.
            </h2>

            <p className="text-slate-400 text-lg leading-8 mb-8">
              Taj Recycle follows safety-first protocols across demolition,
              dismantling, material movement, and recycling operations. Every
              project is planned with risk control, compliance, and operational
              discipline at the center.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {safetyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-400 mt-1 flex-shrink-0"
                  />
                  <p className="text-slate-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#FF8C00]/20 blur-2xl" />
            <div className="relative border border-white/10 bg-[#111827] p-5">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=90"
                alt="Industrial safety and recycling operations"
                className="w-full h-[520px] object-cover"
              />

              <div className="absolute left-8 bottom-8 right-8 bg-[#111827]/90 border-l-4 border-[#FF8C00] p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="text-[#FF8C00]" size={34} />
                  <div>
                    <h3 className="text-2xl font-black uppercase">
                      Controlled Operations
                    </h3>
                    <p className="text-slate-400">
                      Risk-managed industrial project execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIAL GALLERY */}
      <section className="px-6 py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeHeavy}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
          >
            <div>
              <p className="text-[#FF8C00] font-black uppercase tracking-[0.25em] text-sm mb-5">
                Industrial Gallery
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Built for Heavy Industry
              </h2>
            </div>

            <p className="max-w-md text-slate-400 leading-8">
              A visual snapshot of large-scale material handling, industrial
              recycling, heavy equipment, and demolition environments.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeHeavy}
                transition={{ delay: index * 0.08 }}
                className="group border border-white/10 bg-[#0B111C] overflow-hidden"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-black uppercase">{item.title}</h3>
                  <ArrowRight
                    size={20}
                    className="text-[#FF8C00] group-hover:translate-x-1 transition"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#F3F4F6] text-[#111827]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeHeavy}
          className="max-w-7xl mx-auto bg-[#111827] text-white overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-14 lg:p-16">
              <p className="text-[#FF8C00] font-black uppercase tracking-[0.25em] text-sm mb-5">
                Start Your Industrial Project
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-7">
                Move Waste. Recover Value. Build Responsibly.
              </h2>

              <p className="text-slate-400 text-lg leading-8 mb-10">
                Speak to Taj Recycle for industrial demolition, scrap
                processing, material recovery, and circular economy solutions
                built for serious scale.
              </p>

              <button className="group inline-flex items-center gap-3 bg-[#FF8C00] px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-orange-400">
                Contact Form
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>

            <div className="relative min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=90"
                alt="Recycling plant industrial facility"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/50 to-transparent lg:hidden" />

              <div className="absolute right-8 bottom-8 bg-green-700 p-6 max-w-xs hidden md:block">
                <PackageCheck className="mb-5" size={34} />
                <h3 className="text-2xl font-black uppercase mb-2">
                  Resource Recovery
                </h3>
                <p className="text-green-50 leading-7">
                  Turning industrial waste streams into reusable value.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
