/**
 * Interfaz que deben implementar las clases que quieran ser observables.
 * @interface
 */
export interface Observable {
  /**
   * Suscribe un observador a la instancia de la clase.
   * @param observer Observador
   * @memberof Observable
   * @returns void
   */
  suscribe(observer: Observer): void;
  /**
   * Desuscribe un observador de la instancia de la clase.
   * @param observer Observador
   * @memberof Observable
   * @returns void
   */
  unsubscribe(observer: Observer): void;
  /**
   * Notifica a los suscriptores de la instancia de la clase.
   * @memberof Observable
   * @returns void
   */
  notify(): void;
}

/**
 * Interfaz que deben implementar las clases que quieran ser observadores.
 * @interface
 */
export interface Observer {
  /**
   * Actualiza el observador con la información de la instancia de la clase y
   * devuelve un mensaje de notificación.
   * @param observable Instancia de la clase Observable
   */
  update(observable: Observable): string;
}