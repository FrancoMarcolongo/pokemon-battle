import { Test, TestingModule } from '@nestjs/testing';
import { BattleResultService } from './battle-result.service';

describe('BattleResultService', () => {
  let service: BattleResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattleResultService],
    }).compile();

    service = module.get<BattleResultService>(BattleResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
