import { donationOptions } from './data/donations';

const formatAmount = (amount: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);

const galleryPhotos = [
  {
    src: '/assets/photos/gira-entrega-1.png',
    alt: 'Integrantes de la gira entregando donaciones en El Refugio',
  },
  {
    src: '/assets/photos/gira-comunidad-2.png',
    alt: 'Familias y voluntarios compartiendo una jornada comunitaria',
  },
  {
    src: '/assets/photos/gira-equipo-3.png',
    alt: 'Grupo de la gira solidaria frente a la escuelita El Refugio',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="campaign-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-stripe" aria-hidden="true" />

        <div className="hero-shell">
          <header className="site-header">
            <div className="official-logos" aria-label="Club Manuel Belgrano y Creciendo Juntos">
              <img
                className="official-logo official-logo--club"
                src="/assets/logos/club-manuel-belgrano.jpg"
                alt="Escudo del Club Manuel Belgrano"
                width="52"
                height="66"
              />
              <span className="logo-separator" aria-hidden="true" />
              <img
                className="official-logo official-logo--growing"
                src="/assets/logos/creciendo-juntos.png"
                alt="Logo de Creciendo Juntos"
                width="78"
                height="48"
              />
            </div>
            <a className="header-link" href="#la-gira">Conocé la gira <span aria-hidden="true">↓</span></a>
          </header>

          <div className="hero-copy" id="inicio">
            <p className="eyebrow">Proyecto solidario · Club Manuel Belgrano</p>
            <h1 id="campaign-title">GIRA<br /><span>SOLIDARIA</span></h1>
            <p className="hero-meta">M16 Rugby · Planteles de 6tas y 5tas de Hockey</p>
            <p className="hero-destination">
              <span>El Refugio</span>
              Chajarí, Entre Ríos · 22—25 OCT. 2026
            </p>
            <p className="hero-summary">
              Este octubre llevaremos las donaciones reunidas por toda la comunidad del club
              y compartiremos unos días junto a El Refugio.
            </p>
          </div>

          <section className="donation-zone" aria-labelledby="donation-title">
            <div className="donation-heading">
              <p className="eyebrow">Tu aporte hace equipo</p>
              <h2 id="donation-title">¿Con qué querés ayudar?</h2>
            </div>

            <div className="donation-grid">
              {donationOptions.map((donation, index) => {
                const isReady = Boolean(donation.paymentLink);
                const cardContent = (
                  <>
                    <span className={'card-symbol card-symbol--' + donation.icon} aria-hidden="true"><i /><b /></span>
                    <span className="card-number">0{index + 1}</span>
                    <span className="card-category">{donation.category}</span>
                    <strong>{donation.name}</strong>
                    <span className="card-description">{donation.description}</span>
                    <span className="card-price">{donation.amount ? formatAmount(donation.amount) : 'A elección'}</span>
                  </>
                );

                return isReady ? (
                  <a
                    className={'donation-card donation-card--' + donation.accent}
                    href={donation.paymentLink}
                    key={donation.id}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={'Aportar ' + donation.name + ' mediante Mercado Pago'}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <article
                    className={'donation-card donation-card--' + donation.accent + ' donation-card--pending'}
                    key={donation.id}
                    aria-label={donation.name + ': link de Mercado Pago pendiente de activar'}
                  >
                    {cardContent}
                  </article>
                );
              })}
            </div>

            <p className="donation-note" id="pago-pendiente">
              Elegí una forma de colaborar. Tu aporte se destinará a comprar los elementos
              necesarios para la Gira Solidaria.
            </p>
          </section>
        </div>
      </section>

      <section className="story-section" id="la-gira" aria-labelledby="story-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--ink">Una iniciativa, un mismo equipo</p>
          <h2 id="story-title">La gira que<br /><span>nos mueve.</span></h2>
        </div>

        <div className="story-grid">
          <div className="story-visual story-gallery" role="region" aria-label="Fotografías de la gira solidaria">
            <div className="story-gallery-track">
              {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                <div className="story-gallery-slide" key={photo.src + index} aria-hidden={index >= galleryPhotos.length}>
                  <img src={photo.src} alt={index < galleryPhotos.length ? photo.alt : ''} />
                </div>
              ))}
            </div>
            <span className="story-visual-caption">Club Manuel Belgrano<br />Creciendo Juntos</span>
          </div>

          <div className="story-copy">
            <p>M16 Rugby y los planteles de 6tas y 5tas de Hockey son parte de <strong>Creciendo Juntos</strong>, el proyecto solidario del Club Manuel Belgrano.</p>
            <p>Del 22 al 25 de octubre la delegación viajará a Chajarí para visitar <strong>El Refugio</strong>, llevar lo reunido y compartir actividades con su comunidad.</p>
            <div className="fact-list" aria-label="Datos de la gira">
              <div><span>Destino</span><strong>Chajarí<br />Entre Ríos</strong></div>
              <div><span>Participan</span><strong>M16 Rugby<br />Planteles de 6tas y 5tas de Hockey</strong></div>
              <div><span>Fecha</span><strong>22—25<br />Octubre</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" aria-labelledby="how-title">
        <div className="how-heading">
          <p className="eyebrow">Simple, directo, transparente</p>
          <h2 id="how-title">Así funciona<br />tu aporte.</h2>
        </div>
        <ol className="steps">
          <li><span>01</span><h3>Elegís</h3><p>Una forma de colaborar con la gira.</p></li>
          <li><span>02</span><h3>Aportás</h3><p>Con Mercado Pago, desde tu celular.</p></li>
          <li><span>03</span><h3>Lo llevaremos</h3><p>La recaudación se transformará en donaciones para El Refugio.</p></li>
        </ol>
      </section>

      <section className="closing-section" aria-label="Invitación a colaborar">
        <p className="eyebrow">Creciendo Juntos</p>
        <h2>Una ayuda concreta.<br /><span>Un viaje compartido.</span></h2>
        <a className="closing-link" href="#donation-title">Ver formas de colaborar <span aria-hidden="true">↓</span></a>
      </section>

      <footer className="site-footer">
        <div>
          <p className="footer-title">GIRA SOLIDARIA 2026</p>
          <p>Proyecto Creciendo Juntos · Club Manuel Belgrano</p>
        </div>
        <div>
          <p>M16 Rugby · Planteles de 6tas y 5tas de Hockey</p>
          <p>Chajarí, Entre Ríos</p>
        </div>
        <p className="footer-note">Creciendo Juntos · Club Manuel Belgrano</p>
      </footer>
    </main>
  );
}
