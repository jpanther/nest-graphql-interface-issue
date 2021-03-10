import { Field, InterfaceType } from '@nestjs/graphql';
import { Animal } from './animal';

@InterfaceType({
  implements: () => [Animal],
})
export abstract class Pet implements Animal {
  id: string;
  anAnimalField: string;

  @Field()
  petName: string;

  @Field()
  aPetField: string;
}
