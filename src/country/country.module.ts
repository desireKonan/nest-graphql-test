import { Module } from "@nestjs/common";
import { CountryService } from "./countries.service";
import { Country } from "./country.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewCountryResolver } from "./new-country.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([Country])],
    providers: [NewCountryResolver, CountryService]
})
export class CountryModule {}