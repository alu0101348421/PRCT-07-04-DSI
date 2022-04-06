import {Observable, Observer} from './interfaces';

/**
 * Clase que representa una revista con sus suscriptores.
 * @class Revista
 * @implements {Observable}
 * @attributes {number} numeroActual - Número actual de la revista.
 * @attributes {string} nombre - Nombre de la revista.
 * @attributes {Date} fechaCreacion - Fecha de creación de la revista.
 * @attributes {Observer[]} suscriptores - Suscriptores de la revista.
 */
export class Revista implements Observable {
  private suscriptores: Observer[] = [];
  private numeroActual: number;
  private nombre: string;
  private fechaCreacion: Date;

  /**
   * Crea una nueva instancia de la clase Revista.
   * @param {string} nombre - Nombre de la revista.
   * @memberof Revista
   * @constructor
   */
  constructor(nombre: string) {
    this.nombre = nombre;
    this.fechaCreacion = new Date();
    this.numeroActual = 0;
  }

  /**
   * Devuelve el número actual de la revista.
   * @returns {number} Número actual de la revista.
   * @memberof Revista
   */
  public getNumeroActual(): number {
    return this.numeroActual;
  }

  /**
   * Devuelve el nombre de la revista.
   * @returns {string} Nombre de la revista.
   * @memberof Revista
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * {Date} Fecha de creación de la revista.
   * @returns {Date} Fecha de creación de la revista.
   * @memberof Revista
   */
  public getFechaCreacion(): Date {
    return this.fechaCreacion;
  }

  /**
   * Suscribe un suscriptor a la revista.
   * @param {Observer} suscriptor - Suscriptor a suscribir.
   * @memberof Revista
   * @throws {Error} Si el suscriptor ya está suscrito a la revista.
   */
  public suscribe(suscriptor: Observer): void {
    if (this.suscriptores.indexOf(suscriptor) === -1) {
      this.suscriptores.push(suscriptor);
    } else {
      throw new Error('El suscriptor ya está suscrito a la revista.');
    }
  }

  /**
   * Desuscribe un suscriptor de la revista.
   * @param suscriptor - Suscriptor a desuscribir.
   * @memberof Revista
   * @throws {Error} Si el suscriptor no está suscrito a la revista.
   */
  public unsubscribe(suscriptor: Observer): void {
    const index = this.suscriptores.indexOf(suscriptor);
    if (index !== -1) {
      this.suscriptores.splice(index, 1);
    } else {
      throw new Error('El suscriptor no está suscrito a la revista.');
    }
  }

  /**
   * Notifica a los suscriptores de la revista.
   * @memberof Revista
   */
  public notify(): void {
    this.suscriptores.forEach((suscriptor) => {
      suscriptor.update(this);
    });
  }

  /**
   * Lanza un número al mercado.
   * @memberof Revista
   */
  public lanzarNumero(): void {
    this.numeroActual++;
    this.notify();
  }
}