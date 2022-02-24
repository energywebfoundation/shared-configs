const config = require('../index.js')

describe("@energyweb/semantic-release-config package tests", () => {
    it('config should be defined', async () => {
        expect(config).toBeDefined();
    });
});
