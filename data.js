// =============================================
// THE CENTRAL VIEW — Site Data
// Single source of truth for rooms, FAQ, reviews
// =============================================

const SITE = {
  name: "The Central View",
  tagline: "Boutique Hotel · Vlorë, Albania",
  phone: "+355 69 123 4567",
  whatsapp: "+35569123456",   // no spaces/dashes for wa.me link
  email: "stay@thecentralview.al",
  address: "Rruga Ismail Qemali, Vlorë 9401, Albania",
  coords: { lat: 40.4614, lng: 19.4828 },
  instagram: "https://instagram.com/thecentralview",
};

const ROOMS = [
  {
    id: "city-view",
    name: "City View Room",
    nameItalic: "City View",
    subtitle: "The city unfolds beneath you.",
    priceFrom: 120,
    currency: "€",
    images: [
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
    ],
    features: [
      "26 m² · King or Twin beds",
      "360° city panorama",
      "Marble bathroom with rainfall shower",
      "Nespresso & minibar",
      "Free high-speed WiFi",
      "Air conditioning",
      "Daily housekeeping",
      "Breakfast included",
    ],
    description: "Our entry into the sky. Perched above Vlorë's rooftops, the City View Room wraps you in the ambient glow of urban life while the Adriatic shimmers on the horizon. Crisp linens, warm stone textures, and a picture window that frames the city like a living painting.",
  },
  {
    id: "adriatic-suite",
    name: "Adriatic Suite",
    nameItalic: "Adriatic Suite",
    subtitle: "Sea light, from dawn to dusk.",
    priceFrom: 200,
    currency: "€",
    images: [
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
    ],
    features: [
      "48 m² · King bed + sitting area",
      "Direct Adriatic sea view",
      "Private terrace (12 m²)",
      "Soaking tub + walk-in shower",
      "Nespresso, minibar & wine on arrival",
      "Free high-speed WiFi",
      "Air conditioning",
      "Breakfast included",
    ],
    description: "Wake to the sound of the Adriatic. Our suite faces west so the sea is the last thing you see before sleep and the first at dawn. A private terrace, a deep soaking tub, and space to exhale — this is the room for those who came to truly arrive.",
  },
  {
    id: "penthouse-360",
    name: "Penthouse — The 360°",
    nameItalic: "The 360°",
    subtitle: "Every horizon, yours.",
    priceFrom: 380,
    currency: "€",
    images: [
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
      "https://res.cloudinary.com/dr63qmw21/image/upload/v1780254562/1_v2cave.jpg",
    ],
    features: [
      "95 m² · Master King bedroom + lounge",
      "360° wraparound panoramic terrace",
      "Private rooftop plunge pool",
      "Two bathrooms (soaking tub + walk-in rain shower)",
      "Full kitchen & dining",
      "Dedicated concierge service",
      "Daily housekeeping twice daily",
      "Breakfast included + champagne on arrival",
    ],
    description: "Above everything. The Penthouse occupies the entire top floor, its wraparound terrace commanding a cinematic sweep from the Albanian Alps to the open Adriatic. A private plunge pool, a full kitchen, and a living room large enough to host — this is not a hotel room, it is a private residence in the clouds.",
  },
];

