export interface Project {
  title: string;
  shortTitle: string;
  slug: string;
  status: "Completed" | "Improving" | "Work in progress";
  category: string;
  summary: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Axial Compressor Design and CFD Under Titan Atmospheric Conditions",
    shortTitle: "Titan Axial Compressor",
    slug: "titan-axial-compressor",
    status: "Completed",
    category: "Turbomachinery · CFD · Atmospheric Modeling",
    summary: "A stage of an axial compressor designed and simulated using operating conditions calculated from Titan atmospheric data.",
    tools: ["ANSYS Fluent", "SolidWorks", "MATLAB"],
  },
  {
    title: "Rocket Test Stand Nitrogen Tank Holder",
    shortTitle: "Nitrogen Tank Holder",
    slug: "nitrogen-tank-holder",
    status: "Completed",
    category: "Mechanical Design · CAD · Assembly",
    summary: "A two-person hardware project involving field measurements, CAD modeling, material selection, machining, and installation on a rocket test stand.",
    tools: ["SolidWorks", "Water Jet", "Hand Tools"],
  },
  {
    title: "Interactive Magnetic Marble Maze",
    shortTitle: "Magnetic Marble Maze",
    slug: "magnetic-marble-maze",
    status: "Completed",
    category: "Product Design · Electronics · Embedded Systems",
    summary: "A STEM toy made for children and built by a four-person team using woodworking, CAD, 3D printing, electronics, and embedded code.",
    tools: ["CAD", "3D Printing", "Arduino", "Woodworking"],
  },
  {
    title: "Capacitive LOX Level Sensor",
    shortTitle: "LOX Level Sensor",
    slug: "lox-level-sensor",
    status: "Work in progress",
    category: "Cryogenic Systems · Instrumentation · R&D",
    summary: "Early-stage development of a capacitive sensor intended to measure liquid-oxygen fill level in a propellant tank.",
    tools: ["Capacitive Sensing", "CAD", "Cryogenic Design"],
  },
];
