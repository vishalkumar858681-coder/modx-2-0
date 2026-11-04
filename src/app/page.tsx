import { readFileSync } from "node:fs";
import { join } from "node:path";

export default function Home() {
  const homepage = readFileSync(
    join(process.cwd(), "src/content/homepage.html"),
    "utf8",
  );

  return <div dangerouslySetInnerHTML={{ __html: homepage }} />;
}
