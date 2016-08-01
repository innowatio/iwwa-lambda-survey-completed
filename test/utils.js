export function getAnswers (type="survey", category="survey") {
    return {
        "id": "eventId",
        "data": {
            "element": {
                "questionId": "questionId",
                "type": type,
                "category": category,
                "userId": "userId",
                "answers": [{
                    "id": 1,
                    "timestamp": "2016-08-01T11:01:44.408Z",
                    "answer": "answer 1"
                }, {
                    "id": 2,
                    "timestamp": "2016-08-01T11:01:44.708Z",
                    "answer": "answer 2"
                }, {
                    "id": 3,
                    "timestamp": "2016-08-01T11:01:45.008Z",
                    "answer": "answer 3"
                }, {
                    "id": 4,
                    "timestamp": "2016-08-01T11:01:45.808Z",
                    "answer": "answer 4"
                }],
                "questions": [{
                    "id": 1,
                    "text": "Question 1"
                }, {
                    "id": 2,
                    "text": "Question 2"
                }, {
                    "id": 3,
                    "text": "Question 3"
                }]
            },
            "id": "answer"
        },
        "timestamp": 1420070400000,
        "type": "element inserted in collection answers"
    };
}
