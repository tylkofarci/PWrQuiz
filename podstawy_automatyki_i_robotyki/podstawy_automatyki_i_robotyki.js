var test = {
    "time": 25,
    "testQuestionCount": 15,
    "multiAnswer": false,
    "questionList": [
        {
            "question": "Wczesne sterowniki PLC nie realizowały: ",
            "tip": "",
            "answer": [
                {"text": "Zależności czasowych", "valid": false},
                {"text": "Przetwarzania sygnałów analogowych", "valid": true},
                {"text": "Przetwarzania sygnałów cyfrowych", "valid": false},
            ]
        },
        {
            "question": "Robot programowany przez tzw. uczenie należy do robotów: ",
            "tip": "",
            "answer": [
                {"text": "III generacji", "valid": false},
                {"text": "II generacji", "valid": true},
                {"text": "Prostych", "valid": false},
            ]
        },
        {
            "question": "W układzie automatycznej regulacji wejściem obiektu jest: ",
            "tip": "",
            "answer": [
                {"text": "wartość zadana jego wyjścia", "valid": false},
                {"text": "uchyb regulacji", "valid": false},
                {"text": "wyjście regulatora", "valid": true},
            ]
        },
        {
            "question": "Czym mierzymy temperaturę? ",
            "tip": "",
            "answer": [
                {"text": "termoskopem", "valid": false},
                {"text": "termotronem", "valid": false},
                {"text": "termoelementem", "valid": true},
            ]
        },
        {
            "question": "Ile parametrów nastawimy w regulatorze typu PID: ",
            "tip": "(czas całkowania-zdwojenia, czas różniczkowania-wyprzedzenia, wzmocnienie) ",
            "answer": [
                {"text": "jeden", "valid": false},
                {"text": "zależy od konkretnego regulatora PID", "valid": false},
                {"text": "trzy", "valid": true},
            ]
        },
        {
            "question": "Transformata Laplacea przekształca funkcję rzeczywistą zmiennej rzeczywistej w: ",
            "tip": "",
            "answer": [
                {"text": "funkcję zespoloną zmiennej rzeczywistej", "valid": false},
                {"text": "funkcję rzeczywistą zmiennej rzeczywistej", "valid": false},
                {"text": "funkcję rzeczywistą zmiennej zespolonej", "valid": false},
                {"text": "funkcję zespoloną zmiennej zespolonej", "valid": true},
            ]
        },
        {
            "question": "Odpowiedź skokowa członu całkującego ma wartość: ",
            "tip": "",
            "answer": [
                {"text": "Malejącą", "valid": false},
                {"text": "Rosnącą", "valid": true},
                {"text": "Stałą", "valid": false},
            ]
        },
        {
            "question": "Które z poniższych zdań jest prawdziwe: ",
            "tip": "",
            "answer": [
                {"text": "duża wartość uchybu w stanie ustalonym powoduje dużą wartość całkowego kryterium regulacji", "valid": false},
                {"text": "krótki czas regulacji powoduje małe przeregulowanie", "valid": false},
                {"text": "dużą wartość całkowego kryterium regulacji powoduje duże przeregulowanie", "valid": true},
                {"text": "duża wartość przeregulowania powodują dużą wartość uchybu w stanie ustalonym", "valid": false},
            ]
        },
        {
            "question": "Czy kontroler PID zawiera człon całkujący? ",
            "tip": "regulator proporcjonalno-całkująco-różniczkujący, ang. proportional-integral-derivative controller",
            "answer": [
                {"text": "Tak", "valid": true},
                {"text": "Nie", "valid": false},
                {"text": "Czasami", "valid": false},
            ]
        },
        {
            "question": "Czy można wyznaczyć model uproszczony obiektu na podstawie jego wykresu odpowiedzi skokowej? ",
            "tip": "",
            "answer": [
                {"text": "tak", "valid": true},
                {"text": "nie", "valid": false},
                {"text": "tylko dla obiektu całkującego", "valid": false},
            ]
        },
        {
            "question": "Który z poniższych obiektów jest liniowy (spełnia zasadę superpozycji)? ",
            "tip": "",
            "answer": [
                {"text": "|u(t)|", "valid": false},
                {"text": "y(t)=tu(t-2)", "valid": false},
                {"text": "y(t)=3u(t) 2", "valid": false},
                {"text": "y(t)=u'(t)", "valid": true},
            ]
        },
        {
            "question": "Która z metod nawigacji AGV jest <u>najmniej</u> dokładna? ",
            "tip": "",
            "answer": [
                {"text": "metoda pętli indukcyjnej", "valid": false},
                {"text": "metoda laserowa", "valid": false},
                {"text": "metoda żyroskopowa", "valid": false},
                {"text": "metoda sonarowa", "valid": true},
            ]
        },
        {
            "question": "Człon proporcjonalny jest członem: ",
            "tip": "",
            "answer": [
                {"text": "drugiego rzędu", "valid": false},
                {"text": "zerowego rzędu", "valid": true},
                {"text": "pierwszego rzędu", "valid": false},
            ]
        },
        {
            "question": "Uchyb jest ",
            "tip": "",
            "answer": [
                {"text": "Wejściem całego układu", "valid": false},
                {"text": "Wyjściem całego układu", "valid": false},
                {"text": "Wejściem układu sterującego", "valid": true},
            ]
        },
        {
            "question": "Robot cylindryczny jest robotem o konfiguracji: ",
            "tip": "",
            "answer": [
                {"text": "OPP", "valid": true},
                {"text": "OOP", "valid": false},
                {"text": "POO", "valid": false},
            ]
        },
        {
            "question": "Jeśli robot posiada 2 przeguby 4 klasy i 4 przeguby 5 klasy, to jego liczba stopni swobody wynosi ",
            "tip": "",
            "answer": [
                {"text": "sześć", "valid": false},
                {"text": "siedem", "valid": false},
                {"text": "osiem", "valid": true},
            ]
        },
        {
            "question": "Obiekt liniowy jest stabilny jeżeli ",
            "tip": "",
            "answer": [
                {"text": "jego odpowiedź impulsowa zanika do zera", "valid": true},
                {"text": "jego sygnał wejściowy jest ograniczony", "valid": false},
                {"text": "jego odpowiedź skokowa nie ma oscylacji", "valid": false},
                {"text": "jego warunki początkowe są zerowe", "valid": false},
            ]
        },
        {
            "question": "Uchyb regulacji to: ",
            "tip": "",
            "answer": [
                {"text": "różnica pomiędzy wejściem a wyjściem obiektu", "valid": false},
                {"text": "różnica pomiędzy wejściem obiektu a wartością zadaną", "valid": false},
                {"text": "różnica pomiędzy wyjściem obiektu a jego wartością w chwili końcowej", "valid": false},
                {"text": "różnica pomiędzy wartością zadaną a wyjściem obiektu", "valid": true},
            ]
        },
        {
            "question": "Czy na podstawie znajomości odpowiedzi impulsowej możemy wyznaczyć model układu? ",
            "tip": "",
            "answer": [
                {"text": "nie", "valid": false},
                {"text": "tak", "valid": true},
                {"text": "tylko całkujący", "valid": false},
            ]
        },
        {
            "question": "Robot o dwóch modułach klasy IV i dwóch klasy V ma ile stopni swobody? ",
            "tip": "",
            "answer": [
                {"text": "8", "valid": false},
                {"text": "4", "valid": false},
                {"text": "6", "valid": true},
            ]
        },
        {
            "question": "Który z poniższych protokołów nie jest protokołem przemysłowym? ",
            "tip": "",
            "answer": [
                {"text": "Profibus", "valid": false},
                {"text": "Net bus", "valid": false},
                {"text": "UDP", "valid": true},
            ]
        },
        {
            "question": "Robot IRB 1400 jest robotem o konfiguracji ",
            "tip": "",
            "answer": [
                {"text": "kartezjańskiej", "valid": false},
                {"text": "sferycznej", "valid": false},
                {"text": "antropomorficznej", "valid": true},
            ]
        },
        {
            "question": "Metoda doboru nastaw regulatorów to: ",
            "tip": "",
            "answer": [
                {"text": "metoda Taylora", "valid": false},
                {"text": "metoda Nyquista", "valid": false},
                {"text": "metoda Zieglera-Nicholsa", "valid": true},
            ]
        },
        {
            "question": "Odpowiedź skokowa stabilnego systemu liniowego: ",
            "tip": "",
            "answer": [
                {"text": "maleje do zera", "valid": false},
                {"text": "zawsze rośnie, lecz nie szybciej niż wykładniczo", "valid": false},
                {"text": "nie wiadomo, zależy to od warunku początkowego", "valid": false},
                {"text": "ustala się na stałej wartości", "valid": true},
            ]
        },
        {
            "question": "Najdokładniejszą metodą nawigacji jest metoda ",
            "tip": "",
            "answer": [
                {"text": "GPS", "valid": false},
                {"text": "Laserowa", "valid": true},
                {"text": "Sonarowa", "valid": false},
            ]
        },
        {
            "question": "Obiekt opisany równaniem różniczkowym y(t)=u'(t) jest: ",
            "tip": "",
            "answer": [
                {"text": "liniowy, dynamiczny, z czasem ciągłym", "valid": true},
                {"text": "nieliniowy, dynamiczny, z czasem ciągłym", "valid": false},
                {"text": "nieliniowy, statyczny, z czasem dyskretnym", "valid": false},
                {"text": "liniowy, statyczny, z czasem dyskretnym", "valid": false},
            ]
        },
        {
            "question": "Klasyczny regulator PID jest regulatorem: ",
            "tip": "",
            "answer": [
                {"text": "nieliniowym", "valid": false},
                {"text": "liniowym lub nieliniowym zależnie od podstaw", "valid": false},
                {"text": "liniowym", "valid": true},
                {"text": "liniowym lub nieliniowym zależnie od sterowanego obiektu", "valid": false},
            ]
        },
        {
            "question": "Czy sterując wejściem można zdestabilizować układ zamknięty z członem PID? ",
            "tip": "przez długi czas podajemu mu bzdury, a on po pewnym czasie je traktuje jak poprawne wejscie. ",
            "answer": [
                {"text": "nie", "valid": false},
                {"text": "zależy", "valid": false},
                {"text": "tak", "valid": true},
            ]
        },
        {
            "question": "Jeśli robot posiada 3 przeguby 4 klasy i 4 przeguby 5 klasy to jego liczba stopni swobody wynosi ",
            "tip": "",
            "answer": [
                {"text": "8", "valid": false},
                {"text": "10", "valid": true},
                {"text": "6", "valid": false},
            ]
        },
        {
            "question": "Stacjonarny system dynamiczny",
            "tip": "",
            "answer": [
                {"text": "Spełnia zasadę superpozycji", "valid": false},
                {"text": "Jest stabilny", "valid": false},
                {"text": "Posiada ujemne sprzężenie zwrotne", "valid": false},
                {"text": "Może być opisywany równaniem różniczkowym", "valid": true},
            ]
        },
        {
            "question": "Pętla histerezy:",
            "tip": "",
            "answer": [
                {"text": "Występuje w każdym systemie dynamicznym", "valid": false},
                {"text": "Jest elementem regulatorów PID", "valid": false},
                {"text": "Oznacza ujemne sprzężenie zwrotne w układzie automatycznej regulacji", "valid": false},
                {"text": "Opisuje regulator dwustanowy", "valid": true},
            ]
        },
        {
            "question": "Pomiar temperatury czujnikiem Pt100 w zakresie (0-400) °C wykorzystano przetwornik pomiarowy w standardzie(?) (4-20)mA. Wykonano pomiar tego prądu i uzyskano wynik 12.00 mA, stąd wynika, że...",
            "tip": "mamy od 4-20 więc mamy zakres 16. polowa to 8 + 4 = 12",
            "answer": [
                {"text": "100 °C", "valid": false},
                {"text": "200 °C ", "valid": true},
                {"text": "300 °C", "valid": false},
                {"text": "400 °C", "valid": false},
            ]
        },
        {
            "question": "Odometria to",
            "tip": "",
            "answer": [
                {"text": "Przyrząd do pomiaru odległości przebytej przez robota", "valid": false},
                {"text": "Metoda określania położenia robota mobilnego w przestrzeni bazująca na enkoderach w kołach", "valid": true},
                {"text": "Czujnik zapachowy", "valid": false},
                {"text": "o różnicach w budowie robotów ze względu na środowisko działania urządzenia", "valid": false},
            ]
        },
        {
            "question": "W pomiarach przemysłowych dla sygnałów ciągłych (analogowych) nie stosuje się standardu:",
            "tip": "",
            "answer": [
                {"text": "(0-5) V", "valid": true},
                {"text": "(0-10) V", "valid": false},
                {"text": "(0-20) mA", "valid": false},
            ]
        },
        {
            "question": " Robot typu antropomorficzny to robot o konfiguracji odcinka regionalnego",
            "tip": "",
            "answer": [
                {"text": "OOP", "valid": false},
                {"text": "OOO", "valid": true},
                {"text": "OPO", "valid": false},
            ]
        },
        {
            "question": "Robot IRB1400 to robot:",
            "tip": "",
            "answer": [
                {"text": "Monolityczny prosty", "valid": false},
                {"text": "Monolityczny złożony ", "valid": true},
                {"text": "Modułowy dymensyjny", "valid": false},
                {"text": "Modułowy prosty", "valid": false},
            ]
        },
        {
            "question": "Jeśli robot posiada 1 przegub 4 klasy i 5 przegubów 5 klasy to jego liczba stopni swobody wynosi:",
            "tip": "6* (1+5) - ( 1*4 + 5*5 ) = 36 - 29 = 7 ",
            "answer": [
                {"text": "6", "valid": false},
                {"text": "5", "valid": false},
                {"text": "7", "valid": true},
            ]
        },
        {
            "question": "Rozwiązanie odwrotnego zadania kinematyki dla zadanego robota polega na wyznaczeniu:",
            "tip": "http://www.robotyka.com/teoria.php/teoria.49",
            "answer": [
                {"text": "Trajektorii punktu pracy", "valid": false},
                {"text": "Współrzędnych zewnętrznych punktu pracy, dla zadanego wektora współrzędnych wewnętrznych", "valid": false},
                {"text": "Wyznaczenie nastaw w przegubach dla danego położenie punktu pracy we współrzędnych zewnętrznych ", "valid": true},
            ]
        },
        {
            "question": "Enkoder magnetyczny to urządzenie służące do:",
            "tip": "",
            "answer": [
                {"text": "Dekodowania informacji zapisanej w postaci magnetycznej", "valid": false},
                {"text": "Pomiar przyspieszenie robota", "valid": false},
                {"text": "Uzyskiwania informacji na temat prędkości i kierunku obrotu koła", "valid": true},
                {"text": "Chwytania elementów (mocuje się je na końcu efektora manipulatora)", "valid": false},
            ]
        },
        {
            "question": "Robot typu sferyczny to robot o konfiguracji odcinka regionalnego:",
            "tip": "",
            "answer": [
                {"text": "OOP", "valid": true},
                {"text": "OOO", "valid": false},
                {"text": "OPO", "valid": false},
            ]
        },
        {
            "question": "Robot typu kartezjański to robot o konfiguracji odcinka regionalnego",
            "tip": "",
            "answer": [
                {"text": "PPP", "valid": true},
                {"text": "OOO", "valid": false},
                {"text": "OPO", "valid": false},
            ]
        },
        {
            "question": "Robot typu Scara to robot o konfiguracji odcinka regionalnego:",
            "tip": "",
            "answer": [
                {"text": "OOP", "valid": true},
                {"text": "OOO", "valid": false},
                {"text": "OPO", "valid": false},
            ]
        },
        {
            "question": "Robot typu cylindryczny to robot o konfiguracji odcinka regionalnego:",
            "tip": "",
            "answer": [
                {"text": "OPP", "valid": true},
                {"text": "OOO", "valid": false},
                {"text": "OPO", "valid": false},
            ]
        },
        {
            "question": "Robot typu cylindryczny to robot o konfiguracji odcinka regionalnego:",
            "tip": "",
            "answer": [
                {"text": "monolityczny prosty", "valid": false},
                {"text": "modułowy dymensyjny", "valid": false},
                {"text": "modułowy prosty", "valid": true},
            ]
        },
        {
            "question": "Która z metod nawigacji wózków AGV (Automated guided vehicle) jest najmniej dokładna",
            "tip": "",
            "answer": [
                {"text": "metoda sonarowa", "valid": false},
                {"text": "metoda laserowa", "valid": false},
                {"text": "metoda GPS", "valid": true},
            ]
        },
        {
            "question": "Która z metod nawigacji (pozycjonowania) wózków AGV jest najdokładniejsza:",
            "tip": "",
            "answer": [
                {"text": "metoda sonarowa", "valid": false},
                {"text": "metoda laserowa", "valid": true},
                {"text": "metoda żyroskopowa", "valid": false},
                {"text": "metoda gps", "valid": false},
            ]
        },
        {
            "question": "Jak wykonywane są instrukcje w sterowniku PLC?",
            "tip": "",
            "answer": [
                {"text": "krokowo ", "valid": true},
                {"text": "cyklicznie >10min", "valid": false},
                {"text": "cyklicznie <100ms", "valid": false},
            ]
        },
        {
            "question": "Na czym polega korzyść z zastosowania Transformaty Laplace'a?",
            "tip": "",
            "answer": [
                {"text": "przekształca splot w iloczyn", "valid": true},
                {"text": "pozwala na analizę obiektów nieliniowych", "valid": false},
                {"text": "pozwala na analizę obiektów dyskretnych", "valid": false},
                {"text": "sprowadza równania zespolone do rzeczywistych", "valid": false},
            ]
        },
        {
            "question": "Obiekt opisany równaniem różniczkowym y(t)=u'(t)*u(t) jest:",
            "tip": "",
            "answer": [
                {"text": "liniowy, statyczny, z czasem dyskretnym", "valid": false},
                {"text": "nieliniowy, dynamiczny, z czasem ciągłym", "valid": false},
                {"text": "nielinowy, statyczny, z czasem dyskretnym", "valid": true},
                {"text": "liniowy, dynamiczny, z czasem ciągłym", "valid": false},
            ]
        },
        {
            "question": "Człon inercyjny I-go rzędu to: ",
            "tip": "",
            "answer": [
                {"text": "model matematyczny układów wspólny dla specyficznych układów o dowolnej naturze fizycznej,", "valid": true},
                {"text": "inna nazwa czwórnika elektrycznego", "valid": false},
            ]
        },
        {
            "question": "Czy w układzie P, PI, PID możemy rozregulować nastawę przy pomocy regulatora",
            "tip": "",
            "answer": [
                {"text": "nie", "valid": false},
                {"text": "tak", "valid": true},
            ]
        },
        {
            "question": "Czy zamknięty liniowy układ regulacji trzeciego rzędu z regulatorem P, PI lub PID mozna zdestabilizować za pomocą doboru nastaw regulatora",
            "tip": "",
            "answer": [
                {"text": "tak", "valid": true},
                {"text": "nie", "valid": false},
                {"text": "zależy od modelu obiektu", "valid": false},
            ]
        },
        {
            "question": "W układzie regulacji sygnał błędu:",
            "tip": "",
            "answer": [
                {"text": "może wynosić zero", "valid": false},
                {"text": "zawsze wynosi zero", "valid": false},
                {"text": "nigdy nie wynosi zero", "valid": true},
            ]
        },
        {
            "question": "Wzór na sygnał wyjściowy (w układzie zamkniętym) regulatora: ",
            "tip": "",
            "answer": [
                {"text": "e=y_zad-y", "valid": true},
                {"text": "e=u-y", "valid": false},
                {"text": "e=u+y", "valid": false},
                {"text": "e=calka(u+y)dt", "valid": false},
            ]
        },
        {
            "question": "W układzie regulacji automatycznej wejściem regulatora jest.",
            "tip": "",
            "answer": [
                {"text": "sygnał uchybu ( e(f) – sygnał uchybu sterowania(regulacji) ),", "valid": true},
            ]
        },
        {
            "question": "W układzie dynamicznym z czasem ciągłym wyjście jest splotem:",
            "tip": "",
            "answer": [
                {"text": "wejścia i charakterystyki impulsowej", "valid": true},
            ]
        },
        {
            "question": "Uchyb nadążania URA , w przypadku regulacji stałowartościowej. można sprowadzić dokładnie do zera przez: ",
            "tip": "Niepewne",
            "answer": [
                {"text": "wprowadzenie członu całkującego,", "valid": true},
                {"text": "zwiększenie wzmocnienia ", "valid": false},
            ]
        },
        {
            "question": "Które z wymienionych wielkości należą do parametrów nastawialnych uniwersalnych regulatorów przemysłowych:",
            "tip": "",
            "answer": [
                {"text": "wzmocnienie,", "valid": true},
                {"text": "czas zdwojenia, ", "valid": false},
                {"text": "czas wyprzedzenia,", "valid": false},
            ]
        },
        {
            "question": "Podstawową strukturą w regulacji automatycznej jest:",
            "tip": "",
            "answer": [
                {"text": "dodatnie sprzężenie zwrotne", "valid": false},
                {"text": "ujemne sprzężenie zwrotne", "valid": true},
                {"text": "struktura równoległa", "valid": false},
            ]
        },
        {
            "question": "Robot prosty może być... ",
            "tip": "",
            "answer": [
                {"text": "multi-point", "valid": false},
                {"text": "przez nadążanie", "valid": false},
                {"text": "continous path", "valid": false},
                {"text": "point-to-point", "valid": true},
            ]
        },
        {
            "question": "Charakterystyki częstotliwościowe układu dynamicznego pozwalają bezpośrednio określić: ",
            "tip": "",
            "answer": [
                {"text": "wzmocnienie i przesunięcie fazowe w funkcji częstotliwości,", "valid": false},
                {"text": "zależnosc przesunięcia fazowego i wzmocnienia od pulsacji", "valid": true},
            ]
        },
        {
            "question": "W [dla układu z obiektem stabilnym?/] statycznym, stabilnym wzrost wzmocnienia powoduje:",
            "tip": "",
            "answer": [
                {"text": "polepszenie dokładnosci i pogorszenie zapasu stabilnosci", "valid": true},
            ]
        },
        {
            "question": "Uchyb ustalony w układzie nie określa jego:",
            "tip": "",
            "answer": [
                {"text": "zapasu stabilnosci", "valid": true},
                {"text": "zachowania sie w czasie regulacji", "valid": false},
            ]
        },
        {
            "question": "Jeżeli w URA zostanie zastosowany regulator, który poszerzy pasmo przenoszenia to wpłynie to na:",
            "tip": "",
            "answer": [
                {"text": "skrócenie czasu regulacji (99,9%)", "valid": true},
            ]
        },
        {
            "question": "Kryterium stabilności Nyquista opiera się na analizie:",
            "tip": "",
            "answer": [
                {"text": "charakterystyki amplitudowo - fazowej układu otwartego.", "valid": true},
            ]
        },
        {
            "question": "Jeśli robot posiada 2 przeguby 4 klasy i 2 przeguby 5 klasy, to jego ruchliwość wynosi:",
            "tip": "6*(2+2) - (2*4 + 2*5) =24-18=6",
            "answer": [
                {"text": "6", "valid": true},
                {"text": "5", "valid": false},
                {"text": "8", "valid": false},
                {"text": "4", "valid": false},
            ]
        },
        {
            "question": "Robot ma 2 przeguby 4 klasy i 3 przeguby 5 klasy. jaka jest ruchliwość?",
            "tip": "(6*(5 - 2)-(2*4 + 3*5) = 7)",
            "answer": [
                {"text": "7", "valid": true},
                {"text": "6", "valid": false},
                {"text": "5", "valid": false},
                {"text": "3", "valid": false},
            ]
        },
        {
            "question": "Stabilność liniowego układu dynamicznego oznacza:",
            "tip": "",
            "answer": [
                {"text": "ograniczoną odpowiedź na ograniczone wejście", "valid": true},
                {"text": "stałą odpowiedź na ograniczone wejście", "valid": false},
                {"text": "zerową odpowiedź na ograniczone wejście", "valid": false},
            ]
        },
        {
            "question": "Odpowiedź skokowa obiektu inercyjnego 1-rzędu jest funkcją:",
            "tip": "",
            "answer": [
                {"text": "rosnącą", "valid": true},
                {"text": "niemalejącą", "valid": false},
                {"text": "malejącą", "valid": false},
            ]
        },
        {
            "question": "Jeśli robot IRB 1400 wykonuje zadania przemieszczania w jednej płaszczyźnie (do opisania trajektorii chwytaka potrzeba m=4 współrzędnych zewnętrznych) to:",
            "tip": "",
            "answer": [
                {"text": "jego stopień redundancji dla tej klasy trajektorii wynosi 4", "valid": false},
                {"text": "jego stopień redundancji dla tej klasy trajektorii wynosi 2", "valid": true},
                {"text": "jego stopień redundancji dla tej klasy trajektorii wynosi 1", "valid": false},
            ]
        },
        {
            "question": "Jeśli robot posiada 1 przegub 4 klasy i 2 przeguby 5 klasy to jego ruchliwość wynosi:",
            "tip": "",
            "answer": [
                {"text": "2", "valid": false},
                {"text": "3", "valid": false},
                {"text": "4", "valid": true},
            ]
        },
        {
            "question": "Jaki język jest najczęściej stosowany w programowaniu PLC?",
            "tip": "LD (Ladder Diagram) logika drabinkowa - schemat zbliżony do klasycznego rysunku technicznego elektrycznego; w sali 021 w c-3 używa się tego języka do programowania ",
            "answer": [
                {"text": "drabinkowy", "valid": true},
                {"text": "C", "valid": false},
                {"text": "BASCOM", "valid": false},
                {"text": "Java", "valid": false},
            ]
        },
        {
            "question": "Układ ma transmitancję G(s)=k/((1+sT1)(1-sT2)s. Układ ten jest:",
            "tip": "",
            "answer": [
                {"text": "niestabilny", "valid": true},
            ]
        },
        {
            "question": "Transmitancja operatorowa to",
            "tip": "",
            "answer": [
                {"text": "rodzaj opisu dynamiki układów (stosunek: transformat Laplaca'a sygnałów wyj. do wej. ),", "valid": true},
            ]
        },
        {
            "question": "Podaj warunek konieczny i wystarczający stabilności asymptotycznej układu liniowego:",
            "tip": "",
            "answer": [
                {"text": "Wszystkie pierwiastki równania charakterystycznego mają ujemną część rzeczywistą (leżą w lewej półpłaszczyźnie zmiennej zespolonej)", "valid": true},
            ]
        },
        {
            "question": "Każdy obiekt liniowy:",
            "tip": "",
            "answer": [
                {"text": "spełnia zasadę superpozycji ", "valid": true},
            ]
        },
        {
            "question": "Czy człon oscylacyjny jest członem",
            "tip": "",
            "answer": [
                {"text": "zerowego rzędu", "valid": false},
                {"text": "pierwszego rzędu", "valid": false},
                {"text": "drugiego rzędu", "valid": true},
            ]
        },
        {
            "question": "Algorytm regulacji PD należy stosować, gdy:",
            "tip": "",
            "answer": [
                {"text": "przebiegi sygnałów w układzie są szybkie - o dużej częstotliwości", "valid": true},
            ]
        },
//        {
//            "question": "",
//            "tip": "",
//            "answer": [
//                {"text": "", "valid": false},
//                {"text": "", "valid": false},
//                {"text": "", "valid": false},
//                {"text": "", "valid": false},
//            ]
//        },
    ]
}