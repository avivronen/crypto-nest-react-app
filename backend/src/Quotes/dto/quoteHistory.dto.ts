import {IsEnum, IsNotEmpty, IsOptional} from 'class-validator';
import {QuotesProviderEnum} from "../QuotesProvider.enum";
import {QuotesCryptoTypesEnum} from "../QuotesApiService/QuotesCryptoTypes.enum";

export class quoteHistoryDto {
    @IsOptional()
    @IsEnum(QuotesProviderEnum)
    provider: QuotesProviderEnum;

    @IsOptional()
    @IsEnum(QuotesCryptoTypesEnum)
    currency: QuotesCryptoTypesEnum;
}