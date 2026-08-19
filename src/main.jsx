import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Copy, Camera, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import './styles.css';

const links = {
  instagram: 'https://www.instagram.com/artega.ya_ai?igsh=MWlyaGQ0d3NteWNtYQ%3D%3D&utm_source=qr',
  telegram: 'https://t.me/+P2RyjKKY5740N2Iy',
  handle: 'https://t.me/artegaya',
  qr: 'https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=16&data=https%3A%2F%2Ft.me%2F%2BP2RyjKKY5740N2Iy',
  phone: 'tel:+79934080602',
};

const prompts = [
  {
    tag: 'ChatGPT',
    title: 'Найди сильную идею для контента',
    text: 'Сгенерируй 10 нестандартных идей для Reels в нише [ниша]. Для каждой идеи дай хук, короткий сценарий и CTA.',
  },
  {
    tag: 'Визуал',
    title: 'Собери референс для AI-фото',
    text: 'Опиши кадр в черно-белом минималистичном стиле: композиция, свет, фон, одежда, настроение и детали бренда.',
  },
  {
    tag: 'Продажи',
    title: 'Упакуй оффер без воды',
    text: 'Сформулируй оффер для [продукт] через боль, результат, доказательство и простой следующий шаг.',
  },
];

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="artega.ya PROMPTS">
          <span className="brand-mark">a.y</span>
          <span><strong>artega.ya</strong><small>PROMPTS</small></span>
        </a>
        <nav>
          <a href="#prompts">Промты</a>
          <a href="#how">Как получить</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI PROMPTS ■ для ChatGPT и визуала</p>
          <h1>Промты, которые выглядят как бренд.</h1>
          <p className="lead">Минималистичная библиотека сильных текстовых промтов для контента, идей, упаковки и AI-изображений от artega.ya.</p>
          <div className="actions">
            <a className="button primary" href={links.telegram}>Перейти в Telegram <ArrowUpRight size={18} /></a>
            <a className="button ghost" href={links.instagram}>Instagram <Camera size={18} /></a>
          </div>
        </div>
        <div className="poster" aria-label="Постер artega.ya prompts">
          <div className="poster-top"><span>artega.ya</span><span>AI PROMPTS ■</span></div>
          <div className="scarf-logo"><span>artega.ya</span><i /></div>
          <h2>ХОЧЕШЬ<br />ПРОМТ?</h2>
          <p>Пиши «ПРОМТ» в комментариях — скину в директ. Или переходи в Telegram.</p>
        </div>
      </section>

      <section id="prompts" className="prompts">
        <div className="section-head">
          <p className="eyebrow">Коллекция</p>
          <h2>Свежие промты каждую неделю</h2>
        </div>
        <div className="cards">
          {prompts.map((prompt, index) => (
            <article className="prompt-card" key={prompt.title}>
              <span className="number">0{index + 1}</span>
              <small>{prompt.tag}</small>
              <h3>{prompt.title}</h3>
              <p>{prompt.text}</p>
              <button type="button"><Copy size={16} /> Скопировать идею</button>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="how section-grid inverted">
        <div>
          <p className="eyebrow light">Как это работает</p>
          <h2>Забирай промты без лишних шагов.</h2>
        </div>
        <ol>
          <li><strong>01</strong><span>Переходишь в Telegram-канал или Instagram.</span></li>
          <li><strong>02</strong><span>Выбираешь карточку с нужной темой.</span></li>
          <li><strong>03</strong><span>Копируешь текст-промт и отправляешь в ChatGPT.</span></li>
        </ol>
      </section>

      <section id="contacts" className="contacts">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Подписывайся и забирай новые промты.</h2>
        </div>
        <div className="contact-grid">
          <a className="qr-card" href={links.telegram} aria-label="QR-код Telegram-канала">
            <img src={links.qr} alt="QR-код Telegram-канала artega.ya" />
            <span>Сканируй QR для входа в Telegram-канал</span>
          </a>
          <a href={links.telegram}><Send /> Telegram-канал <span>t.me/+P2RyjKKY5740N2Iy</span></a>
          <a href={links.handle}><MessageCircle /> Личный Telegram <span>@artegaya</span></a>
          <a href={links.instagram}><Camera /> Instagram <span>@artega.ya_ai</span></a>
          <a href={links.phone}><Phone /> Телефон <span>8 993 408-06-02</span></a>
        </div>
      </section>

      <footer>
        <span>artega.ya PROMPTS</span>
        <span><Sparkles size={16} /> minimal black & white AI prompt archive</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
