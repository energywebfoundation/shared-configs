# Energy Web shared configs 
Repository for shared dev configs at Energy Web Foundation.

## Available configs 

### `eslint` config
**Package name:** [@energyweb/eslint-config](packages/eslint-config/README.md) \
**Package description:** Shared eslint configuration for Energy Web projects.

### `prettier` config
**Package name:** [@energyweb/prettier-config](packages/prettier-config/README.md) \
**Package description:** Shared Prettier configuration for Energy Web projects.

### `renovate` config
**Description:** Shared Renovate bot configuration for Energy Web projects.\
**Usage/Examples:** 
Create an `Renovate` config file `.github/renovate.json` with fallowing content

```json
{
  "extends": ["github>energywebfoundation/shared-configs"]
}
```
