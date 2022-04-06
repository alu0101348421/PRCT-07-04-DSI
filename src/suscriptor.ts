import {Observer} from './interfaces';
import {Revista} from './revista';

/**
 * Clase que representa a los suscriptores de una revista.
 * @class Suscriptor
 * @implements {Observer}
 * @attributes {string} nombre - Nombre del suscriptor.
 * @attributes {Revista} revista - Revista a la que se suscribe.
 */
export class Suscriptor implements Observer {
  private nombre: string;
  private revista: Revista;

  /**
   * Crea una nueva instancia de la clase Suscriptor.
   * @param {string} nombre - Nombre del suscriptor.
   * @memberof Suscriptor
   * @constructor
   */
  constructor(nombre: string, revista: Revista) {
    this.nombre = nombre;
    this.revista = revista;
  }

  /**
   * Actualiza el suscriptor con la información de la revista y devuelve un mensaje de notificación.
   * @param {Revista} revista - Revista a la que se suscribe.
   * @returns {string} Mensaje de notificación.
   * @memberof Suscriptor
   */
  public update(revista: Revista): string {
    return `${this.nombre} recibió el número ${revista.getNumeroActual()} de la revista ${revista.getNombre()}`;
  }

  /**
   * Devuelve el nombre del suscriptor.
   * @returns {string} Nombre del suscriptor.
   * @memberof Suscriptor
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * Devuelve la revista a la que se suscribe.
   * @returns {Revista} Revista a la que se suscribe.
   * @memberof Suscriptor
   */
  public getRevista(): Revista {
    return this.revista;
  }
}