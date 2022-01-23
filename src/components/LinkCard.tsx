import { VFC } from "react";

import { OgpData } from "@/types";

interface LinkCardProps {
  ogp: OgpData;
}
export const Favicon: VFC<LinkCardProps> = ({ ogp }) => {
  const { faviconUrl, pageUrl } = ogp;
  return (
    <div className="flex items-center">
      {(() => {
        if (faviconUrl) {
          return (
            <>
              <img src={faviconUrl} className="h-6" alt="" />
              <p className="text-base ml-2">{pageUrl}</p>
            </>
          );
        } else {
          return <p className="text-base ">{pageUrl}</p>;
        }
      })()}
    </div>
  );
};

export const LinkCard: VFC<LinkCardProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;

  return (
    <a href={pageUrl} target="_blank" rel="noreferrer">
      <article className="flex justify-between border border-gray-400 border-solid rounded h-40">
        {(() => {
          if (ogImgUrl) {
            return (
              <>
                <div className="flex flex-col justify-between p-5 w-3/5 hover:bg-gray-100 ">
                  <h3 className="text-2xl truncate">{title}</h3>
                  <p className="text-base text-gray-500 truncate">
                    {description}
                  </p>
                  <Favicon ogp={ogp} />
                </div>
                <div className="w-2/5 h-full rounded">
                  <img
                    src={ogImgUrl}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </>
            );
          } else {
            return (
              <div className="flex flex-col justify-between p-5 w-full hover:bg-gray-100 ">
                <h3 className="text-2xl truncate">{title}</h3>
                <p className="text-base text-gray-500 truncate">
                  {description}
                </p>
                <Favicon ogp={ogp} />
              </div>
            );
          }
        })()}
      </article>
    </a>
  );
};
