import React, { useState } from 'react';
import '../style.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Te rugăm să completezi toate câmpurile.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('📬 Răspuns server:', data);

      if (res.ok) {
        alert('Mesaj trimis cu succes! Îți mulțumim!');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert(`Eroare: ${data.error || 'Mesajul nu a putut fi trimis'}`);
      }
    } catch (err) {
      console.error('❌ Eroare la trimiterea mesajului:', err);
      alert('A apărut o eroare la trimiterea mesajului.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <p style={{ marginBottom: '1.5rem', maxWidth: 800 }}>
        Suntem aici pentru tine, pentru a te ajuta cu orice ai putea avea nevoie de ajutor,
        în procesul tău de pregătire pentru a-ți îndeplini visul profesional, cât și în
        parcurgerea acestei etape din viață, despre care știm și noi că are problemele ei...
        <br /><br />
        Ne dorim ca această platformă să fie mai mult decât o sursă de informații sau ajutor
        în pregătirea ta profesională, educațională, ci un sprijin real în fața dificultăților
        pe care le poți întâlni!
        <br /><br />
        Ne dorim să creăm aici o comunitate strânsă, unde să fim tineri pentru tineri, oameni
        pentru oameni și viitori medici lucrând împreună pentru a face lumea un loc mai bun,
        de acum încolo pentru câți ani vom putea fiecare.
        <br /><br />
        În acest fel, te încurajăm să ne contactezi pentru orice nelămurire, curiozitate sau sugestie!
        Solicitarea ta va fi primită cu bucuria de a fi de folos!
        <br /><br />
        În același spirit, sperăm că și tu vei trece cu vederea neajunsurile tehnice sau de altă
        natură decât cele educaționale (educațional suntem foarte convinși și mândri de calitatea adusă)
        și că ne vei face cunoscute orice erori, probleme sau neajunsuri ale platformei, precum și eventualele
        sugestii pe care le-ai putea avea pentru noi! Ne bucurăm pentru răbdarea și toleranța ta.
        <br /><br />
        Ne poți contacta direct și prin:
        <br />
        📧 <strong>office@academedica.ro</strong><br />
        📞 <strong>0745 524 876</strong>
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Numele tău"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Emailul tău"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mesajul tău"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Trimite mesajul</button>
      </form>
    </div>
  );
}
