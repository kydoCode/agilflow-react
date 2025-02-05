import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import React, { useEffect } from 'react';

export default function PrivacyPolicy() {

     useEffect(() => {
        document.title = 'AgilFlow - Politique de confidentialité';
      }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]">
      <Header />
      <div className="container mx-auto px-4 pt-16 pb-32 text-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold">Politique de Confidentialité d'AgilFlow</h1>
          
          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              La présente Politique de Confidentialité explique comment AgilFlow collecte, utilise et protège vos données personnelles lorsque vous utilisez nos services. Nous nous engageons à respecter votre vie privée et à traiter vos données en conformité avec le Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">2. Données Collectées</h2>
            <p>Nous collectons uniquement les données nécessaires à l’amélioration et au bon fonctionnement de nos services :</p>
            <ul className="list-disc pl-5 text-left">
              <li><strong>Données fournies par l'utilisateur</strong> : Nom, prénom, adresse e-mail.</li>
              <li><strong>Données générées par l’utilisation de la plateforme</strong> : Contenus partagés, interactions avec le service.</li>
              <li><strong>Données techniques</strong> : Adresse IP, type de navigateur, informations de connexion.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">3. Finalité de la Collecte des Données</h2>
            <p>Nous utilisons vos données pour :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Répondre à vos demandes et assurer le support client.</li>
              <li>Améliorer l’expérience utilisateur et optimiser nos services.</li>
              <li>Réaliser des analyses statistiques.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">4. Partage des Données</h2>
            <p>Vos données ne sont partagées qu’avec des tiers strictement nécessaires :</p>
            <ul className="list-disc pl-5 text-left">
              <li><strong>Hébergeur (IONOS)</strong> : Pour assurer la disponibilité technique du site.</li>
              <li><strong>Autorités légales</strong> : En cas de réquisition par les autorités compétentes.</li>
              <li><strong>Aucun partage commercial</strong> : Vos données ne seront ni vendues, ni cédées à des tiers à des fins publicitaires.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">5. Vos Droits</h2>
            <p>Vous disposez des droits suivants sur vos données personnelles :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Droit d’accès, de rectification, d’effacement et d’opposition.</li>
              <li>Droit à la limitation du traitement et à la portabilité des données.</li>
            </ul>
            <p>Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@agilflow.app" className="text-blue-400 underline">contact@agilflow.app</a> ou à l’adresse postale suivante : <strong>47 rue de la République, 83170 BRIGNOLES</strong>.</p>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">6. Cookies et Suivi</h2>
            <ul className="list-disc pl-5 text-left">
              <li>Nous utilisons uniquement des <strong>cookies nécessaires</strong> au bon fonctionnement du site et des <strong>cookies analytiques</strong> pour améliorer l’expérience utilisateur.</li>
              <li>Certains <strong>cookies tiers</strong> peuvent être déposés indépendamment de notre volonté.</li>
              <li>Une <strong>bannière de consentement</strong> s’affiche lors de votre première visite pour vous permettre de gérer vos préférences.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
  <h2 className="text-2xl font-semibold">7. Sécurité des Données</h2>
  <p>
    Nous appliquons des mesures de protection visant à garantir la sécurité de vos données personnelles et à prévenir tout accès non autorisé, altération, perte ou divulgation.
  </p>
  <ul className="list-disc pl-5 text-left">
    <li>Utilisation de technologies de chiffrement pour sécuriser les échanges</li>
    <li>Mécanismes renforcés de protection des accès aux informations</li>
    <li>Systèmes de sauvegardes régulières pour assurer l'intégrité des données</li>
  </ul>
  <p>
    Malgré ces précautions, aucun système n'est infaillible. En cas d'incident de sécurité affectant vos données, nous prendrons les mesures nécessaires et vous informerons conformément aux réglementations en vigueur.
  </p>
</section>


          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">8. Modifications de la Politique de Confidentialité</h2>
            <p>Cette politique peut être mise à jour à tout moment. Nous vous informerons des changements importants via notre site web.</p>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">9. Contact</h2>
            <p>Si vous avez des questions, vous pouvez nous contacter à :</p>
            <ul className="list-disc pl-5 text-left">
              <li><strong>Email</strong> : <a href="mailto:contact@agilflow.app" className="text-blue-400 underline">contact@agilflow.app</a></li>
              <li><strong>Adresse postale</strong> : 47 rue de la République, 83170 BRIGNOLES</li>
            </ul>
          </section>

          <p className="text-gray-300 mt-4 text-justify">
            🔹 <em>Cette Politique de Confidentialité est en vigueur à compter du 30/01/2025.</em>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}