import { IsArray, IsNotEmpty, IsString } from 'class-validator';
export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    label: string;
    @IsNotEmpty()
    @IsString()
    type: string;
    @IsNotEmpty()
    @IsString()
    organisator: string;
    @IsNotEmpty()
    @IsString()
    accessRequirements: 'public' | 'private' | 'on-registration';
    @IsNotEmpty()
    @IsString()
    startDate: Date;
    @IsNotEmpty()
    @IsString()
    endDate: Date;
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsNotEmpty()
    @IsString()
    isOnline: boolean;
    @IsNotEmpty()
    @IsString()
    numberOfParticipants: number;
    @IsNotEmpty()
    @IsString()
    cover: string;
    @IsNotEmpty()
    @IsString()
    logo: string;
    @IsNotEmpty()
    @IsString()
    description: string;
}