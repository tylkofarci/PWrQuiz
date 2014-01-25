//TODO nie wyszukuje SEM litery wielkosc problem
//TODO nie wyszukuje jak jest cos sub albo w tagach html
//TODO numerowanie pytan
//TODO wyszukiwanie we wzorach
//TODO wersja w pliku z pytaniami, tytul i data modyfikacji, ewentualny changelogi opis
//TODO zamiast pokaz pokazuje po kliknieciu sprawdz
//TODO zle przenosi do kolojnego pytania
var result = 0;
var randomArr;
var currentQuestion = 0;
function _Question(_question) {
    this.text = _question.question;
    this.tip = _question.tip;
    this.answer = _question.answer;
    this.validAnswerCount = 0;
    for (var i = 0; i < this.answer.length; i++)
    {
        if (this.answer[i].valid == true)
        {
            this.validAnswerCount++;
        }
    }

    this.print = function() {
        var inputType = "radio";
        var html = "<div class=\"question\">";
        if (this.validAnswerCount > 1)
        {
            inputType = "checkbox";
        }
        html += "<p>" + this.text + "</p>";
        if (this.tip != "")
        {
            html += "<p><span class=\"small\">Podpowiedź: </span><span class=\"tip\">" + this.tip + "</span></p>";
        }
        html += "<form>";
        var arr = roll(this.answer.length);
        for (var i = 0; i < arr.length; i++)
        {
            if (arr.length == 1)
            {
                html += "<div class=\"single_answer\">" + this.answer[arr[i]].text + "</div>";
            }
            else
            {
                html += "<label><input value=\"" + this.answer[arr[i]].valid + "\" name=\"answer\" type=\"" + inputType + "\">";
                html += this.answer[arr[i]].text;
                html += "</label><br>"; //TODO po co to be?
            }
        }
        html += "</form></div>";
        $("div#questionContainer").append(html);
        if (arr.length == 1)
        {
            renderSingleAnswerButtons();
        }
    };

    this.printAns = function() {
        var html = "<div class=\"question\">";
        html += "<p>" + this.text + "</p>";
        if (this.tip != "")
        {
            html += "<p><span class=\"small\">Podpowiedź: </span>" + this.tip + "</p>";
        }
        html += "<ul>";
        for (var i = 0; i < this.answer.length; i++)
        {
            var cssClass = "";
            if (this.answer[i].valid == true)
            {
                cssClass = " class=\"correct\"";
            }
            html += "<li" + cssClass + ">";
            html += this.answer[i].text;
            html += "</li>";
        }
        html += "</ul></div>";
        $("div#searchResult").append(html);
    }
}

function renderClock(timeInMinutes)
{
    var timeInSeconds = timeInMinutes * 60;
    $("h1").after("<span style=\"float: right\"><span class=\"small\">Czas:</span><span class=\"clock\">00:00</span></span>");
    var clockInterval = setInterval(function() {
        var min = Math.floor(timeInSeconds / 60);
        var sec = timeInSeconds - (min * 60);
        $(".clock").text(min + ":" + (sec < 10 ? "0" + sec : sec));
        timeInSeconds = timeInSeconds - 1;
        if (timeInSeconds < 0) {
            $(".clock").css("color", "red");
            clearInterval(clockInterval);
        }
    }, 1000);
}

function renderMissCounter()
{
    $("h1").after("<span class=\"small\">Błędy:</span><span class=\"miss-counter\">0</span>");
}

function renderSingleAnswerButtons()
{
    var html = "<div class=\"buttons\" style=\"margin-top: 10px\">";
    html += "<span class=\"show\">Pokaż</span>";
    html += "<span class=\"bad\">Źle</span>";
    html += "</div>";

    $("form").after(html);

    $("span.show").click(function() {
        $("div.single_answer").removeAttr("class");
        $("span.bad").css("background-color", "red");
        $("span.bad").click(function() {
            result += 1;
            $(".miss-counter").text(result);
        });
    });
}

