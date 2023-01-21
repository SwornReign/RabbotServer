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
import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import { _CageModel } from "../../zod";
import { prisma } from "../..";
import cron from "node-cron";
import { runMotor } from "../../GPIO/funtions";
import dayjs from "dayjs";
var model = "cage";
var cronFeed = [];
export var cageRouter = router({
    create: publicProcedure.input(_CageModel.omit({
        id: true,
        updateAt: true,
        createdAt: true
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].create({
            data: input
        });
    }),
    list: publicProcedure.query(function() {
        return prisma[model].findMany({
            include: {
                Rabbit: true
            }
        });
    }),
    getOne: publicProcedure.input(z.object({
        id: z.string().uuid()
    })).query(function(param) {
        var input = param.input;
        return prisma[model].findFirst({
            where: {
                id: input.id
            },
            include: {
                Rabbit: true
            }
        });
    }),
    delete: publicProcedure.input(z.object({
        id: z.string().uuid()
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].delete({
            where: {
                id: input.id
            }
        });
    }),
    update: publicProcedure.input(z.object({
        id: z.string().uuid().optional(),
        name: z.string().optional(),
        description: z.string().optional(),
        cageType: z.enum([
            "Breeder",
            "Pen"
        ]).optional(),
        AutoFeed: z.boolean().optional()
    })).mutation(function() {
        var _ref = _asyncToGenerator(function(param) {
            var input, cageId, data, feedTime;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        input = param.input;
                        cageId = input.id;
                        delete input.id;
                        return [
                            4,
                            prisma[model].update({
                                where: {
                                    id: cageId
                                },
                                data: input
                            })
                        ];
                    case 1:
                        data = _state.sent();
                        feedTime = data.feedTime;
                        if (input.AutoFeed && feedTime && feedTime.length) {
                            feedTime.forEach(function(i) {
                                var hour = dayjs(i).get("hour");
                                var minute = dayjs(i).get("minute");
                                var c = cron.schedule("".concat(minute, " ").concat(hour, " * * *"), /*#__PURE__*/ _asyncToGenerator(function() {
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
                                                    2
                                                ];
                                        }
                                    });
                                }));
                                c.start();
                                cronFeed.push(c);
                            });
                        } else {
                            cronFeed.forEach(function(i) {
                                i.stop();
                            });
                        }
                        return [
                            2,
                            data
                        ];
                }
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }()),
    RabbitToCage: publicProcedure.input(z.object({
        rabbitId: z.string().uuid(),
        cageId: z.string().uuid()
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].update({
            where: {
                id: input.cageId
            },
            data: {
                Rabbit: {
                    connect: {
                        id: input.rabbitId
                    }
                }
            }
        });
    }),
    listCage: publicProcedure.input(z.object({
        type: z.enum([
            "Breeder",
            "Pen"
        ])
    })).query(function(param) {
        var type = param.input.type;
        return prisma.$transaction(function() {
            var _ref = _asyncToGenerator(function(ctx) {
                var cage, result;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                ctx.cage.findMany({
                                    where: {
                                        cageType: type
                                    },
                                    include: {
                                        Rabbit: true
                                    }
                                })
                            ];
                        case 1:
                            cage = _state.sent();
                            result = cage.filter(function(i) {
                                return Boolean(i.Rabbit.length);
                            });
                            return [
                                2,
                                result
                            ];
                    }
                });
            });
            return function(ctx) {
                return _ref.apply(this, arguments);
            };
        }());
    })
});

//# sourceMappingURL=cage.js.map