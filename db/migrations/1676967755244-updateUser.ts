import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUser1676967755244 implements MigrationInterface {
    name = 'updateUser1676967755244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
