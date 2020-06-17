var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "0",
        "ko": "6000"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20012",
        "ok": "-",
        "ko": "20012"
    },
    "meanResponseTime": {
        "total": "7332",
        "ok": "-",
        "ko": "7332"
    },
    "standardDeviation": {
        "total": "7325",
        "ok": "-",
        "ko": "7325"
    },
    "percentiles1": {
        "total": "5017",
        "ok": "-",
        "ko": "5017"
    },
    "percentiles2": {
        "total": "11445",
        "ok": "-",
        "ko": "11445"
    },
    "percentiles3": {
        "total": "20008",
        "ok": "-",
        "ko": "20008"
    },
    "percentiles4": {
        "total": "20010",
        "ok": "-",
        "ko": "20010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 6000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.957",
        "ok": "-",
        "ko": "86.957"
    }
},
contents: {
"req_user-with-token-cf66b": {
        type: "REQUEST",
        name: "User with token",
path: "User with token",
pathFormatted: "req_user-with-token-cf66b",
stats: {
    "name": "User with token",
    "numberOfRequests": {
        "total": "6000",
        "ok": "0",
        "ko": "6000"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20012",
        "ok": "-",
        "ko": "20012"
    },
    "meanResponseTime": {
        "total": "7332",
        "ok": "-",
        "ko": "7332"
    },
    "standardDeviation": {
        "total": "7325",
        "ok": "-",
        "ko": "7325"
    },
    "percentiles1": {
        "total": "5017",
        "ok": "-",
        "ko": "5017"
    },
    "percentiles2": {
        "total": "11445",
        "ok": "-",
        "ko": "11445"
    },
    "percentiles3": {
        "total": "20008",
        "ok": "-",
        "ko": "20008"
    },
    "percentiles4": {
        "total": "20010",
        "ok": "-",
        "ko": "20010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 6000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.957",
        "ok": "-",
        "ko": "86.957"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
