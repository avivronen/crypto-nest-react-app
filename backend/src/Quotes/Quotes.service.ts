import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {QuotesRepository} from "./Quotes.repository";
import QuotesApiServicesList from "./QuotesApiService/Apis/QuotesApiServicesList";
import {quotesApiService} from "./QuotesApiService/Apis/quotesApi.service";
import {CoinMarketAdapter} from "./QuotesApiService/Apis/Adapters/coinMarket/coinMarket.adapter";
import {CryptoCompareAdapter} from "./QuotesApiService/Apis/Adapters/cryptoCompare/cryptoCompare.adapter";
import {Quotes} from "../modules/quote.entity";
import {quoteHistoryDto} from "./dto/quoteHistory.dto";


@Injectable()
export class quotesService {

    public constructor(
        @InjectRepository(QuotesRepository)
        private quoteRepository: QuotesRepository,
    ) {
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    async getLatest(): Promise<Quotes[]> {
        return await this.quoteRepository.getLatest();
    }

    async getHistory(quoteHistory: quoteHistoryDto): Promise<Quotes[]> {
       return await this.quoteRepository.getHistory(quoteHistory);
    }

    async updateRates() {
        const quotes = {};
        console.log('updateRates Starts');

        const random = this.getRandomInt(QuotesApiServicesList.length);
        switch (random) {
            case 0:
                return await (new quotesApiService(new CoinMarketAdapter(), this.quoteRepository)).fetchAndSaveQuotes();

            case 1:
                return  await (new quotesApiService(new CryptoCompareAdapter(), this.quoteRepository)).fetchAndSaveQuotes();
        }
    }

}