import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1680983607692 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
        ALTER TABLE state
        ADD uf varchar(2) NOT NULL;
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
        ALTER TABLE state
        DROP uf;
        `);
  }
}
