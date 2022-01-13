import { expect } from 'chai';
import { z } from 'zod';
import { MmmBase, MinimumConfig } from './MmmBase';
import sinon, { SinonSandbox } from 'sinon';

type BaseTesting = Module.ModuleProperties<MinimumConfig>;

const SCHEMA = z.object({
  logLevel: z.enum(['INFO', 'WARN', 'ERROR', 'DEBUG']).default('ERROR'),
});

const SANDBOX: SinonSandbox = sinon.createSandbox();

describe('MmmBase', () => {
  let mmm_base: BaseTesting;

  beforeEach(() => {
    mmm_base = new MmmBase(SCHEMA) as BaseTesting;
  });

  afterEach(() => {
    SANDBOX.restore();
  });

  describe('construction', () => {
    it('should create an MmmBase object using the new keyword', () => {
      mmm_base = new MmmBase(SCHEMA) as BaseTesting;
      expect(mmm_base).to.haveOwnProperty('init').that.is.a('function');
      expect(mmm_base).to.haveOwnProperty('setConfig').that.is.a('function');
      expect(mmm_base).to.haveOwnProperty('start').that.is.a('function');
      expect(mmm_base).to.haveOwnProperty('notificationReceived').that.is.a('function');
    });
  });

  describe('init', () => {
    it('should set the default values', () => {
      mmm_base.init();
      expect(mmm_base).to.haveOwnProperty('has_config_error').that.is.false;
      expect(mmm_base).to.haveOwnProperty('config_errors').that.is.an('array').which.is.empty;
      expect(mmm_base).to.haveOwnProperty('requiresVersion').that.is.a('string').which.is.not.empty;
      expect(mmm_base).to.haveOwnProperty('logger').that.is.an('object').which.is.not.null;
    });

    it('should set the provided logger', () => {
      const expected = {} as Module.Logger;
      mmm_base = new MmmBase(SCHEMA, expected) as BaseTesting;
      mmm_base.init();
      const actual = mmm_base.logger;
      expect(actual).to.equal(expected);
    });
  });

  describe('setConfig', () => {
    it('should parse the config successfully', () => {
      mmm_base.init();
      const stub = SANDBOX.stub(mmm_base.logger, 'setLogLevel').returns(undefined);
      mmm_base.setConfig({});
      expect(mmm_base).to.haveOwnProperty('has_config_error').that.is.false;
      expect(stub.withArgs('ERROR').callCount).to.equal(1);
    });

    it('should run successfully when the logger has no setLogLevel method', () => {
      mmm_base.init();
      mmm_base.logger.setLogLevel = undefined;
      mmm_base.setConfig({});
      expect(mmm_base).to.haveOwnProperty('has_config_error').that.is.false;
    });

    it('should generate errors with an invalid config', () => {
      mmm_base.init();
      const stub = SANDBOX.stub(mmm_base.logger, 'error').returns(undefined);
      mmm_base.setConfig({ logLevel: 'invalid' });
      expect(mmm_base).to.haveOwnProperty('has_config_error').that.is.true;
      expect(mmm_base).to.haveOwnProperty('config_errors').that.is.an('array').with.length(1);
      expect(stub.callCount).to.equal(1);
    });
  });

  describe('start', () => {
    it('should call the logger when run', () => {
      mmm_base.init();
      const stub = SANDBOX.stub(mmm_base.logger, 'debug').returns(undefined);
      mmm_base.start();
      expect(stub.callCount).to.be.at.least(1);
    });
  });

  describe('notificationReceived', () => {
    it('should do nothing when called', () => {
      mmm_base.notificationReceived('test', []);
      expect([]).to.be.empty;
    });
  });
});
