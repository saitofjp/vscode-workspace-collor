import { workspace } from "vscode";

const orThrow = <T>(val: T | undefined | null): T => {
    if (!val) {
        throw new Error("npo");
    }
    return val;
}

export class Config {
    private conf (){
        return workspace.getConfiguration("workspaceColor");
    }
    colorList() : string[]  {
        var colorList = orThrow(
            this.conf().get<string[]>("colorList")
        );
        return colorList;
    }
    targetTheme(): string  {
        var colorList = orThrow(
            this.conf().get<string>("targetTheme")
        );
        return colorList;
    }
}