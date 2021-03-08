import {
  JsonController,
  Get,
  Res,
  getMetadataArgsStorage,
} from "routing-controllers";

import { routingControllersToSpec } from "routing-controllers-openapi";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";

@JsonController("/doc")
export class DocController {
  @Get("/")
  openApiSchema(@Res() res: { send: (data: any) => {} }) {
    const schemas = validationMetadatasToSchemas({
      refPointerPrefix: "#/components/schemas/",
    });
    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(
      storage,
      {},
      {
        components: { schemas },
        info: { title: "Ali Backend", version: "1.2.0" },
      }
    );
    return res.send(spec);
  }
}
