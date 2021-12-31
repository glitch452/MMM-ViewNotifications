declare namespace JSX {
  type Element = HTMLElement | DocumentFragment;

  type Child = Node | string | number | boolean | null;
  type Children = Child[] | Child[][];
  type Attributes = Record<string, unknown>;

  type Component = (props: Attributes, ...children: Children) => Element;

  // Create a version of the elements with optional parameters
  type IntrinsicElementMap = {
    [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]>;
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface IntrinsicElements extends IntrinsicElementMap {}

  type Tag = keyof IntrinsicElements;

  interface ElementAttributesProperty {
    props: Attributes;
  }

  // interface ElementChildrenAttribute {
  //   children: Children;
  // }
}
