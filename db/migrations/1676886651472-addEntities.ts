import { MigrationInterface, QueryRunner } from 'typeorm';

export class addEntities1676886651472 implements MigrationInterface {
  name = 'addEntities1676886651472';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("category_id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "age_rating" integer NOT NULL, "auctionId" bigint, CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content_comment" ("comment_id" BIGSERIAL NOT NULL, "content" character varying NOT NULL, "ownerId" bigint, "auctionId" bigint, CONSTRAINT "PK_794d387b8d520c617736257e8c2" PRIMARY KEY ("comment_id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."auction_duration_enum" AS ENUM('86400', '259200', '604800')`,
    );
    await queryRunner.query(
      `CREATE TABLE "auction" ("auction_id" BIGSERIAL NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "image" character varying NOT NULL, "rating" integer NOT NULL, "like" integer NOT NULL, "duration" "public"."auction_duration_enum" NOT NULL DEFAULT '86400', "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" bigint, CONSTRAINT "PK_44f7425a2403f5c4386cd125e28" PRIMARY KEY ("auction_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("user_id" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "FK_dc77ad1fb36ad5f120ecc4d69ac" FOREIGN KEY ("auctionId") REFERENCES "auction"("auction_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_comment" ADD CONSTRAINT "FK_330948cedb84986fef0ac02eadf" FOREIGN KEY ("ownerId") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_comment" ADD CONSTRAINT "FK_83ffc510263907801415ffda4da" FOREIGN KEY ("auctionId") REFERENCES "auction"("auction_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "auction" ADD CONSTRAINT "FK_612921ecd63175bd714dc1b1291" FOREIGN KEY ("ownerId") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auction" DROP CONSTRAINT "FK_612921ecd63175bd714dc1b1291"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_comment" DROP CONSTRAINT "FK_83ffc510263907801415ffda4da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_comment" DROP CONSTRAINT "FK_330948cedb84986fef0ac02eadf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" DROP CONSTRAINT "FK_dc77ad1fb36ad5f120ecc4d69ac"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "auction"`);
    await queryRunner.query(`DROP TYPE "public"."auction_duration_enum"`);
    await queryRunner.query(`DROP TABLE "content_comment"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
