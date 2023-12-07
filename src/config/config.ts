import { INestApplication } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { NestApplication } from "@nestjs/core";
import { GraphQLSchemaFactory } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { printSchema } from "graphql";

function postgresqlModule() {
    return TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true,
    });
}


function configModule() {
    return ConfigModule.forRoot({
        envFilePath: '.development.env',
    });
}

async function generateGraphQLSchema(app: INestApplication, resolvers) {
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create(resolvers);
    console.log(printSchema(schema));
}

export {
    postgresqlModule, configModule, generateGraphQLSchema
}