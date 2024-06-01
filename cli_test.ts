import { pulumi } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("pulumi") !== undefined;

Deno.test({
    name: "pulumi",
    ignore: !hasExe,
    fn: async () => {
        const result = await pulumi("version");
        equals(result.code, 0);
        ok(result.text().startsWith("v"));
    },
});
