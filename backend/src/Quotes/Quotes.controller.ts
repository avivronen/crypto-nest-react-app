import {Controller, Get, Param, Query, ValidationPipe} from '@nestjs/common';
import { CoinMarketAdapter } from "./QuotesApiService/Apis/Adapters/coinMarket/coinMarket.adapter";
import { CryptoCompareAdapter } from "./QuotesApiService/Apis/Adapters/cryptoCompare/cryptoCompare.adapter";
import {quotesApiService} from "./QuotesApiService/Apis/quotesApi.service";
import {InjectRepository} from "@nestjs/typeorm";
import {QuotesRepository} from "./Quotes.repository";
import {quotesService} from "./Quotes.service";
import {quoteHistoryDto} from "./dto/quoteHistory.dto";
import {Quotes} from "../modules/quote.entity";
import QuotesApiServicesList from "./QuotesApiService/Apis/QuotesApiServicesList";
import {QuotesCryptoTypesEnum} from "./QuotesApiService/QuotesCryptoTypes.enum";


@Controller('quotes')
export class QuotesController {

    public constructor(
        private quotesService: quotesService
    ) {
    }

    @Get('latest')
    async getLatest(): Promise<Quotes[]> {
        return await this.quotesService.getLatest();
    }

    @Get('history')
    async getHistory(
        @Query(ValidationPipe) historyDto: quoteHistoryDto
    ): Promise<Quotes[]> {
        return await this.quotesService.getHistory(historyDto);
    }

    @Get('providers')
    async getProviders(): Promise<typeof QuotesApiServicesList> {
        return QuotesApiServicesList;
    }

    @Get('currencies')
    async getCurrencies(): Promise<typeof QuotesCryptoTypesEnum> {
        return QuotesCryptoTypesEnum;
    }


}
