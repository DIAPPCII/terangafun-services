import { AttributeType } from '@aws-sdk/client-cognito-identity-provider';

export class CreateCognitoUserDto {
  Username: string;
  Password: string;
  ClientId: string;
  SecretHash: string;
  UserAttributes: AttributeType[];
}
