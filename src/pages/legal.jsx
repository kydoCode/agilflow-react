import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import React, { useEffect } from 'react';

export default function Legal() {

     useEffect(() => {
        document.title = 'AgilFlow - Mentions légales';
      }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]">
      <Header />
      <div className="container mx-auto px-4 pt-16 pb-32 text-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold">AgilFlow - Mentions légales</h1>
          
          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">1. Informations Générales :</h2>
            <ul className="list-disc pl-5 text-left">
              <li><strong>Nom de l’entreprise ou projet</strong> : AgilFlow</li>
              <li><strong>Forme juridique</strong> : Entreprise Individuelle (EI)</li>
              <li><strong>Adresse du siège social</strong> : 47 rue de la République, 83170 BRIGNOLES</li>
              <li><strong>Numéro SIRET</strong> : En cours d'attribution</li>
              <li><strong>Numéro TVA intracommunautaire</strong> : En cours d'attribution</li>
              <li><strong>Téléphone</strong> : 06 12 34 56 78</li>
              <li><strong>Adresse e-mail officielle</strong> : <a href="mailto:contact@agilflow.app" className="text-blue-400 underline">contact@agilflow.app</a></li>
              <li><strong>Responsable de la publication</strong> : Anon Nymous</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">2. Hébergement du Site :</h2>
            <ul className="list-disc pl-5 text-left">
              <li><strong>Nom de l’hébergeur</strong> : IONOS SARL</li>
              <li><strong>Adresse de l’hébergeur</strong> : 7, place de la Gare - BP 70109 57201 SARREGUEMINES</li>
              <li><strong>Téléphone de l’hébergeur</strong> : 0970 808 911</li>
              <li><strong>Site web de l’hébergeur</strong> : <a href="https://www.ionos.fr/" className="text-blue-400 underline">https://www.ionos.fr/</a></li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">3. Gestion des Données Personnelles :</h2>
            <p><strong>Données collectées</strong> :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Nom, prénom, e-mail</li>
              <li>Informations liées à l'utilisation du service (contenus partagés, interactions)</li>
            </ul>
            <p><strong>Finalité de la collecte</strong> :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Traitement des demandes et support client</li>
              <li>Utilisation de la plateforme</li>
              <li>Amélioration de l'expérience utilisateur et analyses statistiques</li>
            </ul>
            <p><strong>Partage des données</strong> :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Les données ne sont partagées qu'avec l'hébergeur IONOS pour des raisons techniques et légales minimales.</li>
              <li>Aucune donnée ne sera cédée ou vendue à des tiers commerciaux.</li>
              <li>En cas de réquisition par les autorités compétentes, AgilFlow se conformera à ses obligations légales.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">4. Droits des Utilisateurs :</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants sur vos données :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Accès, rectification, effacement, opposition, limitation du traitement et portabilité.</li>
            </ul>
            <p>Vous pouvez exercer ces droits en nous contactant à <a href="mailto:contact@agilflow.app" className="text-blue-400 underline">contact@agilflow.app</a> ou par courrier à l'adresse suivante : <strong>47 rue de la République, 83170 BRIGNOLES</strong>.</p>
          </section>

          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">5. Cookies et Suivi :</h2>
            <p><strong>Types de cookies utilisés</strong> :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Cookies nécessaires au bon fonctionnement du site</li>
              <li>Cookies analytiques pour améliorer l'expérience utilisateur</li>
              <li>Certains cookies tiers peuvent être déposés par des services externes intégrés au site. AgilFlow n’exerce aucun contrôle sur leur installation et vous invite à consulter les politiques de confidentialité des tiers concernés.</li>
            </ul>
            <p><strong>Gestion des cookies</strong> :</p>
            <ul className="list-disc pl-5 text-left">
              <li>Une bannière s'affichera lors de votre première visite pour obtenir votre consentement.</li>
              <li>Vous pourrez modifier vos préférences via un lien en bas de page permettant de gérer les cookies.</li>
            </ul>
          </section>

          <section className="space-y-4 text-justify">
  <h2 className="text-2xl font-semibold">6. Sécurité des Données :</h2>
  <p>
    Nous mettons en place des mesures adaptées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation, notamment :
  </p>
  <ul className="list-disc pl-5 text-left">
    <li>Utilisation de protocoles de chiffrement pour sécuriser les échanges de données</li>
    <li>Mécanismes de protection des accès aux informations sensibles</li>
    <li>Mise en place de sauvegardes régulières pour prévenir toute perte de données</li>
  </ul>
  <p>
    Cependant, malgré nos efforts pour assurer un haut niveau de sécurité, aucun système n'est totalement inviolable. En cas d'incident de sécurité affectant vos données personnelles, nous nous engageons à prendre les mesures nécessaires et à vous en informer conformément aux obligations légales en vigueur.
  </p>
</section>


          <section className="space-y-4 text-justify">
            <h2 className="text-2xl font-semibold">7. Informations de Contact :</h2>
            <p><strong>Email de contact pour toute question relative à la politique de confidentialité ou aux demandes RGPD</strong> : <a href="mailto:contact@agilflow.app" className="text-blue-400 underline">contact@agilflow.app</a></p>
            <p><strong>Adresse postale pour toute demande relative aux données personnelles</strong> : 47 rue de la République, 83170 BRIGNOLES</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}