import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class Quotes1614286428433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'quotes',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'provider',
                        type: "enum('COIN_MARKET','CRYPTO_COMPARE')"
                    },
                    {
                        name: 'btc',
                        type: 'decimal',
                        precision: 30,
                        scale: 18,
                        isNullable: true
                    },
                    {
                        name: 'eth',
                        type: 'decimal',
                        precision: 30,
                        scale: 18,
                        isNullable: true,
                    },
                    {
                        name: 'ltc',
                        type: 'decimal',
                        precision: 30,
                        scale: 18,
                        isNullable: true
                    },
                ],
            }),
            false,
        );

        await queryRunner.createIndex('quotes', new TableIndex({
            name: 'QUOTES_PROVIDERS',
            columnNames: ['provider'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE quotes`);
    }

}
