import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("pulumi", {
    name: "pulumi",
    windows: [
        "${ALLUSERSPROFILE:-C:\\ProgramData}\\chocolatey\\\\pulumi\\tools\\pulumi\\bin\\pulumi.exe",
        "${ChocolateyInstall}\\lib\\pulumi\\tools\\pulumi\\bin\\pulumi.exe",
    ],
    linux: [
        "${HOME}/.pulumi/bin/pulumi",
    ],
});

/**
 * Represents a pulumi command.
 */
export class PulumiCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("pulumi", args, options);
    }
}

/**
 * Creates a new instance of the PulumiCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the PulumiCommand class.
 */
export function pulumi(args?: CommandArgs, options?: CommandOptions): PulumiCommand {
    return new PulumiCommand(args, options);
}
