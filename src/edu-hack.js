materialObj.getAllAnswerWidgets().forEach(function (question) {
  if (question.getWidgetClass() == "AbcdAnswerETestWidget") {
    var answers = question.alist[0];
    
    if (answers == undefined) {
      return;
    }

    var correctAnswers = question.props.correctAnswers
    for (answerid = 0; answerid < question.maxAnswerId; answerid++) {
      if (answers.children[answerid] == undefined) continue;
      if (correctAnswers.includes(answers.children[answerid].getAttribute("data-answerid"))) {
        answers.children[answerid].style = 'border: 2px solid #2196F3;';
      }
    }
  } else if (question.getWidgetClass() == "InputAnswerETestWidget") {
    var correctAnswers = question.props.correctAnswers;
    for (id = 0; id < correctAnswers.length; id++) {
      question.element.before("<br><br><span style='border: 2px solid #2196F3; background: white; color: black; padding: 5px; margin: 5px;'>" + correctAnswers[id] + " <button style='border: none; background: none; border-left: 2px solid #2196F3;' onclick='copy(`" + correctAnswers[id] + "`)'>Skopírovať</button></span><br><br>");
    }
  } else if (question.getWidgetClass() == "ConnectAnswerETestWidget") {
    var correctAnswers = question.props.pairs;
    var answers = "<div style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct answers:<ol style='list-style-type: decimal; padding-left: 30px;'>"
    for (answerid = 0; answerid < correctAnswers.length; answerid++) {
      answers += "<li>" + correctAnswers[answerid].l;
      answers +=  correctAnswers[answerid].r + "</li>";
    }
    answers += "</ol></div>"
    question.element.before(answers);
    question.element[0].style = "border: 2px solid #2196F3;";
  } else if (question.getWidgetClass() == "OrderingAnswerETestWidget") {
    var correctAnswers = question.props.answers;
    var order = "<div style='background-color: #2196F3; color: white; padding: 5px; margin: 0;'>Correct order:<ol style='list-style-type: decimal; padding-left: 30px;'>";
    for (id = 0; id < correctAnswers.length; id++) {
      order += "<li>" + correctAnswers[id].text + "</li>";
    }
    order += "</ol></div>";
    question.element.before(order);
    question.element[0].style = "border: 2px solid #2196F3; padding: 15px;";
  } else {
    question.element.before("<div style='background: red; color: white; padding: 5px;'>I can't help you with this question...</div>");
    question.element[0].style = "border: 2px solid red;";
  }
  
  });

  function copy(spravne_odpovede) {
    navigator.clipboard.writeText(spravne_odpovede).then(function () {
      console.log('Copying successful!');
    }, function (err) {
      console.error('There was an error while copying:  ', err);
  });
}