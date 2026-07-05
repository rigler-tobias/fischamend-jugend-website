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
  icon: string;
}

export const visionen: Vision[] = [
  {
    title: "Projekte",
    desc: "Wir wollen soziale Projekte umsetzen, welche Vorteile für die gesamte Gemeinde bringen!",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Workshops",
    desc: "Wir wollen Workshops durchführen um uns immer wieder weiterbilden zu können!",
    icon: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347M4.26 10.147a50.548 50.548 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814M4.26 10.147a50.02 50.02 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443",
  },
  {
    title: "Events",
    desc: "Wir wollen Veranstaltungen organisieren. Von der Jugend, für die Jugend!",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    title: "Kooperationen",
    desc: "Wir wollen uns mit anderen Vereinen kurzschließen und zusammen Großes erreichen.",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
];
