/**
 * @packageDocumentation
 * @module api.functional.members
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, IPropagation, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IForbidden } from "../../structures/IForbidden";
import type { IMember } from "../../structures/IMember";
import type { INotFound } from "../../structures/INotFound";

/**
 * @throws 403
 * @throws 404
 * @throws 422
 * 
 * @controller MembersController.login
 * @path POST /members/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
    connection: IConnection,
    input: login.Input,
): Promise<login.Output> {
    return PlainFetcher.propagate(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "application/json",
            },
        },
        {
            ...login.METADATA,
            path: login.path(),
        } as const,
        input,
    );
}
export namespace login {
    export type Input = Primitive<IMember.ILogin>;
    export type Output = IPropagation<{
        201: IMember;
        403: IForbidden;
        404: INotFound;
        422: IForbidden.IExpired;
    }>;

    export const METADATA = {
        method: "POST",
        path: "/members/login",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/members/login`;
    }
}