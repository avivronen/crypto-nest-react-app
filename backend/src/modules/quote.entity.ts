import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { QuotesProviderEnum} from "../Quotes/QuotesProvider.enum";

@Entity()
export class Quotes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: Date,
            default: () => 'CURRENT_TIMESTAMP'}
    )
    created_at;


    @Column()
    @Index()
    provider: QuotesProviderEnum;

    @Column({
        type: 'decimal',
        precision: 30,
        scale: 15,
        nullable: true,
    })
    btc;

    @Column()
    @Column({
        nullable: true,
        type: 'decimal',
        precision: 30,
        scale: 15,
    })
    eth;

    @Column({
        nullable: true,
        type: 'decimal',
        precision: 30,
        scale: 18,
    })
    ltc;

}