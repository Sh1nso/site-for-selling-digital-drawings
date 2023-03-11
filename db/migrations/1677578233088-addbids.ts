import { MigrationInterface, QueryRunner } from "typeorm";

export class addbids1677578233088 implements MigrationInterface {
    name = 'addbids1677578233088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bid" ("bidId" BIGSERIAL NOT NULL, "sumOfMoney" integer NOT NULL, "ownerId" bigint, "auctionId" bigint, CONSTRAINT "PK_6032df9fab28e156d942fbb7751" PRIMARY KEY ("bidId"))`);
        await queryRunner.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_72eb79d46a57f816eb4aa96f7d1" FOREIGN KEY ("ownerId") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_2e00b0f268f93abcf693bb682c6" FOREIGN KEY ("auctionId") REFERENCES "auction"("auction_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_2e00b0f268f93abcf693bb682c6"`);
        await queryRunner.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_72eb79d46a57f816eb4aa96f7d1"`);
        await queryRunner.query(`DROP TABLE "bid"`);
    }

}
