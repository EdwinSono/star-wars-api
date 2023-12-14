export default class PeopleDTO {
  id: string
  nombre: string
  altura: string
  masa: string
  color_pelo: string
  color_piel: string
  color_ojos: string
  ano_nacimiento: string
  genero: string
  mundo: string
  peliculas: string
  especies: string
  vehiculos: string[]
  naves: string
  creado: string
  editado: string
  enlace: string
  constructor (data: any) {
    this.id = data.peopleId
    this.nombre = data.name
    this.altura = data.height
    this.masa = data.mass
    this.color_pelo = data.hair_color
    this.color_piel = data.skin_color
    this.color_ojos = data.eye_color
    this.ano_nacimiento = data.birth_year
    this.genero = data.gender
    this.mundo = data.homeworld
    this.peliculas = data.films
    this.especies = data.species
    this.creado = data.created
    this.editado = data.edited
    this.vehiculos = data.vehicles
    this.naves = data.starships
    this.enlace = data.url
  }
}

export { PeopleDTO }
