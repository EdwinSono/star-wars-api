import People from "../model/people";

export default class PeopleService {
  private Tablename: string = process.env.PEOPLE_TABLE || "people-table";

  constructor(private docClient: any) {
    this.docClient = docClient;
  }

  async getAllPeople(): Promise<People[]> {
    const people = await this.docClient
      .scan({
        TableName: this.Tablename,
      })
      .promise();
    return people.Items as People[];
  }

  async createPeople(people: People): Promise<People> {
    await this.docClient
      .put({
        TableName: this.Tablename,
        Item: people,
      })
      .promise();
    return people as People;
  }

  async getPeopleById(id: string): Promise<any> {
    const params = {
      TableName: this.Tablename,
      Key: {
        peopleId: id,
      },
    };
    const people = await this.docClient.get(params).promise();
    if (!people.Item) {
      return null;
    }
    return people.Item as People;
  }

  async deletePeople(id: string): Promise<any> {
    return await this.docClient
      .delete({
        TableName: this.Tablename,
        Key: {
          peopleId: id,
        },
      })
      .promise();
  }
}
