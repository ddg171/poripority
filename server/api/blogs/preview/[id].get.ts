import client from "~~/lib/microCMS";
import type { Article } from "~~/types/articles";
import { convertContent } from "~~/utils/contentParser";

export default defineEventHandler(async (event): Promise<Article> => {
  const contentId = event.context?.params?.id;
  const k = getQuery(event).key;
  const draftKey = typeof k === "string" ? k.toString() : null;
  if (!contentId || !draftKey) {
    throw createError({ statusCode: 400, statusMessage: "err" });
  }
  try {
    const res = await client.get({
      endpoint: "blogs",
      contentId,
      queries: {
        draftKey,
      },
    });
    const resWithConvertedContent = {
      ...res,
      content: convertContent(res.content),
    };
    return resWithConvertedContent;
  } catch (e) {
    console.error(e);
    throw createError({ statusCode: 404, statusMessage: "err" });
  }
});
