import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

import {add, multi} from './index';

describe('Our first test', () => {
  it('should pass', () => {
    expect(add(2,3)).to.equal(5);
  });
});

describe('Our first test', () => {
  it('should pass', () => {
    expect(multi(2,3)).to.equal(6);
  });
});

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');

    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello world');
      done();
      window.close();
    });

  });
});
