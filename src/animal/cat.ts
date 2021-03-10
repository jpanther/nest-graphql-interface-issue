import { Field, ObjectType } from '@nestjs/graphql';
import { Pet } from './pet';

@ObjectType({
  implements: () => [Pet],
})
export class Cat implements Pet {
  id: string;
  anAnimalField: string;
  petName: string;
  aPetField: string;

  @Field()
  breed: string;
}
