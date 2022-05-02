/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";
import { assertType } from "typescript-is";
import { createStringifier } from "typescript-json";

import type { ISeller } from "./../../../structures/actors/ISeller";

export * as password from "./password";

/**
 * Join as a seller.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param input Information of yours
 * @return Information of newly joined seller
 * 
 * @controller SellerAuthenticateController.join()
 * @path POST /sellers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function join
    (
        connection: IConnection,
        input: Primitive<join.Input>
    ): Promise<join.Output>
{
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        join.ENCRYPTED,
        join.METHOD,
        join.path(),
        input,
        join.stringify
    );
}
export namespace join
{
    export type Input = Primitive<ISeller.IJoin>;
    export type Output = Primitive<ISeller>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/authenticate/join";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(): string
    {
        return `/sellers/authenticate/join`;
    }
    export const stringify = createStringifier<Input>();
}

/**
 * Log-in as a seller.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param input Email and password
 * @return Information of the seller
 * 
 * @controller SellerAuthenticateController.login()
 * @path POST /sellers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function login
    (
        connection: IConnection,
        input: Primitive<login.Input>
    ): Promise<login.Output>
{
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        login.ENCRYPTED,
        login.METHOD,
        login.path(),
        input,
        login.stringify
    );
}
export namespace login
{
    export type Input = Primitive<ISeller.ILogin>;
    export type Output = Primitive<ISeller>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/authenticate/login";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(): string
    {
        return `/sellers/authenticate/login`;
    }
    export const stringify = createStringifier<Input>();
}

/**
 * @controller SellerAuthenticateController.exit()
 * @path DELETE /sellers/authenticate/exit
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function exit
    (
        connection: IConnection
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        exit.ENCRYPTED,
        exit.METHOD,
        exit.path()
    );
}
export namespace exit
{

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/sellers/authenticate/exit";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/sellers/authenticate/exit`;
    }
}