# vikki-data-sync-guard.
## Overview

`@galaxyfins/vikki-data-sync-guard` is a library designed to manage and synchronize data for mini apps based on app permissions.

## Installation

To install the library, use npm:

```bash
npm install @galaxyfins/vikki-data-sync-guard
```

Mini apps will get file service config from host app portal then place in root mini app directory.
Example service config file format:
```bash
{
  "project_info": {
    "project_number": "1",
    "project_id": "Vikki",
  },
  "client": {
      "app_id": "mini_app_example",
      "app_key": "1:393366346501:285ea7d8a63c574484756c",
      "permissions": [
        "user_info": {
          "fullName": "read",
          "email": "read"
        }
      ]
    }
  ,
  "configuration_version": "1"
}
```

## Usage

To use the `@galaxyfins/vikki-data-sync-guard` library, you need to get an instance of `VikkiDataSyncGuard` and call the `getData` method with the app permissions.

### Example

```javascript
import { VikkiDataSyncGuard } from '@galaxyfins/vikki-data-sync-guard';

const appData = VikkiDataSyncGuard.getInstance().getData();

console.log(appData);
```

In this example, `getData` retrieves the data for the specified mini app permissions.

## API

### `VikkiDataSyncGuard.getInstance()`

Returns a singleton instance of `VikkiDataSyncGuard`.

### `getData()`

Retrieves the data for the specified mini app.

## License

This project is licensed under the Vikki License.

