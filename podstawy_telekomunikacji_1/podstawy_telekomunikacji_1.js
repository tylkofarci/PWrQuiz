var test = {
    "time": 25,
    "testQuestionCount": 40,
    "multiAnswer": false,
    "questionList": [
        {
            "question": "Schemat systemu przekazywania wiadomości za pomocą sygnałów zawiera następujące bloki: ",
            "tip": "Prezentacja 1.0; Slajd 24",
            "answer": [
                {"text": "informacja, modulator, kanał, demodulator, odbiorca informacji", "valid": false},
                {"text": "źródło wiadomości, nadajnik, kanał, odbiornik, obiekt przeznaczenia", "valid": true},
                {"text": "wiadomość, aparat przetwórczy, kanał telekomunikacyjny, aparat przetwórczy, adresat", "valid": false},
                {"text": "sygnał, nadajnik, medium transmisyjne, odbiornik, adresat informacji", "valid": false},
            ]
        },
        {
            "question": "Informacją nazywamy: ",
            "tip": "Prezentacja 1.0; Slajd 9",
            "answer": [
                {"text": "wiadomość w postaci sygnału", "valid": false},
                {"text": "wiadomość, na podstawie której odbiorca opiera swoje działanie", "valid": true},
                {"text": "sygnał przekazywany w kanale radiowym lub otrzymany z przetwornika", "valid": false},
                {"text": "zbiór sygnałów uzyskanych na podstawie danych", "valid": false},
            ]
        },
        {
            "question": "Pasmo częstotliwości sygnału PM dla f<sub>m</sub> = 2,5 kHz i N = 7 wynosi: ",
            "tip": "Prezentacja 4.0; Slajd 17-19. B=2Nf<sub>m</sub>. Np. f<sub>m</sub> = 10kHz, N = 7, B = 140kHz",
            "answer": [
                {"text": "140 kHz", "valid": false},
                {"text": "5 kHz", "valid": false},
                {"text": "35 kHz", "valid": true},
                {"text": "17,5 kHz", "valid": false},
            ]
        },
        {
            "question": "Szerokość pasma sygnału FM, zmodulowanego sygnałem harmonicznym o częstotliwości F<sub>m</sub> = 5 kHz ze wskaźnikiem modulacji B = 10 jest równa: ",
            "tip": "Prezentacja 4.0; Slajd 21-23?",
            "answer": [
                {"text": "60 kHz", "valid": false},
                {"text": "110 kHz", "valid": true},
                {"text": "130 kHz", "valid": false},
                {"text": "120 kHz", "valid": false},
            ]
        },
        {
            "question": "Dewiacja fazy ∆ϕ i ∆f sygnału PM są określone wzorami: ",
            "tip": "Prezentacja 4.0; Slajd 22",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pA_0\\text{ i }\\omega_0\\frac{\\Delta\\phi}{2\\pi}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pA_m\\text{ i }\\frac{\\Delta\\omega}{\\omega_m}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pA_m\\text{ i }\\omega_m\\frac{\\Delta\\phi}{2\\pi}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{\\Delta\\omega}{\\omega_m}\\text{ i }k_pA_m\">", "valid": false},
            ]
        },
        {
            "question": "Modulację PM można uzyskać w modulatore FM po wstępnym przekształceniu sygnału f(t) w układzie ",
            "tip": "",
            "answer": [
                {"text": "pierwiastkującym", "valid": false},
                {"text": "kwadratującym", "valid": false},
                {"text": "całkującym", "valid": false},
                {"text": "różniczkującym", "valid": true},
            ]
        },
        {
            "question": "Telekomunikacja rozsiewcza może być: ",
            "tip": "Prezentacja 1.0; Slajd 30",
            "answer": [
                {"text": "prosta, wybiercza", "valid": false},
                {"text": "zbiorcza, docelowa", "valid": false},
                {"text": "dwupunktowa, wielopunktowa", "valid": false},
                {"text": "ciągła, ziarnista", "valid": true},
            ]
        },
        {
            "question": "Dla modulacji FM dewiacja częstotliwości ∆f jest określona wzorem: ",
            "tip": "Prezentacja 4.0; Slajd 20",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_fA_0\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_f\\int_0^t{f(t)}dt\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_fA_m\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{\\Delta\\omega}{\\omega_m}\">", "valid": false},
            ]
        },
        {
            "question": "Sygnał zmodulowany AM sygnałem o ograniczonym widmie ωm zajmuje pasmo: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_m\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_m&plus;\\omega_0\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{\\omega_m}{2}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?2\\omega_m\">", "valid": true},
            ]
        },
        {
            "question": "Widmo sygnału DSB-SC, zmodulowanego sygnałem harmonicznym <img src=\"http://latex.codecogs.com/png.latex?f(t) = A_m\\cos(\\omega_mt)\"> zawiera składowe: ",
            "tip": "",
            "answer": [
                {"text": "falę nośną 0,5A<sub>0</sub>; jedną wstęgę USB - 0,5&#960;A<sub>m</sub>", "valid": false},
                {"text": "wstęgi boczne o amplitudzie - 0,5A<sub>0</sub>", "valid": true},
                {"text": "wstęgi boczne - 0,5&#960;A<sub>0</sub>A<sub>m</sub>", "valid": false},
                {"text": "falę nośną A<sub>0</sub>; wstęgi boczne A<sub>0</sub>A<sub>m</sub>", "valid": false},
            ]
        },
        {
            "question": "Kryterium przeznaczenia wiadomości dzieli telekomunikację na ",
            "tip": "Prezentacja 1.0; Slajd 30",
            "answer": [
                {"text": "porozumiewawczą, dwupunktową, wielopunktową, prostą, wybierczą", "valid": false},
                {"text": "rozsiewczą, ciągłą, ziarnistą, zbierczą, docelową, porozumiewawczą", "valid": false},
                {"text": "prostą, wybierczą, dwupunktową, wielopunktową, docelową, zbierczą", "valid": false},
                {"text": "porozumiewawczą, rozsiewczą, zbierczą, docelową", "valid": true},
            ]
        },
        {
            "question": "Demodulacja sygnałów AM może być zrealizowana detektorem ",
            "tip": "",
            "answer": [
                {"text": "liniowym, nieliniowym, obwiedni, synchronicznym", "valid": true},
                {"text": "nieliniowym, asynchronicznym, obwiedni", "valid": false},
                {"text": "liniowym, asynchronicznym, obwiedni", "valid": false},
                {"text": "synchronicznym, asynchronicznym, liniowym, obwiedni", "valid": false},
            ]
        },
        {
            "question": "Modulację FM można uzyskać w modulatorze fazy przepuszczając wcześniej sygnał modulujący f(t) przez układ: ",
            "tip": "",
            "answer": [
                {"text": "całkujący", "valid": true},
                {"text": "liniowy", "valid": false},
                {"text": "różniczkujący", "valid": false},
                {"text": "odwracający", "valid": false},
            ]
        },
        {
            "question": "Głębokość modulacji AM określa zależność: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?|kf(t)|\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?kf(t)\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?|1 &plus; kf(t)|\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{kf(t)}\">", "valid": false},
            ]
        },
        {
            "question": "Widmo sygnału <img src=\"http://latex.codecogs.com/png.latex?c(t) = A_0\\cos(\\omega_0t)\"> zmodulowanego AM sygnałem <img src=\"http://latex.codecogs.com/png.latex?f(t) = A_m\\cos(\\omega_mt)\"> zawiera: ",
            "tip": "",
            "answer": [
                {"text": "wstęgi boczne - kA<sub>m</sub>, falę nośną &#960;A<sub>0</sub>", "valid": false},
                {"text": "wstęgi boczne - 0,5kA<sub>m</sub>, falę nośną &#960;A<sub>0</sub>", "valid": true},
                {"text": "falę nośną - A<sub>0</sub>, prążki boczne - A<sub>m</sub>", "valid": false},
                {"text": "falę nośną - &#960;A<sub>0</sub>, wstęgi boczne - 0,5k&#960;A<sub>m</sub>A<sub>0</sub>", "valid": false},
            ]
        },
        {
            "question": "Zadaniem funkcji fali nośnej w procesie modulacji analogowej jest ",
            "tip": "Prezentacja 3.1; Slajd 10",
            "answer": [
                {"text": "wyeliminowanie częstotliwości modulującej", "valid": false},
                {"text": "przesunięcie widma wiadomości", "valid": true},
                {"text": "zmiana częstotliwości sygnału modulującego", "valid": false},
                {"text": "ograniczenie pasma transmisji", "valid": false},
            ]
        },
        {
            "question": "Funkcjonały liniowe i eksponencjalne są jedynymi, które uzależniają parametry fali nośnej od sygnału: ",
            "tip": "",
            "answer": [
                {"text": "liniowe - AM, &#981;M; eksponencjalne - FM", "valid": false},
                {"text": "liniowe - &#981;M, AM; eksponencjalne - FM", "valid": false},
                {"text": "eksponencjalne - PM, FM; liniowe - AM", "valid": true},
                {"text": "eksponencjalne - AM, PM; liniowe - FM", "valid": false},
            ]
        },
        {
            "question": "Środkami przekazu wiadomości są: ",
            "tip": "",
            "answer": [
                {"text": "nadajnik, kanał, odbiornik, dane", "valid": false},
                {"text": "nadajnik, odbiornik, kanał, sygnał", "valid": true},
                {"text": "sygnały, modulatory, tory, demodulatory", "valid": false},
                {"text": "informacje, generatory, tory, odbiorniki", "valid": false},
            ]
        },
        {
            "question": "Funkcjonał modulacji FM ma postać ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?e^{jk_f\\int{f(t)}dt}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?1-e^{j\\phi(t)}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_f\\int_0^t{f(t)}dt\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?1&plus;k_ff(t)\">", "valid": false},
            ]
        },
        {
            "question": "Telekomunikacja porozumiewawcza może być: ",
            "tip": "Prezentacja 1.0; Slajd 30",
            "answer": [
                {"text": "dwupunktowa, wielopunktowa, jednokierunkowa", "valid": false},
                {"text": "prosta, wybiercza, ciągła, ziarnista", "valid": false},
                {"text": "zbiercza, docelowa, wielopunktowa, dwupunktowa", "valid": false},
                {"text": "dwupunktowa, wielopunktowa, prosta, wybiercza", "valid": true},
            ]
        },
        {
            "question": "Funkcjonał modulacji m(t) przyjmują postaci, odpowiednio: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?f(t)\\text{ - AM; }e^{j\\phi(t)}\\text{ - PM; }[1 &plus; kf(t)]\\text{ - DSB-SC; }[1 &plus; jf'(t)]\\text{ - SSB; }\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?[1 &plus; kf(t)]\\text{ - AM; }e^{j\\phi(t)}\\text{ - FM; }f(t)\\text{ - DSB-SC; }[f(t)&plus;jf'(t)]\\text{ - SSB; }\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?f(t)\\text{ - AM; }e^{j\\phi(t)}\\text{ - FM; }[1 &plus; kf(t)]\\text{ - DSB-SC; }jf'(t)\\text{ - SSB; }\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?[1 &plus; kf(t)]\\text{ - AM; }f(t)\\text{ - FM; }e^{j\\phi(t)}\\text{ - DSB-SC; }[f(t)&plus;jf'(t)]\\text{ - SSB; }\">", "valid": false},
            ]
        },
        {
            "question": "Zadaniem współczesnej telekomunikacji jest: ",
            "tip": "Prezentacja 1.0; slajd 22",
            "answer": [
                {"text": "dostarczenie wiadomości z dowolnego źródła do obiektu przeznaczenia w dowolnym czasie i miejscu", "valid": true},
                {"text": "przekazywanie wiadomości na odległość w czasie", "valid": false},
                {"text": "zapewnienie łączności zarejestrowanym abonentom", "valid": false},
                {"text": "dostarczenie wiadomości od abonenta do abonenta dowolnie położonych w miejscu i czasie", "valid": false},
            ]
        },
        {
            "question": "Telekomunikację klasyfikujemy wg następnych kryteriów: ",
            "tip": "Prezentacja 1.0; Slajd 29",
            "answer": [
                {"text": "rodzaju wiadomości, przeznaczenia wiadomości, rodzaju czynności", "valid": true},
                {"text": "rodzaju kanału, przeznaczenia wiadomości, rodzaju czynności", "valid": false},
                {"text": "przeznaczenia wiadomości, zakresu częstotliwości, rodzaju czynności", "valid": false},
            ]
        },
        {
            "question": "Sygnał f(t) można odtworzyć z sygnału zmodulowanego DSB-SC za pomocą detektora ",
            "tip": "",
            "answer": [
                {"text": "liniowego, kwadratowego, synchronicznego", "valid": false},
                {"text": "detektora, koherentnego, kwadratowego z repliką f(t)", "valid": false},
                {"text": "prostownikowego, odcinkami liniowego, koherentnego", "valid": false},
                {"text": "synchronicznego, liniowego, kwadratowego po rekonstrukcji fali c(t)", "valid": true},
            ]
        },
        {
            "question": "Intensywny rozwój telekomunikacji zapoczątkowało wynalezienie ",
            "tip": "Prezentacja 1.0; slajd 11",
            "answer": [
                {"text": "radia w 1920", "valid": false},
                {"text": "telegrafu w 1832", "valid": false},
                {"text": "telefonu w 1876", "valid": true},
                {"text": "symilografu w 1850", "valid": false},
            ]
        },
        {
            "question": "Faza funkcjonału modulacji PM sygnałem harmonicznym zależy od f(t): ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_p[1 &plus; f(t)]\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_p\\int_0^t{f(t)}dt\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pf(t)\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_p\\frac{df(t)}{dt}\">", "valid": false},
            ]
        },
        {
            "question": "Kształt widma sygnału FM: ",
            "tip": "Prezentacja 4.0; Slajd 23",
            "answer": [
                {"text": "nie zależny od fm", "valid": false},
                {"text": "zachowuje stałe proporcje", "valid": false},
                {"text": "jest proporcjonalny do fm", "valid": false},
                {"text": "zmienia się w funkcji fm", "valid": true},
            ]
        },
        {
            "question": "Kanały przenoszenia wiadomości mogą być: ",
            "tip": "Prezentacja 1.0, Slajd 10",
            "answer": [
                {"text": "częstotliwościowe, czasowe", "valid": false},
                {"text": "przewodowe, napowietrzne", "valid": false},
                {"text": "przestrzenne, czasowe", "valid": true},
                {"text": "jednokierunkowe, dupleksowe", "valid": false},
            ]
        },
        {
            "question": "Usługi telekomunikacyjne są świadczone: ",
            "tip": "Prezentacja 1.0; Slajd 22",
            "answer": [
                {"text": "zarejestrowanym abonentom systemu niezależnie od stanu położenia, miejsca i czasu", "valid": false},
                {"text": "użytkownikom systemu, w dowolnym miejscu i czasie", "valid": false},
                {"text": "człowiekowi, maszynie, w dowolnym miejscu i czasie, bez względu na stan położenia", "valid": true},
                {"text": "człowiekowi wyposażonemu w urządzenie nadawczo-odbiorcze", "valid": false},
            ]
        },
        {
            "question": "Zgodnie z kryterium rodzaju czynności w telekomunikacji wyróżniamy: ",
            "tip": "Prezentacja 1.0; Slajd 40",
            "answer": [
                {"text": "przetwarzanie, przesyłanie, łączenie", "valid": true},
                {"text": "telekonwersję, teletransmisję, telekomutację", "valid": false},
                {"text": "wytwarzanie, przetwarzanie, przesyłanie", "valid": false},
                {"text": "przesyłanie, przetwarzanie, generację", "valid": false},
            ]
        },
        {
            "question": "Przy maksymalnym wysterowaniu nadajnika (p = 1) średnia moc sygnału zmodulowanego AM w stosunku do mocy fali nośnej po wynosi: ",
            "tip": "",
            "answer": [
                {"text": "1,0", "valid": false},
                {"text": "0,33", "valid": false},
                {"text": "1,5", "valid": true},
                {"text": "0,66", "valid": false},
            ]
        },
        {
            "question": "Zgodnie z kryterium rodzaju wiadomości rozróżniamy następujące rodzaje telekomunikacji: ",
            "tip": "Prezentacja 1.0; Slajd 36",
            "answer": [
                {"text": "telegrafia (znaki pisma), telefonia (dźwięk), sygnalizacja (umowne symbole), telemetria", "valid": true},
                {"text": "teledacja (znaki pisma), telewizja (obrazy), telemetria (wartości pomiarowe), telegrafia (dane)", "valid": false},
                {"text": "telefonia (dźwięk), telegrafia (transmisja danych), telewizja (obrazy ruchome), symilografia", "valid": false},
                {"text": "telefonia (dźwięk), telegrafia (znaki pisma), symilografia (obrazy stałe), teledacja (symbole)", "valid": false},
            ]
        },
        {
            "question": "Przetwarzanie wiadomości na sygnał elektryczny i odtwarzanie się w aparatach przetwórczych: ",
            "tip": "Prezentacja 1.0; Slajd 24",
            "answer": [
                {"text": "aparaty telefoniczne (telefonia), dalekopisy (telegrafia), lampy analizujące (telemetria)", "valid": false},
                {"text": "głośniki (radio), lampy obrazowe (telewizja), dalekopisy (telegrafia), mikrofony (telefonia)", "valid": false},
                {"text": "mikrofony (radiofonia), kineskopy (telewizja), czytniki (teledacja), czujniki (telemetria)", "valid": false},
                {"text": "telefony (telefonia), dalekopisy (telegrafia), przetworniki elektroakustyczne (radiofonia), lampy obrazowe (telewizja)", "valid": true},
            ]
        },
        {
            "question": "W procesie modulacji AM wektor wypadowy zmienia położenie zgodnie z: ",
            "tip": "Prezentacja 3.1; Slajd 30",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_0\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_0\"> + <img src=\"http://latex.codecogs.com/png.latex?\\omega_m\">", "valid": false},
                {"text": "nie zmienia położenia", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_m\">", "valid": false},
            ]
        },
        {
            "question": "Przy modulacji FM wskaźnik modulacji β jest proporcjonalny do: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{A_m}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?f_m\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{f_m}\">", "valid": true},
                {"text": "niezależny od <img src=\"http://latex.codecogs.com/png.latex?f_m\">", "valid": false},
            ]
        },
        {
            "question": "Widmo sygnału zmodulowanego DSB-SC ma postać: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?0,5[F(\\omega-\\omega_0)&plus;F(\\omega&plus;\\omega_0)]\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?F(\\omega-\\omega_0)&plus;F(\\omega&plus;\\omega_0)\">", "valid": false},
                {"text": "<img src=\"http://tinyurl.com/podtel25d\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{\\pi}[F(\\omega-\\omega_0)&plus;F(\\omega&plus;\\omega_0)](\\pi\\frac{A_0}{2})[\\delta(\\omega-\\omega_0)&plus;\\delta(\\omega&plus;\\omega_0)]\">", "valid": false},
            ]
        },
        {
            "question": "Sygnały wytwarzane w punkcie nadawczym wytwarzają w obiorniku: ",
            "tip": "Prezentacja 1.0; Slajd 24",
            "answer": [
                {"text": "informacje", "valid": false},
                {"text": "zmodulowane napięcia", "valid": false},
                {"text": "wiadomości przekazane odbiorcy dla przeprowadzenia działania", "valid": false},
                {"text": "sygnały odebrane", "valid": true},
            ]
        },
        {
            "question": "Dla modulacji falą harmoniczną <img src=\"http://latex.codecogs.com/png.latex?f(t)=A_m\\cos(\\omega_mt)\"> wskaźnik modulacji PM i FM są określone odpowiednio: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{\\Delta f}{f_m}\"> i <img src=\"http://latex.codecogs.com/png.latex?k_fA_m\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{k_pA_m}{\\omega_m}\"> i <img src=\"http://latex.codecogs.com/png.latex?k_fA_m\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pA_m\"> i <img src=\"http://latex.codecogs.com/png.latex?\\frac{\\Delta f}{f_m}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_pA_m\"> i <img src=\"http://latex.codecogs.com/png.latex?\\frac{k_fA_m}{\\omega_0}\">", "valid": false},
            ]
        },
        {
            "question": "Średnia moc wstęg bocznych w stosunku do mocy sygnału zmodulowanego AM wynosi: ",
            "tip": "",
            "answer": [
                {"text": "0,25", "valid": false},
                {"text": "0,33", "valid": true},
                {"text": "0,66", "valid": false},
                {"text": "0,5", "valid": false},
            ]
        },
        {
            "question": "Dla modulacji FM sygnałem harmonicznym fazy funkcjonału modulacji zależy od sygnału modulującego, zgodnie z: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega_0t&plus;k_f\\int_0^t{f(t)}dt\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_ff(t)\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_f\\int_0^t{f(t)}dt\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?k_f\\frac{df(t)}{t}\">", "valid": false},
            ]
        },
        {
            "question": "Funkcjonał modulacji SSB stworzymy w oparciu o transformatę Hilberta sygnału modulującego f(t): ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{\\pi}\\int_{-\\infty}^{\\infty}{\\frac{f(\\tau)}{t-\\tau}}d\\tau\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\frac{1}{\\pi}\\int_{-\\infty}^{\\infty}{f(\\tau)(t-\\tau)}d\\tau\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\pi\\int_{-\\infty}^{\\infty}{f(\\tau)(t-\\tau)}d\\tau\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\int_{-\\infty}^{\\infty}{\\frac{f(\\tau)}{t-\\tau}}d\\tau\">", "valid": false},
            ]
        },
        {
            "question": "Teletransmisja może być realizowana różnymi torami: ",
            "tip": "Prezentacja 1.0; Slajd 41",
            "answer": [
                {"text": "przewodowym, radiowym, falowym, światłowodowym", "valid": false},
                {"text": "falowodowym, świetlnym, radiowym, kablowym", "valid": false},
                {"text": "radiowym, kablowym, światłowodowym, falowym", "valid": false},
                {"text": "światłowodowym, przewodowym, falowodowym, radiowym", "valid": true},
            ]
        },
        {
            "question": "Moc przebiegu zmodulowanego kątowo jest równa mocy: ",
            "tip": "",
            "answer": [
                {"text": "wszystkich prążków w paśmie B = 2Nf<sub>m</sub>", "valid": false},
                {"text": "fali nośnej", "valid": false},
                {"text": "niezmodulowanej fali nośnej", "valid": true},
                {"text": "wszystkich prążków w zakresie <img src=\"http://latex.codecogs.com/png.latex?\\pm\\infty\\omega\"> pomniejszoną o moc fali nośnej", "valid": false},
            ]
        },
        {
            "question": "W pasywnych systemach radiolokacyjnych sygnałem nadawanym jest sygnał: ",
            "tip": "Prezentacja 1.0; Slajd 26",
            "answer": [
                {"text": "sondujący przetworzony na obiekcie namierzonych", "valid": false},
                {"text": "wytworzony w obiekcie sondowanym", "valid": false},
                {"text": "nadawany przez obiekt pod wpływem sygnału sondującego", "valid": false},
                {"text": "echa odbity od obiektu", "valid": true},
            ]
        },
        {
            "question": "Sygnał jednowstęgowy SSB, dla funkcjonału modulacji <img src=\"http://latex.codecogs.com/png.latex?m(t) = f(t) \\pm jf'(t)\"> zawiera ",
            "tip": "",
            "answer": [
                {"text": "USB - gdy (+) w m(t)", "valid": true},
                {"text": "LSB - gdy (+) w m(t)", "valid": false},
                {"text": "USB - gdy (-) w m(t)", "valid": false},
                {"text": "LSB - gdy (-) w m(t)", "valid": false},
            ]
        },
        {
            "question": "Przekazywanie wiadomości odgrywa ważną rolę w życiu współczesnych społeczeństw. Rozróżniamy przekazywanie wiadomości:",
            "tip": "Prezentacja 1.0; Slajd 9",
            "answer": [
                {"text": "drogą radiową, kablową, pocztową, ...", "valid": false},
                {"text": "kanałem, na odległość", "valid": false},
                {"text": "torem radiowym, w czasie", "valid": false},
                {"text": "na odległość, w czasie", "valid": true},
            ]
        },
        {
            "question": "Współczesna telekomunikacja przekazuje wiadomości w różnych postaciach: ",
            "tip": "Prezentacja 1.0; Slajd 36",
            "answer": [
                {"text": "dźwięki, znaki pisma, poziomy napięć, obrazy ruchome, dane, wartości pomiarowe", "valid": false},
                {"text": "umowne symbole, wartości pomiarowe, obrazy ruchome, dźwieki, znaki pisma", "valid": true},
                {"text": "mowa, dźwięki, obrazy, dokumenty, pismo, dane", "valid": false},
                {"text": "ciśnienie, temperatura, opad, dźwięk, obraz, znaki pisma, dane pomiarowe, sygnały sterujące", "valid": false},
            ]
        },
        {
            "question": "Funkcjonał modulacji uzależnia sygnał zmodulowany s(t) od sygnału modulującego f(t) w: ",
            "tip": "",
            "answer": [
                {"text": "fazie (&#981;M), częstotliwości (FM), amplitudzie (AM)", "valid": false},
                {"text": "częstotliwości (FM), kącie (PM), amplitudzie (AM)", "valid": false},
                {"text": "amplitudzie (AM), częstotliwości (FM), fazie (PM)", "valid": true},
                {"text": "amplitudzie (AM), fazie (PM), częstotliwości (&#981;M)", "valid": false},
            ]
        },
        {
            "question": "Fragmenty sygnału zmodulowanego AM dla dodatniej półosi pulsacji w nazywamy: ",
            "tip": "Upper - Powyżej, Lower - poniżej",
            "answer": [
                {"text": "USB powyżej &#969;<sub>m</sub>, LSB poniżej &#969;<sub>m</sub>", "valid": false},
                {"text": "LSB powyżej &#969;<sub>0</sub>, USB poniżej &#969;<sub>0</sub>", "valid": false},
                {"text": "USB powyżej &#969;<sub>0</sub>, LSB poniżej &#969;<sub>0</sub>", "valid": true},
                {"text": "LSB powyżej &#969;<sub>m</sub>, USB poniżej &#969;<sub>m</sub>", "valid": false},
            ]
        },
        {
            "question": "Właściwy rozwój systemów telekomunikacyjnych datuje się na około ",
            "tip": "Prezentacja 1.0; slajdy 7, 11, 12",
            "answer": [
                {"text": "telegrafia - 1840, symilografia - 1860, telefonia - 1876, radiofonia - 1924, telewizja - 1935", "valid": true},
                {"text": "telegrafia - 1830, symilografia - 1860, telefonia - 1876, radiofonia - 1920, telewizja - 1890", "valid": false},
                {"text": "telewizja - 1890, telemetria - 1933, teledacja - 1963, telegrafia - 1830, telefonia - 1860", "valid": false},
                {"text": "telewizja - 1920, radiofonia - 1923, telefonia - 1860, symilografia - 1860, telegrafia - 1840", "valid": false},
            ]
        },
        {
            "question": "Urządzenie do tworzenia sygnałów zmodulowanych AM nazywa się: ",
            "tip": "Prezentacja 3.1; Slajd 37",
            "answer": [
                {"text": "modulatorem liniowym, modulatorem kwadratowym", "valid": false},
                {"text": "demodulatorem synchronicznym, demodulatorem asynchronicznym", "valid": false},
                {"text": "modulatorem z elementem kluczującym, modulatorem z elementem nieliniowym", "valid": true},
                {"text": "mieszaczem kluczującym, mieszaczem nieliniowym", "valid": false},
            ]
        },
        {
            "question": "Odtwarzanie wiadomości z sygnału zmodulowanego nazywamy detekcją: ",
            "tip": "Prezentacja 3.1; Slajd 14",
            "answer": [
                {"text": "kąta, koherentną, obwiedni", "valid": true},
                {"text": "obwiedni, kwadratową, fazy", "valid": false},
                {"text": "obwiedni, synchroniczną, fazy", "valid": false},
                {"text": "liniową, koherentną, częstotliwości", "valid": false},
            ]
        },
        {
            "question": "Między chwilową fazą ϕ(t) i pulsacją ω(t) modulacji ϕM zachodzi zależność: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega(t)=\\frac{d\\phi}{dt}\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega(t)=k\\phi\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega(t)=\\frac{1}{\\phi(t)}\">", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?\\omega(t)=\\int_0^t{\\phi(t)}dt\">", "valid": false},
            ]
        },
        {
            "question": "Przy maksymalnym wysterowaniu nadajnika szczytowa wartość mocy sygnału zmodulowanego AM przewyższa moc fali nośnej P<sub>0</sub>: ",
            "tip": "",
            "answer": [
                {"text": "1,5 raza", "valid": false},
                {"text": "3 razy", "valid": false},
                {"text": "2 razy", "valid": false},
                {"text": "4 razy", "valid": true},
            ]
        }
    ]
}