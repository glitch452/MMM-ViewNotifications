import { expect } from 'chai';
import { module_config_schema } from './ModuleConfig';

const SCHEMA = module_config_schema;
const DEFAULT_CONFIG = {};

describe('ModuleConfig', () => {
  const injectDefault = (property: string, value: unknown): Record<string, unknown> => ({
    ...DEFAULT_CONFIG,
    [property]: value,
  });

  describe('timeout', () => {
    const property = 'timeout';
    it('should pass validation with a valid value', () => {
      const value = 4.2;
      const expected = 4200;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(expected);
    });

    it('should fail validation with a negative value', () => {
      const value = -2;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-numeric value', () => {
      const value = 'INVALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('maximum', () => {
    const property = 'maximum';
    it('should pass validation with a valid value', () => {
      const value = 6;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(value);
    });

    it('should fail validation with a negative value', () => {
      const value = -2;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-integer value', () => {
      const value = 2.5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-numeric value', () => {
      const value = 'INVALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('defaultIcon', () => {
    const property = 'defaultIcon';
    it('should pass validation with a valid value', () => {
      const value = 'VALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(value);
    });

    it('should fail validation with an empty string value', () => {
      const value = '';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('icons', () => {
    const property = 'icons';
    it('should pass validation with a valid value', () => {
      const value = { test: 'VALID' };
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .deep.equals(value);
    });

    it('should fail validation with a non-object value', () => {
      const value: string[] = [];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value on the object', () => {
      const value = { test: 2 };
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('newestOnTop', () => {
    const property = 'newestOnTop';
    it('should pass validation with a valid value', () => {
      const is_value = false;
      const actual = SCHEMA.safeParse(injectDefault(property, is_value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(is_value);
    });

    it('should fail validation with a non-boolean value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('includeModules', () => {
    const property = 'includeModules';
    it('should pass validation with a valid value', () => {
      const value = ['VALID'];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .deep.equals(value);
    });

    it('should fail validation with a non-array value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value in the array', () => {
      const value = [2];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('excludeModules', () => {
    const property = 'excludeModules';
    it('should pass validation with a valid value', () => {
      const value = ['VALID'];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .deep.equals(value);
    });

    it('should fail validation with a non-array value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value in the array', () => {
      const value = [2];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('includeNotifications', () => {
    const property = 'includeNotifications';
    it('should pass validation with a valid value', () => {
      const value = ['VALID'];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .deep.equals(value);
    });

    it('should fail validation with a non-array value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value in the array', () => {
      const value = [2];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('excludeNotifications', () => {
    const property = 'excludeNotifications';
    it('should pass validation with a valid value', () => {
      const value = ['VALID'];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .deep.equals(value);
    });

    it('should fail validation with a non-array value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value in the array', () => {
      const value = [2];
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('format', () => {
    const property = 'format';
    it('should pass validation with a valid value', () => {
      const value = 'VALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(value);
    });

    it('should fail validation with an empty string value', () => {
      const value = '';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('updateAnimationSpeed', () => {
    const property = 'updateAnimationSpeed';
    it('should pass validation with a valid value', () => {
      const value = 500;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(value);
    });

    it('should fail validation with a negative value', () => {
      const value = -2;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-integer value', () => {
      const value = 2.5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-numeric value', () => {
      const value = 'INVALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });

  describe('logLevel', () => {
    const property = 'logLevel';
    it('should pass validation with a valid value', () => {
      const value = 'INFO';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data)
        .ownProperty(property)
        .equals(value);
    });

    it('should fail validation with an empty string value', () => {
      const value = '';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with an invalid string value', () => {
      const value = 'INVALID';
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should fail validation with a non-string value', () => {
      const value = 5;
      const actual = SCHEMA.safeParse(injectDefault(property, value));
      expect(actual.success).to.be.false;
    });

    it('should pass with no value provided (and return a default)', () => {
      const actual = SCHEMA.safeParse(DEFAULT_CONFIG);
      expect(actual.success).to.be.true;
      expect(actual.success && actual.data).to.haveOwnProperty(property);
    });
  });
});
