import peopleApi from '../../../mockup/peopleApi.json'; // This import style requires "esModuleInterop", see "side notes"
import SavePeople from '../../../../src/application/people/commands/savePeople';
import { People } from '../../../../src/domain/entities/People';

// Mocks
const mockPeopleService = {
  getPeopleById: jest.fn(),
  createPeople: jest.fn(),
};

const mockStarWarsAPI = {
  getPeopleById: jest.fn(),
};

describe('SavePeople Command', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return existing people from database', async () => {
    // Arrange
    const existingPeopleData = { peopleId: '1' };
    mockPeopleService.getPeopleById.mockResolvedValue(existingPeopleData);

    // Act
    const savePeopleCommand = new SavePeople(mockPeopleService, mockStarWarsAPI);
    const result = await savePeopleCommand.execute(new People('1', {}));

    // Assert
    expect(result).toEqual(new People('1', existingPeopleData));
    expect(mockPeopleService.getPeopleById).toHaveBeenCalledWith('1');
    expect(mockStarWarsAPI.getPeopleById).not.toHaveBeenCalled();
    expect(mockPeopleService.createPeople).not.toHaveBeenCalled();
  });

  it('should create and return new people', async () => {
    // Arrange
    const newPeopleData = peopleApi;
    mockPeopleService.getPeopleById.mockResolvedValue(null);
    mockStarWarsAPI.getPeopleById.mockResolvedValue(newPeopleData);
    mockPeopleService.createPeople.mockResolvedValue(new People('2', newPeopleData));

    // Act
    const savePeopleCommand = new SavePeople(mockPeopleService, mockStarWarsAPI);
    const result = await savePeopleCommand.execute(new People('2', {}));

    // Assert
    expect(result).toEqual(new People('2', newPeopleData));
    expect(mockPeopleService.getPeopleById).toHaveBeenCalledWith('2');
    expect(mockStarWarsAPI.getPeopleById).toHaveBeenCalledWith('2');
    expect(mockPeopleService.createPeople).toHaveBeenCalledWith(new People('2', newPeopleData));
  });

  it('should throw an error if peopleId does not exist in Star Wars API', async () => {
    // Arrange
    mockPeopleService.getPeopleById.mockResolvedValue(null);
    mockStarWarsAPI.getPeopleById.mockResolvedValue(null);

    // Act
    const savePeopleCommand = new SavePeople(mockPeopleService, mockStarWarsAPI);
    const execute = async () => await savePeopleCommand.execute(new People('3', {}));

    // Assert
    await expect(execute()).rejects.toThrow('peopleId does not exit');
    expect(mockPeopleService.getPeopleById).toHaveBeenCalledWith('3');
    expect(mockStarWarsAPI.getPeopleById).toHaveBeenCalledWith('3');
    expect(mockPeopleService.createPeople).not.toHaveBeenCalled();
  });
});
