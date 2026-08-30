import { donationOptions } from './data/donations';

const formatAmount = (amount: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="campaign-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-stripe" aria-hidden="true" />

        <div className="hero-shell">
          <header className="site-header">
            <a className="wordmark" href="#inicio" aria-label="Gira Solidaria 2026">
              <span className="wordmark-mark" aria-hidden="true">GS</span>
              <span>
                <strong>GIRA SOLIDARIA</strong>
                <small>CRECIENDO JUNTOS · 2026</small>
              </span>
            </a>
            <a className="header-link" href="#la-gira">Conocé la gira</a>
          </header>

          <div className="hero-copy" id="inicio">
            <div className="identity-row" aria-label="Identidad de la campaña">
              <div className="identity-placeholder">
                <span className="placeholder-ring" aria-hidden="true" />
                <span>Escudo oficial<br />Club Manuel Belgrano</span>
              </div>
              <span className="identity-join" aria-hidden="true">+</span>
              <div className="identity-placeholder">
                <span className="placeholder-spark" aria-hidden="true" />
                <span>Logo oficial<br />Creciendo Juntos</span>
              </div>
            </div>

            <p className="eyebrow">Proyecto solidario · Club Manuel Belgrano</p>
            <h1 id="campaign-title">GIRA<br /><span>SOLIDARIA</span></h1>
            <p className="hero-meta">M16 Rugby · 6ta Hockey</p>
            <p className="hero-destination">
              <span>El Refugio</span>
              Chajarí, Entre Ríos · 22—25 OCT. 2026
            </p>
            <p className="hero-summary">
              Este octubre llevamos las donaciones reunidas por toda la comunidad del club
              y compartimos unos días junto a El Refugio.
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
                    <span className="card-action">{isReady ? 'Quiero aportar' : 'Link de pago próximo'}</span>
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
              Elegí una forma de colaborar. Tu aporte se destina a comprar los elementos
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
          <div className="story-visual" role="img" aria-label="Espacio preparado para una fotografía real de la gira">
            <span className="story-visual-label">Foto de la gira<br />próximamente</span>
            <span className="story-visual-caption">Club Manuel Belgrano<br />Creciendo Juntos</span>
          </div>

          <div className="story-copy">
            <p>M16 de rugby y 6ta de hockey son parte de <strong>Creciendo Juntos</strong>, el proyecto solidario del Club Manuel Belgrano.</p>
            <p>Del 22 al 25 de octubre la delegación viaja a Chajarí para visitar <strong>El Refugio</strong>, llevar lo reunido y compartir actividades con su comunidad.</p>
            <div className="fact-list" aria-label="Datos de la gira">
              <div><span>Destino</span><strong>Chajarí<br />Entre Ríos</strong></div>
              <div><span>Participan</span><strong>M16 Rugby<br />6ta Hockey</strong></div>
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
          <li><span>03</span><h3>Lo llevamos</h3><p>La recaudación se transforma en donaciones para El Refugio.</p></li>
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
          <p>M16 Rugby · 6ta Hockey</p>
          <p>Chajarí, Entre Ríos</p>
        </div>
        <p className="footer-note">Los logos y las fotos oficiales se incorporan antes de publicar el QR.</p>
      </footer>
    </main>
  );
}
