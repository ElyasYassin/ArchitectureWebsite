import React from 'react';

export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Contact / Investir / Louer</h2>

      <form className="bg-white rounded shadow p-6 space-y-4">
        <select className="border border-gray-300 p-3 rounded w-full">
          <option value="">Je suis...</option>
          <option value="entreprise">Une entreprise</option>
          <option value="investisseur">Un investisseur</option>
        </select>
        <input type="text" placeholder="Nom complet" className="border border-gray-300 p-3 rounded w-full" />
        <input type="email" placeholder="Adresse email" className="border border-gray-300 p-3 rounded w-full" />
        <textarea placeholder="Votre message" rows={5} className="border border-gray-300 p-3 rounded w-full" />
        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
          >
            Réserver une visite
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-800 py-3 px-6 rounded hover:bg-gray-300 transition"
          >
            Demander une présentation
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        Vous pouvez aussi nous écrire à :
        <br />
        <a href="mailto:contact@thelink-dz.com" className="underline">contact@thelink-dz.com</a>
        <br />
        📞 +213 555 123 456
        <br />
        <a href="https://www.linkedin.com/company/thelink-dz" className="underline" target="_blank" rel="noreferrer">
          LinkedIn / Portfolio
        </a>
      </div>
    </section>
  );
}