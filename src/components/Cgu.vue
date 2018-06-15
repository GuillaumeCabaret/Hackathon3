<template>
<div>
  <div>
    <h1>Cgu</h1>
    <img src="../assets/logowhite.png" class="logo">
    <a href="#/menu" class="close"></a>
    </div>
    <div>
      <br>
      <h3>Mentions Légales</h3>
      <p>
Ce site est édité par la société  Will.
</p><p>
Siège social : Will Chartres
</p><p>
Capital social : XXXXX euros
</p><p>
Téléphone : +33 (0)4.74.00.00.00
</p><p>
Responsable de la rédaction :
</p><p>
Développement, hébergement :
Ice development – www.ice-dev.com
16 rue Maurice Bouchor - 69007 Lyon
Tél : 08 21 23 03 54
Informatique et liberté
</p><p>
Aucune information personnelle n'est collectée à votre insu. Les informations que vous nous communiquez lors d’une demande de devis, de renseignements ou d’inscription à la newsletter par courrier, par téléphone, par e-mail ou par formulaire sont uniquement destinées au traitement administratif et commercial de votre demande par la société Will.
</p><p>
Elles ne font l'objet d'aucune cession à des tiers. Will  traite les informations qui vous concernent avec la plus grande confidentialité.
</p><p>
Conformément à la loi « Informatique et Libertés » n°78-17 du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et d'opposition aux données personnelles vous concernant. Pour l'exercer, il suffit de nous en faire la demande par écrit aux coordonnées suivantes : Will, Chartres, France.
Droit d'auteur / copyright
</p><p>
L'ensemble du contenu du présent site Internet, y compris nom de domaine, marques, logo, texte… est la propriété de la société Will, il est protégé par les lois en vigueur de la législation française sur la propriété intellectuelle.
</p><p>
Aucun élément de ce site ne peut être copié, reproduit, détourné ou dénaturé, et ce, sur quelque support que ce soit, sans constituer un acte de contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. 
Accès au site
</p><p>
L'utilisateur de ce site reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Will ne saurait être tenu responsable des éléments en dehors de son contrôle et des dommages qui pourraient éventuellement être subis par l'environnement technique de l'utilisateur et notamment, ses ordinateurs, logiciels, équipements réseaux et tout autre matériel utilisé pour accéder ou utiliser le service et/ou les informations.
</p><p>
Il est rappelé que le fait d'accéder ou de se maintenir frauduleusement dans un système informatique, d'entraver ou de fausser le fonctionnement d'un tel système, d'introduire ou de modifier frauduleusement des données dans un système informatique constitue des délits passibles de sanctions pénales.
Limitation de responsabilité
</p><p>
Will s'attache à transmettre des informations régulièrement mises à jour, notamment sur les actualités ainsi que sur le contenu des articles. Toutefois des informations erronées ou des omissions peuvent être constatées, suite notamment à des erreurs de saisie ou de mise en page. Si vous en faisiez le constat nous vous invitons à nous le signaler pour que nous puissions procéder à leur rectification.
</p><p>
Nous nous réservons par ailleurs le droit de modifier les informations ou les éventuelles offres commerciales fournies par le présent site, dans le cadre de nos opérations d'actualisation et de mise à jour des données, et ce sans préavis.
</p><p>
Les liens hypertextes mis en oeuvre au sein du présent site Internet, en direction d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources existantes sur Internet, ne sauraient engager la responsabilité de Will.
De même que la société Will  ne pourra en aucune façon être tenue pour responsable des sites ayant un lien hypertexte avec le présent site et décline toute responsabilité quant à leur contenu et à leur utilisation.
</p>
    </div>
    <div>
      <router-link to="/menu" tag="button">Menu</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: "Cgu",
  data() {
    return {
      msg: "Cgu"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  width: 30%;
  margin-top: -13vh;
}
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
p {
  color: white;
}
h3 {
  color: white;
}
</style>
