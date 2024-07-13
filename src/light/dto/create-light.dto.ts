import { ApiProperty } from "@nestjs/swagger";

 export class CreateLightDto {
    @ApiProperty()
    nameClient: string;

    @ApiProperty()
    codUniqueElectric: number;

    @ApiProperty()
    meterNumber: number;

    @ApiProperty()
    typeConsumption: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;

    @ApiProperty()
    description: string;

    @ApiProperty()
    previousReading: number;

    @ApiProperty()
    currentReading: number;

    @ApiProperty()
    contractAccount: number;

    @ApiProperty()
    billedDays: number;

    @ApiProperty()
    consumptionTotal: number;

    @ApiProperty()
    total: number;
}
