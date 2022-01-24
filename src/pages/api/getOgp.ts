import { JSDOM } from "jsdom";

import { OgpData } from "@/types";

import type { NextApiRequest, NextApiResponse } from "next";

async function getOgp(req: NextApiRequest, res: NextApiResponse<OgpData>) {
  // クエリパラメタからURL情報を受け取り、エンコードする
  const { url } = req.query;
  const encodeURL = encodeURI(url as string);
  // エンコード済みURLに対してリクエストを行い、レスポンスからopgDataを抽出する
  try {
    const response = await fetch(encodeURL)
      .then((res) => res.text())
      .then((text) => {
        const dom = new JSDOM(text);
        const meta = dom.window.document.head.querySelectorAll("meta");
        const titleTag = dom.window.document.title;

        const tags = Array.from(meta);

        // nameかpropertyで'og:'という文字列を持っているmetaタグを抽出
        const ogTags = tags.filter((tag) => {
          const property = tag.getAttribute("property");
          const name = tag.getAttribute("name");
          const checkOg = (text: string) => text.substring(0, 3) === "og:";

          return checkOg(property ?? "") || checkOg(name ?? "");
        });

        const ogp = ogTags.reduce((previous: any, tag: Element) => {
          const a = tag.hasAttribute("property")
            ? tag.getAttribute("property")
            : tag.getAttribute("name");

          // それらから'og:'を取り除いて、keyに
          const key = a?.trim().replace("og:", "") ?? "";

          // それらのcontent属性からvalueを取得
          const content = tag.getAttribute("content") ?? "";
          previous[key] = content;

          return previous;
        }, {});

        // https:// を覗いた最初の/まで抜き出す
        const siteUrl = ogp["url"].substring(
          0,
          ogp["url"].indexOf("/", 8)
        ) as string;
        // 多くのサイトはroot/favicon.icoでfaviconを取得できるようになっているらしい
        const faviconPath = "/favicon.ico";
        const title = titleTag ?? ogp["title"] ?? ogp["site_name"];

        const ogpData: OgpData = {
          title: titleTag,
          description: ogp["description"] as string,
          faviconUrl: siteUrl + faviconPath,
          ogImgUrl: ogp["image"] as string,
          pageUrl: ogp["url"] as string,
        };

        return ogpData;
      });

    // 返ってきたデータから、title, description, ogImgUrl, faviconUrl, siteUrlを抽出して返す
    const { title, description, faviconUrl, ogImgUrl, pageUrl } = response;

    res.status(200).json({
      title,
      description,
      faviconUrl,
      ogImgUrl,
      pageUrl,
    });
  } catch (err) {
    res.status(200).json({
      title: "Sorry！うまく取得できなかったっぽいです🙇‍♂️",
      description: "",
      faviconUrl: "",
      ogImgUrl: "",
      pageUrl: "",
    });
    console.log(err);
  }
}

export default getOgp;
