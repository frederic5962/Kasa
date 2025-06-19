import  bannerMain from "../assets/banner-main.svg";

const banners = {
  home: {
    image: bannerMain,
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
