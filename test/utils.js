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
                    "answer": "answer 1",
                    "questions": {
                        "text": "Question 1",
                        "category": "category"
                    }
                }, {
                    "id": 2,
                    "timestamp": "2016-08-01T11:01:44.708Z",
                    "answer": "answer 2",
                    "questions": {
                        "text": "Question 2",
                        "category": "category"
                    }
                }, {
                    "id": 3,
                    "timestamp": "2016-08-01T11:01:45.008Z",
                    "answer": "answer 3",
                    "questions": {
                        "text": "Question 3",
                        "category": "category"
                    }
                }, {
                    "id": 4,
                    "timestamp": "2016-08-01T11:01:45.808Z",
                    "answer": "answer 4",
                    "questions": {
                        "text": "Question 4",
                        "category": "category"
                    }
                }]
            },
            "id": "answer"
        },
        "timestamp": 1420070400000,
        "type": "element inserted in collection answers"
    };
}
