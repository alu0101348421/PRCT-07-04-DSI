import {Observer, Observable} from './interfaces';
import {Revista} from './revista';

/**
 * Clase que representa suscriptores.
 * @class Suscriptor
 * @implements {Observer}
 * @attributes {string} nombre - Nombre del suscriptor.
 * @attributes {Observable} observable - Objeto al que se suscribe.
 */
export class Suscriptor implements Observer {
  private nombre: string;
  private observable: Observable;

  /**
   * Crea una nueva instancia de la clase Suscriptor.
   * @param {string} nombre - Nombre del suscriptor.
   * @param {Observable} observable - Objeto al que se suscribe
   * @memberof Suscriptor
   * @constructor
   */
  constructor(nombre: string, observable: Observable) {
    this.nombre = nombre;
    this.observable = observable;
  }

  /**
   * Actualiza el suscriptor con la información de objeto suscrito
   * @param {Observable} observable - Observable a la que se suscribe.
   * @returns {string} Mensaje de notificación.
   * @memberof Suscriptor
   */
  public update(observable: Observable): string {
    if (observable instanceof Revista) {
      return `${this.nombre} recibió el número ${observable.getNumeroActual()} de la revista ${observable.getNombre()}`;
    } else {
      return `${this.nombre} recibió una actualización`;
    }
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
   * Devuelve el observable al que se suscribe.
   * @returns {Observable} Observable al que se suscribe.
   * @memberof Suscriptor
   */
  public getObserver(): Observable {
    return this.observable;
  }
}