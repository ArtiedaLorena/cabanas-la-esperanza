import { faqs, site } from "../data/site";

export function JsonLd() {
  const lodging = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "VacationRental"],
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    telephone: site.contact.phoneTel,
    email: site.contact.email,
    sameAs: [site.instagram.url],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    hasMap: site.address.mapsUrl,
    petsAllowed: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cocina", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pileta", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parrilla", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cochera cubierta", value: true },
    ],
    priceRange: "Consultar",
    availableLanguage: ["es"],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\[Placeholder:[^\]]+\]/g, "").trim(),
      },
    })),
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${site.name} | Cabañas en Villa Larca, San Luis`,
    description: site.description,
    url: site.url,
    inLanguage: "es-AR",
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
    </>
  );
}
