import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { Column, Entity } from 'typeorm';

@ObjectType('Lesson')
export class LessonDTO extends BaseDTO{
  @FilterableField()
  description: string;
}