function questionButtonPrint()
{
    var html = "<div class=\"buttons\">";
    if (currentQuestion > 0)
    {
        html += "<span class=\"prev\">Poprzednie</span>";
    }
    html += "<span class=\"check\">Sprawdź</span>";
    if (currentQuestion < randomArr.length - 1)
    {
        html += "<span class=\"next\">Następne</span>";
    }
    html += "</div>";
    $("h1").after(html);
    $("span.next").click(function() {
        if (currentQuestion < randomArr.length - 1)
        {
            currentQuestion++;
            $("div.question").remove();
            $("div.buttons").remove();
            var question = new _Question(test.questionList[randomArr[currentQuestion]]);
            questionButtonPrint();
            question.print();
        }
    });
    $("span.prev").click(function() {
        if (currentQuestion > 0)
        {
            currentQuestion--;
            $("div.question").remove();
            $("div.buttons").remove();
            var question = new _Question(test.questionList[randomArr[currentQuestion]]);
            questionButtonPrint();
            question.print();
        }
    });

    $("span.check").click(function() {
        var inputNodeList = $("input");
        var errCount = 0;
        for (var i = 0; i < inputNodeList.length; i++)
        {
            if (($(inputNodeList[i]).attr("value") == "true" && $(inputNodeList[i]).attr('checked') == undefined) || ($(inputNodeList[i]).attr("value") == "false" && $(inputNodeList[i]).attr('checked') == 'checked'))
            {
                errCount += 1;
            }
            if ($(inputNodeList[i]).attr("value") == "true")
            {
                $(inputNodeList[i]).parent().attr("class", "correct");
            }
            if ($(inputNodeList[i]).attr("value") == "false" && $(inputNodeList[i]).attr('checked') == 'checked')
            {
                $(inputNodeList[i]).parent().attr("class", "wrong");
            }
        }

        if (errCount != 0)
        {
            result += 1;
            $(".miss-counter").text(result);
        }
    });
}

function escDia(str)
{
    return str.replace(/ą/g, 'a').replace(/Ą/g, 'A')
            .replace(/ć/g, 'c').replace(/Ć/g, 'C')
            .replace(/ę/g, 'e').replace(/Ę/g, 'E')
            .replace(/ł/g, 'l').replace(/Ł/g, 'L')
            .replace(/ń/g, 'n').replace(/Ń/g, 'N')
            .replace(/ó/g, 'o').replace(/Ó/g, 'O')
            .replace(/ś/g, 's').replace(/Ś/g, 'S')
            .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
            .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}

function roll(size)
{
    var array = new Array(size);
    for (var i = 0; i < size; i++)
    {
        var t = 0;
        while (t == 0)
        {
            var randNr = Math.floor(Math.random() * size);
            var t2 = 0;
            for (var j = 0; j < size; j++)
            {
                if (array[j] == randNr)
                {
                    t2++;
                }
            }
            if (t2 == 0)
            {
                array[i] = randNr;
                t = 1;
            }
        }
    }
    return array;
}
$(document).ready(function() {
    $("p.warning").remove();
    $("body").append("<p class=\"warning\">Zapraszam do pomocy w rozwoju systemu! Cały kod i baza pytań dostępna na <a href=\"https://github.com/tylkofarci/PWrQuiz\">Githubie</a>. Znalazałeś błąd? Pomoż go poprawić!<p>");
    $("body").append("<div class=\"buttons\"><span class=\"training\">Trenuj</span><span class=\"test\">Test</span><span class=\"search\">Szukaj</span></div>");
    $("span.training").click(function() {
        $("p.warning").remove();
        $("div.buttons").remove();
        randomArr = roll(test.questionList.length);
        renderMissCounter();
        questionButtonPrint();
        var question = new _Question(test.questionList[randomArr[currentQuestion]]);
        $("body").append("<div id=\"questionContainer\"></div>");
        question.print();

    });
    $("span.test").click(function() {
        $("p.warning").remove();
        $("div.buttons").remove();
        randomArr = roll(test.questionList.length);
        randomArr = randomArr.slice(0, test.testQuestionCount);
        renderMissCounter();
        renderClock(test.time);
        questionButtonPrint();
        var question = new _Question(test.questionList[randomArr[currentQuestion]]);
        $("body").append("<div id=\"questionContainer\"></div>");
        question.print();
    });
    $("span.search").click(function() {
        $("p.warning").remove();
        $("div.buttons").remove();
        $("body").append("<div class=\"searchBox\"><label>Szukaj: <input type=\"text\"></label></div><div id=\"searchResult\"></div>");
        $("input").focus();
        $("input").keyup(function() {
            var searchStr = $(this).val();
            $("div#searchResult").empty();
            for (var i = 0; i < test.questionList.length; i++)
            {
                var hit = 0;
                var question = new _Question(test.questionList[i])
                if (escDia(question.text.toLowerCase()).indexOf(escDia(searchStr.toLowerCase())) != -1)
                {
                    hit++;
                }
                for (var j = 0; j < question.answer.length; j++)
                {
                    if (escDia(question.answer[j].text.toLowerCase()).indexOf(escDia(searchStr.toLowerCase())) != -1)
                    {
                        hit++;
                    }
                }
                if (hit > 0)
                {
                    question.printAns();
                }
            }
        })
    });
});