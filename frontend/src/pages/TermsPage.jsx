export default function TermsPage() {
  return (
    <article className="mx-5 bg-[#F2F2F2] px-4 rounded-">
      <h1 className="font-bold mb-4 mt-5">Mentions Légales</h1>
      <h2 className="font-bold mb-3">1. Informations Légales</h2>
      <ul>
        <li>
          <strong>Nom de l'entreprise </strong>: Street Art Hunter
        </li>
        <li>
          <strong>Adresse </strong>: 1 rue du code, 75000 Paris
        </li>
        <li>
          <strong>Téléphone </strong>: 01 02 03 04 05 06
        </li>
        <li>
          <strong>Adresse e-mail</strong> :{" "}
          <a href="mailto:strart@wsc.com" target="_blank" rel="noreferrer">
            strart@wsc.com
          </a>
        </li>
      </ul>
      <h2 className="font-bold mb-3">2. Conditions d'utilisation</h2>
      <h3 className="font-bold mb-3">Acceptation des Conditions</h3>
      <p>
        En accédant à ce site web (ci-après "le Site"), vous acceptez de vous
        conformer aux présentes conditions d'utilisation, à toutes les lois et
        réglementations applicables, et vous acceptez d'être responsable du
        respect des lois locales applicables dans votre pays.
      </p>
      <h3 className="font-bold mb-3">Modification des Conditions</h3>
      <p>
        Nous nous réservons le droit de réviser ces conditions d'utilisation à
        tout moment sans préavis. En continuant à utiliser le Site, vous
        acceptez d'être lié par la version la plus récente de ces conditions.
      </p>
      <h2 className="font-bold mb-3">3. Proriété Intellectuelle</h2>
      <h3 className="font-bold mb-3">Droits d'auteur</h3>
      <p>
        Le contenu, les logos, les graphiques et autres éléments présents sur
        Mapping ART sont libres de droit. Utilisation Autorisée.
      </p>
      <h2 className="font-bold mb-3">4. Politique de confidentialité</h2>
      <p>
        Notre priorité est la protection de vos informations sur Mapping Art.
        Nous collectons des données limitées (nom, e-mail) pour personnaliser
        votre expérience street art. Vos informations sont sécurisées et ne sont
        pas partagées sans consentement. Les cookies améliorent la navigation,
        et vous avez le contrôle sur vos données (accès, correction,
        suppression). Consultez régulièrement notre politique, sujette à des
        mises à jour.
      </p>
      <h2 className="font-bold mb-3">5. Limitations de Responsabilité</h2>
      <p>
        Nous nous efforçons de fournir des informations précises sur le Site,
        mais nous ne garantissons pas l'exactitude, l'exhaustivité ou
        l'actualité des informations.
      </p>
      <h2 className="font-bold mb-3">6. Contact</h2>
      <p className="pb-5">
        Pour toute question concernant ces mentions légales, veuillez nous
        contacter à l'adresse suivante :
        <a href="mailto:strart@wsc.com" target="_blank" rel="noreferrer">
          <strong> strart@wsc.com </strong>
        </a>
        .
      </p>
    </article>
  );
}
