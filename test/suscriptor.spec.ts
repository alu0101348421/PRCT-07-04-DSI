import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista';
import {Suscriptor} from '../src/suscriptor';

describe('Suscriptor', () => {
  let revista: Revista;
  let suscriptor: Suscriptor;

  beforeEach(() => {
    revista = new Revista('La Revista');
    suscriptor = new Suscriptor('Juan', revista);
  });

  it('debería implementar la interfaz Observer', () => {
    expect(suscriptor).to.respondTo('update');
  });

  it('debería crear un suscriptor con un nombre', () => {
    expect(suscriptor.getNombre()).to.equal('Juan');
  });

  it('debería crear un suscriptor con una revista', () => {
    expect(suscriptor.getRevista()).to.equal(revista);
  });

  it('debería poder recibir una notificación de que un nuevo número de la revista ha sido lanzado', () => {
    revista.suscribe(suscriptor);
    revista.lanzarNumero();
    expect(suscriptor.update(revista)).to.equal('Juan recibió el número 1 de la revista La Revista');
  });
});