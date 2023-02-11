function populate() {
    if(quiz.isEnded()) {
        showScores();
       
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML='';
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    gameOverHTML +="<pre><br><h1>Correct Answers:</h1><br><br><b>1. The first case of novel coronavirus was identified in ....</b><br>A. Beijing<br>B. Shanghai<br>C. Wuhan, Hubei <br>D. Tianjin<br>Ans. C<br><b>Explanation: The first case of novel coronavirus was identified in Wuhan, Hubei Province, China.</b><br><b>2.  Mild Symptoms of Novel coronavirus are:</b><br>A. Fever<br>B. Cough<br>C. Shortness of breathe<br>D. All the above<br>Ans. D<br><b>Explanation: People infected with novel coronavirus or 2019-nCoV reported with mild symptoms namely fever, cough and shortness of breath. Whereas other common symptoms may include runny nose, headache, sore throat, a general feeling of unwell, etc.</b><br><b>3. What are the precautions that need to be taken to protect from the coronavirus?</b><br>A. Cover your nose and mouth when sneezing.<br>B. Add more garlic into your diet.<br>C. Visit your doctor for antibiotics treatment<br>D. Wash your hands after every hour.<br>Ans. A<br><b>Explanation: According to WHO, a person can take precautions by covering the nose and mouth while sneezing via tissue or an elbow. Then, immediately throw the tissue into a closed dustbin.</b><br><b>4. In which age group the COVID-19 spreads?</b><br>A. COVID-19 occur in all age groups.<br>B. Coronavirus infection is mild in children.<br>C. Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.<br>D. All the above are correct,<br>Ans. D<br><b>Explanation: COVID-19 occur in all the age groups. But according to AIMS the infection of coronavirus is mild in children. Persons are at risk who are old and a person suffering from some medical conditions like high blood pressure, cancer, lung disease, diabetes, heart disease. </b><br><b>5. What happens to a person suffering from COVID-19?</b><br>A. Around 80% of the people will require no treatment as such and will recover on their own.<br>B. Around <20% or a small proportion may need hospitalisation.<br>C. A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).<br>D. All the above are correct<br>Ans. D<br><b>Explanation: A person who develops COVID-19: Majority of the people (80%) does not require treatment and will recover on their own, small proportion (<20%) may need hospitalisation and a very small proportion who are underlying chronic illness may need to admit in an ICU</b>.<br><b>6. How does Coronavirus transmit?</b><br>A. When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.<br>B. If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.<br>C. If the distance is less than 1 meter from the infected person.<br>D. All the above are correct.<br>Ans. D<br><b>Explanation: Coronavirus (COVID-19) transmits through the above-mentioned options.</b></pre>";
    element.innerHTML = gameOverHTML;
      
};

var questions = [
    new Question("1. The first case of novel coronavirus was identified in ....", ["A. Beijing", "B. Shanghai","C. Wuhan, Hubei", "D. Tianjin"], "C. Wuhan, Hubei"),

    new Question("2. Mild Symptoms of Novel coronavirus are:", ["A. Fever", "B. Cough","C. Shortness of breathe", "D. All the above"], "D. All the above"),
    
    new Question("3. What are the precautions that need to be taken to protect from the coronavirus?", ["A. Cover your nose and mouth while sneezing.", "B. Add more garlic into your diet.","C. Visit your doctor for antibiotics treatment", "D. Wash your hands after every hour."], "A. Cover your nose and mouth while sneezing."),
    
    new Question("4. In which age group the COVID-19 spreads?", ["A. COVID-19 occur in all age groups.", "B. Coronavirus infection is mild in children.","C. Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.", "D. All the above are correct"], "D. All the above are correct"),
    
    new Question("5. What happens to a person suffering from COVID-19?", ["A. Around 80% of the people will require no treatment as such and will recover on their own.", "B. Around <20% or a small proportion may need hospitalisation.","C. A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).", "D. All the above are correct."], "D. All the above are correct."),
   
    new Question("6. How does Coronavirus transmit?", ["A. When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.", "B. If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.","C. If the distance is less than 1 meter from the infected person.", "D. All the above are correct."], "D. All the above are correct."),

];


var quiz = new Quiz(questions);


populate();





