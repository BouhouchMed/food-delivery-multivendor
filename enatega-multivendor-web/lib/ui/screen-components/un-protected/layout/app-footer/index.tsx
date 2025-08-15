"use client";

import AppLinks from "@/lib/ui/useable-components/Footer/AppLinks";
import FooterLinks from "@/lib/ui/useable-components/Footer/FooterLinks";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const AppFooter = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === "ar";
  const pathname = usePathname();

  const isDiscoveryPage =
    pathname?.endsWith("/restaurants") ||
    pathname?.endsWith("/discovery") ||
    pathname?.endsWith("/store");

  const partnerWithEnatega = {
    title: t("Footer.partnerWithEnatega"),
    links: [
      { label: t("Footer.home"), link: "/", internal: true },
      { label: t("Footer.forRiders"), link: "/rider", internal: true },
      { label: t("Footer.forRestaurants"), link: "/restaurantInfo", internal: true },
    ],
  };

  const products = {
    title: t("Footer.products"),
    links: [
      {
        label: t("Footer.enategaRider"),
        link: "https://avadigit.com/",
        internal: false,
      },
      {
        label: t("Footer.enategaRestaurant"),
        link: "https://avadigit.com/",
        internal: false,
      },
      
    ],
  };

  const usefulLinks = {
    title: t("Footer.company"),
    links: [
      { label: t("Footer.aboutUs"), link: "/about", internal: true },
      { label: t("Footer.termsConditions"), link: "/terms", internal: true },
      { label: t("Footer.privacyPolicy"), link: "/privacy", internal: true },
      { label: t("Footer.contact"), link: "https://avadigit.com/", internal: false },
      { label: t("Footer.developers"), link: "https://avadigit.com/", internal: false },
      
    ],
  };

  const followUs = {
    title: t("Footer.followUs"),
    links: [
      { label: t("Footer.blog"), link: "https://avadigit.com/", internal: false },
      {
        label: t("Footer.instagram"),
        link: "",
        internal: false,
      },
      {
        label: t("Footer.facebook"),
        link: "https://www.facebook.com/avadigit/",
        internal: false,
      },
      {
        label: t("Footer.linkedIn"),
        link: "",
        internal: false,
      },
    ],
  };

  return (
    <div
      className={`w-full h-auto bg-[#141414] flex items-center justify-center ${
        isDiscoveryPage ? "md:pb-0 pb-20" : ""
      }`}
      style={isArabic ? { direction: "rtl", textAlign: "right" } : {}}
    >
      <div className="mx-auto my-[30px] md:mt-[60px] md:mb-[60px] p-4 flex md:items-center md:justify-center flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-screen md:w-full md:px-0 px-4">
          <div className="p-2">
            <AppLinks />
          </div>
          <div className="p-2">
            <FooterLinks section={partnerWithEnatega} />
          </div>
          <div className="p-2">
            <FooterLinks section={products} />
          </div>
          <div className="p-2">
            <FooterLinks section={usefulLinks} />
          </div>
          <div className="p-2">
            <FooterLinks section={followUs} />
          </div>
        </div>
      </div>
    </div>
  );
};

AppFooter.displayName = "AppFooter";

export default AppFooter;
