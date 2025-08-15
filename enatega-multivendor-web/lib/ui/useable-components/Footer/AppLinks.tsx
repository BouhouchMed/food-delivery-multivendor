import React from "react";
import Image from "next/image";

const PlayStoreLink =
  "https://avadigit.com/";
const AppleStoreLink =
  "https://avadigit.com/";
import { useTranslations } from "next-intl";

const AppLinks = () => {
  
  const t = useTranslations()
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="text-[20px] mb-4 font-extrabold text-white">
        <Image
          src="/assets/images/svgs/logos.svg"
          alt="Logo"
          width={160}
          height={64}
          className="w-40 h-auto max-h-16"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={() => handleButtonClick(AppleStoreLink)}>
          <Image
            alt={t("apple_app_store_link")}
            width={130}
            height={130}
            src={
              "https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/a0fa3e1c7ca41a70c6285d6c7b18c92b/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            }
          />
        </button>
        <button onClick={() => handleButtonClick(PlayStoreLink)}>
          <Image
            alt={t("google_play_store_link")}
            width={130}
            height={130}
            src={
              "https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/d52acac7f94db66263f5ad9e01c41c82/google-play-badge.png"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default AppLinks;
