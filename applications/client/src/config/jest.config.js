module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // indicates a set of files for which coverage information should be collected
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx'],

    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['<rootDir>/enzyme.config.js'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],


    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    // Indicates whether each individual test should be reported during the run
    verbose: false,

};
