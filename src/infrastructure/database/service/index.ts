import { dynamoDbClient } from "../model";
import PeopleService from "./peopleService";

const peopleService = new PeopleService(dynamoDbClient);

export { peopleService };
