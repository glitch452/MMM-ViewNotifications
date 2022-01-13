import { expect } from 'chai';
import sinon, { SinonSandbox } from 'sinon';
import MmmLogger from './MmmLogger';
import Log from 'logger';
import { ModuleConfig } from '../ModuleConfig';

type ModulePropertiesTesting = Module.ModuleProperties<ModuleConfig>;

const SANDBOX: SinonSandbox = sinon.createSandbox();

const MOCK_MODULE_PROPERTIES: ModulePropertiesTesting = {
  name: 'MMM-TestMock',
  data: {
    index: 1,
  },
} as unknown as ModulePropertiesTesting;

describe('MmmLogger', () => {
  let logger: MmmLogger;

  beforeEach(() => {
    logger = new MmmLogger(MOCK_MODULE_PROPERTIES);
  });

  afterEach(() => {
    SANDBOX.restore();
  });

  describe('constructor', () => {
    it('should set the module properties', () => {
      const actual = logger.properties;
      const expected = MOCK_MODULE_PROPERTIES;
      expect(actual).to.deep.equal(expected);
    });

    it('should set the default log level to be ERROR', () => {
      logger = new MmmLogger(MOCK_MODULE_PROPERTIES);
      const actual = logger.level;
      const expected = Module.LoggerLevels.ERROR;
      expect(actual).to.equal(expected);
    });

    it('should set the log level passed to the constructor', () => {
      logger = new MmmLogger(MOCK_MODULE_PROPERTIES, Module.LoggerLevels.DEBUG);
      const actual = logger.level;
      const expected = Module.LoggerLevels.DEBUG;
      expect(actual).to.equal(expected);
    });

    it('should set the log level passed to the constructor as a string', () => {
      logger = new MmmLogger(MOCK_MODULE_PROPERTIES, 'INFO');
      const actual = logger.level;
      const expected = Module.LoggerLevels.INFO;
      expect(actual).to.equal(expected);
    });

    it('should accept an external transport passed to the constructor', () => {
      const expected = {} as typeof Log;
      logger = new MmmLogger(MOCK_MODULE_PROPERTIES, 'INFO', expected);
      const actual = logger.transport;
      expect(actual).to.equal(expected);
    });
  });

  describe('setLogLevel', () => {
    it('should change the log level', () => {
      logger.setLogLevel(Module.LoggerLevels.INFO);
      const actual = logger.level;
      const expected = Module.LoggerLevels.INFO;
      expect(actual).to.equal(expected);
    });

    it('should change the log level using a string', () => {
      logger.setLogLevel('WARN');
      const actual = logger.level;
      const expected = Module.LoggerLevels.WARN;
      expect(actual).to.equal(expected);
    });
  });

  describe('log', () => {
    it('should use the loggers `log` method with the correct format', () => {
      const stub = SANDBOX.stub(Log, 'log').returns(undefined);
      const message = 'log test';
      const expected = `${MOCK_MODULE_PROPERTIES.name}: ${message}`;
      logger.log(message);

      expect(stub.withArgs(expected).callCount).to.equal(1);
    });
  });

  describe('info', () => {
    it('should use the loggers `info` method with the correct format', () => {
      logger.setLogLevel(Module.LoggerLevels.INFO);
      const stub = SANDBOX.stub(Log, 'info').returns(undefined);
      const message = 'log test';
      const expected = `${MOCK_MODULE_PROPERTIES.name}: ${message}`;
      logger.info(message);

      expect(stub.withArgs(expected).callCount).to.equal(1);
    });

    it('should not use the loggers `info` method with a lower log level', () => {
      logger.setLogLevel(Module.LoggerLevels.ERROR);
      const stub = SANDBOX.stub(Log, 'info').returns(undefined);
      const message = 'log test';
      logger.info(message);

      expect(stub.callCount).to.equal(0);
    });
  });

  describe('warn', () => {
    it('should use the loggers `warn` method with the correct format', () => {
      logger.setLogLevel(Module.LoggerLevels.WARN);
      const stub = SANDBOX.stub(Log, 'warn').returns(undefined);
      const message = 'log test';
      const expected = `${MOCK_MODULE_PROPERTIES.name}: ${message}`;
      logger.warn(message);

      expect(stub.withArgs(expected).callCount).to.equal(1);
    });

    it('should not use the loggers `warn` method with a lower log level', () => {
      logger.setLogLevel(Module.LoggerLevels.ERROR);
      const stub = SANDBOX.stub(Log, 'warn').returns(undefined);
      const message = 'log test';
      logger.warn(message);

      expect(stub.callCount).to.equal(0);
    });
  });

  describe('error', () => {
    it('should use the loggers `error` method with the correct format', () => {
      const stub = SANDBOX.stub(Log, 'error').returns(undefined);
      const message = 'log test';
      const expected = `${MOCK_MODULE_PROPERTIES.name}: ${message}`;
      logger.error(message);

      expect(stub.withArgs(expected).callCount).to.equal(1);
    });
  });

  describe('debug', () => {
    it('should use the loggers `info` method with the correct format when debug is used', () => {
      logger.setLogLevel(Module.LoggerLevels.DEBUG);
      const stub = SANDBOX.stub(Log, 'info').returns(undefined);
      const time = '20:20:20';
      SANDBOX.useFakeTimers(new Date(`2020-10-20T${time}`));
      const message = 'log test';
      const expected = `${MOCK_MODULE_PROPERTIES.name}: (${MOCK_MODULE_PROPERTIES.data.index})(${time}) ${message}`;
      logger.debug(message);

      expect(stub.withArgs(expected).callCount).to.equal(1);
    });

    it('should not use the loggers `info` method with a lower log level when debug is used', () => {
      logger.setLogLevel(Module.LoggerLevels.ERROR);
      const stub = SANDBOX.stub(Log, 'info').returns(undefined);
      const message = 'log test';
      logger.debug(message);

      expect(stub.callCount).to.equal(0);
    });
  });

  describe('convertLevel', () => {
    it('should convert the `INFO` string to the correct level', () => {
      logger.setLogLevel('INFO');
      const actual = logger.level;
      const expected = Module.LoggerLevels.INFO;
      expect(actual).to.equal(expected);
    });

    it('should convert the `WARN` string to the correct level', () => {
      logger.setLogLevel('WARN');
      const actual = logger.level;
      const expected = Module.LoggerLevels.WARN;
      expect(actual).to.equal(expected);
    });

    it('should convert the `ERROR` string to the correct level', () => {
      logger.setLogLevel('ERROR');
      const actual = logger.level;
      const expected = Module.LoggerLevels.ERROR;
      expect(actual).to.equal(expected);
    });

    it('should convert the `DEBUG` string to the correct level', () => {
      logger.setLogLevel('DEBUG');
      const actual = logger.level;
      const expected = Module.LoggerLevels.DEBUG;
      expect(actual).to.equal(expected);
    });

    it('should throw an error when an incorrect level string is input', () => {
      const actual = () => logger.setLogLevel('NONSENSE' as Module.LoggerLevel);
      expect(actual).to.throw();
    });
  });
});
