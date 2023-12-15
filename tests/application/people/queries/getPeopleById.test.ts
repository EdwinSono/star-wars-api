import peopleDB from '../../../mockup/peopleDB.json';
import GetPeopleById from '../../../../src/application/people/queries/getPeopleById';
import { PeopleDTO } from '../../../../src/domain/dtos/People.dto';

describe('GetPeopleById', () => {
  let mockPeopleService: any;
  let getPeopleById: GetPeopleById;

  beforeEach(() => {
    mockPeopleService = {
      getPeopleById: jest.fn(),
    };
    getPeopleById = new GetPeopleById(mockPeopleService);
  });

  it('should return PeopleDTO when people is found', async () => {
    const mockPeopleData = peopleDB;
    mockPeopleService.getPeopleById.mockResolvedValue(mockPeopleData);

    const result = await getPeopleById.execute('1');

    expect(result).toBeInstanceOf(PeopleDTO);
    expect(result).toEqual(new PeopleDTO(mockPeopleData));
    expect(mockPeopleService.getPeopleById).toHaveBeenCalledWith('1');
  });

  it('should throw an error when people is not found', async () => {
    mockPeopleService.getPeopleById.mockResolvedValue(null);

    await expect(getPeopleById.execute('1')).rejects.toThrowError('peopleId does not exit');
    expect(mockPeopleService.getPeopleById).toHaveBeenCalledWith('1');
  });
});
