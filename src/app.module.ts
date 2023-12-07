import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RecipesModule } from './recipes/recipes.module';
import { CountryModule } from './country/country.module';
import { configModule, postgresqlModule } from './config/config';

@Module({
  imports: [
    configModule(),
    postgresqlModule(),
    RecipesModule,
    CountryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
