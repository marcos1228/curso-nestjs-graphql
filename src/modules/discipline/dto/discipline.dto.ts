
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { Column, Entity } from 'typeorm';

@ObjectType('Discipline')
export class DisciplineDTO extends BaseDTO{
  @FilterableField()
  name: string;
}
