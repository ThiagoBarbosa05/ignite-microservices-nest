import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestResolver } from './test.resolver';
import { DatabaseModule } from '../database/database.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [TestResolver],
})
export class HttpModule {}
