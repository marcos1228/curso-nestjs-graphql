import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { StudentsModule } from './modules/students/students.module';
import { DisciplineModule } from './modules/discipline/discipline.module';
import { ContentsModule } from './modules/contents/contents.module';
import { LessonModule } from './modules/lesson/lesson.module';


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
    DisciplineModule,
    ContentsModule,
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
