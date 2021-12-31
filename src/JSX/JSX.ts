function appendChild(parent: JSX.Element, child?: JSX.Child | JSX.Children) {
  if (child === undefined || child === null || typeof child === 'boolean') {
    return;
  }
  if (Array.isArray(child)) {
    child.forEach((nested) => appendChild(parent, nested));
  } else if (child instanceof Node) {
    parent.appendChild(child);
  } else if (typeof child === 'string' || typeof child === 'number') {
    parent.appendChild(document.createTextNode(child.toString()));
  } else {
    parent.appendChild(document.createTextNode(JSON.stringify(child)));
  }
}

export function init() {
  // An empty function to prevent the JSX import from being tree-shaken
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Fragment = (_props: JSX.Attributes, ...children: JSX.Children): JSX.Element => {
  const element = document.createDocumentFragment();
  appendChild(element, children);
  return element;
};

export function createFragment(
  _props: JSX.Attributes | null,
  ...children: JSX.Children
): JSX.Children {
  return children;
}

export function createElement(
  tag: JSX.Tag | JSX.Component,
  props?: JSX.Attributes | null,
  ...children: JSX.Children
): JSX.Element {
  if (typeof tag === 'function') {
    return tag(props ?? {}, ...children);
  }

  const element: HTMLElementTagNameMap[typeof tag] = document.createElement(tag);

  for (const [name, value] of Object.entries(props ?? {})) {
    if (name.startsWith('on') && name.toLowerCase() in window && typeof value === 'function') {
      const num_chars_to_remove = 2;
      element.addEventListener(
        name.toLowerCase().substring(num_chars_to_remove),
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        value as EventListenerOrEventListenerObject,
      );
    } else if (typeof value === 'boolean') {
      if (value) {
        element.setAttribute(name, '');
      }
    } else if (typeof value === 'string') {
      element.setAttribute(name === 'className' ? 'class' : name, value);
    } else if (typeof value === 'number') {
      element.setAttribute(name === 'className' ? 'class' : name, value.toString());
    }
  }

  appendChild(element, children);

  return element;
}

export default {
  init,
  createFragment,
  createElement,
};
