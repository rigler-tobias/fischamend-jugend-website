export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram: string;
}

export const team: TeamMember[] = [
  { name: "Tobias Rigler", role: "Präsident", image: "rigler.jpeg", instagram: "tobi.rigler" },
  { name: "Maximilian Jäger", role: "Kassier", image: "jaeger.jpg", instagram: "freedom._.jaeger" },
  { name: "Fabian Zeugswetter", role: "Schriftführer", image: "zeugswetter.jpeg", instagram: "zeugsi_2412" },
  { name: "Alexander Hiermann", role: "Präsident Stellvertreter", image: "hiermann.png", instagram: "alex.hier" },
  { name: "Christoph Blizenetz", role: "Kassier Stellvertreter", image: "blizenetz.png", instagram: "christoph_blitz" },
  { name: "Simone Travnik", role: "Schriftführer Stellvertreterin", image: "travnik.jpg", instagram: "simone.sophiee" },
];

export interface Vision {
  title: string;
  desc: string;
}

export const visionen: Vision[] = [
  {
    title: "Projekte",
    desc: "Wir wollen soziale Projekte umsetzen, welche Vorteile für die gesamte Gemeinde bringen!",
  },
  {
    title: "Workshops",
    desc: "Wir wollen Workshops durchführen um uns immer wieder weiterbilden zu können!",
  },
  {
    title: "Events",
    desc: "Wir wollen Veranstaltungen organisieren. Von der Jugend, für die Jugend!",
  },
  {
    title: "Kooperationen",
    desc: "Wir wollen uns mit anderen Vereinen kurzschließen und zusammen Großes erreichen.",
  },
];
