import { VFC } from "react";

import { OgpData } from "@/types";

interface LinkCardProps {
  ogp: OgpData;
}

export const LinkCard: VFC<LinkCardProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const w = ogImgUrl ? "w-3/5" : "w-full";
  const ml = faviconUrl ? "ml-2" : "";

  return (
    <a href={pageUrl} target="_blank" rel="noreferrer">
      <article className="flex justify-between border border-gray-400 border-solid rounded h-40">
        <div
          className={`flex flex-col justify-between p-5  hover:bg-gray-100 ${w}`}
        >
          <h3 className="text-2xl truncate">{title}</h3>
          <p className="text-base text-gray-500 truncate">{description}</p>
          <div className="flex items-center">
            {faviconUrl && <img src={faviconUrl} className="h-6" alt="" />}
            <p className={`text-base ${ml}`}>{pageUrl}</p>
          </div>
        </div>
        {ogImgUrl && (
          <div className="w-2/5 h-full rounded">
            <img src={ogImgUrl} className="w-full h-full object-cover" alt="" />
          </div>
        )}
      </article>
    </a>
  );
};
