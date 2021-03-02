import {Injectable, HttpService} from '@nestjs/common';
import { QuotesProviderEnum} from "../../../../QuotesProvider.enum";
import { map } from 'rxjs/operators'
import {QuotesApiServiceAdaptersInterface} from "../quotesApiServiceAdaptersInterface";

//https://coinmarketcap.com/

@Injectable()
export class CryptoCompareAdapter implements QuotesApiServiceAdaptersInterface {
    quotes = null;
    providerName = QuotesProviderEnum.CRYPTO_COMPARE;
    errors = '';

    async fetchQuotes() {
        const http = new HttpService();
        const apiKey='123';
        try {
            const res = await http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,&tsyms=USD&api_key='+apiKey)
                .pipe(
                    map(response => response.data)
                ).toPromise();

            this.quotes = res;
        } catch (e) {
            this.quotes = false;
            this.errors = e;
            return false;
        }

        return true;
    }

    async extractQuotes(name: string) {
        try {
            return this.quotes[name]['USD'];
        }catch (e) {
            return null;
        }
    }

}
