import { MigrationInterface, QueryRunner } from "typeorm";

export class updateauctionfields1677586203890 implements MigrationInterface {
    name = 'updateauctionfields1677586203890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "is_active" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "is_active" DROP DEFAULT`);
    }

}
