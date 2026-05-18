import { content } from "@/app/content";
import styles from "./page.module.css";
import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";
import ContactForm from "./ContactForm";

function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.appShell}>
      <div className={styles.gridBackdrop} aria-hidden="true" />
      <div className={styles.floatingGlow} aria-hidden="true" />

      <header className={styles.header}>
        <Container>
          <nav className={styles.nav}>
            <a className={`${styles.brand} ${styles.tap}`} href="#top">
              Portfolio
            </a>

            <div className={styles.navLinks}>
              <a className={styles.tap} href="#about">
                À propos
              </a>
              <a className={styles.tap} href="#skills">
                Compétences
              </a>
              <a className={styles.tap} href="#formations">
                Formations
              </a>
              <a className={styles.tap} href="#projects">
                Projets
              </a>
              <a className={styles.tap} href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </Container>
      </header>

      <main id="top" className={styles.pageEnter}>
        <section className={styles.hero}>
          <Container>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.heroGhost}>PORTFOLIO</p>

                <p className={`${styles.kicker} ${styles.reveal} ${styles.reveal1}`}>
                  {content.site.title}
                </p>
                <h1 className={`${styles.h1} ${styles.reveal} ${styles.reveal2}`}>
                  {content.hero.headline}
                </h1>
                <p className={`${styles.lead} ${styles.reveal} ${styles.reveal3}`}>
                  {content.hero.subheadline}
                </p>

                <div className={`${styles.ctas} ${styles.reveal} ${styles.reveal4}`}>
                  {content.hero.ctas.map((cta) => (
                    <a
                      key={cta.href}
                      className={`${styles.button} ${styles.tap}`}
                      href={cta.href}
                    >
                      {cta.label}
                    </a>
                  ))}
                  {content.links.cv ? (
                    <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.cv}>
                      Télécharger le CV
                    </a>
                  ) : null}
                </div>

                <div className={styles.metaRow}>
                  <span>{content.site.location}</span>
                  <span>•</span>
                  <a className={styles.tap} href={`mailto:${content.links.email}`}>
                    {content.links.email}
                  </a>
                </div>

                <div className={styles.sideLinks}>
                  <a className={`${styles.sideLink} ${styles.tap}`} href={content.links.github}>
                    GitHub
                  </a>
                  <a className={`${styles.sideLink} ${styles.tap}`} href={content.links.linkedin}>
                    LinkedIn
                  </a>
                  <a className={`${styles.sideLink} ${styles.tap}`} href={content.links.facebook}>
                    Facebook
                  </a>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.profileAvatarWrap}>
                  <Image
                    className={styles.profileAvatar}
                    src={content.profile.image.src}
                    alt={content.profile.image.alt}
                    width={220}
                    height={220}
                    priority
                  />
                </div>

                <p className={styles.profileName}>{content.site.name}</p>
                <p className={styles.profileRole}>{content.site.title}</p>

                <ul className={styles.profileDetails}>
                  {content.profile.details.map((d) => (
                    <li key={d.label} className={styles.badge}>
                      {d.label} : {d.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <div className={styles.sectionsStack}>
          <RevealOnScroll>
            <Section id="about" title={content.about.title}>
              <div className={styles.aboutGrid}>
                <div className={styles.stack}>
                  {content.about.paragraphs.map((p) => (
                    <p key={p} className={styles.p}>
                      {p}
                    </p>
                  ))}
                </div>

                <ul className={styles.highlightGrid}>
                  {content.about.highlights.map((h) => (
                    <li key={h.label} className={styles.card}>
                      <div className={styles.cardLabel}>{h.label}</div>
                      <div className={styles.cardValue}>{h.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="skills" title={content.skills.title}>
              <div className={styles.skillsGrid}>
                {content.skills.groups.map((g) => (
                  <div key={g.name} className={styles.skillPanel}>
                    <h3 className={styles.h3}>{g.name}</h3>
                    <ul className={styles.list}>
                      {g.items.map((it) => (
                        <li key={it.name} className={styles.badge}>
                          {it.name}
                          {"level" in it ? ` : ${it.level}` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="projects" title={content.projects.title}>
              <div className={styles.projectsGrid}>
                {content.projects.items.map((p) => (
                  <article key={p.name} className={styles.projectCard}>
                    <div>
                      {p.image?.src ? (
                        <div className={styles.projectImageWrap}>
                          <Image
                            src={p.image.src}
                            alt={p.image?.alt ?? p.name}
                            width={320}
                            height={180}
                          />
                        </div>
                      ) : null}
                      <h3 className={styles.h3}>{p.name}</h3>
                      <p className={styles.p}>{p.description}</p>

                      <div className={styles.tagRow}>
                        {p.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.projectLinks}>
                      {p.links.demo ? (
                        <a className={`${styles.link} ${styles.tap}`} href={p.links.demo}>
                          Demo
                        </a>
                      ) : (
                        <span className={styles.linkMuted}>Demo</span>
                      )}
                      {p.links.repo ? (
                        <a className={`${styles.link} ${styles.tap}`} href={p.links.repo}>
                          Code
                        </a>
                      ) : (
                        <span className={styles.linkMuted}>Code</span>
                      )}
                      {"report" in p.links && p.links.report ? (
                        <a className={`${styles.link} ${styles.tap}`} href={p.links.report}>
                          Rapport
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="formations" title={content.formations.title}>
              <div className={styles.timeline}>
                {content.formations.items.map((f) => (
                  <div key={`${f.title}-${f.organization}`} className={styles.timelineItem}>
                    <div className={styles.timelineLeft}>
                      <div className={styles.timelineRole}>{f.title}</div>
                      <div className={styles.timelineCompany}>{f.organization}</div>
                      <div className={styles.timelinePeriod}>{f.period}</div>
                    </div>
                    {"bullets" in f ? (
                      <ul className={styles.bullets}>
                        {f.bullets.map((b) => (
                          <li key={b} className={styles.p}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </Section>
          </RevealOnScroll>

          <RevealOnScroll>
            <Section id="contact" title={content.contact.title}>
              <div className={styles.contactCard}>
                <p className={styles.contactText}>{content.contact.text}</p>

                <div className={styles.contactRow}>
                  <a className={`${styles.button} ${styles.tap}`} href={`mailto:${content.links.email}`}>
                    Envoyer un email
                  </a>
                  <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.github}>
                    GitHub
                  </a>
                  <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.linkedin}>
                    LinkedIn
                  </a>
                  <a className={`${styles.buttonGhost} ${styles.tap}`} href={content.links.facebook}>
                    Facebook
                  </a>
                </div>

                <ContactForm />

              </div>
            </Section>
          </RevealOnScroll>
          </div>
        </Container>
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerRow}>
            <span>
              © {new Date().getFullYear()} {content.site.name}
            </span>
            <span className={styles.footerLinks}>
              <a className={styles.tap} href={content.links.github}>
                GitHub
              </a>
              <a className={styles.tap} href={content.links.linkedin}>
                LinkedIn
              </a>
              <a className={styles.tap} href={`mailto:${content.links.email}`}>
                Email
              </a>
              <a className={styles.tap} href={content.links.facebook}>
                Facebook
              </a>
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}