import core from "@nestia/core";
import { Controller } from "@nestjs/common";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { createNestFastifyPerformanceProgram } from "../createNestFastifyPerformanceProgram";

createNestFastifyPerformanceProgram(false)(37_022)(() => {
  @Controller()
  class NestiaController {
    @core.TypedRoute.Post("performance")
    public performance(
      @core.TypedBody() input: Collection<ObjectRecursive>,
    ): Collection<ObjectRecursive> {
      return input;
    }
  }
  return NestiaController;
});
