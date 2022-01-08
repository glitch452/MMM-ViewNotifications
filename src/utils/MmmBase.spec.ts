import { expect } from 'chai';
import { z } from 'zod';
import { MmmBase, MinimumConfig } from './MmmBase';
import sinon, { SinonSandbox } from 'sinon';

describe('MmmBase', () => {
  let MMM_BASE: Module.ModulePropertiesExt<MinimumConfig>;

  const schema = z.object({
    logLevel: z.enum(['INFO', 'WARN', 'ERROR', 'DEBUG']).default('ERROR'),
  });
  const sandbox: SinonSandbox = sinon.createSandbox();

  beforeEach(() => {
    MMM_BASE = new MmmBase(schema) as Module.ModulePropertiesExt<MinimumConfig>;
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('construction', () => {
    it('should create an MmmBase object using the new keyword', () => {
      MMM_BASE = new MmmBase(schema) as Module.ModulePropertiesExt<MinimumConfig>;
      expect(MMM_BASE).to.haveOwnProperty('init').that.is.a('function');
      expect(MMM_BASE).to.haveOwnProperty('setConfig').that.is.a('function');
      expect(MMM_BASE).to.haveOwnProperty('start').that.is.a('function');
      expect(MMM_BASE).to.haveOwnProperty('notificationReceived').that.is.a('function');
    });
  });

  describe('init', () => {
    it('should set the default values', () => {
      MMM_BASE.init();
      expect(MMM_BASE).to.haveOwnProperty('has_config_error').that.is.false;
      expect(MMM_BASE).to.haveOwnProperty('config_errors').that.is.an('array').which.is.empty;
      expect(MMM_BASE).to.haveOwnProperty('requiresVersion').that.is.a('string').which.is.not.empty;
      expect(MMM_BASE).to.haveOwnProperty('logger').that.is.an('object').which.is.not.null;
    });

    it('should set the provided logger', () => {
      const expected = {} as Module.Logger;
      MMM_BASE = new MmmBase(schema, expected) as Module.ModulePropertiesExt<MinimumConfig>;
      MMM_BASE.init();
      const actual = MMM_BASE.logger;
      expect(actual).to.equal(expected);
    });
  });

  describe('setConfig', () => {
    it('should parse the config successfully', () => {
      MMM_BASE.init();
      const stub = sandbox.stub(MMM_BASE.logger, 'setLogLevel').returns(undefined);
      MMM_BASE.setConfig({});
      expect(MMM_BASE).to.haveOwnProperty('has_config_error').that.is.false;
      expect(stub.withArgs('ERROR').callCount).to.equal(1);
    });

    it('should run successfully when the logger has no setLogLevel method', () => {
      MMM_BASE.init();
      MMM_BASE.logger.setLogLevel = undefined;
      MMM_BASE.setConfig({});
      expect(MMM_BASE).to.haveOwnProperty('has_config_error').that.is.false;
    });

    it('should generate errors with an invalid config', () => {
      MMM_BASE.init();
      const stub = sandbox.stub(MMM_BASE.logger, 'error').returns(undefined);
      MMM_BASE.setConfig({ logLevel: 'invalid' });
      expect(MMM_BASE).to.haveOwnProperty('has_config_error').that.is.true;
      expect(MMM_BASE).to.haveOwnProperty('config_errors').that.is.an('array').with.length(1);
      expect(stub.callCount).to.equal(1);
    });
  });

  describe('start', () => {
    it('should call the logger when run', () => {
      MMM_BASE.init();
      const stub = sandbox.stub(MMM_BASE.logger, 'debug').returns(undefined);
      MMM_BASE.start();
      expect(stub.callCount).to.be.at.least(1);
    });
  });

  describe('notificationReceived', () => {
    it('should do nothing when called', () => {
      MMM_BASE.notificationReceived('test', []);
      expect(true).to.be.true;
    });
  });
});