const FAQS = [
  {
    q: "What is included in the room rate?",
    a: "All rooms include a full Albanian-Mediterranean breakfast, high-speed WiFi, air conditioning, and daily housekeeping. The Adriatic Suite and Penthouse also include a welcome bottle of local wine."
  },
  {
    q: "How do I make a reservation?",
    a: "You can book directly through our website booking form, or reach us instantly via WhatsApp. Direct bookings receive our best available rate and are fully flexible up to 48 hours before arrival."
  },
  {
    q: "What is the cancellation policy?",
    a: "Free cancellation up to 48 hours before check-in. Bookings cancelled within 48 hours are charged one night's rate. No-shows are charged in full."
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 3:00 PM. Check-out is by 11:00 AM. Early check-in and late check-out are available upon request, subject to availability — just message us in advance."
  },
  {
    q: "Is the hotel suitable for families with children?",
    a: "Yes. We welcome families warmly. The City View Room can be configured as twin beds. Cots and extra bedding are available on request. Please mention your needs when booking."
  },
  {
    q: "Do you have parking?",
    a: "We offer secure parking on-site for €8/night. The city center is extremely walkable from our location — most guests find they don't need a car at all during their stay."
  },
  {
    q: "Is the hotel pet-friendly?",
    a: "Small, well-behaved pets are welcome in the City View Room with prior arrangement. A small supplement of €15/night applies. Please contact us before booking to confirm."
  },
  {
    q: "How close are you to the beach?",
    a: "Vlorë's Old Beach (Plazhi i Vjetër) is a 7-minute walk. Uji i Ftohtë beach, one of Albania's most beautiful, is accessible by bicycle (free to guests) or a short taxi ride."
  },
  {
    q: "Do you offer airport transfers?",
    a: "We arrange private transfers from Tirana International Airport (TIA, approx. 2h30) and Corfu Airport (ferry + transfer). Prices vary by group size — ask us via WhatsApp for a quote."
  },
  {
    q: "Is breakfast included?",
    a: "Yes — a full, freshly prepared breakfast is included in all rooms. Our rooftop breakfast features local honey, Albanian cheeses, seasonal fruit, fresh-baked byrek, and espresso."
  },
  {
    q: "What languages do your staff speak?",
    a: "Our team speaks Albanian, English, and Italian fluently. We can accommodate guests in several other languages — just ask."
  },
  {
    q: "Can I book the Penthouse for events?",
    a: "Yes. The Penthouse's terrace can host intimate gatherings of up to 20 guests. We arrange catering, floristry, and a full event setup. Contact us directly to discuss your occasion."
  },
];

const REVIEWS = [
  {
    author: "Sophie T.",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    date: "September 2024",
    room: "Adriatic Suite",
    text: "We spent five nights in the Adriatic Suite and I genuinely did not want to leave. The view is exactly as described — better, actually. Staff were warm and genuinely helpful, not just polite. Breakfast on the rooftop with the sea in front of you is worth the trip alone. One of our best hotel stays ever.",
  },
  {
    author: "Marco B.",
    country: "Italy",
    flag: "🇮🇹",
    rating: 5,
    date: "August 2024",
    room: "Penthouse — The 360°",
    text: "Siamo rimasti quattro notti nel Penthouse per il nostro anniversario. La terrazza a 360° è semplicemente spettacolare — di mattina il sole sorge sul mare, di sera l'Albania si illumina come uno specchio. Il team ha preparato una sorpresa romantica senza che chiedessimo nulla. Torneremo.",
  },
  {
    author: "James & Lena K.",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    date: "July 2024",
    room: "City View Room",
    text: "Hidden gem of the Adriatic. Vlore is not yet on the tourist radar which makes everything here feel relaxed and real. The hotel itself is beautifully designed — minimal, elegant, not trying too hard. The host was incredibly kind and gave us genuine local recommendations, none of that generic tourist stuff.",
  },
  {
    author: "Anika M.",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    date: "June 2024",
    room: "Adriatic Suite",
    text: "Honestly one of the most beautiful boutique hotels I've stayed in across all of Europe. The design is thoughtful — every detail considered. Vlore as a city is underestimated and this hotel shows you why Albania should be on every traveller's list. Already planning a return in spring.",
  },
  {
    author: "Elena P.",
    country: "Greece",
    flag: "🇬🇷",
    rating: 5,
    date: "October 2024",
    room: "City View Room",
    text: "Peaceful, beautiful, and incredibly good value compared to equivalent hotels in Mykonos or Dubrovnik. The breakfast is genuinely lovely — local produce, freshly made. The team remembered our names from day one. That's rare and it matters.",
  },
  {
    author: "David R.",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    date: "August 2024",
    room: "Penthouse — The 360°",
    text: "I was skeptical about Albania — I shouldn't have been. The Central View is a genuinely world-class property in an undiscovered part of Europe. The penthouse terrace at sunset is one of those moments you talk about for years. Already recommended to six friends.",
  },
];
