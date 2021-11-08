import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addRoleColumnToUsers1636370903516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("users");
    const roleColumn = new TableColumn({ name: "role", type: "int" });
    await queryRunner.addColumn(usersTable, roleColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("users");
    await queryRunner.dropColumn(usersTable, "role");
  }
}
