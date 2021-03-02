import { Test, TestingModule } from '@nestjs/testing';
import { CoinMarketAdapter } from './coinMarket.adapter';

describe('CoinmarketService', () => {
  let service: CoinMarketAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoinMarketAdapter],
    }).compile();

    service = module.get<CoinMarketAdapter>(CoinMarketAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
