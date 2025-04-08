// src/data/projects.js
export const projects = [
    {
      id: 1,
      title: "Modern Office Design",
      category: "office",
      description: "A sleek and functional workspace designed for collaboration and productivity.",
      fullDescription: `<p>This modern office space was designed for a tech startup looking to create an environment that fosters creativity and teamwork. The design features:</p>
        <ul>
          <li>Open-plan work areas with modular furniture</li>
          <li>Soundproof phone booths for private calls</li>
          <li>Collaboration zones with writable walls</li>
          <li>Biophilic design elements including living walls</li>
        </ul>
        <p>The color palette was carefully selected to promote focus while maintaining energy, with accent colors that reflect the company's brand identity.</p>`,
      features: [
        "Modular furniture system",
        "Acoustic optimization",
        "Brand-aligned color scheme",
        "Smart lighting system",
        "Flexible meeting spaces"
      ],
      images: [
        "/api/placeholder/1200/800?text=Office+Main",
        "/api/placeholder/1200/800?text=Work+Area",
        "/api/placeholder/1200/800?text=Meeting+Room",
        "/api/placeholder/1200/800?text=Reception"
      ],
      client: "TechStart Inc.",
      date: "March 2023",
      budget: "$125,000",
      location: "San Francisco, CA",
      services: ["Space Planning", "Interior Design", "Furniture Selection"]
    },
    // Add more projects following the same structure
  ]