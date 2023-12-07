import { Module } from "@nestjs/common";
import { CountryService } from "./countries.service";
import { Country } from "./country.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CountryResolver } from "./country.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([Country])],
    providers: [CountryResolver, CountryService]
})
export class CountryModule {}