var liveServer = require("live-server");

var params = {
	host: "localhost",
	root: "public",
	file: "index.html",
	wait: 1000,
	mount: [
    ['/', 'packages/core/dist'],
    ['/', 'packages/lib-material/dist'],
    ['/', 'packages/lib-slate/dist'],
    ['/', 'packages/plugin-appwrite/dist'],
    ['/', 'packages/plugin-blog/dist'],
  ],
};

liveServer.start(params);
