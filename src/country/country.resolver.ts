import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Country } from './country.model';
import { CountryService } from './countries.service';
import { CountryInput } from './country.input';

@Resolver(of => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(returns => Country)
  async country(@Args('id') id: number): Promise<Country> {
    const country = await this.countryService.getCountry(id);
    if (!country) {
      throw new NotFoundException(id);
    }
    return country;
  }

  @Query(returns => [Country])
  countries(): Promise<Country[]> {
    return this.countryService.getAll();
  }

  @Mutation(returns => Country)
  async addCountry(
    @Args('countryData') newCountryData: CountryInput,
  ): Promise<Country> {
    var newCountry = {
        name: newCountryData.title,
        description: newCountryData.description
    } as Country;
    const country = await this.countryService.create(newCountry);
    return country;
  }
}