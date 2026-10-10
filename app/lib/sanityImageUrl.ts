import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./sanity";

const builder = createImageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
