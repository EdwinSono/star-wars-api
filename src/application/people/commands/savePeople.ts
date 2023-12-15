import { People } from "../../../domain/entities/People.entity";

export default class SavePeople {
  peopleService: any;
  starWarsAPI: any;
  constructor(peopleService: any, starWarsAPI: any) {
    this.peopleService = peopleService;
    this.starWarsAPI = starWarsAPI;
  }

  async execute(data: People): Promise<People> {
    const peopleDB = await this.peopleService.getPeopleById(data.peopleId);
    if (peopleDB) return new People(data.peopleId, peopleDB);

    const peopleData = await this.starWarsAPI.getPeopleById(data.peopleId);
    if (!peopleData) throw new Error("peopleId does not exit");

    const people = new People(data.peopleId, peopleData);
    const peopleSaved = await this.peopleService.createPeople(people);
    return peopleSaved;
  }
}
