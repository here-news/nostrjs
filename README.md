# nostrjs

This project provides modules for generating Nostr-compatible key pairs and creating deterministic SVG graphics based on the public key.

## Modules

### `nostrKeys.js`

Contains functions to generate Nostr-compatible key pairs and derive public keys from private keys.

### `key2svg.js`

Contains functions to create deterministic SVG graphics based on a Nostr public key.

## Installation

To use these modules in a Node.js project, you can include them directly from the GitHub repository or use a package manager if published to npm.

### Using GitHub URL in `package.json`

```json
{
  "dependencies": {
    "nostrjs": "git+https://github.com/yourusername/nostrjs.git"
  }
}
