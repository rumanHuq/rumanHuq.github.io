export const SITE = {
  website: "https://rumanHuq.github.io",
  author: "Ruman Huq",
  profile: "https://ruman.writes/",
  desc: "Ruman writes about code, gym, and everything in between",
  title: "Ruman writes",
  ogImage: "banner.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/rumanHuq/rumans_blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Helsinki", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
