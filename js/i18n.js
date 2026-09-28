// PT / EN. One dictionary, one apply() — every translated string on the page
// lives in `translations` below and nowhere else.
//
// Markup hooks:
//   data-i18n="key"             → textContent
//   data-i18n-html="key"        → innerHTML (only for strings that carry <em>/<span>)
//   data-i18n-attr="attr:key;…" → attributes (alt, aria-label, meta content)
//
// Facts are never translated: prices, hours, the address, the phone number,
// the rating and review count.
//
// Reviews follow the page language: verbatim when the original is in it,
// otherwise a faithful translation labelled "Traduzido do… / Translated from…".
// The originals, as read on Google on 24 Sep 2026:
//   André P. (pt) “O sushi é delicioso, com um menu variado e com um atendimento excelentemente atencioso.”
//   Laura M. (es) “El servicio es tranquilo y el ambiente muy relajado e intimo silencioso y agradable.”
//   Xanyar K. (en) “Service was quick and friendly. Restaurant is huge. Menu has a wide selection.”
(() => {
  const STORAGE_KEY = "altto-language";
  const DEFAULT = "pt";

  const translations = {
    pt: {
      "meta.title": "ALTTO Lisboa — Sushi, drinks e boa vibe",
      "meta.description":
        "ALTTO Lisboa. Rodízio de sushi na Rua da Escola de Medicina Veterinária 3. Almoço 12:00–15:00, jantar 19:00–23:00, todos os dias.",
      "meta.ogLocale": "pt_PT",
      "meta.ogLocaleAlt": "en_GB",

      skip: "Saltar para os preços",
      "nav.label": "Principal",
      "nav.home": "ALTTO Lisboa, início",
      "nav.experience": "Experiência",
      "nav.prices": "Preços",
      "nav.location": "Localização",
      "nav.locationShort": "Local",
      "lang.group": "Idioma",

      "hours.everyDay": "Todos os dias",

      "hero.l1": "Sushi,",
      "hero.l2": "drinks e",
      "hero.l3": "boa <em>vibe.</em>",
      "hero.sub": "Rodízio de sushi em Lisboa, ao almoço e ao jantar.",
      "cta.prices": "Ver preços",
      "cta.directions": "Como chegar",

      "exp.title": "Há noites que pedem mais um <em>pouco.</em>",
      "exp.note": "Sushi e cozinha asiática contemporânea, em Lisboa.",

      "moment.vibe": "boa <em>vibe</em>",

      "price.title": "Preços",
      "price.kind": "Rodízio · por pessoa",
      "price.lunch": "Almoço",
      "price.dinner": "Jantar",
      "price.weekdays": "Segunda a sexta",
      "price.perk": "Recarga de bebida grátis",
      "price.weekend": "Sábado, domingo e feriados",
      "price.everyDay": "Todos os dias",

      "atmo.label": "Atmosfera",
      "atmo.title": "Como se vive<br /> o ALTTO.",

      "rating.heading": "Avaliações no Google",
      "rating.outOf": "de 5 estrelas",
      "rating.source": "Google · 197 avaliações",
      "rating.dist": "Distribuição das avaliações",
      "rating.cta": "Ver no Google",
      "rating.five": "5 de 5 estrelas",
      "rating.four": "4 de 5 estrelas",
      "review.srcPt": "Google Reviews",
      "review.srcEs": "Google Reviews · Traduzido do espanhol",
      "review.srcEn": "Google Reviews · Traduzido do inglês",
      "review.pt.lang": "pt-PT",
      "review.pt.text": "“O sushi é delicioso, com um menu variado e com um atendimento excelentemente&nbsp;atencioso.”",
      "review.es.lang": "pt-PT",
      "review.es.text": "“O serviço é tranquilo e o ambiente muito descontraído, íntimo, silencioso e&nbsp;agradável.”",
      "review.en.lang": "pt-PT",
      "review.en.text": "“O serviço foi rápido e simpático. O restaurante é enorme. O menu tem uma grande&nbsp;variedade.”",

      "visit.heading": "Localização e contactos",
      "visit.reserve": "Reservas por telefone",
      "visit.call": "Ligar",

      "alt.hero": "Seleção de sushi e bebida numa mesa escura do ALTTO.",
      "alt.experience": "Preparação de salmão para sushi.",
      "alt.moment": "Martini vermelho no balcão do bar, com prateleiras iluminadas ao fundo.",
      "alt.platter": "Seleção de peças de sushi servidas num prato preto.",
      "alt.salmon": "Prato de salmão servido com acompanhamento.",
      "alt.tacos": "Tacos de salmão servidos numa base de ardósia.",
    },

    en: {
      "meta.title": "ALTTO Lisboa — Sushi, drinks and good vibes",
      "meta.description":
        "ALTTO Lisboa. All-you-can-eat sushi at Rua da Escola de Medicina Veterinária 3. Lunch 12:00–15:00, dinner 19:00–23:00, every day.",
      "meta.ogLocale": "en_GB",
      "meta.ogLocaleAlt": "pt_PT",

      skip: "Skip to prices",
      "nav.label": "Main",
      "nav.home": "ALTTO Lisboa, home",
      "nav.experience": "Experience",
      "nav.prices": "Prices",
      "nav.location": "Location",
      "nav.locationShort": "Location",
      "lang.group": "Language",

      "hours.everyDay": "Every day",

      "hero.l1": "Sushi,",
      "hero.l2": "drinks and",
      "hero.l3": "good <em>vibes.</em>",
      "hero.sub": "All-you-can-eat sushi in Lisbon, for lunch and dinner.",
      "cta.prices": "View prices",
      "cta.directions": "Get directions",

      "exp.title": "Some nights call for a little <em>more.</em>",
      "exp.note": "Contemporary sushi and Asian cuisine in Lisbon.",

      "moment.vibe": 'good <em>vibes</em>',

      "price.title": "Prices",
      "price.kind": "All-you-can-eat · per person",
      "price.lunch": "Lunch",
      "price.dinner": "Dinner",
      "price.weekdays": "Monday to Friday",
      "price.perk": "Free drink refills",
      "price.weekend": "Saturday, Sunday and public holidays",
      "price.everyDay": "Every day",

      "atmo.label": "Atmosphere",
      "atmo.title": "A table<br /> at ALTTO.",

      "rating.heading": "Google reviews",
      "rating.outOf": "out of 5 stars",
      "rating.source": "Google · 197 reviews",
      "rating.dist": "Rating distribution",
      "rating.cta": "View on Google",
      "rating.five": "5 out of 5 stars",
      "rating.four": "4 out of 5 stars",
      "review.srcPt": "Google Reviews · Translated from Portuguese",
      "review.srcEs": "Google Reviews · Translated from Spanish",
      "review.srcEn": "Google Reviews",
      "review.pt.lang": "en",
      "review.pt.text": "“The sushi is delicious, with a varied menu and exceptionally attentive&nbsp;service.”",
      "review.es.lang": "en",
      "review.es.text": "“The service is calm and the atmosphere very relaxed, intimate, quiet and&nbsp;pleasant.”",
      "review.en.lang": "en",
      "review.en.text": "“Service was quick and friendly. Restaurant is huge. Menu has a wide&nbsp;selection.”",

      "visit.heading": "Location and contacts",
      "visit.reserve": "Reservations by phone",
      "visit.call": "Call",

      "alt.hero": "A selection of sushi and a drink on a dark table at ALTTO.",
      "alt.experience": "Salmon being prepared for sushi.",
      "alt.moment": "A red martini on the bar counter, lit shelves behind.",
      "alt.platter": "A selection of sushi pieces served on a black plate.",
      "alt.salmon": "A plate of salmon served with garnish.",
      "alt.tacos": "Salmon tacos served on a slate board.",
    },
  };

  const HTML_LANG = { pt: "pt-PT", en: "en" };
  const root = document.documentElement;

  const read = () => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v in translations ? v : null;
    } catch (e) {
      return null;
    }
  };

  const write = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private mode: the choice still holds for this visit */
    }
  };

  function apply(lang) {
    const t = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = t[el.dataset.i18nHtml];
      if (v != null) el.innerHTML = v;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (t[key] != null) el.setAttribute(attr, t[key]);
      });
    });

    root.lang = HTML_LANG[lang];

    document.querySelectorAll(".lang-opt").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  // Keep the visitor exactly where they were: whatever sits at the top of the
  // viewport before the swap sits there after it, even if copy above reflows.
  function switchTo(lang) {
    if (root.lang === HTML_LANG[lang]) return;

    const probe = document.elementFromPoint(window.innerWidth / 2, 1);
    const anchor = probe && probe.closest("section, header, footer");
    const before = anchor ? anchor.getBoundingClientRect().top : 0;

    apply(lang);
    write(lang);

    if (anchor) {
      const drift = anchor.getBoundingClientRect().top - before;
      if (Math.abs(drift) > 0.5) window.scrollBy({ top: drift, left: 0, behavior: "instant" });
    }

  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-opt");
    if (btn) switchTo(btn.dataset.lang);
  });

  // First visit → Portuguese. A saved choice is always honoured, never overridden.
  const saved = read() || DEFAULT;
  if (saved !== DEFAULT) apply(saved);
  else root.lang = HTML_LANG.pt;
})();
