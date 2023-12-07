import { Country } from "src/country/country.model";

export interface CountryServicePort {
    create(user: Country): Promise<Country>;

    getAll(): Promise<Array<Country>>;

    getCountry(id: number): Promise<Country>;
}