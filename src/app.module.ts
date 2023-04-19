import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      driver: "postgres",
      host: "localhost",
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
