import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-charcoal text-ivory">
      <div className="absolute inset-x-0 top-0 hairline" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-4">

        {/* BRAND */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 font-display text-gold">
              N
            </span>

            <div>
              <p className="font-display text-xl">NMDC</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">
                Nazeer Maxillofacial & Dental Center
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
            Led by Brig Dr Muhammad Nazeer Khan — BDS, MCPS, FCPS — with advanced fellowships in
            maxillofacial surgery and medical education (MHPE, IPPCR), and serving as Member &
            Regional Faculty of AOCMF / AOPEER (Switzerland). NMDC represents a standard of
            precision-driven care in oral and maxillofacial surgery, combining international
            training, modern surgical techniques, and a deeply patient-centered approach to
            treatment and recovery.
          </p>
        </div>

        {/* NAV LINKS */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">
            Explore
          </p>

          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/education", label: "Education" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">
            Contact
          </p>

          <ul className="mt-6 space-y-5 text-sm text-ivory/80">

            {/* PHONE */}
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  Phone
                </p>
                <a href="tel:0512715959" className="mt-1 inline-block hover:text-gold">
                  051 2715959
                </a>
              </div>
            </li>

            {/* WHATSAPP */}
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 text-gold shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/923336070227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block hover:text-green-400"
                >
                  0333 6070227
                </a>
              </div>
            </li>

            {/* EMAIL */}
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  Email
                </p>
                <a
                  href="mailto:nazeermdclinic@gmail.com"
                  className="mt-1 inline-block hover:text-gold break-all"
                >
                  nazeermdclinic@gmail.com
                </a>
              </div>
            </li>

            {/* ADDRESS */}
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  Address
                </p>
                <p className="mt-1 leading-relaxed">
                  Office #222, 2nd Floor Rafay Mall,<br />
                  Peshawar Road, Westridge 1,<br />
                  Rawalpindi, Pakistan
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} NMDC — Nazeer Maxillofacial & Dental Center.</p>
          <p className="tracking-widest uppercase">Crafted with quiet precision</p>
        </div>
      </div>

    </footer>
  );
}