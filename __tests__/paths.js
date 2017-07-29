/*
global.paths = {
 components: (dest) => this.assets('/components') + dest;
}
*/
require('../path.js');
import path from 'path';
/**
* does some basic checks an the path
* @ param {string} p a path string
*/
function containsRoot(p){
  expect(p).toEqual(expect.anything());
  expect(p).toContain('/'); 
  expect(p).toContain(path.resolve(__dirname, '..'));
}

describe('Should return a path to', () => {

  it('not null', () => {
   expect(paths).toEqual(expect.anything()); 
  })

  it('the root', () => {
    const root = paths.root();
    expect(root).toEqual(expect.anything());
    expect(root).toEqual(path.resolve(__dirname, '..'));
    expect(root).toContain('/');
  })

  it('assets', () => {
    const assets = paths.assets();
    containsRoot(assets);
    expect(assets).toContain('assets');
  })

  it('assets with a new dir', () => {
    const assets = paths.assets('something');
    containsRoot(assets);
    expect(assets).toContain('assets');
    expect(assets).toContain('something');
  })

  it('containers', () => {
    const p = paths.containers();
    containsRoot(p);
    expect(p).toContain('Containers');
  })

  it('containers with rssList', () => {
    const p = paths.containers('rssList');
    containsRoot(p);
    expect(p).toContain('Containers');
    expect(p).toContain('rssList');
  })

  it('services', () => {
    const p = paths.services();
    containsRoot(p);
    expect(p).toContain('Services');
  })

  it('Services with redux', () => {
    const p = paths.services('redux');
    containsRoot(p);
    expect(p).toContain('Services');
    expect(p).toContain('redux');
  })

  it('styles', () => {
    const p = paths.styles();
    containsRoot(p);
    expect(p).toContain('Styles');
  })

  it('Styles with colors', () => {
    const p = paths.styles('colors');
    containsRoot(p);
    expect(p).toContain('Styles');
    expect(p).toContain('colors');
  })

  it('types', () => {
    const p = paths.types();
    containsRoot(p);
    expect(p).toContain('Types');
  })

  it('Types with rssList', () => {
    const p = paths.types('rssList.js');
    containsRoot(p);
    expect(p).toContain('Types');
    expect(p).toContain('rssList');
  })

  it('components', () => {
    const p = paths.components();
    containsRoot(p);
    expect(p).toContain('components');
  })

  it('components with headers', () => {
    const p = paths.components('headers');
    containsRoot(p);
    expect(p).toContain('components');
    expect(p).toContain('headers');
  })
})
