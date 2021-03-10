import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Animal {
  @Field(() => ID)
  id: string;

  @Field()
  anAnimalField: string;
}
