import { Injectable } from '@nestjs/common';
import { CountryServicePort } from './country-service.port';
import { Country } from 'src/country/country.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService implements CountryServicePort {

    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>,
    ) {

    }

    async create(country: Country): Promise<Country> {
        var country = await this.countryRepository.save(country);
        return country;
    }
    
    async getAll(): Promise<Country[]> {
        var countries = await this.countryRepository.find();
        return countries;
    }

    async getCountry(id: number): Promise<Country> {
        return await this.countryRepository.findOneBy({ id });
    }
    
}