class StarWarsAPI {
  constructor(){

  }
  async getPeopleById(peopleId: string = "1" ): Promise<any> {
    const response = await fetch(`https://swapi.dev/api/people/${peopleId}`)
    const people = await response.json()
    return people
  }

  async getPlanetById(planetId: string = "1" ): Promise<any> {
    const response = await fetch(`https://swapi.dev/api/planets/${planetId}/?format=json`)
    const planets = await response.json()
    return planets
  }

}

export { StarWarsAPI }
