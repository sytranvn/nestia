import express from "express";
import * as nest from "@nestjs/common";
import helper from "nestia-helper";

import { ISeller } from "api/structures/actors/ISeller";

@nest.Controller("sellers/authenticate")
export class SellerAuthenticateController
{
    /**
     * Join as a seller.
     * 
     * @param input Information of yours
     * @return Information of newly joined seller
     * @tag sellers
     */
    @helper.EncryptedRoute.Post("join")
    public async join
        (
            @helper.EncryptedBody() input: ISeller.IJoin
        ): Promise<ISeller>
    {
        input;

        return null!;
    }

    /**
     * Log-in as a seller.
     * 
     * @param input Email and password
     * @return Information of the seller
     * @tag sellers
     */
    @helper.EncryptedRoute.Post("login")
    public async login
        (
            @helper.EncryptedBody() input: ISeller.ILogin
        ): Promise<ISeller>
    {
        input;

        return null!;
    }

    /**
     * Change password.
     * 
     * @param httpReq Instance of the Express.Request
     * @param input Old and new passwords
     * @return Empty object
     * @tag sellers
     */
    @nest.Patch("password/change")
    public async change
        (
            @nest.Request() httpReq: express.Request,
            @helper.EncryptedBody() input: ISeller.IChangePassword
        ): Promise<void>
    {
        httpReq;
        input;
    }
}