const banners = {
  home: {
    image: "/src/assets/banner-main.svg",
    text: "Chez vous, partout et ailleurs",
    className: "banner",
  },
  about: {
    image: "/src/assets/banner-about.svg",
    text: "",
    className: "bannerAbout",
  },
};

export default function useBanner(page) {
  return banners[page] || null;
}
