// Questionnaire Game Data
const questionnaireQuestions = {
    easy: [
        {
            id: 1,
            question: "Кое древно племе е живяло на територията на България?",
            answers: ["Траки", "Римляни", "Персийци", "Египтяни"],
            correct: 0,
            hint: "Те живяха в днешната България и Балканския полуостров",
            lat: 42.5,
            lng: 25.5,
            locationName: "Древна Тракия"
        },
        {
            id: 2,
            question: "През която година е основана Първата българска империя?",
            answers: ["681 г.", "681 г.", "900 г.", "1100 г."],
            correct: 1,
            hint: "Хан Аспарух установи първото българско държавство",
            lat: 43.5,
            lng: 25.0,
            locationName: "Преслав - столица"
        },
        {
            id: 3,
            question: "Кой был е първият цар на Болгарската империя?",
            answers: ["Александър", "Симеон I", "Петър", "Борис"],
            correct: 1,
            hint: "Той управлява през IX век",
            lat: 43.5,
            lng: 25.0,
            locationName: "Преслав"
        },
        {
            id: 4,
            question: "Колко години е продължило османското владичество?",
            answers: ["200 години", "300 години", "500 години", "400 години"],
            correct: 2,
            hint: "От XIV до XIX век",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 5,
            question: "Кой е организатор на Априлското въстание?",
            answers: ["Васил Левски", "Георги Раковски", "Любен Каравелов", "Ватроман"],
            correct: 0,
            hint: "Известен революционер от XIX век",
            lat: 42.5,
            lng: 25.0,
            locationName: "България"
        },
        {
            id: 6,
            question: "През която година България получава независимост?",
            answers: ["1878 г.", "1880 г.", "1875 г.", "1885 г."],
            correct: 0,
            hint: "След Руско-турска война",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 7,
            question: "Кой е първият князь на модерна България?",
            answers: ["Александър Батенберг", "Борис III", "Фердинанд I", "Симеон II"],
            correct: 0,
            hint: "Немски благородник",
            lat: 42.5,
            lng: 25.5,
            locationName: "София"
        },
        {
            id: 8,
            question: "Какво е главната столица на България?",
            answers: ["Пловдив", "Варна", "София", "Русе"],
            correct: 2,
            hint: "Място на Престол, близо до Средна гора",
            lat: 42.6977,
            lng: 23.3219,
            locationName: "София"
        },
        {
            id: 9,
            question: "През който период е расцветала Втората българска империя?",
            answers: ["XII-XIV век", "X-XI век", "XIV-XV век", "XI-XII век"],
            correct: 0,
            hint: "По време на царува Александър II",
            lat: 43.5,
            lng: 25.5,
            locationName: "Търново"
        },
        {
            id: 10,
            question: "Кой български революционер е известен като 'Апостолът на свободата'?",
            answers: ["Георги Раковски", "Васил Левски", "Любен Каравелов", "Христо Ботев"],
            correct: 1,
            hint: "Той е казнен през 1873 г.",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        }
    ],
    medium: [
        {
            id: 1,
            question: "Какво означава 'България' на старобългарски?",
            answers: ["Земя на българи", "Земя на силни", "Земя на великите", "Земя на славите"],
            correct: 0,
            hint: "Свързано е с названието на народа",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 2,
            question: "Кой император е основал Константинопол?",
            answers: ["Юстиниан", "Константин I", "Диоклециан", "Август"],
            correct: 1,
            hint: "През 330 г.",
            lat: 41.0,
            lng: 28.9769,
            locationName: "Константинопол"
        },
        {
            id: 3,
            question: "През което столетие е възникнала Първата българска империя?",
            answers: ["VII век", "VIII век", "IX век", "VI век"],
            correct: 0,
            hint: "В края на VII век",
            lat: 43.5,
            lng: 25.0,
            locationName: "България"
        },
        {
            id: 4,
            question: "Какво е името на първата славянска писменост?",
            answers: ["Глаголица", "Кирилица", "Латиница", "Древнерусица"],
            correct: 0,
            hint: "Измисли я св. Кирил",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 5,
            question: "Кой е държав е помогнал на България да се освободи?",
            answers: ["Франция", "Австро-Унгария", "Русия", "Италия"],
            correct: 2,
            hint: "През 1877-1878 година",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 6,
            question: "Какво е името на българския революционер който е казнен през 1876?",
            answers: ["Христо Ботев", "Васил Левски", "Георги Раковски", "Любен Каравелов"],
            correct: 0,
            hint: "През Априлското въстание",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 7,
            question: "През която година България влиза в ЕС?",
            answers: ["2005 г.", "2007 г.", "2010 г.", "2004 г."],
            correct: 1,
            hint: "Началото на XXI век",
            lat: 42.5,
            lng: 25.5,
            locationName: "София"
        },
        {
            id: 8,
            question: "Коя е най-голямата религия в България?",
            answers: ["Католицизъм", "Православие", "Ислям", "Протестантизъм"],
            correct: 1,
            hint: "Основната вяра от древни времена",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 9,
            question: "Кой е написал известния стих 'България отново е проснала'?",
            answers: ["Иван Вазов", "Петко Р. Славейков", "Любен Каравелов", "Йордан Йовков"],
            correct: 0,
            hint: "Известен български писател",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 10,
            question: "През която война България е на страната на централните сили?",
            answers: ["През Първата св. война", "През Втората св. война", "През индийската война", "През американската война"],
            correct: 0,
            hint: "През 1914-1918",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 11,
            question: "Кой град е бил първата столица на Първата българска империя?",
            answers: ["Плиска", "Преслав", "Търново", "Охрид"],
            correct: 0,
            hint: "Основано от хан Аспарух",
            lat: 43.3,
            lng: 26.1,
            locationName: "Плиска"
        },
        {
            id: 12,
            question: "През който век е възникнало Българско възраждане?",
            answers: ["XVIII век", "XIX век", "XX век", "XVII век"],
            correct: 1,
            hint: "От края на XVIII до XIX век",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 13,
            question: "Какво е името на австрийския император който е завладял България?",
            answers: ["Францишек Йосиф", "Максимилиан", "Йосиф II", "Август"],
            correct: 0,
            hint: "XIX век",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 14,
            question: "През която година България е изгубила Северен Добруджа?",
            answers: ["1913 г.", "1915 г.", "1918 г.", "1921 г."],
            correct: 0,
            hint: "След Втората балканска война",
            lat: 44.0,
            lng: 28.5,
            locationName: "Добруджа"
        },
        {
            id: 15,
            question: "Коя е първата славянска библиотека на България?",
            answers: ["Филологическа", "Национална", "Царска", "Священна"],
            correct: 1,
            hint: "Основана преди много столетия",
            lat: 42.6977,
            lng: 23.3219,
            locationName: "София"
        }
    ],
    hard: [
        {
            id: 1,
            question: "Кой трачески цар е побеждал през 359 г. на гръцкия цар Филип II?",
            answers: ["Котис I", "Селевк", "Лисимах", "Антиох"],
            correct: 0,
            hint: "Известен траци владетел",
            lat: 42.5,
            lng: 25.5,
            locationName: "Древна Тракия"
        },
        {
            id: 2,
            question: "Какво е названието на первовилата на древната България?",
            answers: ["Утургур", "Утургун", "Уттургур", "Уттугур"],
            correct: 0,
            hint: "Древна българоговорна племена",
            lat: 43.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 3,
            question: "През който век е разцветяла Византия?",
            answers: ["V век", "VI век", "VII век", "IV век"],
            correct: 1,
            hint: "През епохата на Юстиниан",
            lat: 41.0,
            lng: 28.9769,
            locationName: "Византия"
        },
        {
            id: 4,
            question: "Кой мит е свързан с древна България и Греция?",
            answers: ["Троянската война", "Героите на Олимп", "Боговете на Олимп", "Крит и Минос"],
            correct: 0,
            hint: "Древност и Средиземноморие",
            lat: 42.5,
            lng: 25.5,
            locationName: "Древна България"
        },
        {
            id: 5,
            question: "През която година е основана Втората българска империя?",
            answers: ["1185 г.", "1187 г.", "1200 г.", "1180 г."],
            correct: 0,
            hint: "През позния XII век",
            lat: 43.5,
            lng: 25.5,
            locationName: "Търново"
        },
        {
            id: 6,
            question: "Кой е известен като 'Царят на царете'?",
            answers: ["Симеон I", "Петър", "Александър II", "Иван Шишман"],
            correct: 0,
            hint: "Разцвет на Първата болгарска империя",
            lat: 43.5,
            lng: 25.0,
            locationName: "България"
        },
        {
            id: 7,
            question: "Какво е имена на Великия Разделение на католицизъм и православие?",
            answers: ["Западния раскол", "Восточния раскол", "Велико разделение", "Великия раскол от 1054"],
            correct: 3,
            hint: "През 1054 г.",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 8,
            question: "През която година е избухнало Априлското въстание?",
            answers: ["1874 г.", "1875 г.", "1876 г.", "1877 г."],
            correct: 2,
            hint: "Во време на османско владичество",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 9,
            question: "Какво е було официалното имена на Болгарската империя при Симеон?",
            answers: ["Болгарска империя", "Империа Болгарита", "Български съюз", "Болгарийска держава"],
            correct: 0,
            hint: "X век",
            lat: 43.5,
            lng: 25.0,
            locationName: "България"
        },
        {
            id: 10,
            question: "През която война България е воюючата на Англия и Франция?",
            answers: ["През Първата св. война", "През Втората св. война", "През втората балканска война", "През испанския гражданската война"],
            correct: 1,
            hint: "1944-1945",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 11,
            question: "Какво е названието на първата болгарска валута?",
            answers: ["Лева", "Стотинка", "Дукат", "Грош"],
            correct: 0,
            hint: "Все още се използва",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 12,
            question: "Кой персонаж е описва восстание в 1040 година?",
            answers: ["Петър", "Самуил", "Константин", "Иван Владислав"],
            correct: 1,
            hint: "Македонско въстание",
            lat: 41.7,
            lng: 21.5,
            locationName: "Македония"
        },
        {
            id: 13,
            question: "През която година България влиза в НАТО?",
            answers: ["1999 г.", "2002 г.", "2004 г.", "2007 г."],
            correct: 2,
            hint: "XXI век",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 14,
            question: "Какво е названието на болгарския революционер който е написал 'Под игото'?",
            answers: ["Иван Вазов", "Йордан Йовков", "Петко Р. Славейков", "Мирко Батурский"],
            correct: 0,
            hint: "Известен романист",
            lat: 42.6977,
            lng: 23.3219,
            locationName: "София"
        },
        {
            id: 15,
            question: "През която война България е въстанала против Япония?",
            answers: ["През Първата св. война", "През Втората св. война", "През Руско-японската война", "През война с Турция"],
            correct: 2,
            hint: "1904-1905",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 16,
            question: "Кой е бил первите български княз след освобождението?",
            answers: ["Александър Батенберг", "Фердинанд I", "Борис III", "Симеон II"],
            correct: 0,
            hint: "1879-1886",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 17,
            question: "През която година България присъедини Източна Румелия?",
            answers: ["1885 г.", "1883 г.", "1880 г.", "1888 г."],
            correct: 0,
            hint: "През т.н. egyesítés",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 18,
            question: "Какво е името на болгарския революционер който основа ВМРО?",
            answers: ["Даме Груев", "Иван Вазов", "Петко Р. Славейков", "Василий Левски"],
            correct: 0,
            hint: "Македонска революционна организация",
            lat: 41.5,
            lng: 21.5,
            locationName: "Македония"
        },
        {
            id: 19,
            question: "През която година Болгари е стана социалистическа республика?",
            answers: ["1946 г.", "1947 г.", "1948 г.", "1945 г."],
            correct: 0,
            hint: "След Втората св. война",
            lat: 42.5,
            lng: 25.5,
            locationName: "България"
        },
        {
            id: 20,
            question: "Кой е бил първия президент на България след преходa?",
            answers: ["Желю Желев", "Петър Стоянов", "Георги Парванов", "Румен Радев"],
            correct: 0,
            hint: "1992-1997",
            lat: 42.6977,
            lng: 23.3219,
            locationName: "София"
        }
    ]
};

