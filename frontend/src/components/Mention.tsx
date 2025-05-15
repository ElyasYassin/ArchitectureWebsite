import React from 'react';

export default function Mentions() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-gray-700">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Mentions & Crédits</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">École & Encadrants</h3>
          <p>
            Ce projet a été réalisé dans le cadre du Projet de Fin d’Études (PFE) à <strong>l’École Polytechnique d’Architecture et d’Urbanisme d’Alger</strong>.
            <br />
            Encadré par <strong>Mme.CHEBAIKI-ADLI. L            </strong> et <strong>Mme. MAZOUARA. A            </strong>.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Logiciels Utilisés</h3>
          <ul className="list-disc pl-6">
            <li>Autodesk Revit</li>
            <li>V-Ray</li>
            <li>Photoshop</li>
            <li>Dynamo</li>
            <li>Lumion</li>
            <li>Twin Motion</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Remerciements</h3>
          <p>
            Nous remercions chaleureusement nos enseignants, camarades, et les professionnels qui nous ont apporté leur aide et leurs retours précieux durant ce projet.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Droits d’Auteur</h3>
          <p>
            Tous les rendus, textes, vidéos et modèles 3D présents sur ce site sont la propriété intellectuelle des auteurs du projet The Link.
            <br />
            © 2025 – Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
}

