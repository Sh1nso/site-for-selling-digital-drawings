import { MigrationInterface, QueryRunner } from "typeorm";

export class updateForLikes1678498258141 implements MigrationInterface {
    name = 'updateForLikes1678498258141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "like" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "like" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "like" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "like" SET NOT NULL`);
    }

}
