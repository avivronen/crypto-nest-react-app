export interface QuotesApiServiceAdaptersInterface {
     //Save API RES to quotes
     quotes: object | null;
     //coinMarket, cryptoCompare.
     providerName: string;
     errors: string;

    //Fetching quotes from 3rd party API
    fetchQuotes(): Promise<boolean> | boolean;

    //Extracting results from 3rd response to cryptoName[rate]
    extractQuotes(name: string): Promise<Number> | null

}

