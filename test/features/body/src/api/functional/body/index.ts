/**
 * @packageDocumentation
 * @module api.functional.body
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IBbsArticle } from "./../../structures/IBbsArticle";

/**
 * Store an article.
 * 
 * @param input Content to store
 * @returns Newly archived article
 * @author Samchon
 * @warning This is an fake API
 * 
 * @controller TypedBodyController.store()
 * @path POST /body
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    input: store.Input,
): Promise<store.Output> {
    return Fetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "application/json",
            },
        },
        store.ENCRYPTED,
        store.METHOD,
        store.path(),
        input,
    );
}
export namespace store {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/body";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/body`;
    }
}