import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CountryInput } from './country.input';
import { Client } from 'pg';
import { pgDatabase } from 'src/config/database.constants';
import { Country } from './country.model';

@Resolver()
export class NewCountryResolver {
  private readonly client: Client;
  constructor() {
    this.client = new Client(pgDatabase);
    this.client.connect();
  }

  @Query(returns => Country)
  async country(@Args('id') id: number): Promise<any> {
    const country = await this.client.query(`SELECT * FROM country WHERE id =${id}`);
    if (!country) {
      throw new NotFoundException(id);
    }
    return country.rows[0];
  }

  @Query(returns => [Country])
  async countries(): Promise<any[]> {
    return (await this.client.query("SELECT * FROM country")).rows;
  }

  @Mutation(returns => Country)
  async addCountry(
    @Args('countryData') newCountryData: CountryInput,
  ): Promise<any> {
    const country = await this.client.query(`INSERT INTO country(name, description) VALUES (${newCountryData.title}, ${newCountryData.description})`);
    return country.rows[0];
  }
}