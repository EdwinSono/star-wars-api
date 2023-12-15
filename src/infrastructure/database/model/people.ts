import { Datetime } from "aws-sdk/clients/costoptimizationhub";
export default interface People {
  peopleId: string;
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: Datetime;
  edited?: Datetime;
  url?: string;
}
