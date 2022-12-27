import { Test, TestingModule } from "@nestjs/testing";
import { CognitoResolver } from "./cognito.resolver";
import { CognitoService } from "./cognito.service";

describe("CognitoResolver", () => {
  let resolver: CognitoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CognitoResolver, CognitoService],
    }).compile();

    resolver = module.get<CognitoResolver>(CognitoResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
