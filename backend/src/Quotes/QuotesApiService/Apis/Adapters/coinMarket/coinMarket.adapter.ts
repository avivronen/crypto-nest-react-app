import {Injectable, HttpService, Inject} from '@nestjs/common';
import { map } from 'rxjs/operators'
import {QuotesProviderEnum} from "../../../../QuotesProvider.enum";
import {QuotesApiServiceAdaptersInterface} from "../quotesApiServiceAdaptersInterface";

//https://coinmarketcap.com/

@Injectable()
export class CoinMarketAdapter implements QuotesApiServiceAdaptersInterface{

    quotes = null;
    providerName = QuotesProviderEnum.COIN_MARKET;
    errors = '';

    async fetchQuotes() {
        const headers = {
            'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY || '123'
        }

        const http = new HttpService();
        try {
            const res = await http.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,LTC', {headers: headers})
                .pipe(
                    map(response => response.data.data)
                ).toPromise();

            this.quotes = res;
        } catch (e) {
            this.quotes = false;
            if(e.response && e.response.statusText) {
                this.errors = e.response.statusText;
            } else {
                this.errors = e;
            }

            return false;
        }

        return true;
    }


    async extractQuotes(name: string) {
        try {
            return this.quotes[name]['quote']['USD']['price'];
        } catch (e) {
            return false;
        }
    }
}
