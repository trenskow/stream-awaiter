//
// index.js
// @trenskow/stream-awaiter
//
// Created by Kristian Trenskow on 2025/01/01
// See license in LICENSE.
//

export default (stream) => {

	return new Promise((resolve, reject) => {

		stream.once('end', () => resolve());
		stream.once('error', (error) => reject(error));

	});

};
