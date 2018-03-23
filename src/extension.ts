'use strict';
import { workspace, commands, ExtensionContext } from 'vscode';
import { Usecase } from './usecase';
import { ColorCustomizationsRepository } from './colorCustomizations';
import { Config } from './config';


export function activate(context: ExtensionContext) {

    console.log('Congratulations, your extension "workspace-color" is now active!');
    const usecase = new Usecase(
        new ColorCustomizationsRepository(),
        new Config()
    );
    context.subscriptions.push(commands.registerCommand('workspaceColor.nextColor', () => {
        usecase.nextColor();
    }));

    context.subscriptions.push(commands.registerCommand('workspaceColor.setColor', () => {
        usecase.setColor();
    }));
    context.subscriptions.push(commands.registerCommand('workspaceColor.resetColor', () => {
        usecase.resetColor();
    }));
    context.subscriptions.push(workspace.onDidChangeConfiguration( ()=>{
        usecase.configChange();
    }));
}


// this method is called when your extension is deactivated
export function deactivate() {
}