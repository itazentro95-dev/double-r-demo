/* ============================================================
   Double R : FR / EN language toggle, scroll reveals,
   rotating burger names, hero parallax.
   French is the raw HTML language (lang=fr); the dictionary
   below mirrors it exactly and adds the full English version.
   ============================================================ */
(function () {
  "use strict";

  var I18N = {
    fr: {
      title: "Double R : Burgers à Yverdon-les-Bains",
      skip: "Aller à la carte",
      wordmarkSub: "Burgers · Yverdon-les-Bains",
      navSig: "Signatures",
      navMenu: "La carte",
      navStory: "La maison",
      navOrder: "Commander",
      navVisit: "Visite",
      badgeRating: "4,6 · plus de 960 avis Google",
      badgeStyle: "Bar à burgers, esprit diner",
      h1a: "Les burgers",
      h1b: "dont Yverdon parle",
      heroRotatePrefix: "On se fait un",
      heroRotateSuffix: " ?",
      heroLede: "À deux pas de la place Pestalozzi, le Double R grille des burgers sans compromis : viande des fermes environnantes, pain de la boulangerie du coin, fromages fondus d’une laiterie près d’Yverdon, et une sauce maison sur chacun.",
      ctaMenu: "Voir la carte",
      ctaReserve: "Réserver",
      ctaCall: "Appeler",
      heroNote: "Petite salle, grande réputation : la réservation est conseillée.",
      heroFactHours: "Mar à sam, midi 11h00-13h30 et soir 18h00-21h30 · fermé dim. et lun.",
      sigTitle: "Les burgers dont tout le monde parle",
      sigSub: "Ceux qui reviennent dans les avis, encore et encore : le poivré, les frites, l’énorme et le feu de la grille.",
      tagFav: "Préféré des habitués",
      tagBig: "Le géant",
      tagVeggie: "Végétarien",
      sig1Desc: "Le signature de la maison : un steak poivré, une sauce qui a fait sa réputation, et les frites maison à côté. En version maxi pour les grandes faims.",
      sig2Name: "Frites maison",
      sig2Desc: "Fines, dorées, relevées au paprika et aux oignons caramélisés à la bière. Les avis en parlent presque autant que des burgers.",
      sig3Name: "Le Mastodonte",
      sig3Desc: "Le géant de la carte. Les habitués le recommandent « pour mourir de bonheur » : à partager, ou pas.",
      sig4Name: "Tout passe par la grille",
      sig4Desc: "Steaks grillés à la commande, fromages fondus d’une laiterie près d’Yverdon, pain frais de la boulangerie du coin.",
      sigMoreTitle: "Et aussi, à la carte",
      sl1Desc: "L’autre nom que les habitués citent avec le Jack Pepper. Si vous hésitez, c’est celui-là.",
      sl2Desc: "« Le meilleur burger que j’ai mangé de toute ma vie », dit un avis. Rien de moins.",
      sl3Desc: "Repéré sur les photos des clients : rien que le nom donne le ton de la maison.",
      sl4Name: "Burger végétarien",
      sl4Desc: "Parce qu’un bon bar à burgers pense à tout le monde : la version végétarienne est bien à la carte.",
      menuTitle: "Les burgers, et le reste",
      menuSub: "Les noms sont ceux de la carte et des avis des clients. Tout burger s’accompagne d’une sauce maison, avec salade ou frites au paprika et oignons caramélisés à la bière.",
      catBurgers: "Les burgers",
      mJack: "Le fameux. Steak poivré, sauce maison, frites maison. Existe aussi en version maxi.",
      mMastoName: "Le Mastodonte",
      mMasto: "Le plus gros de la maison, pensé pour les très grandes faims, et pour les défis entre amis.",
      mMig: "Le préféré de beaucoup d’habitués, généreux et sans chichi.",
      mFlat: "Celui qui a valu à un client son « meilleur burger de toute ma vie ».",
      mPist: "Un nom aperçu sur les photos des clients, bien dans l’esprit décalé de la carte.",
      mClassicName: "Le Classique",
      mClassic: "Le burger dans sa forme la plus pure : steak des fermes environnantes, pain du coin, sauce maison.",
      mBaconName: "Burger au bacon",
      mBacon: "Avec du bacon grillé, pour les puristes du genre.",
      mDoubleName: "Le Double",
      mDouble: "Double steak, double plaisir : la réponse de la maison aux grandes faims, un cran sous le Mastodonte.",
      mVegName: "Burger végétarien",
      mVeg: "La version sans viande, avec la même sauce maison et le même soin.",
      catOther: "Autres assiettes",
      mTunaName: "Steak de thon",
      mTuna: "L’alternative de la maison au burger de bœuf, pour les envies de poisson.",
      mPanini: "Des paninis et des sandwichs chauds, pour les petites faims et les pauses rapides.",
      mSaladName: "Salade d’accompagnement",
      mSalad: "Fraîche et croquante, en accompagnement ou en entrée légère.",
      catSides: "Accompagnements et sauces",
      mFriesName: "Frites maison",
      mFries: "Les frites dont tout le monde parle : fines, dorées, faites maison.",
      mSeasonedName: "Frites épicées",
      mSeasoned: "Relevées au paprika et aux oignons caramélisés à la bière : l’accompagnement signature des burgers.",
      mSauceName: "Sauce maison",
      mSauce: "Chaque burger part avec sa sauce maison. Mayonnaise maison aussi, pour les frites.",
      catDessert: "Desserts et boissons",
      mCheese: "Le dessert de la carte, pour finir sur une note douce.",
      mBeerName: "Bières",
      mBeer: "De bonnes bières pour accompagner les burgers, sur place ou en terrasse.",
      mSoftName: "Boissons fraîches",
      mSoft: "Softs et boissons fraîches pour toute la table.",
      mCoffeeName: "Café",
      mCoffee: "Un café pour terminer, esprit diner oblige.",
      menuNote: "Les prix ne sont pas publiés en ligne : ils vous sont confirmés au téléphone ou sur place. Cette carte reprend les plats attestés par la maison et les avis des clients.",
      menuCta: "Commander par téléphone",
      factQuartLbl: "Quartier",
      factQuartVal: "Vieille ville d’Yverdon",
      factTerrLbl: "Terrasse",
      factTerrVal: "Ombragée, vue sur le Jura",
      factProdLbl: "Produits",
      factProdVal: "Fermes, boulangerie, laiterie d’ici",
      factNoteLbl: "Avis Google",
      factNoteVal: "4,6 sur 5",
      storyCardNote: "Sans chichi, généreux, un peu décalé : c’est ce que les avis retiennent.",
      storyTitle: "Un petit resto, une grande réputation",
      storyP1: "Rue du Collège, à la lisière de la vieille ville, le Double R fait une chose, et il la fait sans compromis : des burgers. La viande vient des fermes environnantes, les légumes sont cultivés dans la région, le pain est préparé par une boulangerie bien connue du coin et les fromages fondus arrivent d’une laiterie située non loin d’Yverdon.",
      storyP2: "Le reste se lit dans les avis : des habitués qui reviennent depuis plus de dix ans, des frites maison au paprika et aux oignons caramélisés à la bière, une sauce maison sur chaque burger, et un service rapide qui a le sourire. Le théâtre de l’Échandole, lui, tranche : « les meilleurs burgers d’Yverdon ».",
      storyP3: "Le nom ? Un clin d’œil des connaisseurs au Double R Diner de Twin Peaks, la série culte de David Lynch. Les burgers portent des noms du même esprit (Sergent Jack Pepper, Mastodonte, Mig Bach, Flat Earth), et la salle garde un air rétro et décalé que les clients adorent.",
      chip1: "Viande des fermes environnantes",
      chip2: "Sauce maison sur chaque burger",
      chip3: "Terrasse ombragée",
      chip4: "Sur place ou à emporter",
      storyRating: "étoiles sur plus de 960 avis Google. Les clients citent la viande, les sauces maison, les frites, et l’ambiance.",
      trustTitle: "Bon à savoir avant de venir",
      trust1Title: "Noté 4,6 étoiles",
      trust1Desc: "Plus de 960 avis Google, et des habitués fidèles depuis plus de dix ans : la réputation du Double R s’est faite au bouche-à-oreille.",
      trust2Title: "Terroir, sans compromis",
      trust2Desc: "Viande des fermes environnantes, légumes de la région, pain de la boulangerie du coin, fromages d’une laiterie près d’Yverdon.",
      trust3Title: "Terrasse à la vieille ville",
      trust3Desc: "Une ruelle calme à la lisière de la vieille ville, des tables ombragées et le Jura au loin : les burgers se dégustent aussi dehors.",
      trust4Title: "Les familles sont chez elles",
      trust4Desc: "Assiette pour les enfants, portions généreuses et prix doux pour la Suisse : les avis saluent un accueil sincèrement chaleureux.",
      orderTitle: "Commander, réserver, emporter",
      orderSub: "Pas de commande en ligne : ici, tout passe par un coup de fil, comme dans un vrai diner.",
      ccTitle: "À emporter, en trois temps",
      cc1Title: "Choisir son burger",
      cc1Desc: "Parcourez la carte ci-dessus et repérez votre nom préféré.",
      cc2Title: "Appeler la maison",
      cc2Desc: "Un coup de fil suffit : on vous dit quand c’est prêt.",
      cc3Title: "Récupérer, se régaler",
      cc3Desc: "Votre burger vous attend rue du Collège 4, chaud et généreux.",
      ccCta: "Appeler maintenant",
      rsTitle: "Réserver une table",
      rsDesc: "La salle est petite et les habitués nombreux : la maison conseille de réserver, surtout le soir et le week-end. Le même numéro sert pour la terrasse dès les beaux jours.",
      visitTitle: "Rue du Collège, on vous attend",
      visitAddrTitle: "Adresse et contact",
      visitPhoneLabel: "Téléphone :",
      visitEmailLabel: "E-mail :",
      visitDirections: "Itinéraire",
      visitHoursTitle: "Horaires de cuisine",
      dLunch: "Mardi à samedi · midi",
      dEvening: "Mardi à samedi · soir",
      dSunMon: "Dimanche et lundi",
      dClosed: "Fermé",
      hoursNote: "Horaires de cuisine selon la brochure régionale (nov. 2026). Certains annuaires indiquent un service continu de 11h00 à 23h00 : en cas de doute, un coup de fil ou la page Facebook confirme l’horaire du jour.",
      visitService: "Sur place dans la petite salle ou en terrasse, et tout est aussi à emporter.",
      visitTravelTitle: "Y arriver",
      travelStation: "à moins de cinq minutes à pied, comme la place Pestalozzi et la vieille ville.",
      travelTown: "une ruelle calme à la lisière de la vieille ville : la terrasse y guette le soleil, avec le Jura au loin.",
      footerSub: "Bar à burgers · Rue du Collège 4, 1400 Yverdon-les-Bains",
      footerTop: "Haut de page",
      footerNote: "4,6 étoiles sur plus de 960 avis Google, fermé dimanche et lundi",
      barCall: "Appeler",
      barReserve: "Réserver",
      barDir: "Itinéraire",
      barMenu: "Carte"
    },
    en: {
      title: "Double R: Burgers in Yverdon-les-Bains",
      skip: "Skip to the menu",
      wordmarkSub: "Burgers · Yverdon-les-Bains",
      navSig: "Signatures",
      navMenu: "Menu",
      navStory: "The House",
      navOrder: "Order",
      navVisit: "Visit",
      badgeRating: "4.6 · over 960 Google reviews",
      badgeStyle: "Burger bar, diner spirit",
      h1a: "The burgers",
      h1b: "Yverdon talks about",
      heroRotatePrefix: "Fancy a",
      heroRotateSuffix: "?",
      heroLede: "Steps from Place Pestalozzi, Double R grills burgers with no compromises: meat from surrounding farms, buns from the neighbourhood bakery, melted cheeses from a dairy near Yverdon, and a house sauce on every one.",
      ctaMenu: "See the menu",
      ctaReserve: "Book a table",
      ctaCall: "Call us",
      heroNote: "A small room with a big reputation: booking ahead is recommended.",
      heroFactHours: "Tue to Sat, lunch 11:00-13:30 and evenings 18:00-21:30 · closed Sun & Mon",
      sigTitle: "The burgers everyone talks about",
      sigSub: "The ones that come up in the reviews again and again: the pepper one, the fries, the giant and the fire of the grill.",
      tagFav: "Regulars’ favourite",
      tagBig: "The giant",
      tagVeggie: "Vegetarian",
      sig1Desc: "The house signature: a peppery patty, the sauce that built its reputation, and homemade fries alongside. In a maxi version for serious appetites.",
      sig2Name: "Homemade Fries",
      sig2Desc: "Skinny, golden, lifted with paprika and beer-caramelised onions. The reviews mention them almost as much as the burgers.",
      sig3Name: "The Mastodonte",
      sig3Desc: "The giant of the menu. Regulars recommend it ’to die of happiness’: to share, or not.",
      sig4Name: "Everything hits the grill",
      sig4Desc: "Patties grilled to order, melted cheeses from a dairy near Yverdon, fresh buns from the neighbourhood bakery.",
      sigMoreTitle: "Also on the menu",
      sl1Desc: "The other name regulars mention alongside the Jack Pepper. If you are hesitating, this is the one.",
      sl2Desc: "’The best burger I have eaten in my whole life,’ says one review. Nothing less.",
      sl3Desc: "Spotted in guest photos: the name alone sets the tone of the house.",
      sl4Name: "Vegetarian Burger",
      sl4Desc: "Because a good burger bar thinks of everyone: the vegetarian version is firmly on the menu.",
      menuTitle: "The burgers, and the rest",
      menuSub: "The names are the menu’s own, and the ones guests write about. Every burger comes with a house sauce, plus salad or fries with paprika and beer-caramelised onions.",
      catBurgers: "The Burgers",
      mJack: "The famous one. Peppery patty, house sauce, homemade fries. Also in a maxi version.",
      mMastoName: "The Mastodonte",
      mMasto: "The biggest in the house, built for serious appetites, and for dares between friends.",
      mMig: "A regulars’ favourite, generous and no fuss.",
      mFlat: "The one a guest called ’the best burger of my whole life’.",
      mPist: "A name spotted in guest photos, very much in the menu’s playful spirit.",
      mClassicName: "The Classic",
      mClassic: "The burger in its purest form: beef from surrounding farms, neighbourhood bun, house sauce.",
      mBaconName: "Bacon Burger",
      mBacon: "With grilled bacon, for purists of the genre.",
      mDoubleName: "The Double",
      mDouble: "Double patty, double pleasure: the house answer to big appetites, one notch below the Mastodonte.",
      mVegName: "Vegetarian Burger",
      mVeg: "The meat-free version, with the same house sauce and the same care.",
      catOther: "More Plates",
      mTunaName: "Tuna Steak",
      mTuna: "The house alternative to the beef burger, for when you fancy fish.",
      mPanini: "Paninis and hot sandwiches, for smaller appetites and quick breaks.",
      mSaladName: "Side Salad",
      mSalad: "Fresh and crisp, as a side or a light starter.",
      catSides: "Sides and Sauces",
      mFriesName: "Homemade Fries",
      mFries: "The fries everyone talks about: skinny, golden, homemade.",
      mSeasonedName: "Seasoned Fries",
      mSeasoned: "Lifted with paprika and beer-caramelised onions: the burgers’ signature side.",
      mSauceName: "House Sauce",
      mSauce: "Every burger leaves with its house sauce. Homemade mayonnaise too, for the fries.",
      catDessert: "Desserts and Drinks",
      mCheese: "The menu’s dessert, to finish on a sweet note.",
      mBeerName: "Beers",
      mBeer: "Good beers to go with the burgers, inside or out on the terrace.",
      mSoftName: "Soft Drinks",
      mSoft: "Soft drinks and cold refreshments for the whole table.",
      mCoffeeName: "Coffee",
      mCoffee: "A coffee to finish, diner style.",
      menuNote: "Prices are not published online: they are confirmed by phone or in person. This menu lists the dishes attested by the house and by guest reviews.",
      menuCta: "Order by phone",
      factQuartLbl: "Neighbourhood",
      factQuartVal: "Yverdon old town",
      factTerrLbl: "Terrace",
      factTerrVal: "Shaded, Jura views",
      factProdLbl: "Produce",
      factProdVal: "Local farms, bakery, dairy",
      factNoteLbl: "Google rating",
      factNoteVal: "4.6 out of 5",
      storyCardNote: "No fuss, generous, a little offbeat: that is what the reviews remember.",
      storyTitle: "A small place, a big reputation",
      storyP1: "On Rue du Collège, at the edge of the old town, Double R does one thing with no compromises: burgers. The meat comes from surrounding farms, the vegetables are grown in the region, the buns are made by a well-known neighbourhood bakery and the melted cheeses arrive from a dairy not far from Yverdon.",
      storyP2: "The rest is in the reviews: regulars who have come back for over ten years, homemade fries with paprika and beer-caramelised onions, a house sauce on every burger, and fast service with a smile. The Théâtre de l’Échandole puts it plainly: ’the best burgers in Yverdon’.",
      storyP3: "The name? A knowing wink to the Double R Diner of Twin Peaks, David Lynch’s cult series. The burgers carry names in the same spirit (Sergent Jack Pepper, Mastodonte, Mig Bach, Flat Earth), and the room has the retro, offbeat feel guests love.",
      chip1: "Meat from surrounding farms",
      chip2: "House sauce on every burger",
      chip3: "Shaded terrace",
      chip4: "Eat in or takeaway",
      storyRating: "stars from over 960 Google reviews. Guests cite the meat, the house sauces, the fries, and the atmosphere.",
      trustTitle: "Good to know before you come",
      trust1Title: "Rated 4.6 stars",
      trust1Desc: "Over 960 Google reviews and regulars loyal for more than ten years: Double R’s reputation was built by word of mouth.",
      trust2Title: "Local, no compromises",
      trust2Desc: "Meat from surrounding farms, vegetables from the region, buns from the neighbourhood bakery, cheeses from a dairy near Yverdon.",
      trust3Title: "Terrace by the old town",
      trust3Desc: "A calm side street at the edge of the old town, shaded tables and the Jura in the distance: the burgers taste great outside too.",
      trust4Title: "Families are at home here",
      trust4Desc: "A children’s platter, generous portions and prices that are gentle for Switzerland: reviews praise a sincerely warm welcome.",
      orderTitle: "Order, book, take away",
      orderSub: "No online ordering: here everything goes through a phone call, like a real diner.",
      ccTitle: "Takeaway, in three steps",
      cc1Title: "Choose your burger",
      cc1Desc: "Browse the menu above and pick your favourite name.",
      cc2Title: "Call the house",
      cc2Desc: "One call is enough: we will tell you when it is ready.",
      cc3Title: "Collect and enjoy",
      cc3Desc: "Your burger will be waiting at Rue du Collège 4, hot and generous.",
      ccCta: "Call now",
      rsTitle: "Book a table",
      rsDesc: "The room is small and the regulars are many: the house recommends booking, especially in the evening and at weekends. The same number works for the terrace when the sun is out.",
      visitTitle: "On Rue du Collège, waiting for you",
      visitAddrTitle: "Address and contact",
      visitPhoneLabel: "Phone:",
      visitEmailLabel: "Email:",
      visitDirections: "Get directions",
      visitHoursTitle: "Kitchen hours",
      dLunch: "Tuesday to Saturday · lunch",
      dEvening: "Tuesday to Saturday · evening",
      dSunMon: "Sunday and Monday",
      dClosed: "Closed",
      hoursNote: "Kitchen hours per the regional brochure (Nov 2026). Some directories list continuous service from 11:00 to 23:00: if in doubt, a quick call or the Facebook page confirms the day’s hours.",
      visitService: "Eat in the small dining room or on the terrace, and everything is also available to take away.",
      visitTravelTitle: "Getting here",
      travelStation: "less than five minutes on foot, as are Place Pestalozzi and the old town.",
      travelTown: "a calm side street at the edge of the old town: the terrace there catches the sun, with the Jura in the distance.",
      footerSub: "Burger bar · Rue du Collège 4, 1400 Yverdon-les-Bains",
      footerTop: "Back to top",
      footerNote: "Rated 4.6 stars from over 960 Google reviews, closed Sunday and Monday",
      barCall: "Call",
      barReserve: "Book",
      barDir: "Directions",
      barMenu: "Menu"
    }
  };

  var ROTATE = {
    fr: ["Sergent Jack Pepper", "Mastodonte", "Mig Bach", "Flat Earth"],
    en: ["Sergent Jack Pepper", "Mastodonte", "Mig Bach", "Flat Earth"]
  };

  var STORAGE_KEY = "doubler-lang";
  var currentLang = "fr";
  var rotateIndex = 0;
  var rotateTimer = null;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyLang(lang) {
    if (!I18N[lang]) lang = "fr";
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict.title;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    rotateIndex = 0;
    var word = document.getElementById("rotateWord");
    if (word) word.textContent = ROTATE[lang][0];
    startRotation();
  }

  function startRotation() {
    if (rotateTimer) { clearInterval(rotateTimer); rotateTimer = null; }
    if (reducedMotion) return;
    var word = document.getElementById("rotateWord");
    if (!word) return;
    rotateTimer = setInterval(function () {
      var words = ROTATE[currentLang];
      rotateIndex = (rotateIndex + 1) % words.length;
      word.classList.add("is-out");
      setTimeout(function () {
        word.textContent = words[rotateIndex];
        word.classList.remove("is-out");
      }, 300);
    }, 3200);
  }

  /* Language buttons */
  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  /* Restore saved language */
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (saved && saved !== "fr" && I18N[saved]) applyLang(saved);
  else startRotation();

  /* Scroll reveals */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Hero parallax : transform only, rAF-throttled */
  var heroImg = document.getElementById("heroImg");
  if (heroImg && !reducedMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            heroImg.style.transform = "scale(1.06) translateY(" + (y * 0.12) + "px)";
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
