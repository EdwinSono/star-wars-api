import { Datetime } from "aws-sdk/clients/costoptimizationhub";

class People {
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

  constructor(peopleId: string, data: any) {
    this.peopleId = peopleId;
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.hair_color = data.hair_color;
    this.skin_color = data.skin_color;
    this.eye_color = data.eye_color;
    this.birth_year = data.birth_year;
    this.gender = data.gender;
    this.homeworld = data.homeworld;
    this.films = data.films;
    this.species = data.species;
    this.vehicles = data.vehicles;
    this.starships = data.starships;
    this.created = data.created;
    this.edited = data.edited;
    this.url = data.url;
  }
}

export { People };
