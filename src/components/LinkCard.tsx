import { VFC } from "react";

import { OgpData } from "@/types";

interface LinkCardProps {
  ogp: OgpData;
}

export const LinkCard: VFC<LinkCardProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  return (
    <a href={pageUrl} target="_blank" rel="noreferrer">
      <article className="flex justify-between border border-black border-solid">
        <div className="flex flex-col justify-between p-5">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-base text-gray-500">{description}</p>
          <div className="flex items-center">
            <img src={faviconUrl} className="h-6" alt="" />
            <p className="text-base ml-2">{pageUrl}</p>
          </div>
        </div>
        <div className="w-2/5">
          <img src={ogImgUrl} alt="" />
        </div>
      </article>
    </a>
  );
};
