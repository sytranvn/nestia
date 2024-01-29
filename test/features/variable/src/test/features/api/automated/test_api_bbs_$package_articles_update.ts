import type { Primitive } from "@nestia/fetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import api from "../../../../api";
import type { IBbsArticle } from "../../../../api/structures/IBbsArticle";

export const test_api_bbs_$package_articles_update = async (
  connection: api.IConnection,
) => {
  const output: Primitive<IBbsArticle> =
    await api.functional.bbs.$package.articles.update(
      connection,
      typia.random<string>(),
      typia.random<string & Format<"uuid">>(),
      typia.random<IBbsArticle.IStore>(),
    );
  typia.assert(output);
};
