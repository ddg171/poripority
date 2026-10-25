import client from "~~/lib/microCMS";
import type { Article } from "~~/types/articles";
import { convertContent } from "~~/utils/contentParser";

export default defineEventHandler(async (event): Promise<Article> => {
  const contentId = event?.context?.params?.id;
  setHeader(event, "Cache-Control", "public, max-age=600, s-maxage=600");
  if (!contentId) {
    throw createError({ statusCode: 400, statusMessage: "err" });
  }
  try {
    const res = await client.get({
      endpoint: "blogs",
      contentId,
    });
    const resWithConvertedContent = {
      ...res,
      content: convertContent(res.content),
    };
    return resWithConvertedContent;
  } catch {
    throw createError({ statusCode: 404, statusMessage: "err" });
  }
});
