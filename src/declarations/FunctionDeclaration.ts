import { AsyncDeclaration, CallableDeclaration, ExportableDeclaration } from './Declaration';
import { ParameterDeclaration } from './ParameterDeclaration';
import { VariableDeclaration } from './VariableDeclaration';

/**
 * Function declaration. Like the MethodDeclaration it contains the base info about the function
 * and additional stuff.
 *
 * @export
 * @class FunctionDeclaration
 * @implements {CallableDeclaration}
 * @implements {ExportableDeclaration}
 */
export class FunctionDeclaration implements AsyncDeclaration, CallableDeclaration, ExportableDeclaration {
    public parameters: ParameterDeclaration[] = [];
    public variables: VariableDeclaration[] = [];
    public typeArguments: ParameterDeclaration[] = [];

    constructor(
        public name: string,
        public isExported: boolean,
        public isAsync: boolean,
        public type?: string,
        public start?: number,
        public end?: number,
    ) { }
}
