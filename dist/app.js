function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./trpc/router";
import { fastifyCors } from "@fastify/cors";
import fastifyPrismaClient from "fastify-prisma-client";
import { createContext } from "./trpc/context";
import { PrismaClient } from "@prisma/client";
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
export var prisma = new PrismaClient();
var server = fastify({
    maxParamLength: 5000
});
server.register(fastifyPrismaClient, {});
server.register(fastifyCors, function() {
    return function(req, callback) {
        var corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };
        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false;
        }
        // callback expects two parameters: error and options
        callback(null, corsOptions);
    };
});
//use GPIO pin numbers
var stepPins = [
    17,
    22,
    27,
    23
];
//const waterPin = new gpio(24, "out");
var pinNumber = stepPins.length;
var pins = [];
var waterTimeout = 1000;
//waterPin.writeSync(1); // Set to Default
var Seq = [];
Seq[0] = [
    1,
    0,
    0,
    0
];
Seq[1] = [
    1,
    1,
    0,
    0
];
Seq[2] = [
    0,
    1,
    0,
    0
];
Seq[3] = [
    0,
    1,
    1,
    0
];
Seq[4] = [
    0,
    0,
    1,
    0
];
Seq[5] = [
    0,
    0,
    1,
    1
];
Seq[6] = [
    0,
    0,
    0,
    1
];
Seq[7] = [
    1,
    0,
    0,
    1
];
Seq[8] = [
    0,
    0,
    0,
    0
];
// for (var i = 0; i < pinNumber; i++) {
//   pins[i] = new gpio(stepPins[i], "out");
// }
var step = function() {
    var _ref = _asyncToGenerator(function(stepCounter) {
        return __generator(this, function(_state) {
            return [
                2,
                new Promise(function(res) {
                    for(var pin = 0; pin < 4; pin++){
                        if (Seq[stepCounter][pin] != 0) {
                            pins[pin].writeSync(1);
                        } else {
                            pins[pin].writeSync(0);
                        }
                    }
                    setTimeout(res, 5);
                })
            ];
        });
    });
    return function step(stepCounter) {
        return _ref.apply(this, arguments);
    };
}();
var runMotor = function() {
    var _ref = _asyncToGenerator(function() {
        var s, pin;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    s = 0;
                    _state.label = 1;
                case 1:
                    if (!(s < 50)) return [
                        3,
                        6
                    ];
                    pin = 0;
                    _state.label = 2;
                case 2:
                    if (!(pin < 9)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        step(pin)
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    pin++;
                    return [
                        3,
                        2
                    ];
                case 5:
                    s++;
                    return [
                        3,
                        1
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return function runMotor() {
        return _ref.apply(this, arguments);
    };
}();
var runWater = function() {
    var _ref = _asyncToGenerator(function(interval) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    //waterPin.writeSync(0);
                    return [
                        4,
                        new Promise(function(res) {
                            return setTimeout(function() {
                                //waterPin.writeSync(1);
                                res(undefined);
                            }, interval || waterTimeout);
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function runWater(interval) {
        return _ref.apply(this, arguments);
    };
}();
// Routes
// server.register(fastifyStatic, {
//   root: path.join(__dirname, "build"),
//   prefix: "/",
// });
server.get("/", function() {
    var _ref = _asyncToGenerator(function(request, reply) {
        return __generator(this, function(_state) {
            return [
                2,
                {
                    RabbotServer: true
                }
            ];
        });
    });
    return function(request, reply) {
        return _ref.apply(this, arguments);
    };
}());
server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
        router: appRouter,
        createContext: createContext
    }
});
server.post("/Food", function() {
    var _ref = _asyncToGenerator(function(request, reply) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        runMotor()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        {
                            Food: true
                        }
                    ];
            }
        });
    });
    return function(request, reply) {
        return _ref.apply(this, arguments);
    };
}());
server.get("/breed", function() {
    var _ref = _asyncToGenerator(function(request, reply) {
        var breed;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        prisma.breedType.create({
                            data: {
                                name: "Flemish Giant"
                            }
                        })
                    ];
                case 1:
                    breed = _state.sent();
                    return [
                        2,
                        breed
                    ];
            }
        });
    });
    return function(request, reply) {
        return _ref.apply(this, arguments);
    };
}());
server.post("/Water", function() {
    var _ref = _asyncToGenerator(function(request, reply) {
        var interval;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    interval = request.body.interval;
                    return [
                        4,
                        runWater(interval)
                    ];
                case 1:
                    _state.sent();
                    //waterPin.writeSync(1);
                    return [
                        2,
                        {
                            Water: true
                        }
                    ];
            }
        });
    });
    return function(request, reply) {
        return _ref.apply(this, arguments);
    };
}());
// Run the server!
var start = function() {
    var _ref = _asyncToGenerator(function() {
        var err;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        server.listen({
                            port: 5000,
                            host: "0.0.0.0"
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    server.log.error(err);
                    process.exit(1);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function start() {
        return _ref.apply(this, arguments);
    };
}();
start();

//# sourceMappingURL=app.js.map