let currentQuestionnaire = {
    difficulty: 'easy',
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],
    hintsUsed: [],
    map: null
};

// Start questionnaire
function startQuiz(difficulty) {
    currentQuestionnaire.difficulty = difficulty;
    currentQuestionnaire.questions = [...questionnaireQuestions[difficulty]];
    currentQuestionnaire.currentQuestion = 0;
    currentQuestionnaire.score = 0;
    currentQuestionnaire.answers = [];
    currentQuestionnaire.hintsUsed = [];

    showScreen('questionnaireScreen');
    showQuestion();
}

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.questionnaire-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Show current question
function showQuestion() {
    const question = currentQuestionnaire.questions[currentQuestionnaire.currentQuestion];
    const totalQuestions = currentQuestionnaire.questions.length;

    // Update progress
    const progress = ((currentQuestionnaire.currentQuestion) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `Въпрос ${currentQuestionnaire.currentQuestion + 1} от ${totalQuestions}`;
    document.getElementById('scoreDisplay').textContent = `Точки: ${currentQuestionnaire.score}`;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Clear previous answers
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';

    // Add answer buttons
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersGrid.appendChild(button);
    });

    // Reset hint button
    document.getElementById('hintBtn').disabled = false;
    document.getElementById('hintBtn').textContent = '💡 Подсказка';
    document.getElementById('hintText').style.display = 'none';
    currentQuestionnaire.hintsUsed[currentQuestionnaire.currentQuestion] = false;

    // Show map if available
    if (question.lat && question.lng) {
        document.getElementById('mapContainer').style.display = 'block';
        setTimeout(() => {
            if (currentQuestionnaire.map) {
                currentQuestionnaire.map.remove();
            }
            currentQuestionnaire.map = L.map('questionnaireMap').setView([question.lat, question.lng], 7);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(currentQuestionnaire.map);
            L.circleMarker([question.lat, question.lng], {
                radius: 10,
                fillColor: '#667eea',
                color: '#764ba2',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(currentQuestionnaire.map).bindPopup(question.locationName);
        }, 100);
    } else {
        document.getElementById('mapContainer').style.display = 'none';
    }
}

// Select answer
function selectAnswer(index) {
    const question = currentQuestionnaire.questions[currentQuestionnaire.currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = index === question.correct;

    // Disable all buttons
    buttons.forEach(btn => btn.onclick = null);

    // Show result
    buttons.forEach((btn, i) => {
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Save answer and update score
    currentQuestionnaire.answers.push({
        question: question.question,
        userAnswer: question.answers[index],
        correctAnswer: question.answers[question.correct],
        isCorrect: isCorrect,
        locationName: question.locationName
    });

    if (isCorrect) {
        currentQuestionnaire.score += 10;
    }

    // Next question after delay
    setTimeout(() => {
        currentQuestionnaire.currentQuestion++;
        if (currentQuestionnaire.currentQuestion < currentQuestionnaire.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Show hint
function showHint() {
    if (currentQuestionnaire.hintsUsed[currentQuestionnaire.currentQuestion]) return;

    const question = currentQuestionnaire.questions[currentQuestionnaire.currentQuestion];
    const hintText = document.getElementById('hintText');
    hintText.textContent = question.hint;
    hintText.style.display = 'block';

    document.getElementById('hintBtn').disabled = true;
    document.getElementById('hintBtn').textContent = '✓ Подсказка използвана';
    currentQuestionnaire.hintsUsed[currentQuestionnaire.currentQuestion] = true;
}

// Show results
function showResults() {
    const totalQuestions = currentQuestionnaire.questions.length;
    const correctAnswers = currentQuestionnaire.answers.filter(a => a.isCorrect).length;
    const percentage = Math.round((currentQuestionnaire.score / (totalQuestions * 10)) * 100);

    // Update results
    document.getElementById('finalScore').textContent = currentQuestionnaire.score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = totalQuestions - correctAnswers;
    document.getElementById('percentage').textContent = percentage;

    // Set grade
    let gradeTitle = 'Браво!';
    let gradeMessage = 'Отличен резултат!';

    if (percentage >= 80) {
        gradeTitle = '⭐ Блестящо!';
        gradeMessage = 'Ти си исторически експерт!';
    } else if (percentage >= 60) {
        gradeTitle = '👍 Добре!';
        gradeMessage = 'Познаваш историята, но има място за подобрение.';
    } else if (percentage >= 40) {
        gradeTitle = '🙂 Приемливо';
        gradeMessage = 'Вече знаеш основното. Продължи да учиш!';
    } else {
        gradeTitle = '📚 Начало';
        gradeMessage = 'Има много за учене. Не се отказвай!';
    }

    document.getElementById('gradeTitle').textContent = gradeTitle;
    document.getElementById('gradeMessage').textContent = gradeMessage;

    // Generate review
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    currentQuestionnaire.answers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-question">
                ${index + 1}. ${answer.question}
            </div>
            <div class="review-answer">
                <strong>Твой отговор:</strong> <span class="review-${answer.isCorrect ? 'correct' : 'your'}-answer">${answer.userAnswer}</span>
            </div>
            ${!answer.isCorrect ? `<div class="review-answer"><strong>Верен отговор:</strong> <span class="review-correct-answer">${answer.correctAnswer}</span></div>` : ''}
        `;
        reviewContainer.appendChild(reviewItem);
    });

    showScreen('resultsScreen');
}

// Quit questionnaire
function quitQuestionnaire() {
    if (confirm('Искаш ли да изходиш от въпросника? Прогресът ти ще се загуби.')) {
        showScreen('startScreen');
    }
}

// Retry questionnaire
function retryQuestionnaire() {
    startQuiz(currentQuestionnaire.difficulty);
}

// Change difficulty
function changeDifficulty() {
    showScreen('startScreen');
}

// Go home
function goHome() {
    window.location.href = '../index.html';
}
