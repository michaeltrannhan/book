export const SiteConfig = {
  name: "BookSeeker",
  url: "localhost:3000",
  ogImage: null,
  description: "Where you can find you favorite books",
  links: {
    facebook: "",
    linkedin: "",
  },
};
export type SiteConfig = typeof SiteConfig;
import { MainNavItem } from "@/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
}
export const NavigationLink: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
