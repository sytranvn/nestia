import type { Primitive } from "@nestia/fetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import api from "../../../../api";
import type { IBbsComment } from "../../../../api/structures/IBbsComment";

export const test_api_api_v1_articles_comments_at = async (
  connection: api.IConnection,
) => {
  const output: Primitive<IBbsComment> =
    await api.functional.api.v1.articles.comments.at(
      connection,
      typia.random<string>(),
      typia.random<string & Format<"uuid">>(),
      typia.random<string & Format<"uuid">>(),
    );
  typia.assert(output);
};
