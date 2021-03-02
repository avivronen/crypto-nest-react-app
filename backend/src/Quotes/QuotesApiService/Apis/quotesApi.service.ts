import {CreateQuoteDto} from "../../dto/createQuote.dto";
import {QuotesCryptoTypesEnum} from "../QuotesCryptoTypes.enum";
import {InjectRepository} from "@nestjs/typeorm";
import {QuotesRepository} from "../../Quotes.repository";
import {Quotes} from "../../../modules/quote.entity";
import { Injectable } from '@nestjs/common';

@Injectable()
export class quotesApiService {

    public constructor(
        private quotesApiAdapter,
        @InjectRepository(QuotesRepository)
        private quoteRepository: QuotesRepository,
    ) {
    }

    async fetchAndSaveQuotes(): Promise<boolean|Quotes> {

        await this.quotesApiAdapter.fetchQuotes();
        console.log('fetching', this.quotesApiAdapter.providerName);
        if(this.quotesApiAdapter.quotes === false) {
            console.log(this.quotesApiAdapter.errors);
            return false;
        }

        const createQuoteDto = await this.quotesToDto();
        return await this.quoteRepository.createQuote(createQuoteDto);
    }


    private async quotesToDto(): Promise<CreateQuoteDto> {
        const createQuoteDto =  new CreateQuoteDto();
        createQuoteDto.provider = this.quotesApiAdapter.providerName;
        for(let key in QuotesCryptoTypesEnum) {
            createQuoteDto[key] = await this.quotesApiAdapter.extractQuotes(QuotesCryptoTypesEnum[key]);
        }

        return createQuoteDto;
    }

}