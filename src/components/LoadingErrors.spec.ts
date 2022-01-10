import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import LoadingErrors from './LoadingErrors';

describe('LoadingErrors', () => {
  let dom: JSDOM;
  const window = global.window;
  const document = global.document;
  const navigator = global.navigator;

  beforeEach(() => {
    dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.window = dom.window as unknown as Window & typeof globalThis;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;
  });

  afterEach(() => {
    global.window = window;
    global.document = document;
    global.navigator = navigator;
  });

  it('should render with no errors', () => {
    const dom_objects = LoadingErrors({ error_list: [] });
    dom.window.document.body.appendChild(dom_objects as Node);
    const actual = dom.serialize();
    const expected =
      '<!DOCTYPE html><html><head></head><body><div class="loading small">Configuration error!</div></body></html>';

    expect(actual).to.equal(expected);
  });

  it('should render with 1 error', () => {
    const dom_objects = LoadingErrors({ error_list: ['error one'] });
    dom.window.document.body.appendChild(dom_objects as Node);
    const actual = dom.serialize();
    const expected =
      '<!DOCTYPE html><html><head></head><body><div class="loading small">Configuration error!<br>error one</div></body></html>';

    expect(actual).to.equal(expected);
  });

  it('should render with more than 1 error', () => {
    const dom_objects = LoadingErrors({ error_list: ['error one', 'error two'] });
    dom.window.document.body.appendChild(dom_objects as Node);
    const actual = dom.serialize();
    const expected =
      '<!DOCTYPE html><html><head></head><body><div class="loading small">Configuration error!<br>error one<br>error two</div></body></html>';

    expect(actual).to.equal(expected);
  });
});
