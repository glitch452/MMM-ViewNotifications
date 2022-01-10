import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import ErrorList from './ErrorList';

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
    const dom_objects = ErrorList({ error_list: [] });
    const actual = dom_objects.outerHTML;
    const expected = '<div class="loading small"></div>';

    expect(actual).to.equal(expected);
  });

  it('should render with no errors and a title', () => {
    const dom_objects = ErrorList({ title: 'test', error_list: [] });
    const actual = dom_objects.outerHTML;
    const expected = '<div class="loading small">test</div>';

    expect(actual).to.equal(expected);
  });

  it('should render with 1 error', () => {
    const dom_objects = ErrorList({ title: 'test', error_list: ['error one'] });
    const actual = dom_objects.outerHTML;
    const expected = '<div class="loading small">test<br>error one</div>';

    expect(actual).to.equal(expected);
  });

  it('should render with more than 1 error', () => {
    const dom_objects = ErrorList({ error_list: ['error one', 'error two'] });
    const actual = dom_objects.outerHTML;
    const expected = '<div class="loading small">error one<br>error two</div>';

    expect(actual).to.equal(expected);
  });
});
