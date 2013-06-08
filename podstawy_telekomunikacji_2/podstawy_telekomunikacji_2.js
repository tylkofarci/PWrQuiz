var test = {
    "time": 25,
    "questionCount": 40,
    "questionList": [
        {
            "question": "Szumy fluktuacyjne to:",
            "tip": "",
            "answer": [
                {"text": "szum 1/f, szum impulsowy, cieplny, procesy przejściowe przy komutacji", "valid": false},
                {"text": "szum cieplny, szum śrutowy, szum atmosferyczny, zakłócenia kosmiczne", "valid": false},
                {"text": "szumy przemysłowe, szumy kosmiczne, szum cieplny, szum śrutowy", "valid": false},
                {"text": "szum cieplny, szum śrutowy, szum 1/f, szum impulsowy", "valid": true},
            ]
        },
        {
            "question": "Szum impulsowy stanowią krótkie wybuchy energii w:",
            "tip": "",
            "answer": [
                {"text": "w liniach koncentrycznych", "valid": false},
                {"text": "odgromnikach", "valid": false},
                {"text": "komutatorach central telefonicznych", "valid": true},
                {"text": "w aparatach zapłonowych", "valid": false},
            ]
        },
        {
            "question": "Moc N dysponowaną szumu cieplnego określa zależność:",
            "tip": "",
            "answer": [
                {"text": "N = (kT)/(hf)", "valid": false},
                {"text": "N = kTB", "valid": true},
                {"text": "N = kTf", "valid": false},
                {"text": "N = (hf)/(kT)", "valid": false},
            ]
        },
        {
            "question": "Zakłócenia przemysłowe są wytwarzane przez systemy energrtyczne i urządzenia zapłonowe, odpowiednio w zakresach częstotliwości:",
            "tip": "",
            "answer": [
                {"text": "do 30 MHz i (0,02 - 1) GHz", "valid": false},
                {"text": "(0,2 - 1) GHz i do 10 MHz", "valid": true},
                {"text": "do 1 MHz i (0,02 - 1) GHz", "valid": false},
                {"text": "od 10 MHz i (0,02 - 1) GHz", "valid": false},
            ]
        },
        {
            "question": "Akronimy nazw modulacji impulsowych: PAM, PPM i PWM, oznaczają, odpowiednio modulacje:",
            "tip": "Amplitude - Amplituda, Position - Pozycja, Width - Szerokość",
            "answer": [
                {"text": "amplitudy, położenia, szerokości", "valid": true},
                {"text": "położenia, szerokości, amplitudy", "valid": false},
                {"text": "amplitudy, szerokości, położenia", "valid": false},
                {"text": "szerokości, amplitudy, położenia", "valid": false},
            ]
        },
        {
            "question": "Parametrami rozdziału kanałów w systemach wielokrotnych mogą być:",
            "tip": "",
            "answer": [
                {"text": "częstotliwość, kształt, czas, charakter, faza", "valid": false},
                {"text": "położenie w przestrzeni, faza, częstotliwość, kształt, czas", "valid": false},
                {"text": "częstotliwość, poziom, pozycja geograficzna, kształt, czas", "valid": false},
                {"text": "faza, częstotliwość, kształt, czas", "valid": true},
            ]
        },
        {
            "question": "Zastępczą temperaturę T<sub>z</sub> szumów kaskady N czwórników o temperaturach szumowych T<sub>z1</sub>, T<sub>z2</sub>, ..., T<sub>zN</sub> i funkcjach przenoszenia mocy G<sub>1</sub>, G<sub>2</sub>, ..., G<sub>N</sub> wyraża się zależnością:",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?T_{z1}+\\frac{T_{z2}}{G_1}+\\frac{T_{z3}}{G_1G_2}+...+\\frac{T_{zN}}{G_1G_2...G_{N-1}}\">", "valid": true},
            ]
        },
        {
            "question": "Układy zastępcze elementu szumiącego w postaci źródła Norton’a lub Thevenin’a zawierają połączone odpowiednio:",
            "tip": "",
            "answer": [
                {"text": "(źródło prądowe równoległe z konduktancją) lub (źródło napięciowe szeregowo z rezystancją)", "valid": false},
                {"text": "(rezystancję i źródło prądowe równoległe) lub (rezystancję i źródło napięciowe równoległe)", "valid": false},
                {"text": "(rezystancję w szereg ze źródłem napięciowym) lub (rezystancja równolegle ze źródłem prądowym)", "valid": true},
                {"text": "(konduktancję i źródło prądowe szeregowo) lub (konduktancję i źródło napięciowe równolegle)", "valid": false},
            ]
        },
        {
            "question": "Początki zastosowań modulacji PCM datuje się na:",
            "tip": "",
            "answer": [
                {"text": "1930", "valid": false},
                {"text": "1926", "valid": false},
                {"text": "1937", "valid": true},
                {"text": "1897", "valid": false},
            ]
        },
        {
            "question": "Dla sygnału f(t), funkcjonał modulacji impulsowej PAM ma postać:",
            "tip": "",
            "answer": [
                {"text": "m(t) = f(t) -j*f\'(t)", "valid": false},
                {"text": "m(t) = e<sup>jk*f(t)</sup>", "valid": false},
                {"text": "m(t) = 1-f(t)", "valid": false},
                {"text": "m(t) = f(t)", "valid": true},
            ]
        },
        {
            "question": "Szum cieplny jest wywoływany w:",
            "tip": "",
            "answer": [
                {"text": "lampach elektronowych", "valid": false},
                {"text": "elementach reaktancyjnych L, C", "valid": false},
                {"text": "przewodnikach metalicznych", "valid": true},
                {"text": "diodach półprzewodnikowych", "valid": false},
            ]
        },
        {
            "question": "Poziom [dB/dekadę] zakłóceń przemysłowych maleje ze wzrostem częstotliwości, w przybliżeniu:",
            "tip": "",
            "answer": [
                {"text": "8", "valid": false},
                {"text": "28", "valid": true},
                {"text": "48", "valid": false},
                {"text": "16", "valid": false},
            ]
        },
        {
            "question": "Dla kwantowania nierównomiernego z krzywą kompresji typu - μ, w modulacji PCM, zalecana wartość μ wynosi:",
            "tip": "",
            "answer": [
                {"text": "255", "valid": true},
                {"text": "87,6", "valid": false},
                {"text": "100", "valid": true},
                {"text": "97", "valid": false},
            ]
        },
        {
            "question": "Źródłem zakłóceń atmosferycznych dalekich są wyładowania atmosferyczne, których statystycznie na całym obszarze świata w każdej sekundzie zdarza się:",
            "tip": "",
            "answer": [
                {"text": "10000", "valid": false},
                {"text": "10", "valid": false},
                {"text": "1000", "valid": false},
                {"text": "100", "valid": true},
            ]
        },
        {
            "question": "Współczynnik szumów F dopasowanego tłumika o tłumieniu L<sub>a</sub> określa zależność ",
            "tip": "",
            "answer": [
                {"text": "L<sub>a</sub>", "valid": true},
                {"text": "L<sub>a</sub>*(T<sub>0</sub>-1)", "valid": false},
                {"text": "L<sub>a</sub>-1", "valid": false},
                {"text": "T<sub>0</sub>*(L<sub>a</sub>-1)", "valid": false},
            ]
        },
        {
            "question": "Źródła szumów (zakłóceń) klasyfikujemy następująco:",
            "tip": "",
            "answer": [
                {"text": "szumy fluktuacyjne, zakłócenia makroskopowe, wyładowania atmosferyczne", "valid": false},
                {"text": "zakłócenia przemysłowe, szumy materii, zakłócenia środowiska", "valid": false},
                {"text": "szumy powodowane przez człowieka, zakłócenia atmosferyczne, promieniowanie kosmiczne", "valid": false},
                {"text": "szumy fluktuacyjne, zakłócenia makroskopowe, szumy powodowane przez człowieka ", "valid": true},
            ]
        },
        {
            "question": "W schemacie blokowym modulatora PCM występują w kolejności (FDP-filtr dolnoprzepustowy):",
            "tip": "FDP - Filtr DolnoPrzepustowy, to zadanie na kole ma wiecej niz jedna odpowiedz, które jescze jest poprawne?",
            "answer": [
                {"text": "źródło sygnału -> FDP -> kompresor -> układ próbkujący -> kwantyzator -> koder", "valid": false},
                {"text": "źródło sygnału -> układ próbkujący -> FDP -> koder -> kwantyzator", "valid": false},
                {"text": "źródło sygnału -> kwantyzator -> koder -> układ próbkujący -> FDP", "valid": false},
                {"text": "źródło sygnału -> FDP -> układ próbkujący -> kwantyzator -> koder", "valid": true},
            ]
        },
        {
            "question": "W systemach wielokrotnych z podziałem FDM zalecane są krotności:",
            "tip": "",
            "answer": [
                {"text": "12, 24, 60, 120, 240, ...", "valid": false},
                {"text": "12, 24, 48, 96, ...", "valid": false},
                {"text": "12, 24, 60, 120, 300, ...", "valid": true},
                {"text": "12, 16, 18, 20, ...", "valid": false},
            ]
        },
        {
            "question": "Modulacje cyfrowe mają akronimy które oznaczają odpowiednio modulacje:",
            "tip": "PhaSe - Faza, Code - Kod, Frequency - Częstotliwość, Amplitude - Amplituda",
            "answer": [
                {"text": "PCM kodowo - impulsową, FSK kluczowanie fazy, PSK kluczowanie częstotliwości, ASK automatyczne skakanie", "valid": false},
                {"text": "PCM kluczowanie częstotliwości, FSK kodowo-impulsową, PSK kluczowanie fazy, ASK kluczowanie", "valid": false},
                {"text": "PCM kodowo - impulsową, FSK kluczowanie częstotliwości, PSK kluczowanie fazy, ASK kluczowanie amplitudy", "valid": true},
                {"text": "PCM kluczowanie fazy, FSK kluczowanie częstotliwości, PSK kodowo - impulsową, ASK kluczowanie kąta", "valid": false},
            ]
        },
        {
            "question": "Einstein w 1907 roku stwierdził szumy fluktuacyjne prądów i napięć przy termodynamicznej równowadze z promieniowaniem (szum cieplny oporności) w:",
            "tip": "",
            "answer": [
                {"text": "przewodnikach metalicznych", "valid": true},
                {"text": "elemtentach rezystacyjnych", "valid": false},
                {"text": "diodach półprzewodnikowych", "valid": false},
                {"text": "diodzie próżniowej", "valid": false},
            ]
        },
        {
            "question": "Szum 1/f:",
            "tip": "",
            "answer": [
                {"text": "rośnie gdy f maleje", "valid": true},
                {"text": "wzrasta proporcjonalnie do f", "valid": false},
                {"text": "maleje gdy f rośnie z kwadratem", "valid": false},
                {"text": "maleje ze wzrostem f", "valid": true},
            ]
        },
        {
            "question": "Modulacje impulsowe tzw. cyfrowe, to:",
            "tip": "",
            "answer": [
                {"text": "PSK, FSK, PCM, DM, ASK", "valid": true},
                {"text": "PAM, PDM, PPM, PCM, FDM", "valid": false},
                {"text": "FSK, PSK, PCM, PDM, TDM", "valid": false},
                {"text": "PCM, PSK, DM, PAM, FSK", "valid": false},
            ]
        },
        {
            "question": "Za twórcę modulacji PCM uznaje się:",
            "tip": "",
            "answer": [
                {"text": "T. Kotielnikow'a", "valid": false},
                {"text": "W. Shannon'a", "valid": false},
                {"text": "A. Bayes'a", "valid": false},
                {"text": "A. H. Reeves'a", "valid": true},
            ]
        },
        {
            "question": "Współczynnik F szumów czwórnika określa iloraz stosunku:",
            "tip": "",
            "answer": [
                {"text": "sygnał/szum na wejściu i wyjściu", "valid": true},
                {"text": "całkowitej mocy szumów na dopasowanym obciążeniu do mocy szumów na wyjściu wzmacniacza idealnego ", "valid": false},
                {"text": "sygnał/szum na wyjściu i wejściu", "valid": false},
                {"text": "równowaznych SEM szumów na wejściu i wyjściu", "valid": false},
            ]
        },
        {
            "question": "Pasmo zajmowane przez sygnały zmodulowane PCM jest szersze od pasma systemów analogowych:",
            "tip": "",
            "answer": [
                {"text": "(16-18) razy", "valid": false},
                {"text": "(9-10) razy", "valid": false},
                {"text": "(2-4) razy", "valid": false},
                {"text": "(7-8) razy", "valid": true},
            ]
        },
        {
            "question": "Dla k=5 - elementowego kodu binarnego, liczba M równych przedziałów kwantowania modulacji PCM wynosi ",
            "tip": "2^5",
            "answer": [
                {"text": "32", "valid": true},
                {"text": "64", "valid": false},
                {"text": "16", "valid": false},
                {"text": "256", "valid": false},
            ]
        },
        {
            "question": "Linie stałego poziomu zakłóceń n a mapach ITU (International Telecommunication Union) to:",
            "tip": "",
            "answer": [
                {"text": "izonatężenia", "valid": false},
                {"text": "izoplety", "valid": true},
                {"text": "izobary", "valid": false},
                {"text": "izolinie", "valid": false},
            ]
        },
        {
            "question": "Modulacje impulsowe mają swoje odpowiedniki w modulacji fali ciągłej, odpowiednio:",
            "tip": "Na kole w zadnej odpowiedzi nie powtarzały sie modulacje fali ciągłej.",
            "answer": [
                {"text": "PAM - DSB, PPM - FM, PWM - PM", "valid": false},
                {"text": "PAM - FM, PPM - PM, PWM - DSB-SC", "valid": false},
                {"text": "PAM - PM, PPM - AM, PWM - FM", "valid": false},
                {"text": "PAM - AM, PPM - FM, PWM - FM", "valid": true},
            ]
        },
        {
            "question": "W zakresie fal metrowych głównym źródłem zakłóceń są:",
            "tip": "",
            "answer": [
                {"text": "promieniowanie słońca", "valid": false},
                {"text": "promieniowanie galaktyki i radiogwiazd", "valid": false},
                {"text": "wyładowania atmosferyczne, promieniowanie planet", "valid": false},
                {"text": "słońca, księżyca, radiogwiazd, planet, galaktyki", "valid": true},
            ]
        },
        {
            "question": "Zakłócenia naturalne o charakterze makroskopowym dzielimy na zakłócenia: ",
            "tip": "",
            "answer": [
                {"text": "atmosferyczne i kosmiczne", "valid": true},
                {"text": "kosmiczne i przemysłowe", "valid": false},
                {"text": "zakłócenia lokalne i dalekie", "valid": false},
                {"text": "atmosferyczne i przemysłowe", "valid": false},
            ]
        },
        {
            "question": "Obecnie stosuje się systemy wielokrotne: ",
            "tip": "",
            "answer": [
                {"text": "FDM, TDM, PDM, PCM", "valid": false},
                {"text": "TDM, FDM, PCM, SDM", "valid": false},
                {"text": "SDM, FDM, TDM, CDM", "valid": true},
                {"text": "CDM, PAM, FDM, TDM", "valid": false},
            ]
        },
        {
            "question": "Pierwszymi systemami wielokrotnymi były systemy z wielodostępem ",
            "tip": "",
            "answer": [
                {"text": "CDM", "valid": false},
                {"text": "TDM", "valid": true},
                {"text": "FDM", "valid": false},
                {"text": "SDM", "valid": false},
            ]
        },
        {
            "question": "Próbkowanie chwilowe powoduje, że przebieg zmodulowany PAM ma ",
            "tip": "",
            "answer": [
                {"text": "odkształcone powtórzenia widma sygnału modulującego", "valid": true},
                {"text": "odkształcone wierzchołki impulsów w czasie", "valid": false},
                {"text": "chwilowe amplitudy impulsów, które odtwarzają przebieg modulujący w czasie", "valid": true},
                {"text": "widmo, które odtwarza kształt funkcji Sa pojedynczego impulsu próbującego", "valid": false},
            ]
        },
        {
            "question": "SEM zastępczego źródła szumowego szeregowo połączonych rezystorów R1 i R2, w tej samej temperaturze T, wynosi: ",
            "tip": "Na kolokiwum było więcej niż 1 poprawna odpowiedź, która jescze?",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\sqrt{4kTB(R_1+R_2)}\">", "valid": true},
                {"text": "e<sub>1</sub>+e<sub>2</sub>", "valid": false},
                {"text": "e<sub>1</sub><sup>2</sup>+e<sub>2</sub><sup>2</sup>", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\sqrt{e+e}\">", "valid": false},
            ]
        },
        {
            "question": "Przy próbkowaniu naturalnym, kształt przebiegu zmodulowanego odtwarza przebieg modulujący:  ",
            "tip": "",
            "answer": [
                {"text": "w dziedzinie czasu", "valid": true},
                {"text": "każdym powtórzeniem widma sygnału modulujacego", "valid": false},
                {"text": "każdym impulsem w czasie", "valid": true},
                {"text": "w dziedzinie częstotliwości", "valid": false},
            ]
        },
        {
            "question": "Widmowa n(f) gęstość mocy dysponowanej szumu cieplnego C wyraża się wzorem: ",
            "tip": "",
            "answer": [
                {"text": "k * T", "valid": true},
                {"text": "(h * f)/(k * T)", "valid": false},
                {"text": "m * c<sup>2</sup>", "valid": false},
                {"text": "h * f", "valid": false},
            ]
        },
        {
            "question": "Obecnie eksploatowane są dwa systemy PCM – pierwszego rzędu, zatwierdzone przez CCITT:  ",
            "tip": "",
            "answer": [
                {"text": "PCM 30 i PCM 60", "valid": false},
                {"text": "PCM 24 i PCM 30", "valid": true},
                {"text": "PCM 12 i PCM 24", "valid": false},
                {"text": "PCM 24 i PCM 48", "valid": false},
            ]
        },
        {
            "question": "Zastępcza temperatura T<sub>z</sub> szumowa wiąże się ze współczynnikiem szumów F zależnością ",
            "tip": "",
            "answer": [
                {"text": "F*(T-T<sub>0</sub>)", "valid": false},
                {"text": "T<sub>0</sub>/(F-1)", "valid": false},
                {"text": "F*(T<sub>0</sub>-1)", "valid": false},
                {"text": "T<sub>0</sub>*(F-1)", "valid": true},
            ]
        },
        {
            "question": "Przewidziane na jeden kanał w telefonii wielokrotnej pasmo częstotliwości B w [kHz] wynosi: ",
            "tip": "",
            "answer": [
                {"text": "9", "valid": false},
                {"text": "3,4", "valid": false},
                {"text": "15", "valid": false},
                {"text": "4", "valid": true},
            ]
        },
        {
            "question": "Szum śrutowy spowodowany dyskretnym charakterem nośników ładunku występuje w: ",
            "tip": "",
            "answer": [
                {"text": "induktorach z ferromagnetykiem", "valid": false},
                {"text": "stratnych elementach L, C", "valid": false},
                {"text": "elektroniczych elementach czynnych", "valid": true},
                {"text": "rezystorach", "valid": false},
            ]
        },
        {
            "question": "Szumy powodowane przez człowieka powstają w wyniku działania: ",
            "tip": "",
            "answer": [
                {"text": "systemów energetycznych, urządzeń zapłonowych, wyładowań atmosferycznych", "valid": false},
                {"text": "urządzeń nadawczych i heterodyn, urządzeń przemysłowych", "valid": true},
                {"text": "w temperaturze wyższej od zera bezwzględnego, urządzeń nadawczych i przemysłowych", "valid": false},
                {"text": "promieniowania kosmicznego, nadajników ziemskich, urządzeń energetycznych", "valid": false},
            ]
        },
        {
            "question": "Temperatura szumów kosmicznych zależy od częstotliwości f sygnału jak ",
            "tip": "",
            "answer": [
                {"text": "f<sup>(-2,4)</sup>", "valid": true},
                {"text": "f<sup>2</sup>", "valid": false},
                {"text": "f<sup>(-1,2)</sup>", "valid": false},
                {"text": "f<sup>(-1)</sup>", "valid": false},
            ]
        },
        {
            "question": "Podstawową grupą pierwotną w systemie FDM jest grupa (… -kanałowa), zajmująca pasmo (…[kHz])  ",
            "tip": "",
            "answer": [
                {"text": "(12), (48)", "valid": true},
                {"text": "(6), (24)", "valid": false},
                {"text": "(10), (40)", "valid": false},
                {"text": "(5), (20)", "valid": false},
            ]
        },
        {
            "question": "Jeżeli tor o tłumieniu L<sup>a</sup> łączący odbiornik z anteną znajduje się w temperaturze pokojowej 20 stopni C to jego zastępcza temperatura szumowa T<sup>a</sup> wyraża się wzorem ",
            "tip": "",
            "answer": [
                {"text": "66,8*L<sup>a</sup> [dB]", "valid": true},
                {"text": "T*(L<sup>a</sup>-1)", "valid": true},
                {"text": "T<sub>0</sub>(L<sup>a</sup>-1)", "valid": false},
                {"text": "L<sup>a</sup>", "valid": false},
            ]
        },
        {
            "question": "Schottky w 1918 roku przewidział szumy fluktuacyjne prądów: ",
            "tip": "Dioda Schottkiego",
            "answer": [
                {"text": "w diodzie próżniowej", "valid": true},
                {"text": "w złączu metal -> półprzewodnik - metal", "valid": false},
                {"text": "w opornikach", "valid": false},
                {"text": "w przewodnikach", "valid": false},
            ]
        },
        {
            "question": "Wypadkowy współczynnik F szumów kaskady N-czwórników o współczynnikach F<sub>1</sub>, F<sub>2</sub>, ..., F<sub>N</sub> i wzmocnieniach mocy G<sub>1</sub>, G<sub>2</sub>, ..., G<sub>N</sub> określa wzór:",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?F_1+\\frac{F_2}{G_1}+\\frac{F_3}{G_1*G_2}+ ... +\\frac{F_N}{G_1*G_2*...*G_{N-1}}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?F_1-1+\\frac{F_2-1}{G_1}+\\frac{F_3-1}{G_1*G_2}+ ... +\\frac{F_N}{G_1*G_2*...*G_N}\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{F_1}{G_1}+\\frac{F_2-1}{G_1*G_2}+\\frac{F_3-1}{G_1*G_2*G_3}+ ... +\\frac{F_N}{G_1*G_2*...*G_N}\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?F_1+\\frac{F_2-1}{G_1}+\\frac{F_3-1}{G_1*G_2}+ ... +\\frac{F_N-1}{G_1*G_2*...*G_{N-1}}\"> ", "valid": true},
            ]
        },
        {
            "question": "W przypadku kwantowania rownomiernego (u – szerokość przedziału) na M poziomach, moc E2 szumu kwantyzacji PCM określa formuła: (Wybierz co najmniej jedną odpowiedź)",
            "tip": "",
            "answer": [
                {"text": "E<sup>2</sup>=1/(3M<sup>2</sup>)", "valid": true},
            ]
        },
        {
            "question": "Zgodnie z kryterium Kotielnikow'a-Shannon'a, sygnał ciągły f(t), o ograniczonym paśmie fm może być reprezentowany przez ciąg jego wartości dyskretnych (próbek) pobranych w odstępach czasu równomiernie od siebie odległych równych:",
            "tip": "",
            "answer": [
                {"text": "2f<sub>m</sub>", "valid": true},
            ]
        },
        {
            "question": "Fala nośna c(t) modulacji impulsowej jest opisana funkcją:",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\sum_{-\\infty}^{\\infty} c(t-nT_0)\">", "valid": true},
            ]
        },
        {
            "question": "Schemat zastępczy Nortona?",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{kTBG}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{4kTBR}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{4kTBG}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{kTBR}\">", "valid": false},
            ]
        },
        {
            "question": "Jakie są rodzaje systemów wielokrotnych?",
            "tip": "",
            "answer": [
                {"text": "FDM, TDM, CDM, PDM, SDM, z rozdziałem według kształtu sygnału, według poziomu sygnału", "valid": true},
            ]
        },
        {
            "question": "Jak można wyrazić szum biały wąskopasmowy?",
            "tip": "",
            "answer": [
                {"text": "wolnozmiennej częstotliwości", "valid": true},
                {"text": "wolnozmiennej amplitudy", "valid": true},
            ]
        },
        {
            "question": "Charakterystyka szumów dla modulacji?",
            "tip": "S - Single, D - Double",
            "answer": [
                {"text": "SSB=1, DSB-SC=2, DSB-AM=0,66", "valid": true},
                {"text": "SSB=1, DSB-SC=0,66, DSB-AM=2", "valid": false},
                {"text": "SSB=0,66, DSB-SC=2, DSB-AM=1", "valid": false},
                {"text": "SSB=2, DSB-SC=1, DSB-AM=0,66", "valid": false},
            ]
        },
        {
            "question": "Jak zdefiniowany jest współczynnik szumów?",
            "tip": "",
            "answer": [
                {"text": "F(f)=(S<sub>we</sub>/N<sub>we</sub>)/(S<sub>wy</sub>/N<sub>wy</sub>)", "valid": true},
            ]
        },
        {
            "question": "Napięcie skuteczne szumów w układzie Thevenina.",
            "tip": "Thevenin -> T -> tetRa -> 4",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{4kTBR}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{4kTBG}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{kTBR}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e_{nsk}=\\sqrt{kTBG}\">", "valid": false},
            ]
        },
        {
            "question": "Jaka będzie moc szumu na wyjściu wzmacniacza kiedy temp. anteny wynosi Ta, tor ma tłumienie La, a wzmacniacz ma wzmocnienie G i wsp. F?",
            "tip": "",
            "answer": [
                {"text": "kBG1/La(To+To(La-1)+To(F-1)/La)", "valid": true},
            ]
        },
        {
            "question": "Jak dzielimy szumy powodowane przez człowieka.",
            "tip": "",
            "answer": [
                {"text": "Interferencyjne(->urzadzenia nadawcze, heterodyny odbiornikow), przemysłowe(-> załon pojazdow, silniki elekt,spawarki, przyrządy oświetleniowe)", "valid": true},
            ]
        },
        {
            "question": "Gdzie obserwujemy wyładowania koronowe?",
            "tip": "",
            "answer": [
                {"text": "W liniach transmisyjnych", "valid": true},
            ]
        },
        {
            "question": "Przy jakiej częstotliwości poziom zakłócen atmosferycznych znacznie się Obiza?",
            "tip": "",
            "answer": [
                {"text": "Powyżej 40MHz", "valid": true},
            ]
        },
        {
            "question": "Widmo zakłóceń przemysłowcyh:",
            "tip": "",
            "answer": [
                {"text": "50HZ do 1GHz", "valid": true},
            ]
        },
        {
            "question": "Na jakiej powierzchni Ziemi występują zjawiska burzowe jednoczesnie",
            "tip": "",
            "answer": [
                {"text": "0,16%", "valid": true},
            ]
        },
        {
            "question": "Gęstość widmowa szumu białego",
            "tip": "",
            "answer": [
                {"text": "N=ktB", "valid": true},
            ]
        },
        {
            "question": "Spadek szumu",
            "tip": "",
            "answer": [
                {"text": "28 dB na DEKADĘ", "valid": true},
                {"text": "8 dB na OKTAWĘ", "valid": true},
                {"text": "28 dB na OKTAWĘ", "valid": false},
                {"text": "8 dB na DEKADĘ", "valid": false},
            ]
        },
    ]
}