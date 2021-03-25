document.querySelectorAll('.edu-hack').forEach((answer) => {
    if (answer.classList.contains("border")) {
        answer.style.border = "";
        answer.classList.remove("edu-hack", "border");
    }
    else {
        answer.remove();
    }
});

materialObj.getAllAnswerWidgets().forEach((question) => {
    const warnSecured = (question) => {
        if (question.props.isSecured == true) {
            question.element.before("<div class='edu-hack' style='background-color: red;'>This question is secured, the answers might not be correct!</div>");
        }
    };

    const noAnswer = (question) => {
        const answers = question.props.correctAnswers;

        if (answers.length == 0) {
            question.element.before("<div class='edu-hack' style='background-color: red; color: white; padding: 5px;'>I can't find the answer to this question...</div>");
            return;
        }
    };

    if (question.getWidgetClass() == "AbcdAnswerETestWidget") {
        const answers = question.props.correctAnswers;
        const id = question.id;

        if (answers == undefined) {
            return;
        }

        warnSecured(question);

        for (let i = 0; i < answers.length; i++) {
            const targetElements = document.querySelector(`[data-wid="${id}"]`)?.querySelectorAll(`[data-answerid="${answers[i]}"]`);

            if (targetElements == undefined) {
                continue;
            }

            for (let k = 0; k < targetElements.length; k++) {
                targetElements[k].style.border = "2px solid #2196F3";
                targetElements[k].classList.add("edu-hack", "border");
            }
        }
    }
    else if (question.getWidgetClass() == "InputAnswerETestWidget") { // old code
        const answers = question.props.correctAnswers;

        noAnswer(question);
        warnSecured(question);

        question.element.before(`<br class='edu-hack'><br class='edu-hack'><span class='edu-hack' style='border: 2px solid #2196F3; background: white; color: black; padding: 5px; margin: 5px;'>Answer: "` + answers.join(`" OR "`) + `" </span><br class='edu-hack'><br class='edu-hack'>`);
    }
    else if (question.getWidgetClass() == "OrderingAnswerETestWidget") {
        const answers = question.props.answers;

        noAnswer(question);
        warnSecured(question);

        let output = "<div class='edu-hack' style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct order:<ol style='list-style-type: decimal; padding-left: 30px;'>";

        for (let i = 0; i < answers.length; i++) {
            const answerText = answers[i].text;
            output += `<li> ${answerText} </li>`;
        }

        output += "</div>";

        question.element.before(output);
    }
    else if (question.getWidgetClass() == "GroupsAnswerETestWidget") {
        const groups = question.props.groups;

        warnSecured(question);

        let output = "<div class='edu-hack' style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct grouping:<div>"
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i].items;

            output += `<div> ${groups[i].title} </div><ol style='list-style-type: decimal; padding-left: 30px;'>`

            for (let j = 0; j < group.length; j++) {
                output += `<li> ${group[j].text} </li>`;
            }
            output += "</ol>"
        }
        output += "</div>";

        question.element.before(output);
    }
    else if (question.getWidgetClass() == "ConnectAnswerETestWidget") {
        const correctAnswers = question.props.pairs;

        warnSecured(question);

        let output = "<div class='edu-hack' style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct answers:<ol style='list-style-type: decimal; padding-left: 30px;'>"

        for (answerid = 0; answerid < correctAnswers.length; answerid++) {
            output += `<li> ${correctAnswers[answerid].l}`;
            output += `${correctAnswers[answerid].r} </li>`;
        }
        output += "</ol></div>"

        question.element.before(output);
        question.element[0].style = "border: 2px solid #2196F3;";
        question.element[0].classList.add("edu-hack", "border");
    }
    else if (question.getWidgetClass() == "MapAnswerETestWidget") {
        const points = question.props.points;

        warnSecured(question);

        for (let i = 0; i < points.length; i++) {
            const currentPoint = points[i];

            const answer = document.querySelectorAll(`[data-id="${currentPoint.pointid}"]`)[0];
            const point = document.querySelectorAll(`[data-id="${currentPoint.r_pointid}"]`)[0];

            answer.addEventListener("mouseenter", () => {
                point.style.backgroundColor = "green";
            });

            answer.addEventListener("mouseleave", () => {
                point.style.backgroundColor = "";
            });
        }
    }
});
