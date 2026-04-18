export default {
  site: "https://www.queerbadmintonamsterdam.nl",
  ci: {
    budget: {
      performance: 65,
      accessibility: 90, // worth caring about for an inclusive club 🏳️‍🌈
      "best-practices": 80,
      seo: 80,
    },
  },
  scanner: {
    // WordPress tends to have a lot of crawlable URLs, keep it focused
    maxRoutes: 20,
  },
};
