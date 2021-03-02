import {EntityRepository, Repository} from 'typeorm';
import {Quotes} from '../modules/quote.entity';
import {CreateQuoteDto} from "./dto/createQuote.dto";
import {QuotesProviderEnum} from "./QuotesProvider.enum";
import {QuotesCryptoTypesEnum} from "./QuotesApiService/QuotesCryptoTypes.enum";
import {Injectable} from "@nestjs/common";
import {quoteHistoryDto} from "./dto/quoteHistory.dto";

@EntityRepository(Quotes)
export class QuotesRepository extends Repository<Quotes> {

    async createQuote(CreateQuoteDto: CreateQuoteDto): Promise<Quotes|boolean> {

        const quote = new Quotes();
        quote.provider = QuotesProviderEnum[CreateQuoteDto.provider];

        for(let key in QuotesCryptoTypesEnum) {
            quote[key] = CreateQuoteDto[key];
        }

        try {
            await quote.save();
        } catch (e) {
            return false;
        }
        return quote;
    }

    async getHistory(quoteHistory: quoteHistoryDto): Promise<Quotes[]> {
        const { provider, currency } = quoteHistory;
        const where = provider ? {provider: provider} : {};
        const selectQ = [];
        selectQ.push('id','provider','created_at');
        if(currency) {
            selectQ.push( (QuotesCryptoTypesEnum[(currency).toLowerCase()].toLowerCase() ) ) ;
        } else {
            selectQ.push(QuotesCryptoTypesEnum.btc.toLowerCase(), QuotesCryptoTypesEnum.eth.toLowerCase(), QuotesCryptoTypesEnum.ltc.toLowerCase());
        }

        const history = await this.find(
            {
                select: selectQ,
                take: 30,
                where: where,
                order: {
                    id: "DESC"
                }
            });
        return history;
    }


    async getLatest(): Promise<Quotes[]> {
        const latest = await this.find(
            {
                take: 1,
                order: {
                    id: "DESC"
                }
            });
        return latest;
    }
}