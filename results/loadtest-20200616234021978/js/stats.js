var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "15",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "366",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "5011",
        "ok": "446",
        "ko": "5011"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "419",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "792",
        "ok": "29",
        "ko": "794"
    },
    "percentiles1": {
        "total": "4",
        "ok": "434",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "446",
        "ko": "6"
    },
    "percentiles3": {
        "total": "291",
        "ok": "446",
        "ko": "204"
    },
    "percentiles4": {
        "total": "5004",
        "ok": "446",
        "ko": "5004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 1
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
    "count": 1985,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80",
        "ok": "0.6",
        "ko": "79.4"
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
        "total": "2000",
        "ok": "15",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "366",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "5011",
        "ok": "446",
        "ko": "5011"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "419",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "792",
        "ok": "29",
        "ko": "794"
    },
    "percentiles1": {
        "total": "4",
        "ok": "434",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "446",
        "ko": "6"
    },
    "percentiles3": {
        "total": "291",
        "ok": "446",
        "ko": "204"
    },
    "percentiles4": {
        "total": "5004",
        "ok": "446",
        "ko": "5004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 1
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
    "count": 1985,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80",
        "ok": "0.6",
        "ko": "79.4"
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
