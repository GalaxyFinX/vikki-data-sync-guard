# vikki-data-sync-guard.
## Overview

`@galaxyfins/vikki-data-sync-guard` is a library designed to manage and synchronize data for mini apps based on app name and app permissions.

## Installation

To install the library, use npm:

```bash
npm install @galaxyfins/vikki-data-sync-guard
```

## Usage

To use the `@galaxyfins/vikki-data-sync-guard` library, you need to get an instance of `VikkiDataSyncGuard` and call the `getData` method with the app name and permissions.

### Example

```javascript
import { VikkiDataSyncGuard } from '@galaxyfins/vikki-data-sync-guard';

const appName = 'exampleApp';
const appData = VikkiDataSyncGuard.getInstance().getData(appName);

console.log(appData);
```

In this example, `getData` retrieves the data for the specified mini app based on the provided app name and permissions.

## API

### `VikkiDataSyncGuard.getInstance()`

Returns a singleton instance of `VikkiDataSyncGuard`.

### `getData(appName)`

Retrieves the data for the specified mini app.

- `appName` (string): The name of the mini app.

## License

This project is licensed under the Vikki License.

