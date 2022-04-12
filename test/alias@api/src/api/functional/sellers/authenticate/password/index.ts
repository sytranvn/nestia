/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate.password
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { ISeller } from "./../../../../structures/actors/ISeller";

/**
 * Change password.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param httpReq Instance of the Express.Request
 * @param input Old and new passwords
 * @return Empty object
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SellerAuthenticateController.change()
 * @path PATCH /sellers/authenticate/password/change
 */
export function change
    (
        connection: IConnection,
        input: Primitive<change.Input>
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        change.ENCRYPTED,
        change.METHOD,
        change.path(),
        input
    );
}
export namespace change
{
    export type Input = Primitive<ISeller.IChangePassword>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/sellers/authenticate/password/change";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: false,
    };

    export function path(): string
    {
        return `/sellers/authenticate/password/change`;
    }
}
