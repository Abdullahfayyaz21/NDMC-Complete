import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Stethoscope, HeartPulse, GraduationCap, Microscope, Quote, Star } from "lucide-react";
import drNazeer from "@/assets/dr-nazeer.jpg";
import clinic from "@/assets/clinic.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NMDC — Advanced Dental & Maxillofacial Care | Dr Brig Nazeer" },
      { name: "description", content: "NMDC, led by Dr Brig Nazeer, delivers premium dental implants, smile design and maxillofacial surgery with a discreet, luxury standard of care." },
      { property: "og:title", content: "NMDC — Advanced Dental & Maxillofacial Care" },
      { property: "og:description", content: "Premium dental and maxillofacial care led by Dr Brig Nazeer." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  { icon: Microscope, title: "Advanced Technology", body: "Digital imaging, guided surgery, and modern sterilisation protocols." },
  { icon: HeartPulse, title: "Pain-Free Treatment", body: "Refined anaesthesia and gentle techniques across every procedure." },
  { icon: Stethoscope, title: "Experienced Specialists", body: "Decades of clinical leadership in maxillofacial surgery and dentistry." },
  { icon: Sparkles, title: "Modern Equipment", body: "Carefully selected instruments and ergonomic, calm treatment suites." },
  { icon: GraduationCap, title: "Personalized Care", body: "Each plan is shaped around your anatomy, lifestyle and goals." },
  { icon: ShieldCheck, title: "Hygiene & Safety", body: "Hospital-grade infection control and audited safety standards." },
];

const previewServices = [
  { title: "Dental Implants", body: "Single tooth to full arch restoration with titanium implants." },
  { title: "Smile Designing", body: "Bespoke aesthetic planning for a balanced, natural smile." },
  { title: "Jaw Surgery", body: "Corrective orthognathic surgery for function and facial harmony." },
  { title: "Facial Trauma", body: "Reconstructive care after injury, performed with surgical precision." },
];

const testimonials = [
  { name: "Ayesha K.", city: "Islamabad", text: "An exceptionally calm clinic. Dr Nazeer explained everything and my implant feels completely natural." },
  { name: "Hamza R.", city: "Rawalpindi", text: "The most professional dental visit I've ever had in Pakistan. World-class standards." },
  { name: "Fatima S.", city: "Lahore", text: "I travelled from Lahore for smile design. Worth every kilometre — the result is breathtaking." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          className="absolute inset-0 luxury-grain"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(248,245,242,0.7), rgba(248,245,242,1) 70%), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center pb-24 lg:pb-32">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Established Excellence
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-charcoal">
                Advanced Dental
                <br />
                &amp; <span className="italic text-gradient-gold">Maxillofacial</span> Care
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base text-muted-foreground">Led by Dr Brig Nazeer</p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                A refined private practice combining surgical mastery with quietly attentive
                hospitality. From precise implants to complex reconstructive surgery, every
                detail is considered.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-4 text-xs uppercase tracking-[0.25em] text-ivory hover:bg-gold transition-colors duration-500"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white/50 px-7 py-4 text-xs uppercase tracking-[0.25em] text-charcoal hover:border-gold hover:text-gold transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Doctor portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative mx-auto max-w-md"
            >
              <motion.div
                aria-hidden
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-beige/60 blur-2xl"
              />
              <motion.div
                aria-hidden
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-gold/25 blur-3xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2rem] shadow-luxury border border-white/60"
              >
                <img
                  src={drNazeer}
                  alt="Dr Brig Nazeer, lead maxillofacial surgeon at NMDC"
                  className="w-full h-[560px] object-cover"
                  width={1024}
                  height={1280}
                />
                <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                  <p className="font-display text-lg text-charcoal">Dr Brig Nazeer</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Maxillofacial Surgeon · Founder
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Counters */}
        <div className="relative border-t border-border/70 bg-white/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: 15, s: "+", label: "Years Experience" },
              { n: 5000, s: "+", label: "Patients Treated" },
              { n: 30, s: "+", label: "Procedures Offered" },
              { n: 98, s: "%", label: "Patient Satisfaction" },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.05} className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl text-charcoal">
                  <Counter to={c.n} suffix={c.s} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <img
              src={clinic}
              alt="Interior of NMDC dental clinic"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full h-[520px] object-cover rounded-[2rem] shadow-soft"
            />
            <div className="absolute -bottom-8 -right-6 glass rounded-2xl p-6 w-56 hidden md:block">
              <p className="font-display text-3xl text-gradient-gold">A+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Quality Standard
              </p>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">About NMDC</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Surgical precision,<br />delivered with quiet warmth.
            </h2>
            <p className="mt-6 text-charcoal/75 leading-relaxed">
              Founded by Dr Brig Nazeer, NMDC is built on a single belief — that
              advanced medicine should feel calm, considered, and deeply personal.
              Our team combines decades of maxillofacial expertise with the
              hospitality of a private studio.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-charcoal/80">
              {[
                "Fellowship-trained maxillofacial surgeon",
                "Former senior consultant, Armed Forces medical services",
                "Member, Pakistan Association of Oral & Maxillofacial Surgeons",
                "Over 5,000 successful procedures performed",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white/60 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
          <Reveal className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-charcoal">
              The standard we hold ourselves to.
            </h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury hover:border-gold/40">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ivory border border-border group-hover:bg-gold group-hover:text-ivory transition-colors">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-charcoal">{r.title}</h3>
                  <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-charcoal max-w-2xl">
              A complete spectrum of dental &amp; facial care.
            </h2>
          </Reveal>
          <Link
            to="/services"
            className="link-underline text-sm tracking-wide text-charcoal/80"
          >
            View all services →
          </Link>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link
                to="/services"
                className="block h-full rounded-3xl border border-border bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury hover:border-gold/40"
              >
                <p className="font-display text-2xl text-charcoal">{s.title}</p>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION PREVIEW */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">Education</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory leading-tight">
              Knowledge, generously shared.
            </h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              Curated videos, articles and patient guides — created by our specialists
              to help you understand your treatment and care for your smile at home.
            </p>
            <Link
              to="/education"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-ivory/20 px-7 py-4 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors"
            >
              Visit the Library <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              "Caring for Implants",
              "Smile Design Basics",
              "After Wisdom Surgery",
              "Children's Oral Health",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-2xl border border-ivory/10 aspect-[4/3] bg-gradient-to-br from-charcoal to-[#2a2520]">
                  <div className="absolute inset-0 luxury-grain opacity-20" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ivory transition-transform group-hover:scale-110">
                      <svg className="h-5 w-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Video</p>
                    <p className="font-display text-lg">{t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Patient Stories</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-charcoal">
            Trusted by thousands across Pakistan.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">"{t.text}"</p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg text-charcoal">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.city}</p>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2a221c] via-charcoal to-[#1a1612] px-8 sm:px-16 py-20 text-ivory">
            <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-beige/15 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">Begin</span>
                <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                  A consultation with quiet confidence.
                </h3>
              </div>
              <div className="md:text-right">
                <p className="text-ivory/70 max-w-md md:ml-auto">
                  Reserve a private appointment with Dr Brig Nazeer and discover a calmer
                  way to receive exceptional dental care.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-ivory hover:bg-ivory hover:text-charcoal transition-colors"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
