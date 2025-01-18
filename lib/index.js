//
// index.js
// @trenskow/stream-awaiter
//
// Created by Kristian Trenskow on 2025/01/01
// See license in LICENSE.
//

export default (...streams) => {

	return new Promise((resolve, reject) => {

		streams.forEach((stream) => stream.pause());

		streams.forEach((stream) => {
			stream.once('error', (error) => {
				streams.forEach((s) => s.destroy());
				reject(error);
			});
		});

		streams
			.reduce((stream, next) => stream.pipe(next),
				streams[0]);

		streams.forEach((stream) => stream.resume());

		streams.slice(-1)[0].once('end', () => resolve());

	});

};
