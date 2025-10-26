import React, { useState } from 'react';
import './about.css';

function About() {
  const [openFaq, setOpenFaq] = useState(null);

  // Данные для отзывов
  const testimonials = [
    {
      id: 1,
      quote: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
      avatar: "./accets/avatar1.png",
      company: "Kuphal LLC",
      name: "Emanuel Boyle"
    },
    {
      id: 2,
      quote: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
      avatar: "./accets/avatar2.png",
      company: "Glover - Orn",
      name: "River Graves"
    },
    {
      id: 3,
      quote: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
      avatar: "./accets/avatar3.png",
      company: "Haag LLC",
      name: "Ryder Malone"
    }
  ];

  // Данные для FAQ
  const faqItems = [
    {
      id: 1,
      question: "How does it works?",
      answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
    },
    {
      id: 2,
      question: "Can I rent a car without a credit card?",
      answer: "Yes, we accept various payment methods including debit cards and cash payments at our local offices."
    },
    {
      id: 3,
      question: "What are the requirements for renting a car?",
      answer: "You must be at least 21 years old with a valid driver's license and a major credit card for the security deposit."
    },
    {
      id: 4,
      question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
      answer: "No, modifications to rental vehicles are not permitted. Towing equipment can be rented separately."
    },
    {
      id: 5,
      question: "Does Car Rental offer coverage products for purchase with my rental?",
      answer: "Yes, we offer optional insurance coverage including collision damage waiver and personal accident insurance."
    }
  ];

  return (
    <main className="about">
      <div className="container">


        {/* Видео */}
        <div className="video-section">
          <div className="video-wrapper">
            <img src="./accets/video-placeholder.png" alt="Video" className="video-image" />
            <button className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Статистика */}
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">20k+</div>
            <div className="stat-label">Happy customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">540+</div>
            <div className="stat-label">Count of cars</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of experience</div>
          </div>
        </div>

        {/* Блок с текстом и галочками */}
        <div className="features-section">
          <div className="features-content">
            <h2 className="features-title">Unlock unforgettable memories on the road</h2>
            <p className="features-desc">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. 
              Quis nunc interdum gravida ullamcorper
            </p>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <span>Quis nunc interdum gravida ullamcorper</span>
              </div>
            </div>
          </div>
          <div className="features-image">
            <img src="./accets/features-image.png" alt="Features" className="features-img" />
          </div>
        </div>

        {/* Промо приложения */}
        <section className="app-promo">
          <div className="app-content">
            <h2 className="app-title">Download <br />
            mobile app</h2>
            <p className="app-desc">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus <br />
              turpis nibh placerat massa.
              Fermentum urna ut at et in. Turpis <br />
              aliquet cras hendrerit enim condimentum.
            </p>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="./accets/footer/apple.png" alt="App Store" />
                <span>Download on the App Store</span>
              </a>
              <a href="#" className="app-button">
                <img src="./accets/footer/googleplay.png" alt="Google Play" />
                <span>GET IT ON Google Play</span>
              </a>
            </div>
          </div>
          <div className="app-phones">
            <img src="./accets/home/tel.png" alt="Phone 1" className="phone phone1" />
            <img src="./accets/home/tel.png" alt="Phone 2" className="phone phone2" />
          </div>
      </section>

        {/* Отзывы */}
        <div className="testimonials">
          <h2 className="testimonials-title">Reviews from our customers</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  <span className="quote-mark">“</span>
                  <p className="quote-text">{testimonial.quote}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-info">
                    <span className="author-company">{testimonial.company}</span>
                    <span className="author-name">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2 className="faq-title">Top Car Rental Questions</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.id} className={`faq-item ${openFaq === item.id ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle">{openFaq === item.id ? '−' : '+'}</span>
                </button>
                {openFaq === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Нижний баннер */}
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Looking for a car?</h2>
            <div className="cta-phone">+537 547-6401</div>
            <p className="cta-desc">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in...
            </p>
            <button className="cta-button">Book now</button>
          </div>
          <div className="cta-image">
            <img src="./accets/car-blue.png" alt="Car" className="car-image" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;