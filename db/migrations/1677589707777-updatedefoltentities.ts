import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedefoltentities1677589707777 implements MigrationInterface {
    name = 'updatedefoltentities1677589707777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "rating" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auction" ALTER COLUMN "rating" DROP DEFAULT`);
    }

}
