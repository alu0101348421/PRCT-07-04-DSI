import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista';
import {Suscriptor} from '../src/suscriptor';

describe('Revista', () => {
  it('debería implementar la interfaz Observable', () => {
    const revista = new Revista('La Revista');
    expect(revista).to.respondTo('suscribe');
    expect(revista).to.respondTo('unsubscribe');
    expect(revista).to.respondTo('notify');
  });

  it('debería crear una revista con un nombre', () => {
    const revista = new Revista('La Revista');
    expect(revista.getNombre()).to.equal('La Revista');
  });

  it('debería crear una revista con una fecha de creación', () => {
    const revista = new Revista('La Revista');
    expect(revista.getFechaCreacion()).to.be.an.instanceof(Date);
  });

  it('debería crear una revista con un número actual', () => {
    const revista = new Revista('La Revista');
    expect(revista.getNumeroActual()).to.equal(0);
  });

  it('debería poder suscribirse a una revista una única vez', () => {
    const revista = new Revista('La Revista');
    const suscriptor = new Suscriptor('Juan', revista);
    expect(() => revista.suscribe(suscriptor)).to.not.throw(Error);
    expect(() => revista.suscribe(suscriptor)).to.throw(Error);
  });

  it('debería poder desuscribirse de una revista si ya estaba suscrito', () => {
    const revista = new Revista('La Revista');
    const suscriptor = new Suscriptor('Juan', revista);
    revista.suscribe(suscriptor);
    expect(() => revista.unsubscribe(suscriptor)).to.not.throw(Error);
    expect(() => revista.unsubscribe(suscriptor)).to.throw(Error);
  });

  it('debería lanzar un número al mercado', () => {
    const revista = new Revista('La Revista');
    const suscriptor = new Suscriptor('Juan', revista);
    revista.suscribe(suscriptor);
    revista.lanzarNumero();
    expect(suscriptor.getNombre()).to.equal('Juan');
    expect(revista.getNumeroActual()).to.equal(1);
  });

  it('debería notificar a sus suscriptores', () => {
    const revista = new Revista('La Revista');
    const suscriptor = new Suscriptor('Juan', revista);
    revista.suscribe(suscriptor);
    revista.lanzarNumero();
    expect(suscriptor.update(revista)).to.equal('Juan recibió el número 1 de la revista La Revista');
  });
});