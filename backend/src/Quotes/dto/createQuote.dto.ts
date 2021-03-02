import {IsEnum, IsNotEmpty} from 'class-validator';
import {QuotesProviderEnum} from "../QuotesProvider.enum";

export class CreateQuoteDto {
    @IsNotEmpty()
    @IsEnum(QuotesProviderEnum)
    provider: string;

    @IsNotEmpty()
    btc: any;

    @IsNotEmpty()
    eth: any;

    @IsNotEmpty()
    ltc: any;
}