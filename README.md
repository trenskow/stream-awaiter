@trenskow/stream-awaiter
----

Simple package for awaiting a stream to end.

# Usage

Usage is pretty strait forward.

````javascript
import streamAwaiter from '@trenskow/stream-awaiter';

try {
	await streamAwaiter(myStream);
} catch (error) {
	console.error(`Stream failed with error: ${error.message}.`);
}
````

# License

See license in LICENSE
