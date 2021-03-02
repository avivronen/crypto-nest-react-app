import { Test, TestingModule } from '@nestjs/testing';
import { CryptoCompareAdapter } from './cryptoCompare.adapter';

describe('CryptoCompareService', () => {
  let service: CryptoCompareAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoCompareAdapter],
    }).compile();

    service = module.get<CryptoCompareAdapter>(CryptoCompareAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
