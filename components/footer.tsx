import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" }
  ],
  social: [
    { icon: Instagram, href: "https://www.instagram.com/felipedantas.of?igsh=MWRjdDFwbWhiOWl5MQ%3D%3D&utm_source=qr", label: "Instagram" },
    
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold">
                Felipe Dantas
              </span>
              <p className="text-sm uppercase tracking-widest text-accent mt-1">
                Candidato
              </p>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
             Compromisso com as pessoas, trabalho pelo povo.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         

          {/* Newsletter */}
                  </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {currentYear} Desenvolvido Por <a href="https://www.linkedin.com/in/helton-santos001">Helton Santos</a>
          </p>
         
        </div>
      </div>
    </footer>
  )
}
